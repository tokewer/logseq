import { chromium } from '../node_modules/playwright/index.mjs';
import fs from 'fs';
import path from 'path';

async function main() {
  console.log('=== Logseq Web Auto-Save & Hydration Engine End-to-End Test ===');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();

  const apiRequests = [];
  page.on('request', req => {
    if (req.url().includes('/api/storage')) {
      apiRequests.push({ url: req.url(), method: req.method() });
      console.log('  [API REQUEST]', req.method(), req.url());
    }
  });

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('AutoHydrate') || text.includes('AutoSave') || text.includes('SwitchGraph') || text.includes('Notification')) {
      console.log('  [BROWSER CONSOLE]', text);
    }
  });

  console.log('1. Navigating to http://127.0.0.1:4173 ...');
  await page.goto('http://127.0.0.1:4173');

  // Wait for worker and automatic hydration
  console.log('2. Waiting for Logseq worker initialization and auto-hydration (up to 12s)...');
  await page.waitForTimeout(10000);

  // Check state
  const stateCheck = await page.evaluate(() => {
    const eng = window.logseqAutoSaveEngine;
    return {
      hasEngine: !!eng,
      state: eng ? eng.state : null,
      currentRepo: window.frontend?.state?.get_current_repo ? window.frontend.state.get_current_repo() : null,
      domBlocksCount: document.querySelectorAll('.block-content').length,
      hasIndicatorBtn: !!document.getElementById('backup-status-indicator-btn')
    };
  });
  console.log('State check after startup:', JSON.stringify(stateCheck, null, 2));

  // If not hydrated yet, wait another 3s
  if (stateCheck.currentRepo !== '高三—') {
    console.log('Waiting for hydration to complete...');
    await page.waitForTimeout(4000);
  }

  const hydratedState = await page.evaluate(() => {
    return {
      repo: window.frontend?.state?.get_current_repo ? window.frontend.state.get_current_repo() : null,
      domBlocksCount: document.querySelectorAll('.block-content').length,
      indicatorBtnVisible: !!document.getElementById('backup-status-indicator-btn')
    };
  });
  console.log('Hydrated state:', hydratedState);

  // Test 3: Click indicator button to open popup
  console.log('3. Clicking backup indicator button to open popup...');
  await page.waitForSelector('#backup-status-indicator-btn', { timeout: 10000 });
  const btn = await page.$('#backup-status-indicator-btn');
  if (btn) {
    await btn.click();
    await page.waitForTimeout(1000);

    const popupInfo = await page.evaluate(() => {
      const p = document.getElementById('logseq-backup-popup');
      if (!p) return null;
      return {
        visible: true,
        text: p.innerText,
        repoSelectValue: p.querySelector('#backup-popup-repo-select')?.value
      };
    });
    console.log('Popup info:', popupInfo);

    await page.screenshot({ path: './scripts/verified_engine_popup.png' });
    console.log('Saved screenshot to ./scripts/verified_engine_popup.png');

    // Close popup by clicking button again
    await btn.click();
    await page.waitForTimeout(500);
  } else {
    console.warn('⚠️ Indicator button not found in DOM!');
  }

  // Test 4: Type into block and verify automatic debounced save
  console.log('4. Testing typing and automatic debounced save...');
  const block = await page.$('.block-content');
  if (block) {
    const saveReqsBefore = apiRequests.filter(r => r.url.includes('/api/storage/save')).length;
    console.log('Clicking block...');
    await block.click();
    await page.keyboard.type(' [自动保存测试：' + new Date().toLocaleTimeString() + '] ');
    console.log('Typed characters. Checking if marked dirty...');

    const dirtyCheck = await page.evaluate(() => {
      return {
        isDirty: window.logseqAutoSaveEngine?.state?.isDirty,
        status: window.logseqAutoSaveEngine?.state?.status
      };
    });
    console.log('Status immediately after typing:', dirtyCheck);

    console.log('Waiting 3.5s for debounced auto-save to execute...');
    await page.waitForTimeout(3500);

    const saveReqsAfter = apiRequests.filter(r => r.url.includes('/api/storage/save')).length;
    console.log(`Save API requests before: ${saveReqsBefore}, after: ${saveReqsAfter}`);

    const statusAfter = await page.evaluate(() => {
      return {
        status: window.logseqAutoSaveEngine?.state?.status,
        lastSavedTime: window.logseqAutoSaveEngine?.state?.lastSavedTime,
        lastSavedBytes: window.logseqAutoSaveEngine?.state?.lastSavedBytes
      };
    });
    console.log('Status after debounced auto-save:', statusAfter);
  }

  // Test 5: Verify disk db.sqlite modification time
  const dbPath = 'F:\\新学习资料分站\\数据\\随笔便签\\高三—\\db.sqlite';
  if (fs.existsSync(dbPath)) {
    const stat = fs.statSync(dbPath);
    console.log(`5. Disk verification: ${dbPath}`);
    console.log(`   File size: ${stat.size} bytes`);
    console.log(`   Last modified: ${stat.mtime}`);
  }

  // Test 6: Verify GITHUB_SYNC_LOG.md
  const syncLogPath = './GITHUB_SYNC_LOG.md';
  if (fs.existsSync(syncLogPath)) {
    const logContent = fs.readFileSync(syncLogPath, 'utf-8');
    const recentLines = logContent.split('\n').filter(Boolean).slice(-3);
    console.log('6. Recent lines in GITHUB_SYNC_LOG.md:');
    recentLines.forEach(l => console.log('   ' + l));
  }

  console.log('=== All Engine Tests Finished ===');
  await browser.close();
}

main().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
