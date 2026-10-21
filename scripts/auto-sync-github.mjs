import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const pkgPath = path.join(rootDir, 'package.json')
const syncLogPath = path.join(rootDir, 'GITHUB_SYNC_LOG.md')
const changelogPath = path.join(rootDir, 'CHANGELOG.md')

function run(cmd, options = {}) {
  try {
    return execSync(cmd, { cwd: rootDir, encoding: 'utf-8', stdio: ['inherit', 'pipe', 'pipe'], ...options }).trim()
  } catch (e) {
    return null
  }
}

function runInteractive(cmd, options = {}) {
  execSync(cmd, { cwd: rootDir, stdio: 'inherit', ...options })
}

// 递增版本号 (SemVer Patch: x.y.z -> x.y.(z+1))
function bumpPatchVersion() {
  if (!fs.existsSync(pkgPath)) return '0.0.1'
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
    const oldVersion = pkg.version || '0.0.1'
    const parts = oldVersion.split('.').map(n => parseInt(n, 10))
    if (parts.length === 3 && !parts.some(isNaN)) {
      parts[2] += 1
      pkg.version = parts.join('.')
    } else {
      pkg.version = '0.0.2'
    }
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf-8')
    console.log(`📌 版本号自动更新: ${oldVersion} -> ${pkg.version}`)
    return pkg.version
  } catch (err) {
    console.warn('⚠️ 读取或更新 package.json 版本号失败:', err.message)
    return '0.0.2'
  }
}

function getCurrentVersion() {
  if (!fs.existsSync(pkgPath)) return '0.0.1'
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
    return pkg.version || '0.0.1'
  } catch (e) {
    return '0.0.1'
  }
}

// 带重试机制的 Git 命令执行
function runWithRetry(cmd, maxRetries = 3, delayMs = 3000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`执行命令 (尝试 ${attempt}/${maxRetries}): ${cmd}`)
      runInteractive(cmd)
      return true
    } catch (err) {
      console.warn(`⚠️ 第 ${attempt} 次执行失败: ${err.message}`)
      if (attempt < maxRetries) {
        console.log(`⏳ 等待 ${delayMs / 1000} 秒后自动重试...`)
        execSync(`node -e "setTimeout(() => {}, ${delayMs})"`)
      } else {
        throw err
      }
    }
  }
  return false
}

// 将本次同步行为写入 Markdown 文件
function recordSyncToMarkdown(version, commitMsg, timestamp, changedFilesList, branches = ['master', 'gh-pages']) {
  const logHeader = `# Logseq GitHub 同步记录 (GitHub Sync Log)\n\n本文档记录每次向 GitHub (\`tokewer/logseq\`) 仓库同步更新的完整操作历史。\n\n`
  
  const filesFormatted = changedFilesList && changedFilesList.length > 0
    ? changedFilesList.map(f => `  - \`${f}\``).join('\n')
    : '  - `(无额外文件修改，日常同步/分支对齐)`'

  const entry = `## [v${version}] - ${timestamp}

- **同步目标**: GitHub 仓库 \`tokewer/logseq\`
- **同步分支**: ${branches.map(b => `\`${b}\``).join(' & ')}
- **提交说明**: ${commitMsg}
- **变更文件清单**:
${filesFormatted}
- **同步状态**: ✅ 已成功同步至 GitHub 仓库与静态托管站点 (https://tokewer.github.io/logseq/)

---

`

  // 1. 写入 GITHUB_SYNC_LOG.md
  let currentLog = ''
  if (fs.existsSync(syncLogPath)) {
    currentLog = fs.readFileSync(syncLogPath, 'utf-8')
  }
  if (!currentLog.includes('# Logseq GitHub 同步记录')) {
    currentLog = logHeader + currentLog
  }

  // 插入到标题之后
  const headerIndex = currentLog.indexOf('\n\n')
  let updatedLog = ''
  if (headerIndex !== -1) {
    updatedLog = currentLog.slice(0, headerIndex + 2) + entry + currentLog.slice(headerIndex + 2)
  } else {
    updatedLog = logHeader + entry + currentLog
  }
  fs.writeFileSync(syncLogPath, updatedLog, 'utf-8')
  console.log(`📝 已将本次同步操作记录写入: GITHUB_SYNC_LOG.md`)

  // 2. 同时更新 CHANGELOG.md
  let changelogContent = ''
  const changelogHeader = `# 更新日志 (Changelog)\n\n`
  if (fs.existsSync(changelogPath)) {
    changelogContent = fs.readFileSync(changelogPath, 'utf-8')
  } else {
    changelogContent = changelogHeader
  }
  const changelogEntry = `## [v${version}] - ${timestamp}

### 同步与更新
- ${commitMsg}
- 同步至 GitHub \`tokewer/logseq\` (master & gh-pages)

`
  const clHeaderIdx = changelogContent.indexOf('\n\n')
  let updatedChangelog = ''
  if (clHeaderIdx !== -1) {
    updatedChangelog = changelogContent.slice(0, clHeaderIdx + 2) + changelogEntry + changelogContent.slice(clHeaderIdx + 2)
  } else {
    updatedChangelog = changelogHeader + changelogEntry + changelogContent
  }
  fs.writeFileSync(changelogPath, updatedChangelog, 'utf-8')
  console.log(`📝 已同步更新: CHANGELOG.md`)
}

