import { chromium } from '../node_modules/playwright/index.mjs';

async function main() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();

  const logs = [];
  const errors = [];
  page.on('console', msg => {
    const text = msg.text();
    logs.push(`[${msg.type()}] ${text}`);
    if (msg.type() === 'error') {
      errors.push(text);
    }
  });
  page.on('pageerror', err => {
    errors.push(err.toString());
  });

  // Inject directory picker mock before loading page so showDirectoryPicker is mocked
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
        const content = this.fileObj.content;
        const file = new File([content], this.name);
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

    const rootBackupDir = new MockDirectoryHandle('MyWebBackups');
    window.__mockBackupDir = rootBackupDir;

    window.showDirectoryPicker = async function() {
      return rootBackupDir;
    };
  });

  console.log('Navigating to Logseq Web...');
  await page.goto('http://127.0.0.1:4173', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(4000);

  console.log('Opening export modal...');
  await page.click('.toolbar-dots-btn');
  await page.waitForTimeout(1000);
  await page.click('text=导出图谱');
  await page.waitForTimeout(1500);

  console.log('Verifying initial state of export modal...');
  let modalText = await page.locator('.export').innerText();
  console.log('Modal text before setting folder:\n', modalText);
  if (!modalText.includes('请先设置备份文件夹')) {
    throw new Error('Expected "请先设置备份文件夹" button before setting backup folder');
  }

  console.log('Clicking "请先设置备份文件夹"...');
  await page.click('text=请先设置备份文件夹');
  await page.waitForTimeout(2000);

  modalText = await page.locator('.export').innerText();
  console.log('Modal text after setting folder:\n', modalText);

  if (!modalText.includes('MyWebBackups')) {
    throw new Error('Expected backup folder name "MyWebBackups" to be displayed');
  }
  if (!modalText.includes('立即备份')) {
    throw new Error('Expected "立即备份" button to appear after setting backup folder');
  }

  // Inspect the mock directory contents in browser
  const dirContents = await page.evaluate(async () => {
    const root = window.__mockBackupDir;
    const result = { rootDirs: [], files: [], backupFiles: [] };
    for await (const entry of root.values()) {
      if (entry.kind === 'directory') {
        result.rootDirs.push(entry.name);
        for await (const subEntry of entry.values()) {
          if (subEntry.kind === 'file') {
            const f = await subEntry.getFile();
            result.files.push({ name: subEntry.name, size: f.size });
          } else if (subEntry.kind === 'directory') {
            for await (const backupEntry of subEntry.values()) {
              const f = await backupEntry.getFile();
              result.backupFiles.push({ name: backupEntry.name, size: f.size });
            }
          }
        }
      }
    }
    return result;
  });

  console.log('Directory contents after initial backup:', JSON.stringify(dirContents, null, 2));
  if (dirContents.files.length === 0 || !dirContents.files.some(f => f.name === 'db.sqlite' && f.size > 0)) {
    throw new Error('Expected db.sqlite with size > 0 in backup directory!');
  }

  console.log('Clicking "立即备份" (should detect unchanged)...');
  await page.click('text=立即备份');
  await page.waitForTimeout(2000);

  // Check notification
  const notifications = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.ui__notification, .notification, .alert')).map(el => el.innerText);
  });
  console.log('Notifications:', notifications);

  console.log('Testing Cancel button (x)...');
  const buttonsInfo = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.export button')).map(b => ({
      text: b.innerText,
      html: b.outerHTML
    }));
  });
  console.log('Buttons in .export:', buttonsInfo);

  // The cancel button contains the "x" icon, which is usually an svg or ui/icon
  // Or it's the button right next to folder name
  const cancelBtn = page.locator('.export .flex-row button').first();
  await cancelBtn.click();
  await page.waitForTimeout(1500);

  modalText = await page.locator('.export').innerText();
  console.log('Modal text after cancel:\n', modalText);
  if (!modalText.includes('请先设置备份文件夹')) {
    throw new Error('Expected "请先设置备份文件夹" button after canceling');
  }

  console.log('Errors logged:', errors);
  if (errors.length > 0) {
    throw new Error(`Unexpected errors during test: ${errors.join('; ')}`);
  }

  console.log('TEST PASSED SUCCESSFULLY!');
  await browser.close();
}

main().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
