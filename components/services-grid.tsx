import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "SAT Preparation",
    description:
      "Targeted practice, score diagnostics, and test-day strategies to help you reach your best SAT score.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&h=500&q=80",
    anchor: "sat",
    imageLabel: "Student writing and studying at a desk",
  },
  {
    title: "College Admissions Counseling",
    description:
      "School list strategy, essays, applications, and timelines—personalized for your story and ambitions.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&h=500&q=80",
    anchor: "counseling",
    imageLabel: "Graduation caps celebrating academic success",
  },
  {
    title: "AP & Academic Tutoring",
    description:
      "Targeted help across AP classes, high school, and middle school subjects — math, science, English, history, and more.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&h=500&q=80",
    anchor: "ap",
    imageLabel: "Student studying at a desk with open books",
  },
] as const;

export function ServicesGrid() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Three ways we support students—from test prep to full admissions guidance.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.anchor}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full bg-border">
                <Image
                  src={s.image}
                  alt={s.imageLabel}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 flex-1 text-muted">{s.description}</p>
                <Link
                  href={`/services#${s.anchor}`}
                  className="mt-6 inline-flex w-fit items-center rounded-lg border border-navy/15 bg-background px-4 py-2 text-sm font-semibold text-navy transition hover:border-accent hover:text-accent"
                >
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
