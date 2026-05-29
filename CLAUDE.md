# Baarstad Consultancy — Project Guardrails

This folder is the public-facing site for **Baarstad Consultancy**
(baarstadconsultancy.com), the consulting practice of Chris Baarstad,
operating as Baarstad Consulting Services (BCS), a California S-Corp.

## Critical rules — read every session

### Anonymization (non-negotiable)

- **Never name Valhallan or VHEL** anywhere in this codebase or on the site
- **Never name ESC** (the national LAN championship) by name on the site
- Reference esports work as **"the largest youth esports organization in
  the country"** or similar generic framing
- Reference the LAN as **"the national LAN championship"**

### Out of scope for this project

- **CommandCenter** is intentionally NOT on the public site. Do not
  add it as a project card or subpage.
- **Awards by Rubi** is a separate entity (separate LLC, separate
  fabrication shop). It gets a small footer mention only — do not
  feature it as a BCS project.

### Brand voice

- First-person ("I" / "Chris") in card descriptions and subpage prose
- Never frame as "BCS does X" — frame as "Chris does X"
- BCS is the legal entity (mentioned once in the footer); Chris is
  the brand
- Tagline thesis: **Master of Most** — multi-discipline is a feature,
  not a hedge

### What this site is (and isn't)

This is a **static marketing site** — portfolio + lead funnel for
the consultancy. It is **not**:

- An admin platform (that's a separate future project)
- A CRM
- An auth-protected app
- A database-backed system

Keep it static. Keep it fast. Resist scope creep into "wouldn't it be
cool if we also..." territory. Those ideas belong in a separate
`baarstad-admin` project later.

## Project structure (target)

```
baarstad-consultancy/
├── CLAUDE.md                  (this file)
├── KICKOFF_PROMPT.md          (the spec for what to build)
├── README.md                  (folder contents map)
├── index.html                 (the hub — design source of truth)
├── devlog/                    (markdown content folder)
│   ├── 2026-05-28-hub-v1.md
│   ├── 2026-05-24-jamjam-hiring.md
│   └── ...
└── (subpages to be built — see KICKOFF_PROMPT.md)
```

## Tech direction

- Static HTML for now → port to Next.js + Vercel when ready
- All styling already inlined in index.html — keep it self-contained
- Fonts: Archivo Black (display), Inter Tight (body), JetBrains Mono
  (accents) — via Google Fonts CDN
- No JS framework dependencies until the Next.js port
