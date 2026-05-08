import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg font-bold text-white">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-slate-400">{siteConfig.tagline}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Contact
            </p>
            <p className="mt-3 text-sm">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-accent">
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-700 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Footer">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-accent">
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
