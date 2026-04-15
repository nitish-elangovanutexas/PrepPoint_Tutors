import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PrepPoint Tutors for SAT prep and college counseling. Send a message or book a free consultation.",
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">Contact &amp; free consultation</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            This is the same place to reach us for general questions or to request a free consultation—no separate
            booking system. Tell us about your goals and we&apos;ll follow up. You can also email{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-navy underline decoration-accent">
              {siteConfig.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="font-semibold text-navy underline">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
