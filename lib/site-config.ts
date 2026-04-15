export const siteConfig = {
  name: "PrepPoint Tutors",
  tagline: "Expert College Prep & SAT Tutoring",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@preppointtutors.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "(555) 123-4567",
  social: {
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? "#",
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? "#",
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? "#",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
