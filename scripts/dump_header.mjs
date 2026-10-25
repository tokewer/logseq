import { chromium } from '../node_modules/playwright/index.mjs';

async function main() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto('http://127.0.0.1:4173');
  await page.waitForTimeout(6000);

  const headerStructure = await page.evaluate(() => {
    const head = document.getElementById('head') || document.querySelector('.cp__header');
    if (!head) return 'No header found';

    function dumpNode(node, depth = 0) {
      if (depth > 4) return null;
      const res = {
        tag: node.tagName,
        id: node.id,
        className: node.className,
        rect: {
          left: Math.round(node.getBoundingClientRect().left),
          right: Math.round(node.getBoundingClientRect().right),
          width: Math.round(node.getBoundingClientRect().width)
        }
      };
      if (node.children && node.children.length > 0) {
        res.children = Array.from(node.children).map(c => dumpNode(c, depth + 1));
      }
      return res;
    }

    return dumpNode(head);
  });

  console.log('HEADER STRUCTURE:', JSON.stringify(headerStructure, null, 2));
  await browser.close();
}

main().catch(console.error);
