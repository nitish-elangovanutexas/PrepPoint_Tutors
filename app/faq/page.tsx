import type { Metadata } from "next";
import { FAQAccordion, type FaqItem } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers about SAT prep, college counseling, and how PrepPoint Tutors works with students and families.",
};

const faqs: FaqItem[] = [
  {
    question: "How do SAT tutoring sessions work?",
    answer:
      "Sessions are typically one-on-one and focused on your goals—whether that’s content review, timed practice, or test strategy. We use diagnostics and homework to make each hour count.",
  },
  {
    question: "When should we start college counseling?",
    answer:
      "Honestly? Any time in high school is a great time to start — we build a roadmap that meets you exactly where you are. That said, the summer before senior year is one of the highest-impact times to work together, since college applications are in full swing and strategic guidance can make a real difference in outcomes. We’ve worked with students at every stage and always find ways to add value.",
  },
  {
    question: "Are all sessions online?",
    answer:
      "Yes — all sessions are conducted online via Google Meet. Sessions are generally one hour long, though we can adjust based on what you need that day.",
  },
  {
    question: "How do personalized study plans work?",
    answer:
      "We look at your classes, activities, and test dates, then set weekly priorities you can realistically complete. Plans are adjusted as your schedule changes.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just reach out via the contact form or book a call directly. Tell us a bit about your goals and where you are in the process — we'll follow up quickly to figure out the best next step together.",
  },
];

export default function FaqPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">Frequently asked questions</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Quick answers about our methods. If you don&apos;t see your question, reach out on the contact page.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
