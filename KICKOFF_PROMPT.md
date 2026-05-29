# Cowork Kickoff Prompt — Baarstad Consultancy

Paste the block below into a fresh Cowork session inside this folder.
It assumes `CLAUDE.md` is also in this folder (it'll be auto-loaded).

---

```
I'm building a personal/professional hub site at baarstadconsultancy.com.
The visual language, brand voice, content structure, and project taxonomy
are all locked. The current state lives in this folder as index.html —
treat it as the canonical visual reference and design system. CLAUDE.md
in this folder contains non-negotiable guardrails (esp. anonymization).

## What you're doing

Build out the eight project subpages that index.html links to. Each
subpage matches the workshop brand: dark hero, big poster typography
(Archivo Black), bullet-rich detail, designed visual mockup, dense facts,
prev/next navigation. Use the project's signature color throughout
(defined as CSS variables in index.html).

## Read these skill files for real project context — they have far more
   detail than the homepage cards do:

- chris-memory          (the foundational who/what/businesses)
- bookpulse             (BookPulse full product spec)
- chris-esc             (Esports ops, LAN logistics, league detail —
                         remember: NEVER name Valhallan/VHEL/ESC on site)
- chris-infra           (Supabase / tech infrastructure)

For projects without dedicated skill files (TpT Store, JamJam, Last Bell,
MUD Game, Discord Bot, AI for J&J), pull what you can from chris-memory
and ask me directly if you need specifics.

## The eight subpages, in priority order

1. tpt-store.html       — TpT storefront page. Beef this up: feature
                          current packets, "what's coming," story behind
                          @csbaarstad on Teachers Pay Teachers. The page
                          itself is the front porch; external link
                          target is:
                          teacherspayteachers.com/Store/Csbaarstad

2. ai-jnj.html          — AI for J&J case study via COAST Tactical.
                          Fetch this presentation as source material:
                          https://gamma.app/docs/AI-in-Daily-Life-s07y8oy24sy7xxb
                          Lean into the Fortune 50 + Navy-SEAL-led
                          collective credibility.

3. esports-ops.html     — National Esports Ops. CRITICAL: NEVER name
                          Valhallan, VHEL, or ESC anywhere. Reference as
                          "the largest youth esports organization in
                          the country" and "the national LAN
                          championship" per the hub copy.

4. jamjam-tea.html      — JamJam Tea people-ops. Concrete metrics from
                          the hiring pipeline work (multi-location,
                          CSV scoring, ranked shortlists).

5. bookpulse.html       — BookPulse product page. Use the bookpulse
                          skill for accurate spec. Designed UI mockup
                          of the student reading view.

6. discord-bot.html     — Gamer-centric Discord Bot. Designed Discord-
                          style chat mockup showing ticketing, Legends
                          XP system, admin dashboard.

7. last-bell.html       — Last Bell devlog. Roblox horror co-op for
                          ages 9+. Capture the Heat / Listener /
                          Generator mechanics. Mobile-first framing.

8. mud-game.html        — TBD MUD-Style Game. Dark terminal mockup
                          as the hero visual.

## Page structure (consistent across all 8)

- Nav (same as index.html, with "← back to work" link)
- Project hero: number, status pill, date pill, big poster title,
  one-paragraph lede, primary + secondary CTAs
- Designed visual / mockup (project-specific — the centerpiece)
- Story section: 2–3 short prose blocks with bold section labels
  on the left rail (e.g., "The problem", "The approach", "Why it
  matters")
- Facts strip: 3 key facts in mono-label, display-value format
- Devlog feed filtered to this project (reads from /devlog/, filters
  by `project: <slug>` frontmatter)
- Prev/next navigation between subpages (matches lane order from hub)
- Footer (same as index.html)

Use the existing color variables from index.html — each project has
its signature color already assigned. Match the hub's typography
exactly (Archivo Black display, Inter Tight body, JetBrains Mono
accents).

## Dev/build log as a content folder

The dev/build log on the homepage shouldn't be hardcoded. Instead:

- /devlog/ is a folder of markdown files (already seeded — see
  the 9 files in /devlog/)
- Each entry is one .md file with YAML frontmatter:
    date: YYYY-MM-DD
    project: <slug matching subpage filename, e.g. "bookpulse">
    headline: short headline (b-tag formatted in the rendered text)
- The homepage Dev/Build Log section reads /devlog/ at build time,
  sorts by date descending, and renders the most recent ~10 entries
- Each project subpage filters /devlog/ to only entries where
  `project` matches that subpage
- The hardcoded entries currently in index.html should be REMOVED
  and replaced with a build-time read of /devlog/. The 9 seeded
  files match the entries currently visible.

I'll add new entries by asking Claude in Cowork to write one
("log today's Last Bell playtest") which writes a new file to
/devlog/ and commits it.

## Optional: Next.js port

If a cleaner path is to scaffold a Next.js app in this folder and
build the subpages as page components (instead of static HTML +
static devlog reads), do that. Vercel deployment is the eventual
target. Use the App Router. Keep the design system 1:1 with
index.html.

## What NOT to do

- Don't name Valhallan, VHEL, or ESC anywhere on the public site
- Don't add CommandCenter (intentionally removed from the public site)
- Don't add Awards by Rubi as a featured project (it's a separate
  entity, only a small footer mention)
- Don't deviate from the visual system in index.html — this is
  brand-locked
- Don't add a logo — wordmark only is the call
- Don't add auth, admin pages, or backend features. This is a static
  marketing site. Admin platform is a separate future project.

## When you finish

Each subpage saved to its filename in this folder. Linked correctly
to/from index.html. /devlog/ wired up. Ready for production.

Start with #1 (tpt-store.html). Read the relevant skill files first,
then ask me anything you need before writing.
```

---

## Adding devlog entries (after kickoff)

After the site is built, log new updates by asking Cowork natural-language
prompts like:

- "Log today's BookPulse work to the devlog — chapter-gating rebuild."
- "Add a Last Bell devlog entry for the kid playtest results."
- "Drop a quick devlog: shipped JamJam onboarding doc."

Cowork writes a new file to `/devlog/`, commits it, pushes it, and
Vercel rebuilds the site automatically. No admin UI needed.
