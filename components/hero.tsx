import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const heroImage =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  return (
    <section className="relative min-h-[min(85vh,720px)] overflow-hidden">
      <Image
        src={heroImage}
        alt="Students studying together with a tutor"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" aria-hidden />
      <div className="relative mx-auto flex min-h-[min(85vh,720px)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {siteConfig.tagline}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Get Into Your Dream College with Expert Guidance
        </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-200">
          Personalized SAT prep and flexible college counseling—built around your goals, timeline, and learning style.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-navy shadow-lg transition hover:bg-accent-hover"
          >
            Book a Free Consultation
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
