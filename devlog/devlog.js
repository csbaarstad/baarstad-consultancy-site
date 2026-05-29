/*
 * devlog.js, generated devlog manifest
 *
 * This file is the runtime view of the markdown files in /devlog/.
 * Each .md file is the authoritative source, this JS is regenerated
 * (or hand-updated) when a new entry is written. Keeps the site
 * functional under file:// and any static host without a build step.
 *
 * The project slug maps to subpage filename:
 *   tpt-store      → tpt-store.html
 *   ai-jnj         → ai-jnj.html
 *   esports-ops    → events.html
 *   jamjam-tea     → peopleops.html
 *   bookpulse      → bookpulse.html
 *   discord-bot    → discord-bot.html
 *   last-bell      → lastbell.html
 *   mud-game       → mudgame.html
 *   baarstad-consultancy → (hub only, no subpage)
 */
window.DEVLOG = [
  {
    date: "2026-05-28",
    project: "baarstad-consultancy",
    projectLabel: "Baarstad Consultancy",
    headline: "Hub site v1 shipped",
    body: "One front door for the whole workshop, design system locked, eight project lanes, dev/build log wired in as a content folder."
  },
  {
    date: "2026-05-24",
    project: "jamjam-tea",
    projectLabel: "People Ops",
    headline: "Multi-location hiring pipeline shipped",
    body: "CSV scoring + ranked shortlists, deployed across every Orange County location. Hard filters (age, availability, hours) on top of a weighted score so the top of the list is always the strongest fit per store."
  },
  {
    date: "2026-05-22",
    project: "ai-jnj",
    projectLabel: "AI for J&J",
    headline: "AI Professional Development delivered to Johnson &amp; Johnson",
    body: "Session delivered in partnership with COAST Tactical Training. AI fundamentals, practical workflows for knowledge workers, and the day-to-day integration topics that actually save time."
  },
  {
    date: "2026-05-19",
    project: "last-bell",
    projectLabel: "Last Bell",
    headline: "First playable test",
    body: "Stripped the mechanics down to bones to ask one question: is pushing your luck actually fun and a little terrifying? Test surfaced a fix we're rebuilding around, a decaying-safety Generator that forces players into the dark to keep the lights on."
  },
  {
    date: "2026-05-16",
    project: "discord-bot",
    projectLabel: "Discord Bot",
    headline: "&ldquo;Legends&rdquo; XP curve rebalanced",
    body: "New progression milestones tested with one server before broader rollout. Goal: keep early levels rewarding, stretch late game so the leveling chase doesn't burn out."
  },
  {
    date: "2026-05-12",
    project: "bookpulse",
    projectLabel: "BookPulse",
    headline: "Pricing &amp; chapter-gating model finalized",
    body: "$9/month or $79/year. Chapter-gating model in place, teachers can lock chapter access until comprehension thresholds clear, so the class moves through a novel together instead of fragmenting."
  },
  {
    date: "2026-05-10",
    project: "mud-game",
    projectLabel: "MUD Game",
    headline: "Room system &amp; combat loop prototype",
    body: "First combat loop wired into the room system. Stamina debt mechanic added, you can over-exert on a turn, but you pay it back across the next two. Needs playtest before it becomes load-bearing."
  },
  {
    date: "2026-05-04",
    project: "esports-ops",
    projectLabel: "Esports Ops",
    headline: "National LAN logistics locked",
    body: "Venue spec finalized, registrations open, broadcast partner confirmed. The big lift now shifts from procurement to player communications and on-floor staffing plans."
  },
  {
    date: "2026-04-28",
    project: "tpt-store",
    projectLabel: "TpT Store",
    headline: "<em>Of Mice and Men</em> packet shipped",
    body: "First packet generated end-to-end with the new SVG template, cover, annotation pages, vocab, comprehension, and short response, all from a single source file. Ship time per novel just dropped by an order of magnitude."
  }
];

/* ============================================================
 * Render helpers, used by the hub and every project subpage.
 * ============================================================ */
window.renderDevlog = function(targetSelector, opts) {
  opts = opts || {};
  var el = document.querySelector(targetSelector);
  if (!el) return;
  var entries = window.DEVLOG.slice();
  if (opts.project) entries = entries.filter(function(e){ return e.project === opts.project; });
  entries.sort(function(a,b){ return a.date < b.date ? 1 : -1; });
  if (opts.limit) entries = entries.slice(0, opts.limit);

  if (entries.length === 0) {
    el.innerHTML = '<div class="log-empty">No entries yet for this project.</div>';
    return;
  }

  var months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  el.innerHTML = entries.map(function(e){
    var d = e.date.split('-');
    var dateLabel = months[parseInt(d[1],10)-1] + ' ' + d[2];
    return ''
      + '<div class="log-row">'
      +   '<span class="log-date">' + dateLabel + '</span>'
      +   '<span class="log-txt">' + e.headline + ', ' + e.body + '</span>'
      +   '<span class="log-proj">' + e.projectLabel + '</span>'
      + '</div>';
  }).join('');
};
