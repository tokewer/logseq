@echo off
set "PSModulePath=%USERPROFILE%\Documents\WindowsPowerShell\Modules;%PSModulePath%"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0clojure.ps1" %*
