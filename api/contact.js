import { sendContactEmail } from "../server/email/resend.js";
import { sanitizeContactPayload, validateContactPayload } from "../server/validation/contact.js";

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    return JSON.parse(req.body);
  }
  if (Buffer.isBuffer(req.body)) {
    return JSON.parse(req.body.toString("utf8"));
  }
  return req.body;
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const body = parseBody(req);
    const validation = validateContactPayload(body);

    if (!validation.ok) {
      return res.status(400).json({ success: false, message: validation.message });
    }

    const payload = sanitizeContactPayload(body);
    await sendContactEmail(payload);

    return res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Vercel contact API error:", err);

    const message =
      typeof err?.message === "string"
        ? err.message
        : "Something went wrong. Please try again later.";

    return res.status(500).json({ success: false, message });
  }
}
