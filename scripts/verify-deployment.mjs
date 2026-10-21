import fs from 'fs'

const html = fs.readFileSync('static/index.html', 'utf8')
const regex = /(?:src|href)="(\.[^"]+)"/g
let m
const resources = []
while ((m = regex.exec(html)) !== null) {
  resources.push(m[1])
}

console.log(`Checking ${resources.length} index.html resources on GitHub Pages...`)

let okCount = 0
let failCount = 0

for (const rel of resources) {
  const url = 'https://tokewer.github.io/logseq/' + rel.replace(/^\.\//, '')
  try {
    const res = await fetch(url, { method: 'HEAD' })
    if (res.ok) {
      console.log(`✅ [${res.status}] ${url}`)
      okCount++
    } else {
      console.error(`❌ [${res.status}] ${url}`)
      failCount++
    }
  } catch (err) {
    console.error(`❌ [ERROR] ${url}: ${err.message}`)
    failCount++
  }
}

console.log('\n--- Summary ---')
console.log(`Total: ${resources.length}, Success: ${okCount}, Failed: ${failCount}`)
if (failCount === 0) {
  console.log('🎉 All static resources loaded successfully!')
} else {
  process.exit(1)
}
