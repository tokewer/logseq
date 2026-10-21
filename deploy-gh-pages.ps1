$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$static = Join-Path $root 'static'
$index = Join-Path $static 'index.html'
$mainJs = Join-Path $static 'js/main.js'

if (-not (Test-Path -LiteralPath $index) -or -not (Test-Path -LiteralPath $mainJs)) {
    throw "Web build is incomplete. Required files: '$index' and '$mainJs'."
}

$tempFolder = "logseq_pages_" + [System.Guid]::NewGuid().ToString("N")
$tempDir = Join-Path -Path ([System.IO.Path]::GetTempPath()) -ChildPath $tempFolder
Write-Host ">>> Preparing temporary deployment directory: $tempDir"
New-Item -ItemType Directory -Path $tempDir | Out-Null

try {
    # 仅复制静态托管所需的纯前端资产目录（使用 robocopy 排除 .map 文件）
    $neededDirs = @('css', 'docs', 'icons', 'img', 'js', 'windows')
    foreach ($d in $neededDirs) {
        $srcDir = Join-Path $static $d
        if (Test-Path $srcDir) {
            $destDir = Join-Path $tempDir $d
            & robocopy $srcDir $destDir /E /XF *.map /NFL /NDL /NJH /NJS /nc /ns /np | Out-Null
        }
    }

    # 复制静态根文件
    $rootFiles = @('index.html', '404.html', 'favicon.ico', 'manifest.json', 'robots.txt')
    foreach ($f in $rootFiles) {
        $srcFile = Join-Path $static $f
        if (Test-Path $srcFile) {
            Copy-Item -Path $srcFile -Destination (Join-Path $tempDir $f) -Force
        }
    }

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
    $spaScript = @'
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
'@
    if ($contentIndex -notmatch 'Single Page Apps for GitHub Pages') {
        $contentIndex = $contentIndex -replace '</head>', $spaScript
        Set-Content -Path $pIndex -Value $contentIndex -Encoding utf8
    }

    # 获取远程仓库 origin 地址
    Push-Location $root
    $originUrl = git remote get-url origin
    Pop-Location

    Write-Host ">>> Committing and pushing static bundle to origin/gh-pages ..."
    Push-Location $tempDir
    git init -q
    git checkout -b gh-pages -q
    git remote add origin $originUrl
    git add -A
    git commit -m "Deploy Logseq Web clean build to GitHub Pages" -q
    git push origin gh-pages --force
    Pop-Location

    Write-Host ">>> Deployment successful! Live URL: https://tokewer.github.io/logseq/"
} finally {
    if (Test-Path $tempDir) {
        Remove-Item -Recurse -Force $tempDir -ErrorAction SilentlyContinue
    }
}
