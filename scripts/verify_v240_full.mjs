import { chromium } from '../node_modules/playwright/index.mjs';
import fs from 'fs';
import path from 'path';

async function testResolution(width, height) {
  console.log(`\n--- Testing Resolution ${width}x${height} ---`);
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext({ viewport: { width, height } });
  const page = await context.newPage();

  await page.goto('http://127.0.0.1:4173');
  await page.waitForTimeout(6000);

  // Check button
  const btn = await page.waitForSelector('#backup-status-indicator-btn', { timeout: 15000 });
  const btnRect = await btn.boundingBox();
  console.log(`Button Position: x=${btnRect.x}, y=${btnRect.y}, width=${btnRect.width}, height=${btnRect.height}`);

  if (btnRect.x < width - 300) {
    throw new Error(`Button is too far left: x=${btnRect.x}, expected > ${width - 300}`);
  }

  // Click button to open popup
  await btn.click();
  await page.waitForTimeout(600);

  // Check popup
  const popup = await page.$('#logseq-backup-popup');
  if (!popup) throw new Error('#logseq-backup-popup not found');

  const popupRect = await popup.boundingBox();
  console.log(`Popup Position: x=${popupRect.x}, y=${popupRect.y}, width=${popupRect.width}, height=${popupRect.height}, right=${popupRect.x + popupRect.width}`);

  // Viewport bounds check:
  if (popupRect.x < 12) {
    throw new Error(`Popup left bound exceeded: x=${popupRect.x} < 12`);
  }
  if (popupRect.x + popupRect.width > width) {
    throw new Error(`Popup right bound exceeded: right=${popupRect.x + popupRect.width} > ${width}`);
  }
  if (popupRect.y < 30) {
    throw new Error(`Popup top bound exceeded: y=${popupRect.y} < 30`);
  }
  if (popupRect.y + popupRect.height > height) {
    throw new Error(`Popup bottom bound exceeded: bottom=${popupRect.y + popupRect.height} > ${height}`);
  }

  const popupText = await popup.innerText();
  console.log('Popup snippet:\n', popupText.split('\n').slice(0, 8).join('\n'));

  // Ensure "logseq_db_" prefix does not appear in user-facing text
  if (popupText.includes('logseq_db_高三')) {
    throw new Error('Unwanted internal prefix "logseq_db_高三" found in popup!');
  }

  // Ensure "持久化异常" is NOT present
  if (popupText.includes('持久化异常')) {
    throw new Error('Unexpected "持久化异常" displayed in popup!');
  }

  const screenshotPath = `./scripts/popup_verified_${width}x${height}.png`;
  await page.screenshot({ path: screenshotPath });
  console.log(`Screenshot saved to ${screenshotPath}`);

  await browser.close();
}

async function main() {
  console.log('=== Running v2.4.0 Full Positioning & Persistence Verification ===');
  await testResolution(1280, 800);
  await testResolution(1920, 1080);
  await testResolution(1024, 768);
  console.log('\n========================================');
  console.log('🎉 ALL RESOLUTIONS AND BOUNDS VERIFIED SUCCESSFULLY!');
  console.log('========================================');
}

main().catch(err => {
  console.error('❌ Verification failed:', err);
  process.exit(1);
});
