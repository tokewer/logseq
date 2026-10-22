# -*- coding: utf-8 -*-
"""
Logseq Web - 本地存储服务与静态服务器
核心特性：
1. 静态资源托管（static 目录，支持 gzip、etag、SPA 404 回退）
2. 本地文件夹直存 API：
   - /api/storage/graphs: 扫描并列出本地物理磁盘的所有图谱及数据库状态
   - /api/storage/config: 获取/更新存储目标目录
   - /api/storage/load: 读取指定图谱的物理 db.sqlite 文件并返回二进制数据
   - /api/storage/save: 原子写入 SQLite 数据库二进制文件，并保留最近 10 份历史备份快照
   - /api/storage/log: 写入 GITHUB_SYNC_LOG.md 变更记录
3. 彻底摆脱浏览器沙盒与 OPFS 易失性限制，确保数据始终与本地物理磁盘实时同步
"""
import http.server
import socketserver
import gzip
import os
import sys
import json
import re
import base64
import tempfile
import threading
import subprocess
import time
from urllib.parse import unquote, urlparse, parse_qs

# Windows 控制台编码安全配置
if sys.platform == 'win32':
    try:
        if hasattr(sys.stdout, 'reconfigure'):
            sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        if hasattr(sys.stderr, 'reconfigure'):
            sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

DEFAULT_PORT = 4173
DEFAULT_BIND = '127.0.0.1'

def _resolve_port():
    for arg in sys.argv[1:]:
        if arg.isdigit():
            return int(arg)
        if arg.startswith('--port='):
            v = arg.split('=', 1)[1]
            if v.isdigit():
                return int(v)
    env = os.environ.get('LOGSEQ_PORT')
    if env and env.isdigit():
        return int(env)
    return DEFAULT_PORT

def _resolve_bind():
    for i, arg in enumerate(sys.argv):
        if arg == '--bind' and i + 1 < len(sys.argv):
            return sys.argv[i + 1]
        if arg.startswith('--bind='):
            return arg.split('=', 1)[1]
    return DEFAULT_BIND

PORT = _resolve_port()
BIND = _resolve_bind()

ROOT = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(ROOT, 'static')
DATA_DIR = os.path.join(ROOT, 'data')
CONFIG_FILE = os.path.join(DATA_DIR, 'storage_config.json')

# 默认数据物理存储根目录
DEFAULT_TARGET_DIR = r"F:\新学习资料分站\数据\随笔便签"

GZIP_EXT = ('.js', '.css', '.html', '.json', '.svg', '.wasm')
MAX_BACKUPS = 10
MAX_BODY_BYTES = 50 * 1024 * 1024  # 50MB

_file_write_lock = threading.Lock()
_config_lock = threading.Lock()

def ensure_dirs():
    os.makedirs(DATA_DIR, exist_ok=True)
    if os.path.exists(DEFAULT_TARGET_DIR):
        try:
            os.makedirs(DEFAULT_TARGET_DIR, exist_ok=True)
        except Exception:
            pass

def load_config():
    with _config_lock:
        ensure_dirs()
        if os.path.exists(CONFIG_FILE):
            try:
                with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
                    return json.load(f)
            except Exception as e:
                print(f"[Server] Warning: Failed to load config file: {e}")
        cfg = {
            "target_dir": DEFAULT_TARGET_DIR,
            "version": "1.1.0",
            "last_saved": None
        }
        try:
            with open(CONFIG_FILE, 'w', encoding='utf-8') as f:
                json.dump(cfg, f, ensure_ascii=False, indent=2)
        except Exception:
            pass
        return cfg

def save_config(cfg):
    with _config_lock:
        ensure_dirs()
        tmp = CONFIG_FILE + '.tmp'
        with open(tmp, 'w', encoding='utf-8') as f:
            json.dump(cfg, f, ensure_ascii=False, indent=2)
        os.replace(tmp, CONFIG_FILE)

def _sanitize_name(name):
    if not name:
        return 'default'
    # 允许中文、英文、数字、破折号、下划线及各类常见标点
    s = re.sub(r'[\\/:*?"<>|\r\n\t]', '_', str(name)).strip()
    return s or 'default'

