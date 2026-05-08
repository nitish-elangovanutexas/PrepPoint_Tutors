export const siteConfig = {
  name: "PrepPoint Tutors",
  tagline: "Expert College Prep & SAT Tutoring",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "preppointtutoring0@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "(512) 590-4495",
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
