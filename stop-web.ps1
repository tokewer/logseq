$ErrorActionPreference = 'Stop'

$bind = '127.0.0.1'
$port = 4173
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$static = [IO.Path]::GetFullPath((Join-Path $root 'static'))

function Get-ProcessCommandLine([int] $processId) {
    (Get-CimInstance Win32_Process -Filter "ProcessId = $processId" -ErrorAction SilentlyContinue).CommandLine
}

$stopped = @()
$owners = @(Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue |
    Select-Object -ExpandProperty OwningProcess -Unique)

foreach ($processId in $owners) {
    $commandLine = Get-ProcessCommandLine $processId
    $pathMatch = ($commandLine -and $commandLine.Contains($static)) -or ($commandLine -match '(?i)--directory\s+["'']?static["'']?')
    $isOurServer = $commandLine -and
        $commandLine -match '(?i)-m\s+http\.server' -and
        $commandLine -match '(?i)4173' -and
        $pathMatch

    if ($isOurServer) {
        Stop-Process -Id $processId -Force
        $stopped += $processId
    }
}

if ($stopped.Count -eq 0) {
    Write-Host 'No Logseq Web server owned by this project was found. Other processes were not stopped.'
} else {
    Write-Host ("Stopped Logseq Web server. PID: " + ($stopped -join ', '))
}
