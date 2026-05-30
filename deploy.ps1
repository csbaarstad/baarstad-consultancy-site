# deploy.ps1 — one-shot push to baarstadconsultancy.com (Vercel auto-rebuild)
# Usage from PowerShell, inside this folder:
#   ./deploy.ps1
#
# What it does:
#   1. Clears a stale .git\index.lock if Cowork left one behind
#   2. Stages all changes (HTML + CSS + new image assets)
#   3. Commits with the message below
#   4. Pushes to origin/main → Vercel rebuilds in ~30s

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "[deploy] clearing any stale git lock + sandbox residue..." -ForegroundColor Cyan
Remove-Item .git\index.lock -ErrorAction SilentlyContinue
Remove-Item .git\index.lock.bak -ErrorAction SilentlyContinue
Remove-Item .git\foo -ErrorAction SilentlyContinue
Remove-Item test-perm.txt -ErrorAction SilentlyContinue

Write-Host "[deploy] staging changes..." -ForegroundColor Cyan
git add .

Write-Host "[deploy] committing..." -ForegroundColor Cyan
$msg = @"
Hero rework + real screenshots + content pass + font swap

- Restore truncated index.html (engage + footer + closing tags
  were missing in HEAD — site was rendering broken)
- Rework hero: intake card on right, 4-stat strip, job-stamp,
  scrolling discipline ticker; bigger registration marks
- Replace JetBrains Mono with Space Mono (further off the
  AI-tool-default beaten path; editorial/retro feel)
- Wire real BookPulse student view as TWO side-by-side panels
  (reading + tasks) — kills the big dark middle from the single
  screenshot, Claude permission popup gone
- Wire real TpT storefront + a Giver Ch.4 annotation page from
  the Updated Pagination format
- Replace MUD page with real project 'Thirty Nights at Blackwell'
  literary gothic-horror RPG, Welsh borderlands, Eleanor Hartwell;
  refresh homepage card to match
- Reframe events page: 3 lane tiles (Online Events / In-Person
  Events / Partnerships & District); calendar grid removed
  entirely — keep just the run-of-show bar + lane tiles
- Redesign AI for J&J slide as a single 16:9 Gamma-style sample
"@

git commit -m $msg

Write-Host "[deploy] pushing..." -ForegroundColor Cyan
git push

Write-Host "[deploy] done. Vercel rebuilds in ~30s." -ForegroundColor Green
Write-Host "       https://baarstadconsultancy.com" -ForegroundColor Green
