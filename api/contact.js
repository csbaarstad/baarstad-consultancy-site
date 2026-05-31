// Vercel serverless function — receives the /contact form POST,
// validates it, and sends an email via Resend.
//
// Required Vercel environment variables (Settings → Environment Variables):
//   RESEND_API_KEY      Your Resend API key (re_xxx…)
//   CONTACT_TO_EMAIL    The inbox to forward submissions to (e.g. chris@…)
//   CONTACT_FROM_EMAIL  Optional. Defaults to onboarding@resend.dev which
//                       works without verifying a domain. Once you verify
//                       baarstadconsultancy.com in Resend, set this to
//                       something like "Baarstad Consultancy <contact@baarstadconsultancy.com>".

const escapeHtml = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, message: "Method not allowed." });
  }

  // Vercel auto-parses JSON bodies; also support form-encoded just in case
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (_) {
      const params = new URLSearchParams(body);
      body = Object.fromEntries(params.entries());
    }
  }
  body = body || {};

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const topic = String(body.topic || "").trim();
  const message = String(body.message || "").trim();
  const botcheck = body.botcheck;

  // Honeypot — bots fill this; humans don't see it
  if (botcheck) {
    return res.status(200).json({ ok: true });
  }

  // Validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, message: "Please fill in name, email, and message." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res
      .status(400)
      .json({ ok: false, message: "That email address doesn't look right." });
  }
  if (message.length > 5000 || name.length > 200) {
    return res.status(400).json({ ok: false, message: "Message is too long." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddr = process.env.CONTACT_TO_EMAIL;
  const fromAddr =
    process.env.CONTACT_FROM_EMAIL ||
    "Baarstad Consultancy <onboarding@resend.dev>";

  if (!apiKey || !toAddr) {
    console.error("[contact] missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return res
      .status(500)
      .json({ ok: false, message: "Server not configured. Try again later." });
  }

  const subject = `New contact: ${topic || "general"} — ${name}`;
  const text =
    `From: ${name} <${email}>\n` +
    `Topic: ${topic || "(none)"}\n\n` +
    `${message}\n\n` +
    `---\nSent from baarstadconsultancy.com/contact`;
  const html =
    `<div style="font-family:-apple-system,Inter,sans-serif;color:#16242b;max-width:560px">` +
    `<p style="margin:0 0 12px"><b>From:</b> ${escapeHtml(name)} ` +
    `&lt;<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>&gt;</p>` +
    `<p style="margin:0 0 12px"><b>Topic:</b> ${escapeHtml(topic) || "<i>(none)</i>"}</p>` +
    `<p style="margin:0 0 6px"><b>Message:</b></p>` +
    `<div style="white-space:pre-wrap;background:#f2efe9;border-left:3px solid #b08d57;padding:12px 16px;border-radius:4px">` +
    `${escapeHtml(message)}</div>` +
    `<p style="margin:18px 0 0;color:#4a5a62;font-size:13px;font-style:italic">Sent from baarstadconsultancy.com/contact</p>` +
    `</div>`;

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddr,
        to: [toAddr],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!resp.ok) {
      const errBody = await resp.text();
      console.error("[contact] Resend error", resp.status, errBody);
      return res
        .status(502)
        .json({ ok: false, message: "Couldn't send right now. Please try again." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[contact] fetch threw", err);
    return res
      .status(500)
      .json({ ok: false, message: "Network hiccup. Please try again." });
  }
}
