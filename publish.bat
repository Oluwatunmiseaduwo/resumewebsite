@echo off 
xcopy wwwroot\* docs\ /E /I /Y
git add -A
if "%~1"=="" (set MSG=Update site) else (set MSG=%~1)
git commit -m "%MSG%"
git push