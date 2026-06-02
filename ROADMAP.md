# Baarstad Consultancy — Roadmap

Last updated: 2026-05-30

## The bar each phase clears

| Phase | Done when... | What it unlocks |
|---|---|---|
| **Phase 1 — Shippable to warm contacts** | I can paste the site link in any DM, email, or LinkedIn message without cringing. | Daily-life use. The "yes look me up" link. |
| **Phase 2 — Lead capture works end-to-end** | A stranger lands on the site, books a call, and I get notified in my inbox without anything failing. | Warm intros convert. Discovery calls actually fill the calendar. |
| **Phase 3 — Outbound-ready infrastructure** | I can send 5-30 personal-touch emails a week from `chris@baarstadconsultancy.com` and they don't land in spam. | Warm-network sales motion. |
| **Phase 4 — Active outbound to a list** | I'm running real sequences to a contact database I've built, with replies routing to a CRM. | Cold acquisition channel. |

Each phase has a clear shippable artifact. We don't move on to the next phase until the current one passes its test.

---

## Phase 1 — Shippable to warm contacts

Goal: when the in-laws ask "what's your business," I can hand them a URL and not flinch.

### Site structure
- [x] New AI-for-schools-and-operators positioning live on disk
- [x] Em-dashes purged everywhere
- [x] Gap section right-rail with named-client receipts
- [x] Hero typography scaled down to real sizes
- [ ] **Deploy current changes and verify on live site**
- [ ] Service Line 3 broadened to "AI software for SMBs" with three receipts: JamJam LMS, Awards by Rubi CRM, Valhallan Discord platform (currently only Valhallan)
- [ ] Resolve the "capital I" question Chris flagged — clarify what he meant, then fix

### Case study subpages
- [ ] **AI for J&J** — full rewrite as a proper case study (problem → approach → delivery → outcome). Currently it's portfolio-piece framing.
- [ ] **BookPulse** — same. Currently sells the product fine but doesn't anchor "this is what I build for schools."
- [ ] **Discord Platform for Valhallan** — already partially refreshed. Needs case-study structure.

### Demoted subpages
- [ ] **TpT, AbyR, MUD, Last Bell, Events, People-Ops** — each gets a stub. Either: (a) minimal "overview only" page, (b) link out to the real product, or (c) "in progress" placeholder. Chris's pick per page.

### Brand identity
- [ ] **BCS logo / monogram** — custom letterform, not stock. Used in nav, OG image, favicon.
- [ ] **OG share image** — 1200×630, BCS monogram + tagline. Site-wide `og:image` meta updates.
- [ ] **Favicon refresh** to match new mark.

### Email/identity polish
- [x] `chris@baarstadconsultancy.com` forwarding live (Cloudflare)
- [ ] Gmail "Send Mail As" setup so outbound replies use the BCS identity
- [ ] Update `CONTACT_TO_EMAIL` env var to `chris@baarstadconsultancy.com` (optional, same result)

**Phase 1 done test:** Open the site on a phone. Scroll the whole homepage. Tap each visible link. Does anything look broken, half-built, or AI-slop? If no, ship it.

---

## Phase 2 — Lead capture works end-to-end

Goal: the contact form / discovery call path actually works, and a stranger can find me, book a call, and not hit any walls.

### Booking
- [ ] **Calendly account** signed up (free tier)
- [ ] **Discovery call event type** created — 30 min, weekday availability windows, intake questions (name, role, district/org, what they want to talk about)
- [ ] **Calendly link wired** into /contact and homepage CTAs

### Form
- [x] `/api/contact` Vercel function built
- [x] Resend API key + `CONTACT_TO_EMAIL` env vars in Vercel
- [ ] **End-to-end test**: real submission from another browser/inbox, confirm email lands in gmail
- [ ] **Spam handling check**: confirm honeypot field is being respected

### Email "from" polish
- [ ] **Verify baarstadconsultancy.com in Resend** so contact-form emails arrive `from contact@baarstadconsultancy.com` instead of `onboarding@resend.dev` (3 DNS records in Cloudflare)
- [ ] Add `CONTACT_FROM_EMAIL` env var in Vercel once verified

