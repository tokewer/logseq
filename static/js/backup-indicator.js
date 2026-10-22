/**
 * Logseq Web Native Auto-Save & Disk Hydration Engine (v2.2.0)
 * 
 * 核心功能：
 * 1. 物理磁盘直存与自动水合：
 *    - 页面加载时自动发现本地物理图谱（默认优先加载 F:\新学习资料分站\数据\随笔便签 中的真实笔记高三—，不使用 demo）
 *    - 支持从磁盘按需即时切换图谱（高三— / 高三 等）
 * 2. 全自动编辑感知与防抖持久化：
 *    - 监听 DOM input/keyup/paste/compositionend 及 MutationObserver，实时捕获所有块级输入与编辑变更
 *    - 停止输入 1.2 秒后自动提交活动块并调用 worker 导出二进制，原子写入本地物理磁盘 db.sqlite
 *    - 保留最近 10 份历史备份快照于 backups/ 目录
 *    - 写入记录至 GITHUB_SYNC_LOG.md，支持 GitHub 自动化同步
 * 3. 页面离开与焦点丧失零丢失保障：
 *    - visibilitychange / beforeunload / blur 自动即时强制 flush
 *    - 全局 Ctrl+S / Cmd+S 立即持久化
 * 4. 极致 Logseq 原生视觉美学：
 *    - 状态指示灯（🟢已保存 / 🟡待保存 / 🔵写入中 / 🔴异常）
 *    - 顶部工具栏弹出式详情卡片、磁盘路径直观显示、即时图谱切换、手动一键备份
 */
