import { chromium } from '../node_modules/playwright/index.mjs';
import fs from 'fs';
import path from 'path';

async function main() {
  console.log('=== Logseq Web Auto-Save v2.3.0 Verification ===');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const apiCalls = [];
  page.on('request', req => {
    if (req.url().includes('/api/storage')) {
      apiCalls.push({ method: req.method(), url: req.url() });
      console.log('  [HTTP]', req.method(), req.url());
    }
  });

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('AutoHydrate') || text.includes('AutoSave') || text.includes('ServerStorage') || text.includes('Notification')) {
      console.log('  [CONSOLE]', text);
    }
  });

  console.log('1. Loading http://127.0.0.1:4173 ...');
  await page.goto('http://127.0.0.1:4173');

  console.log('2. Waiting for worker and auto-hydration (10s)...');
  await page.waitForTimeout(10000);

  // Check state after hydration
  const stateInfo = await page.evaluate(() => {
    const eng = window.logseqAutoSaveEngine;
    return {
      enginePresent: !!eng,
      state: eng ? eng.state : null,
      currentRepo: window.frontend?.state?.get_current_repo ? window.frontend.state.get_current_repo() : null,
      blocksCount: document.querySelectorAll('.block-content').length,
      hasIndicator: !!document.getElementById('backup-status-indicator-btn')
    };
  });
  console.log('State info:', JSON.stringify(stateInfo, null, 2));

  // If not hydrated yet, wait another 4s
  if (!stateInfo.state?.hydrated) {
    console.log('Waiting 4s more for hydration...');
    await page.waitForTimeout(4000);
  }

  // Check indicator button in DOM
  console.log('3. Checking indicator button and popup...');
  const btn = await page.$('#backup-status-indicator-btn');
  if (btn) {
    console.log('Indicator button is found in DOM! Clicking to open popup...');
    await btn.click();
    await page.waitForTimeout(600);

    const popupData = await page.evaluate(() => {
      const p = document.getElementById('logseq-backup-popup');
      if (!p) return null;
      return {
        badge: p.querySelector('.backup-popup-badge')?.innerText,
        repoSelectValue: p.querySelector('#backup-popup-repo-select')?.value,
        allOptions: Array.from(p.querySelectorAll('#backup-popup-repo-select option')).map(o => o.value),
        pathText: p.querySelector('.backup-popup-path')?.innerText,
        sizeText: p.querySelector('.backup-popup-size')?.innerText,
        timeText: p.querySelector('.backup-popup-time')?.innerText
      };
    });
    console.log('Popup UI details:', JSON.stringify(popupData, null, 2));

    await page.screenshot({ path: './scripts/verified_v230_popup.png' });
    console.log('Saved popup screenshot to ./scripts/verified_v230_popup.png');

    // Close popup
    await btn.click();
    await page.waitForTimeout(400);
  } else {
    console.warn('⚠️ Indicator button not yet visible, checking why...');
  }

  // 4. Test typing and automatic save
  console.log('4. Testing typing and auto-save...');
  const block = await page.$('.block-content');
  if (block) {
    console.log('Found block, clicking to edit...');
    await block.click();
    const testTag = ' [自动测试保存验证 ' + new Date().toLocaleTimeString() + ']';
    await page.keyboard.type(testTag);
    console.log('Typed:', testTag);

    console.log('Waiting 3.5s for debounced save to complete...');
    await page.waitForTimeout(3500);

    const afterSave = await page.evaluate(() => {
      const eng = window.logseqAutoSaveEngine;
      return {
        status: eng?.state?.status,
        lastSavedTime: eng?.state?.lastSavedTime,
        lastSavedBytes: eng?.state?.lastSavedBytes,
        targetPath: eng?.state?.targetPath,
        errorMsg: eng?.state?.errorMsg,
        isDirty: eng?.state?.isDirty
      };
    });
    console.log('After save state:', afterSave);
  } else {
    console.log('Testing manual executeSave via engine...');
    const saveRes = await page.evaluate(async () => {
      try {
        await window.logseqAutoSaveEngine.executeSave(true);
        return { ok: true, state: window.logseqAutoSaveEngine.state };
      } catch (e) {
        return { ok: false, err: e.message || String(e) };
      }
    });
    console.log('Manual save result:', saveRes);
  }

  await browser.close();
  console.log('=== Test finished ===');
}

main().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
