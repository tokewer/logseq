$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$static = Join-Path $root 'static'
$index = Join-Path $static 'index.html'
$mainJs = Join-Path $static 'js/main.js'

if (-not (Test-Path -LiteralPath $index) -or -not (Test-Path -LiteralPath $mainJs)) {
    throw "Web 构建不完整，未找到 '$index' 或 '$mainJs'，请先完成 Web 构建。"
}

$tempDir = Join-Path ([System.IO.Path]::GetTempPath()) ("logseq_pages_" + [System.Guid]::NewGuid().ToString("N"))
Write-Host ">>> 正在准备静态发布目录: $tempDir"
New-Item -ItemType Directory -Path $tempDir | Out-Null

try {
    # 复制子目录（排除 node_modules 等无用大目录）
    $excludeDirs = @('node_modules', 'android', 'ios')
    Get-ChildItem -Path $static -Directory | Where-Object { $_.Name -notin $excludeDirs } | ForEach-Object {
        Copy-Item -Path $_.FullName -Destination (Join-Path $tempDir $_.Name) -Recurse -Force
    }

    # 复制根文件（排除 electron 构建文件及未打包文件）
    $excludeFiles = @('electron.js', 'electron.js.map', 'db-worker-node.js.map', 'tests.js.map', 'electron-builder.yml', 'forge.config.test.js', 'entitlements.plist', 'package.json', 'pnpm-lock.yaml')
    Get-ChildItem -Path $static -File | Where-Object { $_.Name -notin $excludeFiles -and $_.Extension -ne '.map' } | ForEach-Object {
        Copy-Item -Path $_.FullName -Destination $tempDir -Force
    }

    # 递归删除多余的 source map 文件以缩减体积
    Get-ChildItem -Path $tempDir -Filter "*.map" -Recurse -File | Remove-Item -Force

    # 创建 .nojekyll 防止 GitHub Pages 过滤特殊文件
    New-Item -ItemType File -Path (Join-Path $tempDir ".nojekyll") -Force | Out-Null

    # 更新 404.html 与 index.html 的 SPA 路由支持
    $p404 = Join-Path $tempDir "404.html"
    if (Test-Path $p404) {
        $content404 = Get-Content $p404 -Raw
        $content404 = $content404 -replace 'var segmentCount = 0;', 'var segmentCount = (window.location.pathname.indexOf("/logseq") === 0) ? 1 : 0;'
        Set-Content -Path $p404 -Value $content404 -Encoding utf8
    }

    $pIndex = Join-Path $tempDir "index.html"
    $contentIndex = Get-Content $pIndex -Raw
    $spaScript = @"
  <!-- Start Single Page Apps for GitHub Pages -->
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
</head>
"@
    if ($contentIndex -notmatch 'Single Page Apps for GitHub Pages') {
        $contentIndex = $contentIndex -replace '</head>', $spaScript
        Set-Content -Path $pIndex -Value $contentIndex -Encoding utf8
    }

    # 获取远程仓库 origin 地址
    Push-Location $root
    $originUrl = git remote get-url origin
    Pop-Location

    Write-Host ">>> 正在提交静态页面并推送到 origin/gh-pages ..."
    Push-Location $tempDir
    git init -q
    git checkout -b gh-pages -q
    git remote add origin $originUrl
    git add -A
    git commit -m "Deploy Logseq Web clean build to GitHub Pages" -q
    git push origin gh-pages --force
    Pop-Location

    Write-Host ">>> 发布成功！GitHub Pages 静态托管地址: https://tokewer.github.io/logseq/"
} finally {
    if (Test-Path $tempDir) {
        Remove-Item -Recurse -Force $tempDir -ErrorAction SilentlyContinue
    }
}
