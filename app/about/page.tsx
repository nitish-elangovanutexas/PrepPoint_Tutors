import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nitish Elangovan is a UT Austin Data Science student in the Polymathic Scholars honors program who personally helped 15+ students gain admission to top universities last summer.",
};

const stats = [
  { value: "15+", label: "Students Helped" },
  { value: "7+", label: "UT Austin Admits" },
  { value: "Top 5%", label: "Acceptance Rate Schools" },
] as const;

const results = [
  {
    school: "UT Austin",
    count: "7+ Admits",
    note: "My home school — I navigated the process myself and know exactly what they look for.",
  },
  {
    school: "UC Berkeley",
    count: "1 Admit",
    note: "A reach school we targeted strategically with a focused application narrative.",
  },
  {
    school: "Northeastern University",
    count: "1 Admit",
    note: "5.2% acceptance rate. The right strategy made the difference.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            PrepPoint Tutors
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            About Nitish Elangovan
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-orange-100">
            Nitish is a rising sophomore at UT Austin, studying Data Science in the Polymathic
            Scholars honors program. Last summer, he worked one-on-one with 15+ students through
            the college application process — and watched them get into UT Austin, UC Berkeley,
            Northeastern, and more. He&apos;s not just familiar with the process; he went through
            it himself and knows what actually moves the needle.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-accent sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-muted sm:text-base">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-md lg:max-w-none">
                <Image
                  src="/tutoring_pfp.jpeg"
                  alt="Nitish Elangovan"
                  width={400}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy">My background</h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted">
                <p>
                  Nitish is a rising sophomore at UT Austin studying Data Science in the{" "}
                  <strong className="text-foreground">Polymathic Scholars honors program</strong>.
                  Last summer he worked closely with{" "}
                  <strong className="text-foreground">15+ students</strong> — helping each one
                  build a strong, authentic application — and saw{" "}
                  <strong className="text-foreground">7+ admitted to UT Austin</strong>, one to{" "}
                  <strong className="text-foreground">UC Berkeley</strong>, and one to{" "}
                  <strong className="text-foreground">Northeastern</strong>. The results came from
                  real investment in each student&apos;s story, not a one-size-fits-all approach.
                </p>
                <p>
                  Nitish personally leads every session, so you always work directly with someone
                  who has been through the process themselves.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-navy shadow-lg transition hover:bg-accent-hover"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy">Last summer&apos;s results</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            These are real students I personally worked with — from first session to submitted
            application. No co-counselors, no handoffs.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {results.map((r) => (
              <div
                key={r.school}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm"
              >
                <p className="text-lg font-bold text-navy">{r.school}</p>
                <p className="mt-1 text-2xl font-bold text-accent">{r.count}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy">Ready to build your application?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Book a call and we&apos;ll map out a plan specific to your goals, timeline, and target
            schools.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-navy shadow-lg transition hover:bg-accent-hover"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