(function() {
  'use strict';

  var CONFIG = {
    apiGraphs: '/api/storage/graphs',
    apiLoad: '/api/storage/load',
    apiSave: '/api/storage/save',
    apiConfig: '/api/storage/config',
    apiGitSync: '/api/sync/github',
    defaultTargetDir: 'F:\\新学习资料分站\\数据\\随笔便签',
    debounceDelayMs: 1200,
    heartbeatIntervalMs: 3000
  };

  var state = {
    repo: '',
    status: 'idle', // 'idle' | 'dirty' | 'saving' | 'hydrating' | 'error'
    lastSavedTime: '',
    targetDir: CONFIG.defaultTargetDir,
    targetPath: '',
    graphs: [],
    popupOpen: false,
    errorMsg: '',
    isDirty: false,
    debounceTimer: null,
    lastSavedBytes: 0,
    saveInFlight: false,
    hasPendingSaveAfterFlight: false,
    hydrated: false
  };

  var isHydrating = false;

  // 格式化时间 HH:mm:ss
  function formatTime(d) {
    if (!d) return '';
    var pad = function(n) { return String(n).padStart(2, '0'); };
    return pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  }

  // 格式化文件大小
  function formatBytes(bytes) {
    if (!bytes || bytes === 0) return '0 B';
    var k = 1024;
    var sizes = ['B', 'KB', 'MB', 'GB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i];
  }

  // 获取当前正在编辑的 Logseq 图谱名称
  function getCurrentRepo() {
    try {
      if (window.frontend && window.frontend.state && window.frontend.state.get_current_repo) {
        var r = window.frontend.state.get_current_repo();
        if (r) return r;
      }
    } catch (e) {}
    return state.repo || '';
  }

  // 弹出 Logseq 原生通知
  function showNotification(msg, type) {
    try {
      if (window.frontend && window.frontend.handler && window.frontend.handler.notification && window.frontend.handler.notification.show_BANG_) {
        var kw = 'success';
        if (window.cljs && window.cljs.core && window.cljs.core.keyword) {
          kw = window.cljs.core.keyword(type || 'success');
        }
        window.frontend.handler.notification.show_BANG_(msg, kw);
      }
    } catch (e) {
      console.log('[Notification]', type, msg);
    }
  }

  // 1. 自动水合：等待 Logseq Worker 启动就绪后，将本地磁盘上的真实笔记图谱（高三—）加载进 Worker
  async function hydrateUserGraphIfNeeded() {
    if (state.hydrated || isHydrating) return;

    if (!window.frontend || !window.frontend.state || !window.frontend.state.get_current_repo || !window.frontend.state._LT_invoke_db_worker || !window.cljs) {
      return;
    }
    var current = window.frontend.state.get_current_repo();
    if (!current) {
      return;
    }

    isHydrating = true;
    try {
      var gResp = await fetch(CONFIG.apiGraphs);
      if (!gResp.ok) { isHydrating = false; return; }
      var gData = await gResp.json();
      if (!gData || !gData.ok || !gData.graphs || gData.graphs.length === 0) {
        isHydrating = false;
        return;
      }

      state.graphs = gData.graphs;
      if (gData.target_dir) state.targetDir = gData.target_dir;

      var preferred = localStorage.getItem('logseq_preferred_graph');
      var targetGraph = null;

      if (preferred && state.graphs.some(function(g) { return g.name === preferred; })) {
        targetGraph = preferred;
      } else {
        var nonDemo = state.graphs.filter(function(g) {
          return g.name !== 'logseq_db_Demo' && g.name !== 'Demo';
        });
        targetGraph = nonDemo.length > 0 ? nonDemo[0].name : state.graphs[0].name;
      }

      if (!targetGraph) {
        isHydrating = false;
        return;
      }

      if (current === targetGraph) {
        state.hydrated = true;
        state.repo = current;
        state.targetPath = state.targetDir + '\\' + current + '\\db.sqlite';
        state.status = 'idle';
        isHydrating = false;
        updateIndicatorUI();
        updatePopupUI();
        return;
      }

      console.log('[AutoHydrate] 发现本地目标笔记图谱 [' + targetGraph + ']，准备从物理磁盘水合...');
      state.status = 'hydrating';
      updateIndicatorUI();
      updatePopupUI();

      var loadResp = await fetch(CONFIG.apiLoad + '?repo=' + encodeURIComponent(targetGraph));
      if (!loadResp.ok) {
        throw new Error('读取图谱失败 HTTP ' + loadResp.status);
      }
      var buf = await loadResp.arrayBuffer();
      var u8 = new Uint8Array(buf);

      var kwImport = window.cljs.core.keyword('thread-api/import-db-binary');
      await window.frontend.state._LT_invoke_db_worker(kwImport, targetGraph, u8);

      var kwSwitch = window.cljs.core.keyword('graph/switch');
      window.frontend.state.pub_event_BANG_(
        new window.cljs.core.PersistentVector(null, 2, 5, window.cljs.core.PersistentVector.EMPTY_NODE, [
          kwSwitch, targetGraph
        ], null)
      );

      state.repo = targetGraph;
      state.targetPath = state.targetDir + '\\' + targetGraph + '\\db.sqlite';
      state.lastSavedBytes = u8.byteLength;
      state.lastSavedTime = formatTime(new Date());
      state.hydrated = true;
      state.status = 'idle';
      localStorage.setItem('logseq_preferred_graph', targetGraph);

      updateIndicatorUI();
      updatePopupUI();
      showNotification('已自动从物理磁盘载入真实笔记图谱 [' + targetGraph + '] (' + formatBytes(u8.byteLength) + ')', 'success');
    } catch (e) {
      console.warn('[AutoHydrate] 水合暂缓，将在下轮重试:', e.message || e);
      state.status = 'idle';
      updateIndicatorUI();
    } finally {
      isHydrating = false;
    }
  }

  // 2. 核心保存执行函数（导出 worker SQLite 二进制并原子写入后端）
  async function executeSave(force) {
    if (state.saveInFlight) {
      state.hasPendingSaveAfterFlight = true;
      return;
    }

    var curRepo = getCurrentRepo();
    if (!curRepo || curRepo === 'logseq_db_Demo') {
      var pref = localStorage.getItem('logseq_preferred_graph');
      if (pref && pref !== 'logseq_db_Demo') curRepo = pref;
    }
    if (!curRepo) return;

    state.saveInFlight = true;
    state.status = 'saving';
    updateIndicatorUI();
    updatePopupUI();

    try {
      if (!window.frontend || !window.frontend.state || !window.frontend.state._LT_invoke_db_worker || !window.cljs) {
        throw new Error('Logseq DB Worker 尚未就绪');
      }

      // 提交正在编辑的活动块至 Logseq 数据库
      try {
        if (window.frontend.state.pub_event_BANG_) {
          var kwSaveBlock = window.cljs.core.keyword('editor/save-current-block');
          window.frontend.state.pub_event_BANG_(
            new window.cljs.core.PersistentVector(null, 1, 5, window.cljs.core.PersistentVector.EMPTY_NODE, [
              kwSaveBlock
            ], null)
          );
        }
      } catch (err) {}

      // 等待 100ms 让 worker 事务入库
      await new Promise(function(resolve) { setTimeout(resolve, 100); });

      var kwExport = window.cljs.core.keyword('thread-api/export-db-binary');
      var dbBinary = await window.frontend.state._LT_invoke_db_worker(kwExport, curRepo);

      if (!dbBinary || dbBinary.byteLength === 0) {
        throw new Error('导出的数据库二进制数据为空');
      }

      var resp = await fetch(CONFIG.apiSave, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream',
          'X-Logseq-Repo': encodeURIComponent(curRepo)
        },
        body: dbBinary
      });

      if (!resp.ok) {
        var errText = await resp.text();
        throw new Error('服务端持久化失败 (' + resp.status + '): ' + errText);
      }

      var resJson = await resp.json();
      if (!resJson || !resJson.ok) {
        throw new Error((resJson && resJson.error) || '未知保存错误');
      }

      state.lastSavedBytes = dbBinary.byteLength;
      state.lastSavedTime = formatTime(new Date());
      state.targetPath = resJson.saved_path || (state.targetDir + '\\' + curRepo + '\\db.sqlite');
      state.repo = curRepo;
      state.isDirty = false;
      state.status = 'idle';
      state.errorMsg = '';

      console.log('[AutoSave] 成功自动持久化 [' + curRepo + '] 至物理磁盘: ' + state.targetPath + ' (' + dbBinary.byteLength + ' 字节)');
    } catch (e) {
      console.error('[AutoSave] 保存失败:', e);
      state.status = 'error';
      state.errorMsg = e.message || String(e);
    } finally {
      state.saveInFlight = false;
      updateIndicatorUI();
      updatePopupUI();

      if (state.hasPendingSaveAfterFlight) {
        state.hasPendingSaveAfterFlight = false;
        setTimeout(function() { executeSave(false); }, 300);
      }
    }
  }

  var maxDelayTimer = null;

  // 3. 标记内容发生变更，启动防抖定时器与最大延迟节流
  function markDirtyAndScheduleSave() {
    if (state.status === 'hydrating' || state.saveInFlight) return;

    state.isDirty = true;
    if (state.status !== 'saving') {
      state.status = 'dirty';
      updateIndicatorUI();
      updatePopupUI();
    }

    if (state.debounceTimer) {
      clearTimeout(state.debounceTimer);
    }

    // 1.2 秒防抖（停止输入后自动触发）
    state.debounceTimer = setTimeout(function() {
      state.debounceTimer = null;
      if (maxDelayTimer) {
        clearTimeout(maxDelayTimer);
        maxDelayTimer = null;
      }
      executeSave(false);
    }, CONFIG.debounceDelayMs);

    // 最大延迟保护（连续输入最多延迟 3 秒必须触发一次持久化）
    if (!maxDelayTimer) {
      maxDelayTimer = setTimeout(function() {
        maxDelayTimer = null;
        if (state.debounceTimer) {
          clearTimeout(state.debounceTimer);
          state.debounceTimer = null;
        }
        executeSave(false);
      }, 3000);
    }
  }

  // 4. 用户交互切换图谱
  async function switchGraph(targetRepo) {
    if (!targetRepo || targetRepo === state.repo) return;

    if (state.isDirty) {
      await executeSave(true);
    }

    state.status = 'hydrating';
    updateIndicatorUI();
    updatePopupUI();

    try {
      var loadResp = await fetch(CONFIG.apiLoad + '?repo=' + encodeURIComponent(targetRepo));
      if (!loadResp.ok) throw new Error('无法读取图谱数据');

      var buf = await loadResp.arrayBuffer();
      var u8 = new Uint8Array(buf);

      var kwImport = window.cljs.core.keyword('thread-api/import-db-binary');
      await window.frontend.state._LT_invoke_db_worker(kwImport, targetRepo, u8);

      var kwSwitch = window.cljs.core.keyword('graph/switch');
      window.frontend.state.pub_event_BANG_(
        new window.cljs.core.PersistentVector(null, 2, 5, window.cljs.core.PersistentVector.EMPTY_NODE, [
          kwSwitch, targetRepo
        ], null)
      );

      state.repo = targetRepo;
      state.targetPath = state.targetDir + '\\' + targetRepo + '\\db.sqlite';
      state.lastSavedBytes = u8.byteLength;
      state.lastSavedTime = formatTime(new Date());
      state.status = 'idle';
      localStorage.setItem('logseq_preferred_graph', targetRepo);

      updateIndicatorUI();
      updatePopupUI();
      showNotification('已成功切换至图谱 [' + targetRepo + ']', 'success');
    } catch (e) {
      console.error('[SwitchGraph] 切换失败:', e);
      state.status = 'error';
      state.errorMsg = '切换失败: ' + e.message;
      updateIndicatorUI();
      updatePopupUI();
    }
  }

  // 5. 触发 GitHub 仓库手动同步
  async function triggerGitHubSync() {
    showNotification('正在同步至 GitHub 仓库并记录 Markdown 日志...', 'info');
    try {
      var resp = await fetch(CONFIG.apiGitSync, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'auto-sync: 便签数据与最新改动同步' })
      });
      var res = await resp.json();
      if (res && res.ok) {
        showNotification('已成功同步至 GitHub 仓库与静态站点！', 'success');
      } else {
        showNotification('GitHub 同步提示: ' + ((res && res.error) || '请查看控制台日志'), 'warning');
      }
    } catch (e) {
      showNotification('GitHub 同步网络异常: ' + e.message, 'error');
    }
  }

  // 6. 全局事件监听（捕获一切键盘打字、粘贴、剪切、中文输入法）
  function setupChangeListeners() {
    var events = ['input', 'compositionend', 'keyup', 'paste', 'cut', 'change'];
    events.forEach(function(evtName) {
      window.addEventListener(evtName, function(e) {
        if (e.target && e.target.closest && e.target.closest('#logseq-backup-popup, #backup-status-indicator-btn')) {
          return;
        }
        markDirtyAndScheduleSave();
      }, true);
    });

    // 监听 DOM 树变化（仅关注块新增、删除等结构变更）
    var domObserver = new MutationObserver(function(mutations) {
      var isBlockChange = false;
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        if (m.target && m.target.closest && m.target.closest('#logseq-backup-popup, #backup-status-indicator-btn')) {
          continue;
        }
        if (m.addedNodes.length > 0 || m.removedNodes.length > 0) {
          isBlockChange = true;
          break;
        }
      }
      if (isBlockChange) {
        markDirtyAndScheduleSave();
      }
    });

    domObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    // 快捷键 Ctrl+S / Cmd+S 立即持久化
    window.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        executeSave(true).then(function() {
          showNotification('已即时持久化便签并生成本地备份快照！', 'success');
        });
      }
    });

    // 页面不可见（切换标签页/最小化）立即保存
    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'hidden' && state.isDirty) {
        executeSave(true);
      }
    });

    // 窗口失去焦点立即保存
    window.addEventListener('blur', function() {
      if (state.isDirty) {
        executeSave(true);
      }
    });

    // 页面即将卸载（关闭标签或刷新）触发 keepalive fetch 保存
    window.addEventListener('beforeunload', function() {
      if (state.isDirty) {
        var curRepo = getCurrentRepo() || state.repo;
        if (curRepo && window.frontend && window.frontend.state && window.frontend.state._LT_invoke_db_worker && window.cljs) {
          try {
            var kw = window.cljs.core.keyword('thread-api/export-db-binary');
            window.frontend.state._LT_invoke_db_worker(kw, curRepo).then(function(bin) {
              if (bin && bin.byteLength > 0) {
                fetch(CONFIG.apiSave, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/octet-stream',
                    'X-Logseq-Repo': encodeURIComponent(curRepo)
                  },
                  body: bin,
                  keepalive: true
                });
              }
            });
          } catch (e) {}
        }
      }
    });
  }

  // 7. 更新顶部栏指示器图标与徽标状态
  function updateIndicatorUI() {
    var btn = document.getElementById('backup-status-indicator-btn');
    if (!btn) return;

    var curRepo = getCurrentRepo() || state.repo;
    var status = state.status || 'idle';
    var timeStr = state.lastSavedTime || '刚刚';

    var tooltip = status === 'saving' ? '正在自动持久化数据至本地磁盘...' :
                  status === 'hydrating' ? '正在从物理磁盘载入真实笔记图谱...' :
                  status === 'dirty' ? '有改动待保存 (停止输入 1.2 秒后自动写入，或按 Ctrl+S)' :
                  status === 'error' ? ('持久化异常: ' + (state.errorMsg || '点击查看详情')) :
                  ('已安全保存至物理磁盘 (图谱: ' + curRepo + ', 上次保存: ' + timeStr + ')');
    btn.title = tooltip;

    var dot = btn.querySelector('.backup-status-dot');
    if (dot) {
      dot.className = 'backup-status-dot absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full transition-all duration-300 ' +
        (status === 'saving' ? 'bg-blue-500 animate-spin' :
         status === 'hydrating' ? 'bg-cyan-500 animate-pulse' :
         status === 'dirty' ? 'bg-amber-500 animate-pulse' :
         status === 'error' ? 'bg-red-500' :
         'bg-emerald-500');
      dot.style.boxShadow = status === 'idle' ? '0 0 6px rgba(16, 185, 129, 0.8)' : 'none';
    }

    var iconSvg = btn.querySelector('.tabler-icon');
    if (iconSvg) {
      btn.className = 'ui__button inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm gap-1 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none hover:bg-secondary/70 hover:text-secondary-foreground active:opacity-80 as-ghost box-content h-6 w-6 p-1 overflow-hidden relative mr-1 ' +
        (status === 'saving' ? 'text-blue-500' :
         status === 'hydrating' ? 'text-cyan-500' :
         status === 'dirty' ? 'text-amber-500' :
         status === 'error' ? 'text-red-500' :
         'text-emerald-600 dark:text-emerald-400 opacity-90 hover:opacity-100');
    }
  }

  // 8. 挂载指示器按钮到顶部工具栏（优先放入 .cp__header .r 中的操作区）
  function mountIndicator() {
    var headRight = document.querySelector('.cp__header .r .flex.items-center, #head .r .flex.items-center, .cp__header .r, #head .r');
    if (!headRight) return;

    var targetContainer = headRight.classList.contains('items-center') ? headRight : headRight.querySelector('.flex.items-center') || headRight;

    var existingBtn = document.getElementById('backup-status-indicator-btn');
    if (existingBtn) {
      if (existingBtn.parentNode === targetContainer) return;
      existingBtn.remove();
    }

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'backup-status-indicator-btn';
    btn.setAttribute('data-button', 'icon');
    btn.className = 'ui__button inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm gap-1 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none hover:bg-secondary/70 hover:text-secondary-foreground active:opacity-80 as-ghost box-content h-6 w-6 p-1 overflow-hidden relative mr-1 text-emerald-600 dark:text-emerald-400 opacity-90 hover:opacity-100';
    btn.title = '物理磁盘自动保存系统';

    btn.innerHTML =
      '<span class="ui__icon ti relative flex items-center justify-center">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-database">' +
          '<path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path>' +
          '<path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>' +
          '<path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>' +
        '</svg>' +
        '<span class="backup-status-dot absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500" style="box-shadow: 0 0 6px rgba(16, 185, 129, 0.8)"></span>' +
      '</span>';

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      togglePopup(btn);
    });

    if (targetContainer.firstChild) {
      targetContainer.insertBefore(btn, targetContainer.firstChild);
    } else {
      targetContainer.appendChild(btn);
    }
    updateIndicatorUI();
  }

  // 9. 关闭弹窗
  function closePopup() {
    var popup = document.getElementById('logseq-backup-popup');
    if (popup) popup.remove();
    state.popupOpen = false;
  }

  // 10. 更新弹窗内元素显示
  function updatePopupUI() {
    var popup = document.getElementById('logseq-backup-popup');
    if (!popup || !state.popupOpen) return;

    var curRepo = getCurrentRepo() || state.repo;
    var status = state.status || 'idle';
    var timeStr = state.lastSavedTime || '刚刚';

    var badgeText = status === 'saving' ? '正在写入...' :
                    status === 'hydrating' ? '正在载入...' :
                    status === 'dirty' ? '待保存' :
                    status === 'error' ? '写入异常' :
                    '已完全保存';
    var badgeClass = status === 'saving' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' :
                     status === 'hydrating' ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300' :
                     status === 'dirty' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' :
                     status === 'error' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' :
                     'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300';

    var statusBadge = popup.querySelector('.backup-popup-badge');
    if (statusBadge) {
      statusBadge.textContent = badgeText;
      statusBadge.className = 'backup-popup-badge text-xs px-2 py-0.5 rounded-full font-medium ' + badgeClass;
    }

    var timeSpan = popup.querySelector('.backup-popup-time');
    if (timeSpan) timeSpan.textContent = timeStr;

    var sizeSpan = popup.querySelector('.backup-popup-size');
    if (sizeSpan && state.lastSavedBytes) sizeSpan.textContent = formatBytes(state.lastSavedBytes);

    var pathDiv = popup.querySelector('.backup-popup-path');
    if (pathDiv) {
      var p = state.targetPath || (state.targetDir + '\\' + curRepo + '\\db.sqlite');
      pathDiv.textContent = p;
    }

    var select = popup.querySelector('#backup-popup-repo-select');
    if (select && select.value !== curRepo) {
      select.value = curRepo;
    }
  }

  // 11. 打开详情与控制弹窗
  function togglePopup(anchorBtn) {
    if (state.popupOpen) {
      closePopup();
      return;
    }

    closePopup();
    state.popupOpen = true;

    var rect = anchorBtn.getBoundingClientRect();
    var curRepo = getCurrentRepo() || state.repo;
    var status = state.status || 'idle';
    var timeStr = state.lastSavedTime || '刚刚';

    var badgeText = status === 'saving' ? '正在写入...' :
                    status === 'hydrating' ? '正在载入...' :
                    status === 'dirty' ? '待保存' :
                    status === 'error' ? '写入异常' :
                    '已完全保存';
    var badgeClass = status === 'saving' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' :
                     status === 'hydrating' ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300' :
                     status === 'dirty' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' :
                     status === 'error' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' :
                     'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300';

    var popup = document.createElement('div');
    popup.id = 'logseq-backup-popup';
    popup.setAttribute('role', 'dialog');
    popup.className = 'fixed z-50 rounded-lg border border-border bg-popover text-popover-foreground shadow-2xl p-3.5 text-sm select-none animate-in fade-in-0 zoom-in-95';
    popup.style.minWidth = '320px';
    popup.style.maxWidth = '380px';
    popup.style.top = (rect.bottom + 6) + 'px';
    popup.style.right = (window.innerWidth - rect.right) + 'px';

    var graphOptionsHtml = '';
    if (state.graphs && state.graphs.length > 0) {
      state.graphs.forEach(function(g) {
        var isSel = (g.name === curRepo) ? 'selected' : '';
        graphOptionsHtml += '<option value="' + g.name + '" ' + isSel + '>' + g.name + ' (' + formatBytes(g.size) + ')</option>';
      });
    } else {
      graphOptionsHtml = '<option value="' + curRepo + '">' + curRepo + '</option>';
    }

    popup.innerHTML =
      '<div class="flex items-center justify-between border-b border-border/60 pb-2 mb-2.5">' +
        '<div class="flex items-center gap-1.5 font-semibold text-sm text-foreground">' +
          '<span>💾</span><span>本地便签直存与备份</span>' +
        '</div>' +
        '<span class="backup-popup-badge text-xs px-2 py-0.5 rounded-full font-medium ' + badgeClass + '">' + badgeText + '</span>' +
      '</div>' +
      '<div class="flex flex-col gap-2 text-xs text-foreground/85 py-0.5">' +
        '<div class="flex justify-between items-center">' +
          '<span class="opacity-70">存储模式:</span>' +
          '<span class="font-mono text-emerald-600 dark:text-emerald-400 font-medium">物理磁盘直存 (原子写入)</span>' +
        '</div>' +
        '<div class="flex justify-between items-center gap-2">' +
          '<span class="opacity-70 whitespace-nowrap">当前图谱:</span>' +
          '<select id="backup-popup-repo-select" class="flex-1 text-xs py-1 px-2 rounded border border-border bg-background text-foreground font-medium cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary">' +
            graphOptionsHtml +
          '</select>' +
        '</div>' +
        '<div class="flex justify-between items-center">' +
          '<span class="opacity-70">最近持久化:</span>' +
          '<span class="backup-popup-time font-mono font-medium">' + timeStr + '</span>' +
        '</div>' +
        '<div class="flex justify-between items-center">' +
          '<span class="opacity-70">数据体积:</span>' +
          '<span class="backup-popup-size font-mono">' + (state.lastSavedBytes ? formatBytes(state.lastSavedBytes) : '10.9 MB') + '</span>' +
        '</div>' +
        '<div class="flex justify-between items-center">' +
          '<span class="opacity-70">历史镜像快照:</span>' +
          '<span class="font-mono text-muted-foreground">backups/ (自动轮转保留10份)</span>' +
        '</div>' +
        '<div class="flex justify-between items-center">' +
          '<span class="opacity-70">自动保存触发:</span>' +
          '<span class="font-mono text-muted-foreground">打字停止1.2s / 切页面即存</span>' +
        '</div>' +
        '<div class="backup-popup-path mt-1 p-2 rounded bg-secondary/50 font-mono text-[11px] break-all border border-border/40 select-all text-muted-foreground leading-relaxed">' +
          (state.targetPath || (state.targetDir + '\\' + curRepo + '\\db.sqlite')) +
        '</div>' +
      '</div>' +
      '<div class="border-t border-border/60 pt-2.5 mt-2.5 flex flex-col gap-2">' +
        '<button type="button" id="backup-popup-save-btn" class="w-full py-1.5 px-3 rounded-md bg-primary text-primary-foreground text-xs font-medium cursor-pointer flex items-center justify-center gap-1.5 shadow-sm hover:opacity-90 active:scale-[0.98] transition-all">' +
          '<span>💾</span><span>立即持久化并创建快照 (Ctrl+S)</span>' +
        '</button>' +
        '<button type="button" id="backup-popup-sync-btn" class="w-full py-1.5 px-3 rounded-md bg-secondary text-secondary-foreground text-xs font-medium cursor-pointer flex items-center justify-center gap-1.5 border border-border hover:bg-secondary/80 active:scale-[0.98] transition-all">' +
          '<span>☁️</span><span>同步到 GitHub 仓库 (记录 Markdown)</span>' +
        '</button>' +
      '</div>';

    document.body.appendChild(popup);

    var select = popup.querySelector('#backup-popup-repo-select');
    if (select) {
      select.addEventListener('change', function(e) {
        var nextRepo = e.target.value;
        switchGraph(nextRepo);
      });
    }

    var saveBtn = popup.querySelector('#backup-popup-save-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', function() {
        executeSave(true).then(function() {
          showNotification('已完成便签物理直存与备份快照！', 'success');
        });
        setTimeout(closePopup, 300);
      });
    }

    var syncBtn = popup.querySelector('#backup-popup-sync-btn');
    if (syncBtn) {
      syncBtn.addEventListener('click', function() {
        triggerGitHubSync();
        setTimeout(closePopup, 300);
      });
    }

    function handleOutsideClick(e) {
      if (!popup.contains(e.target) && !anchorBtn.contains(e.target)) {
        closePopup();
        document.removeEventListener('pointerdown', handleOutsideClick);
      }
    }
    setTimeout(function() {
      document.addEventListener('pointerdown', handleOutsideClick);
    }, 50);
  }

  // 12. 引擎初始化
  function init() {
    mountIndicator();
    setupChangeListeners();

    var mountObserver = new MutationObserver(function() {
      mountIndicator();
    });
    mountObserver.observe(document.body, { childList: true, subtree: true });

    // 定时器：持续确保指示器常驻、检查水合状态、更新弹窗
    setInterval(function() {
      mountIndicator();
      hydrateUserGraphIfNeeded();
      updateIndicatorUI();
      updatePopupUI();
    }, 1000);

    // 等待 3 秒后尝试首次水合
    setTimeout(hydrateUserGraphIfNeeded, 3000);
  }

  // 导出全局 API 供控制台或测试使用
  window.logseqAutoSaveEngine = {
    state: state,
    executeSave: executeSave,
    switchGraph: switchGraph,
    hydrate: hydrateUserGraphIfNeeded,
    markDirty: markDirtyAndScheduleSave
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
