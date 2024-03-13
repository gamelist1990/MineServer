@echo off
"C:\Program Files\7-Zip\7z.exe" a  -r web-panel.zip -w ./ -mem=AES256 -x!*.git -x!*.gitignore -x!*.vscode -x!*.ts -x!README.MD -x!node_modules -x!*.bak -x!make_release.bat -x!releases
mkdir %~dp0\releases\latest
move web-panel.zip ./releases/latest/
echo ^[42mSUCCESS[0m
pause