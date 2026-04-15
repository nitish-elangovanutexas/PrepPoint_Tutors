import Link from "next/link";

export function ContactTeaser() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Have a question?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
          Send us a message—we typically reply within one business day.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-lg border-2 border-navy bg-transparent px-8 py-3.5 text-base font-semibold text-navy transition hover:bg-navy hover:text-white"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
