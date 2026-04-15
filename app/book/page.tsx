import { permanentRedirect } from "next/navigation";

/** Legacy URL: booking is handled through the contact form (no external calendar). */
export default function BookPage() {
  permanentRedirect("/contact");
}
