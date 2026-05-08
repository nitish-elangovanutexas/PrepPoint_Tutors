import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flexible hourly pricing for college consulting ($40/hr) and SAT & academic tutoring ($35/hr) at PrepPoint Tutors.",
};

export default function PricingPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">Pricing</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Simple hourly rates—no rigid packages. You choose how many sessions you want.{" "}
            <Link href="/contact" className="font-semibold text-navy underline decoration-accent">
              Book a call to get started.
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col rounded-2xl border-2 border-accent bg-card p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-navy">College Consulting</h2>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-navy">$40</span>
                <span className="text-lg text-muted">/ hour</span>
              </p>
              <p className="mt-6 leading-relaxed text-muted">
                Flexible scheduling: book as many or as few sessions as you need. A full admissions plan—from school
                list and strategy through essays and application polish—typically takes about{" "}
                <strong className="text-foreground">8 sessions</strong> for many students, but we adapt to your
                timeline and where you are in the process.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-foreground">
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>✓</span>
                  Pay only for the time you use—no long-term lock-in
                </li>
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>✓</span>
                  School list, essays, supplements, and application strategy
                </li>
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>✓</span>
                  Sessions shaped around your priorities — meet as often as you need
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-auto pt-8 block rounded-lg bg-accent py-3 text-center text-sm font-semibold text-navy transition hover:bg-accent-hover"
              >
                Book a Call
              </Link>
            </div>

            <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-navy">SAT &amp; Academic Tutoring</h2>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-navy">$35</span>
                <span className="text-lg text-muted">/ hour</span>
              </p>
              <p className="mt-6 leading-relaxed text-muted">
                SAT prep, AP classes, and general high school and middle school subject help—all billed hourly with full
                flexibility. You decide how many sessions to take based on your goals, and we&apos;ll recommend a rhythm
                that keeps you on track.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-foreground">
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>✓</span>
                  SAT Math, Reading &amp; Writing, or mixed focus per session
                </li>
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>✓</span>
                  AP subjects and high school &amp; middle school coursework
                </li>
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>✓</span>
                  Study plan adjusted as your strengths and schedule change
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-auto pt-8 block rounded-lg border border-navy py-3 text-center text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Book a Call
              </Link>
            </div>
          </div>

          <p className="mt-12 text-center text-sm text-muted">
            Questions?{" "}
            <Link href="/faq" className="font-semibold text-navy underline">
              Read FAQs
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-navy underline">
              send us a message
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
