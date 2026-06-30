import { z } from "zod";

// Minimal, robust sanitization:
// - trim
// - remove control chars (except common whitespace)
// - keep content as string
function sanitizeString(value) {
  return String(value)
    .trim()
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Full Name is required"),
  email: z.string().trim().min(1, "Email Address is required").email("Invalid email format"),
  subject: z.string().trim().min(1, "Subject is required"),
  message: z.string().trim().min(1, "Message is required"),
});

export function validateContactPayload(raw) {
  const result = contactSchema.safeParse(raw);
  if (!result.success) {
    // Zod returns structured issues; map to first issue message.
    const first = result.error.issues?.[0];
    return { ok: false, message: first?.message || "Invalid request" };
  }
  return { ok: true };
}

export function sanitizeContactPayload(raw) {
  return {
    name: sanitizeString(raw.name),
    email: sanitizeString(raw.email),
    subject: sanitizeString(raw.subject),
    message: sanitizeString(raw.message),
  };
}

