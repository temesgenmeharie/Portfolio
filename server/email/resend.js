import { Resend } from "resend";

function formatSubmittedAtUTC(date) {
  // Example: 2026-06-16 14:30 UTC
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");
  const hh = String(date.getUTCHours()).padStart(2, "0");
  const min = String(date.getUTCMinutes()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${min} UTC`;
}

export async function sendContactEmail({ name, email, subject, message }) {
  const apiKey = process.env.EMAIL_API_KEY;
  const receiver = process.env.CONTACT_RECEIVER_EMAIL;

  if (!apiKey) throw new Error("Missing EMAIL_API_KEY");
  if (!receiver) throw new Error("Missing CONTACT_RECEIVER_EMAIL");

  const resend = new Resend(apiKey);

  const submittedAt = formatSubmittedAtUTC(new Date());

  const text = [
    "New Contact Form Submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
    "",
    `Submitted At: ${submittedAt}`,
  ].join("\n");

  const html = `
  <h2>New Contact Form Submission</h2>
  <p><b>Name:</b> ${name}</p>
  <p><b>Email:</b> ${email}</p>
  <p><b>Subject:</b> ${subject}</p>
  <h3>Message</h3>
  <pre style="white-space: pre-wrap; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">${message}</pre>
  <p><b>Submitted At:</b> ${submittedAt}</p>
  `;

  await resend.emails.send({
    from: "no-reply@resend.dev",
    to: receiver,
    subject: `Contact Form: ${subject}`,
    text,
    html,
  });
}