**Phase 2 done test:** Open the site in an incognito browser logged out of everything. Click "Book a discovery call." Either book through Calendly or submit the form. Confirm: (a) confirmation lands on the visitor's side, (b) notification lands in my gmail, (c) the email looks branded.

---

## Phase 3 — Outbound-ready infrastructure

Goal: I can send personal 1:1 emails from `chris@baarstadconsultancy.com` to up to ~30 prospects a week, they land in inboxes, and I track replies somewhere.

### Inbox consolidation
- [x] BCS (`chris@baarstadconsultancy.com`) → gmail
- [ ] **Awards by Rubi (`chris@awardsbyrubi.com`) → gmail** (set up forwarding from Workspace)
- [ ] Send Mail As alias for AbyR in gmail
- [ ] Valhallan / JamJam: decide whether to ask Mike Sherwood for forwarding enablement, or leave them as separate inboxes

### Outbound deliverability
- [ ] **DMARC record** on baarstadconsultancy.com (Cloudflare). Currently have SPF + DKIM from Email Routing setup. Adding DMARC gets us to the proper "this domain authenticates outbound" trifecta.
- [ ] **Send Mail As warmup**: send a few personal emails per day from the new identity for the first 2-3 weeks before scaling up.

### Decision point
- [ ] **Microsoft 365 vs Google Workspace vs stay-on-aliases** decision — defer until volume warrants it. Cloudflare forwarding + Send Mail As is fine for Phase 3 at 30/week.

**Phase 3 done test:** Send 10 emails over 3 days from `chris@baarstadconsultancy.com` to friendly recipients (Mike, Brian, family). All land in inbox, not spam. Replies come back to gmail correctly.

---

## Phase 4 — Active outbound to a list (defer until Phases 1-3 are real)

Goal: I'm running real cold sequences to a built list of decision-makers, with replies routed and tracked.

### Tools
- [ ] **Cold-email platform** chosen (Smartlead / Instantly / Lemlist — research and pick one). $30-100/mo.
- [ ] **CRM** chosen (HubSpot Free, Pipedrive, Folk, or a Supabase-backed minimal one). Likely free tier for now.
- [ ] **Sender warmup** (the cold-email platform handles this; takes 2-4 weeks).

### List
- [ ] **Target persona definition** — exactly who? District EdTech leaders? K-12 superintendents in CA? CTOs of regional SMBs? Pick a narrow first segment.
- [ ] **Sourcing strategy** — Apollo / hunter.io / LinkedIn Sales Navigator / hand-built. Probably hand-built for the first 200 contacts.
- [ ] **First sequence drafted** — 3-touch typical. Personalized first line is non-negotiable.

### Process
- [ ] **Reply triage rules** — what's the workflow when someone replies?
- [ ] **Booking handoff** — replies → Calendly link → call → CRM tagged.

**Phase 4 done test:** Send 50 cold emails. Get 1-2 booked discovery calls. The plumbing didn't fail.

---

## Cross-cutting things (do once, applies everywhere)

- [ ] Add `ROADMAP.md` (this file) to git so it stays in the project
- [ ] Decide design loop for next phases: Claude Design for big pivots, Cowork for tweaks (locked previously)
- [ ] Once Phase 1 ships, retroactively scan for AI-slop tells (em-dashes, "It's not X, it's Y" rhythms, etc.) and clean

---

## Working order suggestion

1. **Deploy current changes** (10 min) — see how the new positioning actually looks live before iterating further
2. **Resolve the "capital I" thing** — Chris clarifies, fix
3. **Service Line 3 broadening** (SMB receipts) — small, high-value
4. **3 case-study subpage rewrites** (~30 min each in Claude Design + translation)
5. **Subpage stubs** for the rest
6. **BCS logo + OG image**
7. **Send Mail As + Calendly** (Phase 2 starts)

Each item gets done, then we move on. No more random-iterating.
