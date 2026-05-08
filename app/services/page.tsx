import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SAT preparation, college admissions counseling, and AP & academic tutoring from PrepPoint Tutors.",
};

const sections = [
  {
    id: "sat",
    title: "SAT Preparation",
    body: [
      "We start with a diagnostic view of your strengths and gaps, then build a prep schedule that fits your week—not a one-size-fits-all cram.",
      "You’ll get targeted practice, review of missed questions, and strategies for pacing and mindset on test day.",
      "Sessions can focus on Math, Reading & Writing, or both, with progress tracking so you always know where you stand.",
    ],
  },
  {
    id: "counseling",
    title: "College Admissions Counseling",
    body: [
      "From building a balanced school list to managing deadlines, we help you stay organized and intentional.",
      "We support essay brainstorming, supplements, and application review—always with your voice at the center.",
      "Counseling is flexible: schedule sessions when you need them, whether that’s early planning or crunch time.",
    ],
  },
  {
    id: "ap",
    title: "AP & Academic Tutoring",
    body: [
      "Struggling with AP classes, regular high school coursework, or even middle school subjects? We provide targeted help across all subjects — math, science, English, history, and more — with a focus on building real understanding, not just memorizing answers.",
      "Subject-specific sessions for AP, honors, and standard courses.",
      "Middle school through senior year support — exam prep, homework help, and concept building.",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">Services</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Three core ways we support students. Every engagement is tailored—combine services or start with what you
            need most.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-navy">{s.title}</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
                {s.body.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-navy">See packages and pricing</p>
            <p className="mt-1 text-muted">Tell us your goals on the contact form—we&apos;ll recommend pacing and pricing.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pricing"
              className="rounded-lg border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              View pricing
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-accent-hover"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
