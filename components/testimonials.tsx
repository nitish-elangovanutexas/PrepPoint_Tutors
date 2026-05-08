const items = [
  {
    quote:
      "Nitish broke down the entire application process for me. His personal experience as a UT admit made all the difference — I knew exactly what the admissions team was looking for.",
    name: "Pranav Anil",
    result: "UT Austin Admit",
  },
  {
    quote:
      "The college list strategy and essay help were incredibly targeted. Nitish knew what UT wanted and helped me show exactly that.",
    name: "Sahasra B.",
    result: "UT Austin Admit",
  },
  {
    quote:
      "I came in overwhelmed and left with a clear plan. Nitish's roadmap made every step feel doable and I got into my top choice.",
    name: "Roopesh T.",
    result: "UT Austin Admit",
  },
  {
    quote:
      "I didn't think Berkeley was realistic for me. Nitish pushed me to aim higher, helped me craft a strong application, and I got in.",
    name: "Satvik S.",
    result: "UT Austin & UC Berkeley Admit",
  },
  {
    quote:
      "Nitish helped me understand how the admissions process actually works — not just the surface stuff. That insider knowledge is what sets him apart.",
    name: "Ashrith Chinta",
    result: "UT Austin Admit",
  },
  {
    quote:
      "Clear, practical, and results-focused. Nitish helped me put together an application I was genuinely proud of.",
    name: "Yash Challa",
    result: "UT Austin Admit",
  },
  {
    quote:
      "Nitish helped me understand exactly what UT Austin looks for in an applicant. His guidance on building my college list and crafting my essays made the whole process feel a lot less overwhelming — and it paid off.",
    name: "Bhavdeep S.",
    result: "UT Austin Admit",
  },
  {
    quote:
      "Nitish helped me build an application strong enough to get into one of the most selective schools in the country.",
    name: "Dheeraz",
    result: "Northeastern University Admit (5.2% Acceptance Rate)",
  },
] as const;

export function Testimonials() {
  return (
    <section className="border-y border-border bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Real students. Real results.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
          15+ students admitted last summer to top universities across the country.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-navy">{t.name}</p>
                <p className="mt-0.5 text-sm font-medium text-accent">{t.result}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
