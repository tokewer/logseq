@echo off
setlocal
cd /d "%~dp0"

powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0stop-web.ps1"
if errorlevel 1 (
  echo.
  echo ֹͣ Logseq Web ʧ�ܡ�
  pause
)

endlocal
