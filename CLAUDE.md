# Baarstad Consultancy — Project Guardrails

This folder is the public-facing site for **Baarstad Consultancy**
(baarstadconsultancy.com), the consulting practice of Chris Baarstad,
operating as Baarstad Consulting Services (BCS), a California S-Corp.

## Critical rules — read every session

### Positioning (locked 2026-05-30)

Site pivoted from "Chris Baarstad portfolio" to **"BCS — AI for schools
and operators."** Three service lines:

1. **AI Professional Development** (proof: AI for J&J via COAST Tactical)
2. **AI-Powered Software for Schools** (proof: BookPulse)
3. **Bespoke AI-Built Software** (proof: Valhallan Discord platform + JamJam LMS)

Games, MUD, TpT, Awards by Rubi, esports operations history all live
in a quieter "Also Built" section. The new EDU Sales W2 role is a
bridge income — not on the site.

### Disclosure rules (revised 2026-05-30)

- **Valhallan Esports** CAN be named as a client. The Discord bot is
  attributed to Valhallan by name. Chris is VP of Events there;
  framing is "built the internal platform that runs across the league."
- **VHEL, XPL, Arena League, ESC, the LAN championship — keep generic.**
  Reference as "their league system," "the national championship,"
  "multi-tenant tournament operator." Trademarked event names stay off.
- **Johnson & Johnson is named** (already public, delivered).
- **JamJam Tea is named generically only** — "a multi-unit boba operator
  in Orange County." Do not use "Jam Jam" or jamjamtea.com publicly.
- **Awards by Rubi** is named — discipline 05, the literal workshop the
  brand voice came from.

### Out of scope for this project

- **CommandCenter** is intentionally NOT on the public site.
- Pricing, fees, SOW templates stay off (warm-intro funnel, not
  cold-traffic conversion).

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