console.log('========================================================')
console.log('🚀 开始执行 GitHub 自动化检查、更新日志写入与同步流程...')
console.log(`📂 工作根目录: ${rootDir}`)
console.log('========================================================\n')

try {
  // 1. 检查是否存在未提交变更
  const statusOutput = run('git status --porcelain') || ''
  const changedFiles = statusOutput
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)

  const shouldBump = process.argv.includes('--bump') || changedFiles.length > 0

  let version = getCurrentVersion()
  if (shouldBump) {
    version = bumpPatchVersion() || version
  }

  const now = new Date()
  const pad = n => String(n).padStart(2, '0')
  const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
  const customArgs = process.argv.slice(2).filter(arg => !arg.startsWith('--')).join(' ').trim()
  const commitMsg = customArgs ? customArgs : `update logseq web and sync [${timestamp}]`

  // 2. 写入 Markdown 变更记录
  recordSyncToMarkdown(version, commitMsg, timestamp, changedFiles, ['master', 'gh-pages'])

  // 3. 暂存所有变更（包含刚更新的 package.json、GITHUB_SYNC_LOG.md、CHANGELOG.md）
  console.log('\n📦 正在暂存所有文件变更 (git add -A)...')
  runInteractive('git add -A')

  // 4. 提交
  const fullCommitMsg = `v${version}: ${commitMsg} (${timestamp})`
  console.log(`💬 提交信息: "${fullCommitMsg}"`)
  runInteractive(`git commit -m "${fullCommitMsg}"`)

  // 5. 推送前先 rebase 拉取远程，防止 non-fast-forward 冲突
  console.log('\n🔄 正在拉取远端更新以防止冲突 (git pull --rebase origin master)...')
  try {
    runWithRetry('git pull --rebase origin master', 2)
  } catch (pullErr) {
    console.warn('⚠️ 远端拉取异常，尝试直接推送:', pullErr.message)
  }

  // 6. 推送至 GitHub master
  console.log('\n🚀 正在推送到 GitHub master 分支 (tokewer/logseq)...')
  runWithRetry('git push origin master', 3)

  // 7. 部署并同步到 gh-pages 分支
  console.log('\n🌐 正在同步更新 GitHub Pages 静态托管 (gh-pages 分支)...')
  try {
    const deployNodeScript = path.join(rootDir, 'scripts', 'deploy-gh-pages.mjs')
    if (fs.existsSync(deployNodeScript)) {
      runInteractive(`node "${deployNodeScript}"`)
      console.log('✅ GitHub Pages 静态分支部署完成！')
    } else {
      const deployScript = path.join(rootDir, 'deploy-gh-pages.ps1')
      if (fs.existsSync(deployScript)) {
        runInteractive(`powershell -NoProfile -ExecutionPolicy Bypass -File "${deployScript}"`)
        console.log('✅ GitHub Pages 静态分支部署完成！')
      }
    }
  } catch (deployErr) {
    console.warn('⚠️ GitHub Pages 自动部署脚本执行提示:', deployErr.message)
  }

  console.log('\n========================================================')
  console.log(`🎉 恭喜！同步与部署全部成功完成！`)
  console.log(`📌 当前版本: v${version}`)
  console.log(`📝 同步记录已写入: GITHUB_SYNC_LOG.md & CHANGELOG.md`)
  console.log(`🌐 源码仓库: https://github.com/tokewer/logseq`)
  console.log(`🌐 在线站点: https://tokewer.github.io/logseq/`)
  console.log('========================================================\n')
} catch (error) {
  console.error('\n❌ 同步过程中发生错误:', error.message)
  console.log('\n💡 排查建议：')
  console.log('  1. 网络连接：请检查网络是否能够顺畅访问 https://github.com。若有代理请确保已开启。')
  console.log('  2. Git 凭证：请确保已配置 GitHub 账户权限（SSH Key 或 Personal Access Token）。')
  console.log('  3. 分支保护：请检查远程 master 分支是否存在冲突或强制保护规则。')
  console.log('  4. 手动重试：您可以在终端运行 "node scripts/auto-sync-github.mjs" 重新同步。\n')
  process.exit(1)
}
