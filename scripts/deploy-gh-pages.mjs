import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import os from 'os'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const staticDir = path.join(rootDir, 'static')
const indexHtml = path.join(staticDir, 'index.html')
const mainJs = path.join(staticDir, 'js', 'main.js')

if (!fs.existsSync(indexHtml) || !fs.existsSync(mainJs)) {
  console.error('❌ Web 构建产物不完整，未找到 index.html 或 js/main.js！')
  process.exit(1)
}

function run(cmd, cwd) {
  return execSync(cmd, { cwd, stdio: 'inherit' })
}

function copyRecursive(src, dest, options = {}) {
  const { excludeDirs = [], excludeFiles = [], excludeExts = [] } = options
  fs.mkdirSync(dest, { recursive: true })

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      if (excludeDirs.includes(entry.name)) continue
      copyRecursive(srcPath, destPath, options)
    } else if (entry.isFile()) {
      if (excludeFiles.includes(entry.name)) continue
      if (excludeExts.some(ext => entry.name.endsWith(ext))) continue
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

const tempDir = path.join(os.tmpdir(), 'logseq_gh_pages_' + Date.now())
console.log('========================================================')
console.log('🚀 开始打包并部署至 GitHub Pages (gh-pages 分支)...')
console.log(`📂 临时目录: ${tempDir}`)
console.log('========================================================\n')

try {
  // 1. 完整复制 static 下的前端文件，排除桌面端二进制与调试 map
  console.log('📦 正在复制静态资产...')
  copyRecursive(staticDir, tempDir, {
    excludeDirs: ['node_modules', '.git', 'mobile', 'android', 'ios'],
    excludeFiles: [
      'electron.js',
      'db-worker-node.js',
      'tests.js',
      'tests-no-worker.js',
      'package.json',
      'pnpm-lock.yaml',
      'electron-builder.yml',
      'forge.config.test.js',
      'entitlements.plist'
    ],
    excludeExts: ['.map']
  })

  // 2. 创建 .nojekyll 防止 GitHub Pages 忽略特定文件夹
  fs.writeFileSync(path.join(tempDir, '.nojekyll'), '', 'utf-8')

  // 3. 配置 SPA 路由回退 (404.html 和 index.html)
  const p404 = path.join(tempDir, '404.html')
  if (fs.existsSync(p404)) {
    let content404 = fs.readFileSync(p404, 'utf-8')
    content404 = content404.replace(
      'var segmentCount = 0;',
      'var segmentCount = (window.location.pathname.indexOf("/logseq") === 0) ? 1 : 0;'
    )
    fs.writeFileSync(p404, content404, 'utf-8')
  }

  const pIndex = path.join(tempDir, 'index.html')
  let contentIndex = fs.readFileSync(pIndex, 'utf-8')
  const spaScript = `  <!-- Start Single Page Apps for GitHub Pages -->
  <script type="text/javascript">
    (function(l) {
      if (l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) { 
          return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, null,
            l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    }(window.location))
  </script>
  <!-- End Single Page Apps for GitHub Pages -->
</head>`

  if (!contentIndex.includes('Single Page Apps for GitHub Pages')) {
    contentIndex = contentIndex.replace('</head>', spaScript)
    fs.writeFileSync(pIndex, contentIndex, 'utf-8')
  }

  // 4. 统计拷贝后的关键目录
  const jsCount = fs.existsSync(path.join(tempDir, 'js')) ? fs.readdirSync(path.join(tempDir, 'js')).length : 0
  const cssCount = fs.existsSync(path.join(tempDir, 'css')) ? fs.readdirSync(path.join(tempDir, 'css')).length : 0
  console.log(`✅ 静态文件准备就绪: js文件数=${jsCount}, css文件数=${cssCount}`)

  // 5. 获取远程 origin 地址
  const originUrl = execSync('git remote get-url origin', { cwd: rootDir, encoding: 'utf-8' }).trim()

  // 6. 初始化并强制推送到 gh-pages
  console.log(`🚀 正在推送到 ${originUrl} 的 gh-pages 分支...`)
  run('git init -q', tempDir)
  run('git checkout -b gh-pages -q', tempDir)
  run(`git remote add origin ${originUrl}`, tempDir)
  run('git add -A', tempDir)
  run('git commit -m "Deploy Logseq Web clean build to GitHub Pages" -q', tempDir)
  run('git push origin gh-pages --force', tempDir)

  console.log('\n========================================================')
  console.log('🎉 GitHub Pages 部署成功！')
  console.log('🌐 在线访问地址: https://tokewer.github.io/logseq/')
  console.log('========================================================\n')
} finally {
  try {
    fs.rmSync(tempDir, { recursive: true, force: true })
  } catch (e) {}
}
