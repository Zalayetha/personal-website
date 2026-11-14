// Cloudflare Worker: serves static assets and handles POST /api/contact.
// Env (names only): RESEND_API_KEY (secret), CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL,
// TURNSTILE_SECRET_KEY (optional secret; enables Turnstile verification).

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
  TURNSTILE_SECRET_KEY?: string;
}

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  const get = (k: string) => String(form.get(k) ?? "").trim();

  // Honeypot: bots fill this hidden field. Pretend success.
  if (get("website")) return json({ ok: true });

  const name = get("name");
  const email = get("email");
  const message = get("message");
  if (name.length < 2 || name.length > 100)
    return json({ error: "Please enter your name." }, 422);
  if (!EMAIL_RE.test(email) || email.length > 200)
    return json({ error: "Please enter a valid email." }, 422);
  if (message.length < 10 || message.length > 5000)
    return json({ error: "Message must be 10–5000 characters." }, 422);

  if (env.TURNSTILE_SECRET_KEY) {
    const body = new FormData();
    body.set("secret", env.TURNSTILE_SECRET_KEY);
    body.set("response", get("cf-turnstile-response"));
    const ip = request.headers.get("CF-Connecting-IP");
    if (ip) body.set("remoteip", ip);
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body },
    );
    const data = (await res.json()) as { success?: boolean };
    if (!data.success)
      return json({ error: "Spam check failed. Please retry." }, 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL)
    return json({ error: "Contact form is not configured." }, 503);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `New website message from ${name.replace(/[\r\n]/g, " ")}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });
  if (!res.ok) return json({ error: "Could not send message. Try email instead." }, 502);
  return json({ ok: true });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/contact") return handleContact(request, env);
    return env.ASSETS.fetch(request);
  },
};
