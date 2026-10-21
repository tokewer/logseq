# -*- coding: utf-8 -*-
"""
Logseq Web - 本地存储服务与静态服务器
参考 mind-map-main 架构：
1. 静态资源托管（static 目录，支持 gzip、etag、SPA 404 回退）
2. 本地文件夹直存 API (/api/storage/save, /api/storage/config, /api/storage/load)
   - 彻底摆脱浏览器沙盒与 OPFS 隔离，将数据以 SQLite 二进制格式直接写入选定物理磁盘文件夹
   - 采用原子写入（_atomic_write），避免并发与中断损坏
   - 自动生成版本化备份（backups/<timestamp>.db.sqlite），保留最近多份备份
3. GitHub 自动同步与 Markdown 日志记录接口 (/api/sync/github)
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
from urllib.parse import unquote, urlparse

# 确保在 Windows 控制台下输出 UTF-8，防止 GBK 编码异常
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

# 默认数据保存目录（参考用户本地数据目录）
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
        # Default config
        cfg = {
            "target_dir": DEFAULT_TARGET_DIR,
            "version": "1.0.0",
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
    # 允许中文、英文、数字、下划线、破折号
    s = re.sub(r'[^\w\u4e00-\u9fa5\-_.]', '_', str(name)).strip()
    return s or 'default'

def _atomic_write(target_path, data_bytes):
    """先写入目标目录内的临时文件再原子替换，避免写入中断导致损坏"""
    directory = os.path.dirname(target_path) or '.'
    os.makedirs(directory, exist_ok=True)
    fd, tmp = tempfile.mkstemp(prefix='.tmp-logseq-', dir=directory)
    try:
        with os.fdopen(fd, 'wb') as f:
            f.write(data_bytes)
            f.flush()
            os.fsync(f.fileno())
        with _file_write_lock:
            # 在 Windows 上，若目标文件存在，os.replace 可安全替换
            os.replace(tmp, target_path)
    except Exception as e:
        try:
            os.unlink(tmp)
        except OSError:
            pass
        raise e

def _rotate_backups(backups_dir, max_keep=MAX_BACKUPS):
    """保持 backups 文件夹内最多 max_keep 个历史备份文件"""
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

class LogseqServerHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=STATIC_DIR, **kwargs)

    def log_message(self, format, *args):
        # 简化日志，只输出 API 或错误
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

        # 1. API: Ping / 健康检查
        if path == '/api/ping':
            return self._send_json(200, {
                "ok": True,
                "status": "running",
                "version": "1.0.0",
                "server": "logseq-storage-server"
            })

        # 2. API: 获取配置与状态
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

        # 3. API: 获取指定 repo 的本地文件信息与数据
        if path == '/api/storage/load':
            from urllib.parse import parse_qs
            qs = parse_qs(parsed.query)
            repo = qs.get('repo', ['default'])[0]
            repo_clean = _sanitize_name(repo)
            cfg = load_config()
            target_dir = cfg.get("target_dir", DEFAULT_TARGET_DIR)
            # 兼容两种组织结构：<target_dir>/<repo>/db.sqlite 或 <target_dir>/db.sqlite
            candidates = [
                os.path.join(target_dir, repo_clean, "db.sqlite"),
                os.path.join(target_dir, repo, "db.sqlite"),
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
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Cache-Control', 'no-store')
                self.end_headers()
                self.wfile.write(data)
                return
            except Exception as e:
                return self._send_json(500, {"ok": False, "error": str(e)})

        # 4. 静态资源托管
        # 如果请求的文件不存在且不是以 /js、/css、/api、/assets 等开头，回退到 index.html（SPA 路由）
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
                repo = unquote(repo_header).strip() if repo_header else 'default'

                data_bytes = None
                custom_target_dir = None

                if 'application/json' in content_type:
                    raw_body = self.rfile.read(content_len).decode('utf-8')
                    payload = json.loads(raw_body)
                    repo = payload.get('repo', repo)
                    b64 = payload.get('data')
                    custom_target_dir = payload.get('target_dir')
                    if b64:
                        data_bytes = base64.b64decode(b64)
                else:
                    # 二进制 stream
                    data_bytes = self.rfile.read(content_len)

                if not data_bytes or len(data_bytes) == 0:
                    return self._send_json(400, {"ok": False, "error": "Empty database payload"})

                cfg = load_config()
                target_base = custom_target_dir or cfg.get("target_dir", DEFAULT_TARGET_DIR)
                repo_name = _sanitize_name(repo)

                # 物理存储结构（与 Logseq 原生导出目录结构一致）：
                # <target_base>/<repo_name>/db.sqlite
                # <target_base>/<repo_name>/backups/<timestamp>.db.sqlite
                repo_dir = os.path.join(target_base, repo_name)
                backups_dir = os.path.join(repo_dir, "backups")
                os.makedirs(backups_dir, exist_ok=True)

                target_db_path = os.path.join(repo_dir, "db.sqlite")

                # 如果目标已有文件且内容与新写入数据一致，直接跳过以节省磁盘写入
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

                # 3. 更新配置状态
                now_str = time.strftime("%Y-%m-%d %H:%M:%S")
                cfg["last_saved"] = {
                    "repo": repo,
                    "path": target_db_path,
                    "size": len(data_bytes),
                    "time": now_str
                }
                save_config(cfg)

                print(f"[Server] Successfully persisted {repo_name} to disk: {target_db_path} ({len(data_bytes)} bytes)")
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

        # 2. API: 更新保存目录配置
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

                # 执行同步脚本
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

    # 允许端口快速重用
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer((BIND, PORT), LogseqServerHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[Server] 服务器正在关闭...")
            httpd.shutdown()

if __name__ == '__main__':
    run_server()
