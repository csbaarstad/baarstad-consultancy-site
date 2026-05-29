# Baarstad Consultancy — baarstadconsultancy.com

Public-facing static site for the consultancy. Operating entity: Baarstad Consulting Services (BCS), a California S-Corp.

## What's in here

| File / folder | Purpose |
|---|---|
| `index.html` | The hub — bio, projects, dev log, engage CTA. Inlined CSS. |
| `subpage.css` | Shared stylesheet for all 8 project subpages. |
| `tpt-store.html` | TpT Store |
| `ai-jnj.html` | AI for J&J |
| `events.html` | National Esports Ops |
| `peopleops.html` | People-Ops and HR Services |
| `bookpulse.html` | BookPulse |
| `discord-bot.html` | Gamer-centric Discord Bot |
| `lastbell.html` | Last Bell |
| `mudgame.html` | TBD MUD-Style Game |
| `devlog/` | Dev/Build log content folder. `.md` files are authoritative source; `devlog.js` is the runtime manifest read by every page. |
| `images/` | Static images (headshot lives here). |
| `vercel.json` | Vercel config — clean URLs, cache headers. |
| `CLAUDE.md` | Project guardrails for Cowork sessions. |
| `KICKOFF_PROMPT.md` | Original kickoff prompt — historical reference. |

## Deploy (Vercel)

This is a static site — no build step.

```bash
git init
git add .
git commit -m "Initial commit: hub + 8 subpages + devlog"
git branch -M main
git remote add origin git@github.com:<your-handle>/<repo-name>.git
git push -u origin main
```

Then in Vercel:

1. **New Project** → import the GitHub repo.
2. Framework Preset: **Other** (or "No Framework"). Build command: empty. Output directory: `.` (root).
3. Deploy. You get a `<project>.vercel.app` URL immediately.
4. **Project Settings → Domains** → add `baarstadconsultancy.com` and `www.baarstadconsultancy.com`. Vercel gives you a DNS record to set at your registrar.

## Adding a devlog entry

1. Write a new file in `/devlog/` named `YYYY-MM-DD-slug.md` with YAML frontmatter:
   ```
   ---
   date: 2026-06-10
   project: bookpulse
   headline: Short headline
   ---
   Body prose.
   ```
2. Append a matching entry to `window.DEVLOG` in `/devlog/devlog.js`.
3. Commit, push, Vercel rebuilds.

Project slugs map to subpages via:

| Slug | Subpage |
|---|---|
| `tpt-store` | tpt-store.html |
| `ai-jnj` | ai-jnj.html |
| `esports-ops` | events.html |
| `jamjam-tea` | peopleops.html |
| `bookpulse` | bookpulse.html |
| `discord-bot` | discord-bot.html |
| `last-bell` | lastbell.html |
| `mud-game` | mudgame.html |
| `baarstad-consultancy` | (hub-only) |

## Brand guardrails

- **Never name** Valhallan, VHEL, XPL, or ESC anywhere on the site. Reference esports work generically — "the largest youth esports organization in the country," "the national LAN championship."
- **CommandCenter is not on the public site** (intentional).
- **Awards by Rubi** is footer-mention only.
- Voice: first-person; Chris is the brand. BCS is the legal entity (footer only).
- Type: Archivo Black (display), Inter Tight (body), JetBrains Mono (accents).
