import Link from "next/link";
import { navLinks, services, siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, LinkedIn, Mail, MapPin, Phone } from "@/components/ui/icons";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <Container className="grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ivory text-sm font-bold text-ink">
              RM
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Rizwan Mehdi<span className="text-teal">.</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">
            SEO Executive helping brands grow organic traffic, rankings and
            revenue through semantic SEO, technical excellence and content
            that converts.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-teal hover:bg-teal hover:text-ivory"
              aria-label="LinkedIn profile"
            >
              <LinkedIn className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-teal hover:bg-teal hover:text-ivory"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-teal hover:bg-teal hover:text-ivory"
              aria-label="Phone"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-ivory/50">
            Sitemap
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-ivory/70 transition-colors hover:text-teal"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-ivory/50">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-sm text-ivory/70 transition-colors hover:text-teal"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-ivory/50">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-ivory/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              {siteConfig.location}
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 transition-colors hover:text-teal"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-start gap-3 transition-colors hover:text-teal"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                {siteConfig.phone}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-ivory/50">
            © {currentYear} Rizwan Mehdi. All rights reserved.
          </p>
          <p className="font-mono text-xs text-ivory/40">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </Container>
      </div>
    </footer>
  );
}