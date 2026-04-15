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
      "Many families begin in sophomore or junior year for planning, but we also support seniors with school lists, essays, and deadlines. We’ll recommend a timeline in your free consultation.",
  },
  {
    question: "Are sessions only in person?",
    answer:
      "Most sessions are online so you can stay consistent with school and activities. If you are local and prefer in person, mention it when you contact us and we can discuss options.",
  },
  {
    question: "How do personalized study plans work?",
    answer:
      "We look at your classes, activities, and test dates, then set weekly priorities you can realistically complete. Plans are adjusted as your schedule changes.",
  },
  {
    question: "Do you offer a free consultation?",
    answer:
      "Yes. Use the contact form to tell us about your goals and availability—we will follow up to schedule a free consultation. There is no obligation to enroll after we talk.",
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
