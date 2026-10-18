$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$static = Join-Path $root 'static'
$electronEntry = Join-Path $static 'electron.js'
$staticPackage = Join-Path $static 'package.json'
$electronBinary = Join-Path $static 'node_modules/electron/dist/electron.exe'
$nativeBuildMissing = (-not (Test-Path $electronEntry) -or -not (Test-Path $staticPackage) -or -not (Test-Path $electronBinary))

if ($nativeBuildMissing) {
    throw "The native Electron build or its dependencies are missing. Run 'pnpm release-electron' in $root first; the browser fallback is intentionally disabled because it cannot persist a local Graph."
}

Start-Process -FilePath $electronBinary `
    -ArgumentList @('.') `
    -WorkingDirectory $static `
    -WindowStyle Normal | Out-Null

Write-Host 'Logseq native Electron app started.'
