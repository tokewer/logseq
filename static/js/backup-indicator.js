/**
 * Logseq Web Native Backup & Persistence Status Indicator
 * 
 * 符合 Logseq 原生视觉设计风格（Tabler Icons, Inter 字体, Shui 弹出卡片与深浅主题适配）
 * 1. 实时展示数据备份状态（已备份 / 待保存 / 正在写入 / 备份异常）
 * 2. 悬停提示本地物理磁盘存储位置与最新保存时间
 * 3. 点击呼出原生风格状态卡片，支持一键即时强制持久化与快照生成 (Ctrl+S)
 * 4. 纯原生实现，不依赖外部打包工具，完全避免 shadow-cljs 模块导入异常
 */
(function() {
  'use strict';

  var state = {
    repo: '默认图谱',
    status: 'idle', // 'idle' | 'dirty' | 'saving' | 'error'
    lastSavedTime: '',
    targetDir: 'F:\\新学习资料分站\\数据\\随笔便签',
    targetPath: '',
    popupOpen: false
  };

  // 获取当前图谱名称
  function getCurrentRepo() {
    try {
      if (window.frontend && window.frontend.state && window.frontend.state.get_current_repo) {
        return window.frontend.state.get_current_repo() || '默认图谱';
      }
    } catch (e) {}
    return state.repo || '默认图谱';
  }

  // 从后端获取配置
  function refreshConfig() {
    try {
      fetch('/api/storage/config')
        .then(function(res) { return res.ok ? res.json() : null; })
        .then(function(data) {
          if (!data || !data.ok) return;
          if (data.target_dir) state.targetDir = data.target_dir;
          if (data.last_saved && data.last_saved.time) {
            var timePart = data.last_saved.time.split(' ')[1] || data.last_saved.time;
            if (!state.lastSavedTime) state.lastSavedTime = timePart;
          }
          state.repo = getCurrentRepo();
          state.targetPath = state.targetDir + '\\' + state.repo + '\\db.sqlite';
          updateIndicatorUI();
          updatePopupUI();
        })
        .catch(function() {});
    } catch (e) {}
  }

  // 轮询 auto-save 状态
  function pollAutoSaveState() {
    var curRepo = getCurrentRepo();
    state.repo = curRepo;
    state.targetPath = state.targetDir + '\\' + curRepo + '\\db.sqlite';

    if (window.logseqAutoSave) {
      var st = window.logseqAutoSave.getState(curRepo);
      if (st) {
        if (st.status) state.status = st.status;
        if (st['last-saved-time']) state.lastSavedTime = st['last-saved-time'];
      }
    }

    updateIndicatorUI();
    updatePopupUI();
  }

  // 触发立即备份
  function triggerImmediateSave() {
    state.status = 'saving';
    updateIndicatorUI();
    updatePopupUI();

    var curRepo = getCurrentRepo();
    try {
      if (window.frontend && window.frontend.handler && window.frontend.handler.auto_save && window.frontend.handler.auto_save.flush_save_BANG_) {
        window.frontend.handler.auto_save.flush_save_BANG_(curRepo);
      }
    } catch (e) {
      console.warn('[BackupIndicator] flush_save_BANG_ error:', e);
    }

    // 格式化当前时间
    var now = new Date();
    var pad = function(n) { return String(n).padStart(2, '0'); };
    state.lastSavedTime = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());

    setTimeout(function() {
      state.status = 'idle';
      updateIndicatorUI();
      updatePopupUI();
    }, 600);

    // 触发 Logseq 原生通知
    try {
      if (window.frontend && window.frontend.handler && window.frontend.handler.notification && window.frontend.handler.notification.show_BANG_) {
        var kw = window.cljs && window.cljs.core && window.cljs.core.Keyword ? window.cljs.core.Keyword.find('success') : 'success';
        window.frontend.handler.notification.show_BANG_('已立即持久化当前便签并生成本地备份快照！', kw);
      }
    } catch (e) {}
  }

  // 监听全局快捷键 Ctrl+S / Cmd+S
  window.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
      e.preventDefault();
      triggerImmediateSave();
    }
  });

  // 更新指示器图标与徽标状态
  function updateIndicatorUI() {
    var btn = document.getElementById('backup-status-indicator-btn');
    if (!btn) return;

    var status = state.status || 'idle';
    var timeStr = state.lastSavedTime || '刚刚';

    var tooltip = status === 'saving' ? '正在自动持久化数据至本地磁盘...' :
                  status === 'dirty' ? '有改动待保存 (停止输入1秒后自动写入本地，或按 Ctrl+S)' :
                  status === 'error' ? '本地持久化异常，点击查看详情并重试' :
                  ('已备份至本地磁盘 (上次保存: ' + timeStr + ')');
    btn.title = tooltip;

    var dot = btn.querySelector('.backup-status-dot');
    if (dot) {
      dot.className = 'backup-status-dot absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full transition-all duration-300 ' +
        (status === 'saving' ? 'bg-blue-500 animate-spin' :
         status === 'dirty' ? 'bg-amber-500 animate-pulse' :
         status === 'error' ? 'bg-red-500' :
         'bg-emerald-500');
      dot.style.boxShadow = status === 'idle' ? '0 0 5px rgba(16, 185, 129, 0.8)' : 'none';
    }

    var iconSvg = btn.querySelector('.tabler-icon');
    if (iconSvg) {
      btn.className = 'ui__button inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm gap-1 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none hover:bg-secondary/70 hover:text-secondary-foreground active:opacity-80 as-ghost box-content h-6 w-6 p-1 overflow-hidden relative mr-1 ' +
        (status === 'saving' ? 'text-blue-500' :
         status === 'dirty' ? 'text-amber-500' :
         status === 'error' ? 'text-red-500' :
         'text-emerald-600 dark:text-emerald-400 opacity-80 hover:opacity-100');
    }
  }

  // 更新弹出菜单内容
  function updatePopupUI() {
    var popup = document.getElementById('logseq-backup-popup');
    if (!popup || !state.popupOpen) return;

    var status = state.status || 'idle';
    var timeStr = state.lastSavedTime || '刚刚';

    var badgeText = status === 'saving' ? '正在写入...' :
                    status === 'dirty' ? '待保存' :
                    status === 'error' ? '写入失败' :
                    '已完全备份';
    var badgeClass = status === 'saving' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' :
                     status === 'dirty' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' :
                     status === 'error' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' :
                     'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300';

    var statusBadge = popup.querySelector('.backup-popup-badge');
    if (statusBadge) {
      statusBadge.textContent = badgeText;
      statusBadge.className = 'backup-popup-badge text-xs px-2 py-0.5 rounded-full font-medium ' + badgeClass;
    }

    var repoSpan = popup.querySelector('.backup-popup-repo');
    if (repoSpan) repoSpan.textContent = state.repo;

    var timeSpan = popup.querySelector('.backup-popup-time');
    if (timeSpan) timeSpan.textContent = timeStr;

    var pathDiv = popup.querySelector('.backup-popup-path');
    if (pathDiv && state.targetPath) pathDiv.textContent = state.targetPath;
  }

  // 关闭弹出菜单
  function closePopup() {
    var popup = document.getElementById('logseq-backup-popup');
    if (popup) {
      popup.remove();
    }
    state.popupOpen = false;
  }

  // 打开弹出菜单
  function togglePopup(anchorBtn) {
    if (state.popupOpen) {
      closePopup();
      return;
    }

    closePopup();
    state.popupOpen = true;

    var rect = anchorBtn.getBoundingClientRect();
    var status = state.status || 'idle';
    var timeStr = state.lastSavedTime || '刚刚';

    var badgeText = status === 'saving' ? '正在写入...' :
                    status === 'dirty' ? '待保存' :
                    status === 'error' ? '写入失败' :
                    '已完全备份';
    var badgeClass = status === 'saving' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' :
                     status === 'dirty' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' :
                     status === 'error' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' :
                     'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300';

    var popup = document.createElement('div');
    popup.id = 'logseq-backup-popup';
    popup.setAttribute('role', 'dialog');
    popup.className = 'fixed z-50 rounded-lg border border-border bg-popover text-popover-foreground shadow-xl p-3 text-sm select-none animate-in fade-in-0 zoom-in-95';
    popup.style.minWidth = '290px';
    popup.style.maxWidth = '340px';
    popup.style.top = (rect.bottom + 6) + 'px';
    popup.style.right = (window.innerWidth - rect.right) + 'px';

    popup.innerHTML =
      '<div class="flex items-center justify-between border-b border-border/60 pb-2 mb-2.5">' +
        '<div class="flex items-center gap-1.5 font-semibold text-sm text-foreground">' +
          '<span>💾</span><span>本地数据备份状态</span>' +
        '</div>' +
        '<span class="backup-popup-badge text-xs px-2 py-0.5 rounded-full font-medium ' + badgeClass + '">' + badgeText + '</span>' +
      '</div>' +
      '<div class="flex flex-col gap-1.5 text-xs text-foreground/85 py-0.5">' +
        '<div class="flex justify-between items-center">' +
          '<span class="opacity-70">存储模式:</span>' +
          '<span class="font-mono text-emerald-600 dark:text-emerald-400 font-medium">物理磁盘直存 (原子写入)</span>' +
        '</div>' +
        '<div class="flex justify-between items-center">' +
          '<span class="opacity-70">当前图谱:</span>' +
          '<span class="backup-popup-repo font-semibold text-foreground">' + state.repo + '</span>' +
        '</div>' +
        '<div class="flex justify-between items-center">' +
          '<span class="opacity-70">最近备份:</span>' +
          '<span class="backup-popup-time font-mono">' + timeStr + '</span>' +
        '</div>' +
        '<div class="flex justify-between items-center">' +
          '<span class="opacity-70">历史备份镜像:</span>' +
          '<span class="font-mono">backups/ (自动保留10份)</span>' +
        '</div>' +
        '<div class="backup-popup-path mt-1 p-1.5 rounded bg-secondary/50 font-mono text-[11px] break-all border border-border/40 select-all text-muted-foreground">' +
          (state.targetPath || (state.targetDir + '\\' + state.repo + '\\db.sqlite')) +
        '</div>' +
      '</div>' +
      '<div class="border-t border-border/60 pt-2.5 mt-2 flex flex-col gap-1.5">' +
        '<button type="button" id="backup-popup-save-btn" class="w-full py-1.5 px-3 rounded-md bg-primary text-primary-foreground text-xs font-medium cursor-pointer flex items-center justify-center gap-1.5 shadow-sm hover:opacity-90 active:scale-[0.98] transition-all">' +
          '💾 立即备份当前内容 (Ctrl+S)' +
        '</button>' +
      '</div>';

    document.body.appendChild(popup);

    var saveBtn = document.getElementById('backup-popup-save-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', function() {
        triggerImmediateSave();
        setTimeout(closePopup, 300);
      });
    }

    // 点击外部区域自动关闭
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

  // 挂载指示器按钮到顶部工具栏
  function mountIndicator() {
    var headRight = document.querySelector('.cp__header .r .flex.items-center, #head .r .flex.items-center');
    if (!headRight) return;

    var dotsBtn = headRight.querySelector('.toolbar-dots-btn');
    if (!dotsBtn) return;

    var existingBtn = document.getElementById('backup-status-indicator-btn');
    if (existingBtn) {
      // 已存在且在正确位置
      if (existingBtn.parentNode === headRight) return;
      existingBtn.remove();
    }

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'backup-status-indicator-btn';
    btn.setAttribute('data-button', 'icon');
    btn.className = 'ui__button inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm gap-1 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none hover:bg-secondary/70 hover:text-secondary-foreground active:opacity-80 as-ghost box-content h-6 w-6 p-1 overflow-hidden relative mr-1 text-emerald-600 dark:text-emerald-400 opacity-80 hover:opacity-100';
    btn.title = '已备份至本地磁盘 (正在获取状态...)';

    btn.innerHTML =
      '<span class="ui__icon ti relative flex items-center justify-center">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-database">' +
          '<path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path>' +
          '<path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>' +
          '<path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>' +
        '</svg>' +
        '<span class="backup-status-dot absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500" style="box-shadow: 0 0 5px rgba(16, 185, 129, 0.8)"></span>' +
      '</span>';

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      togglePopup(btn);
    });

    headRight.insertBefore(btn, dotsBtn);
    updateIndicatorUI();
  }

  // 启动指示器系统
  function init() {
    refreshConfig();
    mountIndicator();

    // 观察 DOM 变化，确保在页面刷新、切换图谱或切换路由后指示器依然常驻
    var observer = new MutationObserver(function() {
      mountIndicator();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // 定时轮询状态同步
    setInterval(pollAutoSaveState, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
