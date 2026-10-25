import { chromium } from '../node_modules/playwright/index.mjs';

async function main() {
  console.log('=== Diagnose Popup Position & Error ===');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  const logs = [];
  page.on('console', msg => logs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => logs.push(`[PAGE_ERROR] ${err.message}`));

  await page.goto('http://127.0.0.1:4173');
  console.log('Waiting 10s for page to settle...');
  await page.waitForTimeout(10000);

  const diag = await page.evaluate(async () => {
    const btn = document.getElementById('backup-status-indicator-btn');
    const btnRect = btn ? btn.getBoundingClientRect() : null;
    const btnParent = btn ? {
      tag: btn.parentElement?.tagName,
      class: btn.parentElement?.className,
      id: btn.parentElement?.id,
      rect: btn.parentElement?.getBoundingClientRect()
    } : null;

    // Click the button
    if (btn) btn.click();
    await new Promise(r => setTimeout(r, 600));

    const popup = document.getElementById('logseq-backup-popup');
    const popupRect = popup ? popup.getBoundingClientRect() : null;
    const popupStyle = popup ? {
      top: popup.style.top,
      right: popup.style.right,
      left: popup.style.left,
      bottom: popup.style.bottom,
      width: popup.offsetWidth,
      height: popup.offsetHeight,
      cssText: popup.style.cssText
    } : null;

    const engState = window.logseqAutoSaveEngine ? window.logseqAutoSaveEngine.state : null;
    const currentRepo = window.frontend?.state?.get_current_repo ? window.frontend.state.get_current_repo() : null;

    return {
      windowSize: { width: window.innerWidth, height: window.innerHeight },
      btnRect,
      btnParent,
      popupRect,
      popupStyle,
      popupHtml: popup ? popup.outerHTML.substring(0, 300) : null,
      engState,
      currentRepo
    };
  });

  console.log('DIAGNOSTICS:', JSON.stringify(diag, null, 2));
  console.log('CONSOLE LOGS (last 20):');
  logs.slice(-20).forEach(l => console.log('  ', l));

  await page.screenshot({ path: './scripts/diagnose_screenshot.png' });
  console.log('Screenshot saved to ./scripts/diagnose_screenshot.png');

  // Now let's try calling executeSave to see what happens and what error is produced
  console.log('Testing executeSave explicitly...');
  const saveResult = await page.evaluate(async () => {
    try {
      await window.logseqAutoSaveEngine.executeSave(true);
      return { ok: true, state: window.logseqAutoSaveEngine.state };
    } catch (e) {
      return { ok: false, err: e.message || String(e), state: window.logseqAutoSaveEngine?.state };
    }
  });
  console.log('SAVE RESULT:', JSON.stringify(saveResult, null, 2));

  await browser.close();
}

main().catch(console.error);
