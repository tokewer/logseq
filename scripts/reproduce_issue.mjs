import { chromium } from '../node_modules/playwright/index.mjs';

async function main() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:4173');
  console.log('Waiting 8s for startup and hydration...');
  await page.waitForTimeout(8000);

  const result = await page.evaluate(async () => {
    const cur = window.frontend?.state?.get_current_repo ? window.frontend.state.get_current_repo() : null;
    const kwExport = window.cljs?.core?.keyword('thread-api/export-db-binary');
    let exportWithCur = null;
    let exportClean = null;
    let exportWithPrefix = null;

    if (cur) {
      try {
        const b1 = await window.frontend.state._LT_invoke_db_worker(kwExport, cur);
        exportWithCur = { ok: true, len: b1?.byteLength };
      } catch (e) {
        exportWithCur = { ok: false, err: e.message || String(e) };
      }

      const clean = cur.replace(/^logseq_db_/, '');
      try {
        const b2 = await window.frontend.state._LT_invoke_db_worker(kwExport, clean);
        exportClean = { ok: true, len: b2?.byteLength };
      } catch (e) {
        exportClean = { ok: false, err: e.message || String(e) };
      }

      const prefixed = 'logseq_db_' + clean;
      try {
        const b3 = await window.frontend.state._LT_invoke_db_worker(kwExport, prefixed);
        exportWithPrefix = { ok: true, len: b3?.byteLength };
      } catch (e) {
        exportWithPrefix = { ok: false, err: e.message || String(e) };
      }
    }

    const autoSaveState = window.logseqAutoSaveEngine ? window.logseqAutoSaveEngine.state : null;

    return { cur, exportWithCur, exportClean, exportWithPrefix, autoSaveState };
  });

  console.log('REPRODUCE RESULT:', JSON.stringify(result, null, 2));
  await browser.close();
}

main().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
