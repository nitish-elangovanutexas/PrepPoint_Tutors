import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    return NextResponse.json({ error: "Validation failed", fields: first }, { status: 400 });
  }

  if (parsed.data.website?.trim()) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.error("[contact]", e);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
