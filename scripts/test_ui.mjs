import { chromium } from '../node_modules/playwright/index.mjs';

async function main() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('[CONSOLE]', msg.type(), msg.text()));
  page.on('pageerror', err => console.error('[PAGE ERROR]', err));

  await page.goto('http://127.0.0.1:4173', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(4000);

  // Click toolbar dots button
  console.log('Clicking toolbar dots button...');
  await page.click('.toolbar-dots-btn');
  await page.waitForTimeout(1000);

  // Click "导出图谱"
  console.log('Clicking "导出图谱"...');
  await page.click('text=导出图谱');
  await page.waitForTimeout(2000);

  const modalText = await page.evaluate(() => {
    const dialog = document.querySelector('.ui__modal-panel, .export, [role="dialog"], .modal-dialog');
    return dialog ? dialog.innerText : document.body.innerText;
  });

  console.log('--- MODAL / PAGE CONTENT ---');
  console.log(modalText);

  await browser.close();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
