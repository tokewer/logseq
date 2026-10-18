import { chromium } from '../node_modules/playwright/index.mjs';

async function main() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('[CONSOLE]', msg.type(), msg.text()));
  page.on('pageerror', err => console.error('[PAGE ERROR]', err));

  await page.goto('http://127.0.0.1:4173', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(4000);

  // Let's inspect what happens in page context
  const evalResult = await page.evaluate(async () => {
    try {
      // Find repo
      const repo = window.frontend?.state?.get_current_repo ? window.frontend.state.get_current_repo() : null;
      console.log('Current repo:', repo);
      return { repo };
    } catch (e) {
      return { error: e.toString() };
    }
  });

  console.log('Eval result:', evalResult);

  await browser.close();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
