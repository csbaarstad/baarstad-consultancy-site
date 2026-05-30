# deploy.ps1 - push baarstadconsultancy.com to Vercel
# Usage from PowerShell, inside this folder:
#   ./deploy.ps1

# DO NOT use ErrorActionPreference Stop - it kills the script silently
# on minor things like a missing lock file. Let errors surface instead.

Set-Location $PSScriptRoot

Write-Host "[deploy] clearing any stale git lock + sandbox residue..." -ForegroundColor Cyan
Remove-Item .git\index.lock -ErrorAction SilentlyContinue
Remove-Item .git\index.lock.bak -ErrorAction SilentlyContinue
Remove-Item .git\foo -ErrorAction SilentlyContinue
Remove-Item test-perm.txt -ErrorAction SilentlyContinue

Write-Host "[deploy] staging changes..." -ForegroundColor Cyan
git add -A
git status --short

Write-Host "[deploy] committing..." -ForegroundColor Cyan
# Single-line ASCII-safe commit message - PowerShell + git on Windows
# choke on em-dashes, ellipses, arrows, smart quotes in -m strings.
git commit -m "Round 3: kill typewriter feel everywhere. --mono is now Inter Tight only (was Archivo first, which renders typewriter-ish at small caps+tracked). Mockup captions, footer labels, page meta, sec-tags etc. switched from caps/tracked to mixed-case body or Fraunces italic. Subpages now also load Fraunces italic. BookPulse mockup: dropped the broken twin-panel; using a single stitched image (bookpulse-combined.png) so nothing gets cropped at any width."

if ($LASTEXITCODE -ne 0) {
    Write-Host "[deploy] commit failed or nothing to commit. status:" -ForegroundColor Yellow
    git status
    Write-Host "[deploy] not pushing." -ForegroundColor Yellow
    exit 1
}

Write-Host "[deploy] pushing..." -ForegroundColor Cyan
git push

if ($LASTEXITCODE -ne 0) {
    Write-Host "[deploy] push failed." -ForegroundColor Red
    exit 1
}

Write-Host "[deploy] done. Vercel rebuilds in ~30s." -ForegroundColor Green
Write-Host "       https://baarstadconsultancy.com" -ForegroundColor Green