def _atomic_write(target_path, data_bytes):
    """先写入目标目录内的唯一临时文件再原子替换，彻底避免半写数据和损坏"""
    directory = os.path.dirname(target_path) or '.'
    os.makedirs(directory, exist_ok=True)
    fd, tmp = tempfile.mkstemp(prefix='.tmp-logseq-', dir=directory)
    try:
        with os.fdopen(fd, 'wb') as f:
            f.write(data_bytes)
            f.flush()
            os.fsync(f.fileno())
        with _file_write_lock:
            os.replace(tmp, target_path)
    except Exception as e:
        try:
            os.unlink(tmp)
        except OSError:
            pass
        raise e

def _rotate_backups(backups_dir, max_keep=MAX_BACKUPS):
    """保持 backups 文件夹内最多保留 max_keep 份历史备份"""
    try:
        if not os.path.exists(backups_dir):
            return
        files = []
        for fn in os.listdir(backups_dir):
            if fn.endswith('.db.sqlite'):
                fp = os.path.join(backups_dir, fn)
                if os.path.isfile(fp):
                    files.append((os.path.getmtime(fp), fp))
        files.sort(key=lambda x: x[0], reverse=True)
        for _, old_file in files[max_keep:]:
            try:
                os.unlink(old_file)
            except OSError:
                pass
    except Exception as e:
        print(f"[Server] Warning rotating backups: {e}")

def _append_to_sync_log(repo_name, saved_path, file_size):
    """将数据保存行为记录到 GITHUB_SYNC_LOG.md，确保每次更新都有迹可循"""
    try:
        log_path = os.path.join(ROOT, 'GITHUB_SYNC_LOG.md')
        now_str = time.strftime("%Y-%m-%d %H:%M:%S")
        entry = f"- [{now_str}] 自动保存便签数据: 图谱=`{repo_name}`, 大小=`{file_size}` 字节, 路径=`{saved_path}`\n"
        with open(log_path, 'a', encoding='utf-8') as f:
            f.write(entry)
    except Exception as e:
        print(f"[Server] Warning appending to sync log: {e}")

class LogseqServerHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=STATIC_DIR, **kwargs)

    def log_message(self, format, *args):
        msg = format % args
        if '/api/' in msg or ' 50' in msg or ' 40' in msg:
            print(f"[HTTP] {self.address_string()} - {msg}")

    def _send_json(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, X-Logseq-Repo')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, X-Logseq-Repo')
        self.send_header('Access-Control-Max-Age', '86400')
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        # 1. API: 健康检查
        if path == '/api/ping':
            return self._send_json(200, {
                "ok": True,
                "status": "running",
                "version": "1.1.0",
                "server": "logseq-storage-server"
            })

        # 2. API: 获取存储目录与全局配置
        if path == '/api/storage/config':
            cfg = load_config()
            target_dir = cfg.get("target_dir", DEFAULT_TARGET_DIR)
            exists = os.path.exists(target_dir)
            return self._send_json(200, {
                "ok": True,
                "target_dir": target_dir,
                "target_dir_exists": exists,
                "last_saved": cfg.get("last_saved")
            })

        # 3. API: 扫描并列出本地磁盘所有便签图谱
        if path == '/api/storage/graphs':
            cfg = load_config()
            target_dir = cfg.get("target_dir", DEFAULT_TARGET_DIR)
            graphs = []
            if os.path.exists(target_dir):
                for name in os.listdir(target_dir):
                    dir_path = os.path.join(target_dir, name)
                    if not os.path.isdir(dir_path):
                        continue
                    db_file = os.path.join(dir_path, "db.sqlite")
                    # 支持直接存在或嵌套一层子目录的结构
                    if not os.path.isfile(db_file):
                        nested_db = os.path.join(dir_path, name, "db.sqlite")
                        if os.path.isfile(nested_db):
                            db_file = nested_db
                    
                    if os.path.isfile(db_file):
                        try:
                            stat = os.stat(db_file)
                            backups_dir = os.path.join(dir_path, "backups")
                            b_count = len(os.listdir(backups_dir)) if os.path.isdir(backups_dir) else 0
                            graphs.append({
                                "name": name,
                                "db_path": db_file,
                                "size": stat.st_size,
                                "mtime": int(stat.st_mtime * 1000),
                                "mtime_str": time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(stat.st_mtime)),
                                "backups_count": b_count
                            })
                        except Exception:
                            pass
            # 按最后修改时间倒序排列
            graphs.sort(key=lambda g: g["mtime"], reverse=True)
            return self._send_json(200, {
                "ok": True,
                "target_dir": target_dir,
                "graphs": graphs
            })

        # 4. API: 读取指定 repo 的本地 SQLite 数据库二进制数据
        if path == '/api/storage/load':
            from urllib.parse import parse_qs
            qs = parse_qs(parsed.query)
            repo = qs.get('repo', ['default'])[0]
            repo_clean = _sanitize_name(repo)
            cfg = load_config()
            target_dir = cfg.get("target_dir", DEFAULT_TARGET_DIR)

            # 多层候选路径搜索（防止文件夹命名或嵌套偏差）
            candidates = [
                os.path.join(target_dir, repo, "db.sqlite"),
                os.path.join(target_dir, repo_clean, "db.sqlite"),
                os.path.join(target_dir, repo, repo, "db.sqlite"),
                os.path.join(target_dir, repo_clean, repo_clean, "db.sqlite"),
                os.path.join(target_dir, "db.sqlite")
            ]
            found = None
            for c in candidates:
                if os.path.isfile(c):
                    found = c
                    break

            if not found:
                return self._send_json(404, {
                    "ok": False,
                    "error": "No database found on disk for repo",
                    "repo": repo,
                    "checked": candidates
                })

            try:
                with open(found, 'rb') as f:
                    data = f.read()
                self.send_response(200)
                self.send_header('Content-Type', 'application/x-sqlite3')
                self.send_header('Content-Length', str(len(data)))
                self.send_header('X-Logseq-Path', found.encode('utf-8').decode('latin-1', 'replace'))
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Cache-Control', 'no-store')
                self.end_headers()
                self.wfile.write(data)
                return
            except Exception as e:
                return self._send_json(500, {"ok": False, "error": str(e)})

        # 5. 静态资源托管与 SPA 回退
        fs_path = self.translate_path(self.path)
        if not os.path.exists(fs_path) and not path.startswith(('/api/', '/js/', '/css/', '/fonts/', '/assets/')):
            index_path = os.path.join(STATIC_DIR, 'index.html')
            if os.path.exists(index_path):
                self.path = '/index.html'

        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path

        # 1. API: 保存 SQLite 数据库至本地物理磁盘文件夹
        if path == '/api/storage/save':
            try:
                content_len = int(self.headers.get('Content-Length', 0))
                if content_len <= 0 or content_len > MAX_BODY_BYTES:
                    return self._send_json(400, {"ok": False, "error": f"Invalid content length: {content_len}"})

                content_type = self.headers.get('Content-Type', '')
                repo_header = self.headers.get('X-Logseq-Repo', '')
                repo = unquote(repo_header).strip() if repo_header else ''
                if not repo or repo == 'default':
                    qs = parse_qs(parsed.query)
                    q_repo = qs.get('repo', [''])[0]
                    if q_repo:
                        repo = unquote(q_repo).strip()
                if not repo:
                    repo = 'default'

                data_bytes = None
                custom_target_dir = None

                # 确保完整读取所有字节流（防止网络缓冲区导致的部分读取）
                def read_all_bytes(total):
                    rem = total
                    parts = []
                    while rem > 0:
                        part = self.rfile.read(min(rem, 65536))
                        if not part:
                            break
                        parts.append(part)
                        rem -= len(part)
                    return b''.join(parts)

                if 'application/json' in content_type:
                    raw_body = read_all_bytes(content_len).decode('utf-8')
                    payload = json.loads(raw_body)
                    repo = payload.get('repo', repo)
                    b64 = payload.get('data')
                    custom_target_dir = payload.get('target_dir')
                    if b64:
                        data_bytes = base64.b64decode(b64)
                else:
                    data_bytes = read_all_bytes(content_len)

                if not data_bytes or len(data_bytes) == 0:
                    return self._send_json(400, {"ok": False, "error": "Empty database payload"})

                cfg = load_config()
                target_base = custom_target_dir or cfg.get("target_dir", DEFAULT_TARGET_DIR)
                repo_name = _sanitize_name(repo)

                # 智能消除嵌套目录：若 target_base 本身已指向当前图谱目录，不重复拼合
                if os.path.basename(os.path.normpath(target_base)) == repo_name:
                    repo_dir = target_base
                else:
                    repo_dir = os.path.join(target_base, repo_name)

                backups_dir = os.path.join(repo_dir, "backups")
                os.makedirs(backups_dir, exist_ok=True)

                target_db_path = os.path.join(repo_dir, "db.sqlite")

                # 如果目标已有文件且内容与新写入数据一致，直接跳过以节省磁盘与 I/O 开销
                if os.path.isfile(target_db_path) and os.path.getsize(target_db_path) == len(data_bytes):
                    try:
                        with open(target_db_path, 'rb') as f:
                            existing = f.read()
                        if existing == data_bytes:
                            return self._send_json(200, {
                                "ok": True,
                                "saved_path": target_db_path,
                                "status": "unchanged",
                                "size": len(data_bytes),
                                "time": time.strftime("%Y-%m-%d %H:%M:%S")
                            })
                    except Exception:
                        pass

                # 1. 写入版本化历史备份
                ts = int(time.time() * 1000)
                backup_filename = f"{ts}.db.sqlite"
                backup_path = os.path.join(backups_dir, backup_filename)
                _atomic_write(backup_path, data_bytes)
                _rotate_backups(backups_dir, MAX_BACKUPS)

                # 2. 原子更新主数据库文件 db.sqlite
                _atomic_write(target_db_path, data_bytes)

                # 3. 更新配置状态与同步日志
                now_str = time.strftime("%Y-%m-%d %H:%M:%S")
                cfg["last_saved"] = {
                    "repo": repo,
                    "path": target_db_path,
                    "size": len(data_bytes),
                    "time": now_str
                }
                save_config(cfg)
                _append_to_sync_log(repo_name, target_db_path, len(data_bytes))

                print(f"[Server] 成功自动保存便签图谱 [{repo_name}] 至物理磁盘: {target_db_path} ({len(data_bytes)} 字节)")
                return self._send_json(200, {
                    "ok": True,
                    "saved_path": target_db_path,
                    "backup_path": backup_path,
                    "size": len(data_bytes),
                    "time": now_str
                })
            except Exception as e:
                print(f"[Server] Error saving database: {e}")
                return self._send_json(500, {"ok": False, "error": str(e)})

        # 2. API: 更新目标文件夹配置
        if path == '/api/storage/config':
            try:
                content_len = int(self.headers.get('Content-Length', 0))
                raw_body = self.rfile.read(content_len).decode('utf-8')
                payload = json.loads(raw_body)
                new_dir = payload.get('target_dir', '').strip()
                if not new_dir:
                    return self._send_json(400, {"ok": False, "error": "target_dir is required"})

                os.makedirs(new_dir, exist_ok=True)
                cfg = load_config()
                cfg["target_dir"] = new_dir
                save_config(cfg)
                return self._send_json(200, {
                    "ok": True,
                    "target_dir": new_dir
                })
            except Exception as e:
                return self._send_json(500, {"ok": False, "error": str(e)})

        # 3. API: 触发 GitHub 自动化同步与 Markdown 日志记录
        if path == '/api/sync/github':
            try:
                content_len = int(self.headers.get('Content-Length', 0))
                payload = {}
                if content_len > 0:
                    raw_body = self.rfile.read(content_len).decode('utf-8')
                    payload = json.loads(raw_body)

                msg = payload.get('message', '').strip()
                sync_script = os.path.join(ROOT, 'scripts', 'auto-sync-github.mjs')
                if not os.path.exists(sync_script):
                    return self._send_json(404, {"ok": False, "error": "auto-sync-github.mjs script not found"})

                cmd = ['node', sync_script]
                if msg:
                    cmd.append(msg)

                proc = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, timeout=120)
                output = proc.stdout + '\n' + proc.stderr
                return self._send_json(200 if proc.returncode == 0 else 500, {
                    "ok": proc.returncode == 0,
                    "output": output.strip()
                })
            except subprocess.TimeoutExpired:
                return self._send_json(504, {"ok": False, "error": "GitHub sync timed out"})
            except Exception as e:
                return self._send_json(500, {"ok": False, "error": str(e)})

        return self._send_json(404, {"ok": False, "error": "Endpoint not found"})

def run_server():
    ensure_dirs()
    cfg = load_config()
    print("=" * 60)
    print("[Server] Logseq Web 本地存储与静态服务器启动中...")
    print(f"[Server] 静态文件目录: {STATIC_DIR}")
    print(f"[Server] 数据保存物理磁盘目录: {cfg.get('target_dir', DEFAULT_TARGET_DIR)}")
    print(f"[Server] 服务监听地址: http://{BIND}:{PORT}")
    print("=" * 60)

    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer((BIND, PORT), LogseqServerHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[Server] 服务器正在关闭...")
            httpd.shutdown()

if __name__ == '__main__':
    run_server()
