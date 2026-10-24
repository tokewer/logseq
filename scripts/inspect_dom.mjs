import { chromium } from '../node_modules/playwright/index.mjs';

async function main() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  const consoleLogs = [];
  page.on('console', msg => consoleLogs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => consoleLogs.push(`[PAGE_ERROR] ${err.message}`));

  await page.goto('http://127.0.0.1:4173');
  console.log('Waiting 10s...');
  await page.waitForTimeout(10000);

  const dump = await page.evaluate(() => {
    return {
      rootHtml: document.getElementById('root')?.innerHTML?.substring(0, 1000),
      bodyText: document.body?.innerText?.substring(0, 500)
    };
  });
  console.log('CONSOLE LOGS:', consoleLogs.slice(-20));
  console.log('PAGE DUMP:', dump);
  await browser.close();
}

main().catch(console.error);
