$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$static = Join-Path $root 'static'
$index = Join-Path $static 'index.html'
$mainJs = Join-Path $static 'js/main.js'
$bind = '127.0.0.1'
$port = 4173
$baseUrl = "http://${bind}:${port}"

function Get-ListeningProcessIds {
    @(Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue |
        Select-Object -ExpandProperty OwningProcess -Unique)
}

function Get-ProcessCommandLine([int] $processId) {
    (Get-CimInstance Win32_Process -Filter "ProcessId = $processId" -ErrorAction SilentlyContinue).CommandLine
}

function Test-LogseqPage {
    try {
        $indexResponse = Invoke-WebRequest -Uri "$baseUrl/index.html" -UseBasicParsing -TimeoutSec 2
        if ($indexResponse.StatusCode -ne 200 -or $indexResponse.Content -notmatch 'id="root"') {
            return $false
        }
        $mainResponse = Invoke-WebRequest -Uri "$baseUrl/js/main.js" -UseBasicParsing -TimeoutSec 2
        return ($mainResponse.StatusCode -eq 200 -and $mainResponse.Content.Length -gt 0)
    } catch {
        return $false
    }
}

function Test-OurServerProcess([int] $processId) {
    $commandLine = Get-ProcessCommandLine $processId
    if (-not $commandLine) { return $false }
    $pathMatch = ($commandLine.IndexOf($static, [StringComparison]::OrdinalIgnoreCase) -ge 0) -or
                 ($commandLine -match '(?i)--directory\s+["'']?static["'']?')
    return ($pathMatch -and
        $commandLine -match '(?i)-m\s+http\.server' -and
        $commandLine -match '(?i)(^|\s)4173(\s|$)')
}

function Get-PortOwnerDescription {
    $owners = foreach ($processId in Get-ListeningProcessIds) {
        $process = Get-Process -Id $processId -ErrorAction SilentlyContinue
        "PID $processId ($($process.ProcessName)): $(Get-ProcessCommandLine $processId)"
    }
    if ($owners) { $owners -join [Environment]::NewLine } else { 'Unable to read port owner information.' }
}

function Open-ReadyPage {
    Write-Host "Logseq Web is ready at $baseUrl"
    Start-Process $baseUrl
    exit 0
}

if (-not (Test-Path -LiteralPath $index) -or -not (Test-Path -LiteralPath $mainJs)) {
    throw "Web build is incomplete. Required files: '$index' and '$mainJs'. Build the static output first."
}

$existingOwners = @(Get-ListeningProcessIds)
if ($existingOwners.Count -gt 0) {
    $otherOwners = @($existingOwners | Where-Object { -not (Test-OurServerProcess $_) })
    if ($otherOwners.Count -gt 0) {
        throw "Port $port is occupied by another service. The launcher will not choose another port or start a second service.`n$(Get-PortOwnerDescription)"
    }

    for ($attempt = 0; $attempt -lt 120; $attempt++) {
        if (Test-LogseqPage) { Open-ReadyPage }
        Start-Sleep -Milliseconds 250
        $runningOwners = @(Get-ListeningProcessIds | Where-Object { Test-OurServerProcess $_ })
        if ($runningOwners.Count -eq 0) { break }
    }
    throw "The existing Logseq Web process did not become ready at $baseUrl."
}

$python = Get-Command python.exe -ErrorAction SilentlyContinue
if (-not $python) { $python = Get-Command python -ErrorAction SilentlyContinue }
if (-not $python) { throw 'Python was not found. Install Python 3 and add python.exe to PATH.' }

$server = Start-Process -FilePath $python.Source -ArgumentList @('-m', 'http.server', "$port", '--bind', $bind, '--directory', $static) -WorkingDirectory $root -WindowStyle Hidden -PassThru
$ready = $false
for ($attempt = 0; $attempt -lt 120; $attempt++) {
    Start-Sleep -Milliseconds 250
    if (Test-LogseqPage) { $ready = $true; break }
    if ($server.HasExited) { break }
}

if (-not $ready) {
    if (-not $server.HasExited) { Stop-Process -Id $server.Id -ErrorAction SilentlyContinue }
    $state = if ($server.HasExited) { "Python process exited (ExitCode=$($server.ExitCode))" } else { 'Python is still running, but the HTTP service did not become ready.' }
    throw "Logseq Web startup failed: $state"
}

Write-Host "Logseq Web is ready at $baseUrl"
Start-Process $baseUrl
