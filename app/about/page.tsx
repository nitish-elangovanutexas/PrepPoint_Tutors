import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Nitish Elengovan and Jayaditya Vetsa—the team behind PrepPoint Tutors college counseling and SAT prep.",
};

const team = [
  {
    name: "Nitish Elengovan",
    role: "Co-founder & Tutor",
    bio: "Focused on clear, practical college strategy and strong communication with families—so students always know the next step.",
    image:
      "https://ui-avatars.com/api/?name=Nitish+Elengovan&size=400&background=1e3a5f&color=c9a227&bold=true",
  },
  {
    name: "Jayaditya Vetsa",
    role: "Co-founder & Tutor",
    bio: "Works with students on SAT skills and admissions planning, with an emphasis on flexible sessions that fit real school weeks.",
    image:
      "https://ui-avatars.com/api/?name=Jayaditya+Vetsa&size=400&background=0f172a&color=c9a227&bold=true",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About PrepPoint Tutors</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            We believe college admissions should feel manageable—not mysterious. PrepPoint is a small team by design:
            you work directly with us, get honest feedback, and build a plan that fits your schedule.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy">Our mission</h2>
              <p className="mt-6 leading-relaxed text-muted">
                PrepPoint exists to give students flexible, high-quality support for the SAT and the college
                application process. Whether you need a handful of targeted sessions or a longer arc toward a cohesive
                application, we keep the work organized and the expectations realistic.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                No cookie-cutter packages—just hourly sessions you control, clear communication, and strategies tailored
                to your goals.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                alt="Students collaborating on college planning"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy">Meet the team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
            Two tutors, one standard: we show up prepared, listen first, and adjust as your needs change.
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-10 sm:grid-cols-2">
            {team.map((member) => (
              <article
                key={member.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
              >
                <div className="relative aspect-square w-full max-h-72 sm:max-h-none sm:aspect-[4/3]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width:640px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-navy">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{member.role}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-12 text-center text-muted">
            <Link href="/contact" className="font-semibold text-navy underline decoration-accent">
              Get in touch
            </Link>{" "}
            to tell us about your goals—we&apos;ll reply with next steps.
          </p>
        </div>
      </section>
    </div>
  );
}
