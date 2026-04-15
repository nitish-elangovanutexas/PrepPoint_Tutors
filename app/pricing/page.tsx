import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flexible hourly pricing for college admissions counseling ($45/hr) and SAT prep ($40/hr) at PrepPoint Tutors.",
};

export default function PricingPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">Pricing</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Simple hourly rates—no rigid packages. You choose how many sessions you want. Reach out for a free
            consultation and we&apos;ll suggest a pace that fits your goals.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col rounded-2xl border-2 border-accent bg-card p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-navy">College admissions counseling</h2>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-navy">$45</span>
                <span className="text-lg text-muted">/ hour</span>
              </p>
              <p className="mt-6 leading-relaxed text-muted">
                Flexible scheduling: book as many or as few sessions as you need. A full, thorough admissions plan—from
                school list and strategy through essays and application polish—typically takes about{" "}
                <strong className="text-foreground">8 sessions</strong> for many students, but we adapt to your timeline
                and where you are in the process.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-foreground">
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    ✓
                  </span>
                  Pay only for the time you use—no long-term lock-in
                </li>
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    ✓
                  </span>
                  School list, essays, supplements, and application strategy
                </li>
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    ✓
                  </span>
                  Sessions shaped around your priorities each week
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 rounded-lg bg-accent py-3 text-center text-sm font-semibold text-navy transition hover:bg-accent-hover"
              >
                Contact us to get started
              </Link>
            </div>

            <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-navy">SAT preparation</h2>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-navy">$40</span>
                <span className="text-lg text-muted">/ hour</span>
              </p>
              <p className="mt-6 leading-relaxed text-muted">
                Also billed hourly with full flexibility—you decide how many sessions to take based on your target score,
                diagnostic results, and test date. We&apos;ll recommend a rhythm, but you stay in control of how much
                time you invest.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-foreground">
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    ✓
                  </span>
                  Math, Reading &amp; Writing, or mixed focus per session
                </li>
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    ✓
                  </span>
                  Practice review, pacing, and test-day strategy
                </li>
                <li className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    ✓
                  </span>
                  Study plan adjusted as your strengths and schedule change
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 rounded-lg border border-navy py-3 text-center text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Contact us to get started
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
