import Link from "next/link";

export function CtaBand() {
  return (
    <section className="bg-navy py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to take the next step?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          Send a message to request a free consultation—we&apos;ll map a path that works for your timeline and goals.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-navy shadow-lg transition hover:bg-accent-hover"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
