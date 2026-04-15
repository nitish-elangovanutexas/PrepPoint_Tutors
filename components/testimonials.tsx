"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

const items = [
  {
    quote: "PrepPoint helped me raise my SAT score by 250 points! The study plan actually fit my schedule.",
    name: "Jordan M.",
    role: "Class of 2026",
    avatar: "https://i.pravatar.cc/128?img=12",
  },
  {
    quote: "Thanks to their guidance, I got into my top-choice school. The essay feedback was invaluable.",
    name: "Priya S.",
    role: "Parent",
    avatar: "https://i.pravatar.cc/128?img=47",
  },
  {
    quote: "Flexible sessions made college counseling possible alongside sports. Clear, calm, and practical advice.",
    name: "Alex R.",
    role: "Student-athlete",
    avatar: "https://i.pravatar.cc/128?img=33",
  },
] as const;

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="border-y border-border bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          What families say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
          Real outcomes from students and parents we&apos;ve supported.
        </p>

        <div className="mt-10 hidden gap-6 md:grid md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <blockquote className="flex-1 text-foreground/90">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {items.map((t) => (
                <div key={t.name} className="min-w-0 flex-[0_0_100%]">
                  <figure className="flex min-h-[220px] flex-col rounded-2xl border border-border bg-background p-6 shadow-sm">
                    <blockquote className="flex-1 text-foreground/90">&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <Image
                        src={t.avatar}
                        alt=""
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-navy">{t.name}</p>
                        <p className="text-sm text-muted">{t.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                className={clsx(
                  "h-2 rounded-full transition",
                  i === selected ? "w-6 bg-accent" : "w-2 bg-border"
                )}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <button
              type="button"
              onClick={scrollPrev}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-navy"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-navy"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
