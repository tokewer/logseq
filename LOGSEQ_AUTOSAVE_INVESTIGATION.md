# Logseq 原生保存调查与实施结果

## 当前修复状态

已修复启动脚本因缺少 Electron 构建而直接失败的问题，并补齐本机可用的 Clojure CLI 构建入口。原生 Electron 构建已经生成，启动脚本已实际启动并确认 Electron 进程运行，不会回退到 Python 静态服务器。

## 本次新增修复

- `scripts/clojure.cmd`、`scripts/clj.cmd` 和 `scripts/clojure.ps1` 提供 Windows 用户级 Clojure CLI 转发器。
- 转发器加载用户级 `ClojureTools` PowerShell 模块，避免安装到受保护系统目录。
- 本机 Java 21 可用；Clojure CLI 1.12.0.1530 已安装到用户模块目录。
- 原生启动脚本继续 fail-fast：缺少构建产物时不启动浏览器 fallback，因为浏览器页面不能可靠持久化本地 Graph。
- `static` 目录依赖使用锁文件安装，不会操作 Graph 数据。

## 原生保存机制

源码已经包含 Logseq 原生数据库持久化流程，不需要另建“自动保存文件夹”复制系统，也没有证据表明需要修改核心保存逻辑。

编辑器输入停止约 450ms 后保存当前块，进入原生事务、db-worker 和 SQLite WAL 持久化；事务另有 debounce。Graph 页面、Journal 和块内容使用原生 Electron/SQLite 数据路径保存。

## Graph 与应用数据

默认 DB Graph 目录为 `~/logseq/graphs`，Windows 通常为 `C:\Users\<用户名>\logseq\graphs`；`LOGSEQ_GRAPHS_DIR` 可以覆盖它。Electron `userData` 目录中的 `graphs.edn` 是 Graph 注册信息，不是页面和 Journal 的真实数据源。

## 启动流程

`start-logseq.ps1` 与 `启动 Logseq.ps1`：

1. 检查 `static/electron.js`、`static/package.json` 和 `static/node_modules`；
2. 缺少任一原生构建条件时明确报错；
3. 完整构建后用 `pnpm electron:dev` 启动 Electron；
4. 不再启动 Python `http.server`。

## 构建与验证

已确认：

- Java 21 可用；
- Clojure CLI 用户级安装完成；
- `db-worker-node:bundle` 成功；
- `webpack-app-build` 成功；
- `pnpm exec shadow-cljs release electron` 成功，生成 `static/electron.js`；
- Electron 42.3.0 运行时依赖安装成功；
- `static/node_modules/electron/dist/electron.exe` 可执行；
- 启动脚本已实际启动 Electron 进程并确认运行；
- 启动脚本改为直接执行 Electron 二进制，避免 `pnpm`/PowerShell 参数转发导致的启动歧义。

尚未在真实用户 Graph 中完成页面、当天 Journal、快速连续输入、页面切换、关闭重开和数据文件内容恢复测试；因此只确认了构建与启动，不把 Graph 保存行为描述为已完成端到端验证。

## 安全边界

本次没有删除 Graph、移动 Graph、清空页面、覆盖未知数据或创建整 Graph 复制系统。工作树中原有 Web 备份文件夹相关修改保持原样，未继续扩展。
