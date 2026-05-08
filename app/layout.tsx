import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@vercel/analytics/next";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PrepPoint Tutors | College Counseling & SAT Prep",
    template: "%s | PrepPoint Tutors",
  },
  description:
    "Personalized SAT prep and college admissions counseling. Expert tutors help you navigate applications and reach your goals.",
  keywords: [
    "SAT tutoring",
    "college counseling",
    "college admissions help",
    "college prep",
    "admissions counseling",
    "personalized study plans",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PrepPoint Tutors",
    title: "PrepPoint Tutors | College Counseling & SAT Prep",
    description:
      "Personalized SAT prep and college admissions counseling from experienced tutors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
