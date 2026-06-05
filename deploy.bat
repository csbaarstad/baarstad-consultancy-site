@echo off
REM Double-click this to deploy baarstadconsultancy.com.
REM It runs deploy.ps1 with an auto timestamp commit message.
powershell -ExecutionPolicy Bypass -File "%~dp0deploy.ps1"
echo.
pause
