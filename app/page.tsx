import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { AboutTeaser } from "@/components/about-teaser";
import { ServicesGrid } from "@/components/services-grid";
import { Testimonials } from "@/components/testimonials";
import { CtaBand } from "@/components/cta-band";
import { ContactTeaser } from "@/components/contact-teaser";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Expert college counseling and SAT tutoring. Personalized plans, flexible sessions, and admissions guidance from PrepPoint Tutors.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ServicesGrid />
      <Testimonials />
      <CtaBand />
      <ContactTeaser />
    </>
  );
}
