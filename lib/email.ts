import { Resend } from "resend";
import type { ContactFormValues } from "./contact-schema";

const serviceLabel: Record<ContactFormValues["service"], string> = {
  sat: "SAT Prep",
  counseling: "College Counseling",
  both: "Both",
};

const timeLabel: Record<ContactFormValues["preferredTime"], string> = {
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening",
};

export async function sendContactEmail(data: ContactFormValues) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : "Phone: (not provided)",
    `Service: ${serviceLabel[data.service]}`,
    `Preferred consultation time: ${timeLabel[data.preferredTime]}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${data.phone ? escapeHtml(data.phone) : "(not provided)"}</p>
    <p><strong>Service:</strong> ${escapeHtml(serviceLabel[data.service])}</p>
    <p><strong>Preferred time:</strong> ${escapeHtml(timeLabel[data.preferredTime])}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
  `;

  if (!apiKey || !to) {
    console.info("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL missing — logging submission only.");
    console.info(text);
    return { ok: true as const, dev: true as const };
  }

  const resend = new Resend(apiKey);
  const from = process.env.CONTACT_FROM_EMAIL ?? "PrepPoint <onboarding@resend.dev>";

  const result = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `PrepPoint inquiry from ${data.name}`,
    text,
    html,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return { ok: true as const, dev: false as const };
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
