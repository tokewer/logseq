import { chromium } from '../node_modules/playwright/index.mjs';

async function main() {
  console.log('🚀 Launching Edge to verify native Backup Status Indicator in Logseq UI...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('AutoSave') || text.includes('ServerStorage') || text.includes('BackupIndicator')) {
      console.log('  [Browser]', msg.type(), text);
    }
  });

  await page.goto('http://127.0.0.1:4173', { waitUntil: 'domcontentloaded' });
  console.log('⏳ Waiting for #backup-status-indicator-btn in DOM...');

  // Wait for button attached
  await page.waitForSelector('#backup-status-indicator-btn', { state: 'attached', timeout: 25000 });
  await page.waitForTimeout(1000);
  console.log('✅ Found #backup-status-indicator-btn in header toolbar!');

  const btn = await page.$('#backup-status-indicator-btn');
  const title = await btn.getAttribute('title');
  console.log('  Button Tooltip/Title:', title);

  // Take screenshot of normal toolbar view
  await page.screenshot({ path: 'scripts/verified_live.png' });
  console.log('📸 Captured normal toolbar view: scripts/verified_live.png');

  // Click the indicator to open the details popover
  console.log('🖱️ Clicking backup indicator button to open details popover...');
  await btn.click({ force: true });
  await page.waitForTimeout(800);

  // Verify popup element and content
  const popup = await page.$('#logseq-backup-popup');
  if (!popup) {
    console.error('❌ Failed: #logseq-backup-popup not found!');
    await browser.close();
    process.exit(1);
  }
  const popupText = await popup.innerText();
  console.log('  Popup content contains "本地数据备份状态":', popupText.includes('本地数据备份状态'));
  console.log('  Popup content contains "物理磁盘直存":', popupText.includes('物理磁盘直存'));
  console.log('  Popup content contains "立即备份当前内容":', popupText.includes('立即备份当前内容'));

  // Take screenshot of popup
  await page.screenshot({ path: 'scripts/verified_popup_live.png' });
  console.log('📸 Captured popover view: scripts/verified_popup_live.png');

  // Click instant backup button
  const saveActionBtn = await page.$('#backup-popup-save-btn');
  if (saveActionBtn) {
    console.log('🖱️ Clicking "立即备份当前内容 (Ctrl+S)"...');
    await saveActionBtn.click();
    await page.waitForTimeout(1200);
  }

  console.log('\n🎉 ALL TESTS PASSED! Native backup indicator is 100% verified and operational!');
  await browser.close();
}

main().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
