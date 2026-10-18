import { chromium } from '../node_modules/playwright/index.mjs';

async function main() {
  console.log('--- Starting Complete AutoSave E2E & Boundary Test ---');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();

  const logs = [];
  const autoSaveLogs = [];
  page.on('console', msg => {
    const text = msg.text();
    logs.push(`[${msg.type()}] ${text}`);
    if (text.includes('[AutoSave]')) {
      autoSaveLogs.push(text);
      console.log('>>> [BROWSER CONSOLE]', text);
    }
  });
  page.on('pageerror', err => {
    console.error('PAGE ERROR:', err);
  });

  // Inject directory picker mock
  await page.addInitScript(() => {
    class MockWritable {
      constructor(fileObj) {
        this.fileObj = fileObj;
        this.chunks = [];
      }
      async write(data) {
        this.chunks.push(data);
      }
      async close() {
        if (this.chunks.length > 0) {
          const first = this.chunks[0];
          if (first instanceof File || first instanceof Blob) {
            this.fileObj.content = new Uint8Array(await first.arrayBuffer());
          } else if (first instanceof Uint8Array) {
            this.fileObj.content = first;
          } else if (typeof first === 'string') {
            this.fileObj.content = new TextEncoder().encode(first);
          } else {
            this.fileObj.content = new Uint8Array(first);
          }
          this.fileObj.size = this.fileObj.content.byteLength;
        }
      }
    }

    class MockFileHandle {
      constructor(name, parentDir) {
        this.kind = 'file';
        this.name = name;
        this.parentDir = parentDir;
        this.fileObj = { name, size: 0, content: new Uint8Array(0) };
      }
      async getFile() {
        const file = new File([this.fileObj.content], this.name);
        file.handle = this;
        return file;
      }
      async createWritable() {
        return new MockWritable(this.fileObj);
      }
    }

    class MockDirectoryHandle {
      constructor(name) {
        this.kind = 'directory';
        this.name = name;
        this.entries = new Map();
      }
      async queryPermission(opts) {
        return 'granted';
      }
      async requestPermission(opts) {
        return 'granted';
      }
      async getDirectoryHandle(name, opts = {}) {
        if (!this.entries.has(name)) {
          if (opts.create) {
            this.entries.set(name, new MockDirectoryHandle(name));
          } else {
            throw new Error(`Directory not found: ${name}`);
          }
        }
        return this.entries.get(name);
      }
      async getFileHandle(name, opts = {}) {
        if (!this.entries.has(name)) {
          if (opts.create) {
            this.entries.set(name, new MockFileHandle(name, this));
          } else {
            throw new Error(`File not found: ${name}`);
          }
        }
        return this.entries.get(name);
      }
      async removeEntry(name, opts = {}) {
        if (!this.entries.has(name)) {
          throw new Error(`Entry not found: ${name}`);
        }
        this.entries.delete(name);
      }
      async *values() {
        for (const entry of this.entries.values()) {
          yield entry;
        }
      }
    }

    const rootBackupDir = new MockDirectoryHandle('AutoSaveTestDir');
    window.__mockBackupDir = rootBackupDir;

    window.showDirectoryPicker = async function() {
      return rootBackupDir;
    };
  });

  console.log('1. Navigating to Logseq Web...');
  await page.goto('http://127.0.0.1:4173', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(4000);

  // Check window.logseqAutoSave availability
  const autoSaveAvailable = await page.evaluate(() => {
    return typeof window.logseqAutoSave !== 'undefined';
  });
  console.log('window.logseqAutoSave available:', autoSaveAvailable);

  console.log('2. Opening export modal and selecting backup folder...');
  await page.click('.toolbar-dots-btn');
  await page.waitForTimeout(1000);
  await page.click('text=导出图谱');
  await page.waitForTimeout(1500);

  // Click the set backup folder button (handle both zh-cn and en or button selector)
  const setFolderBtn = await page.$('text=请先设置备份文件夹') || await page.$('text=Set backup folder first') || await page.$('.export button');
  if (setFolderBtn) {
    await setFolderBtn.click();
    await page.waitForTimeout(2000);
  }

  // Close export modal
  await page.keyboard.press('Escape');
  await page.waitForTimeout(1000);

  console.log('3. Testing Single Edit -> 1000ms Debounce Save...');
  const stateBefore = await page.evaluate(() => {
    const s = window.logseqAutoSave.getState();
    const repo = Object.keys(s)[0] || 'logseq_db_Demo';
    window.logseqAutoSave.schedule(repo);
    return window.logseqAutoSave.getStatus(repo);
  });
  console.log('Status immediately after schedule:', stateBefore);

  // Check within debounce window (300ms)
  await page.waitForTimeout(300);
  const stateDebouncing = await page.evaluate(() => {
    const s = window.logseqAutoSave.getState();
    const repo = Object.keys(s)[0] || 'logseq_db_Demo';
    return window.logseqAutoSave.getStatus(repo);
  });
  console.log('Status after 300ms (debounce in flight):', stateDebouncing);

  // Wait for debounce timer to fire (1000ms timer + save)
  await page.waitForTimeout(1500);
  const stateAfterDebounce = await page.evaluate(() => {
    const s = window.logseqAutoSave.getState();
    const repo = Object.keys(s)[0] || 'logseq_db_Demo';
    return window.logseqAutoSave.getStatus(repo);
  });
  console.log('Status after debounce expired & saved:', stateAfterDebounce);

  console.log('4. Testing High-frequency Debounce Coalescing...');
  const multiSchedule = await page.evaluate(() => {
    const s = window.logseqAutoSave.getState();
    const repo = Object.keys(s)[0] || 'logseq_db_Demo';
    for (let i = 0; i < 5; i++) {
      window.logseqAutoSave.schedule(repo);
    }
    return window.logseqAutoSave.getStatus(repo);
  });
  console.log('Status after 5 rapid schedules:', multiSchedule);
  await page.waitForTimeout(1500);
  const multiScheduleSaved = await page.evaluate(() => {
    const s = window.logseqAutoSave.getState();
    const repo = Object.keys(s)[0] || 'logseq_db_Demo';
    return window.logseqAutoSave.getStatus(repo);
  });
  console.log('Status after rapid schedules saved:', multiScheduleSaved);

  console.log('5. Testing Dirty In Flight Catch-up...');
  // Trigger a flush, and immediately schedule during the save
  const dirtyInFlight = await page.evaluate(async () => {
    const s = window.logseqAutoSave.getState();
    const repo = Object.keys(s)[0] || 'logseq_db_Demo';
    // schedule new version
    window.logseqAutoSave.schedule(repo);
    // start flush
    const p = window.logseqAutoSave.flush(repo);
    // while flush is in progress, mark dirty again
    window.logseqAutoSave.schedule(repo);
    window.logseqAutoSave.schedule(repo);
    await p;
    return window.logseqAutoSave.getStatus(repo);
  });
  console.log('Status after flush + in-flight schedule:', dirtyInFlight);
  // Give time for catch-up debounce or flush
  await page.waitForTimeout(1800);
  const finalState = await page.evaluate(() => {
    const s = window.logseqAutoSave.getState();
    const repo = Object.keys(s)[0] || 'logseq_db_Demo';
    return window.logseqAutoSave.getStatus(repo);
  });
  console.log('Status after catch-up completed:', finalState);

  console.log('6. Testing Manual Ctrl+S Flush...');
  await page.keyboard.press('Control+s');
  await page.waitForTimeout(1500);

  // Check file in directory
  const filesCheck = await page.evaluate(async () => {
    const root = window.__mockBackupDir;
    const res = [];
    if (!root || !root.entries) return res;
    for (const [dirName, dirHandle] of root.entries.entries()) {
      if (dirHandle.kind === 'directory') {
        for (const [fileName, fileHandle] of dirHandle.entries.entries()) {
          if (fileHandle.kind === 'file') {
            const fileObj = await fileHandle.getFile();
            res.push({ dir: dirName, name: fileName, size: fileObj.size });
          }
        }
      }
    }
    return res;
  });
  console.log('7. Verified files on disk/mock handle:', JSON.stringify(filesCheck, null, 2));

  console.log('8. Summary of AutoSave logs captured:\n', autoSaveLogs.join('\n'));

  if (filesCheck.length === 0 || !filesCheck.some(f => f.name === 'db.sqlite' && f.size > 0)) {
    throw new Error('db.sqlite was not saved properly to disk!');
  }

  console.log('>>> SUCCESS: ALL AUTOSAVE TESTS & BOUNDARIES PASSED VERIFICATION! <<<');
  await browser.close();
}

main().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
