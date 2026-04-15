import Link from "next/link";

export function AboutTeaser() {
  return (
    <section className="border-b border-border bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Why PrepPoint Tutors?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            At PrepPoint Tutors, we provide personalized SAT prep and college counseling to help you navigate the
            admissions process with confidence. Our experienced tutors work with you to develop strategies that fit your
            needs, schedule, and goals—so you can focus on what matters most.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center font-semibold text-navy-mid underline decoration-accent decoration-2 underline-offset-4 transition hover:text-accent"
          >
            Learn more about us
          </Link>
        </div>
      </div>
    </section>
  );
}
