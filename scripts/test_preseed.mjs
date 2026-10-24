import { chromium } from '../node_modules/playwright/index.mjs';

async function main() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4173');
  await page.evaluate(() => {
    localStorage.setItem('current-repo', JSON.stringify('高三'));
    localStorage.setItem('logseq_preferred_graph', '高三');
  });
  console.log('Reloading page with 高三 in localStorage...');
  await page.reload();
  await page.waitForTimeout(6000);

  const info = await page.evaluate(() => {
    return {
      repo: window.frontend?.state?.get_current_repo ? window.frontend.state.get_current_repo() : null,
      lsCurrentRepo: localStorage.getItem('current-repo'),
      blocks: document.querySelectorAll('.block-content').length,
      pageText: document.body?.innerText?.substring(0, 300)
    };
  });
  console.log('STARTUP WITH 高三 IN LOCALSTORAGE:', info);
  await browser.close();
}

main().catch(console.error);
