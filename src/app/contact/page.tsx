import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  ArrowUpRight,
  LinkedIn,
  Mail,
  MapPin,
  Phone,
} from "@/components/ui/icons";
import { pageDescriptions, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Let's Work Together",
  description: pageDescriptions.contact,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Let's Work Together | Rizwan Mehdi",
    description: pageDescriptions.contact,
    url: "/contact",
  },
};

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: undefined,
  },
  {
    icon: LinkedIn,
    label: "LinkedIn",
    value: "Rizwan Mehdi",
    href: siteConfig.linkedin,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s grow your <span className="text-gradient">organic traffic</span>
          </>
        }
        description="Tell me about your website and your goals — I'll reply with honest thoughts on where the SEO opportunity is."
      />
      <Container className="grid gap-12 pb-20 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-5">
          {contactCards.map((card, i) => {
            const Wrapper = card.href ? Link : "div";
            const external = card.href?.startsWith("http");
            return (
              <Reveal key={card.label} delay={i * 0.06}>
                <Wrapper
                  href={card.href ?? "#"}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={
                    card.href
                      ? "group flex items-start gap-4 rounded-2xl border border-olive/10 bg-white/70 p-5 transition-all hover:-translate-y-0.5 hover:border-teal/30 hover:shadow-lg hover:shadow-teal/10"
                      : "flex items-start gap-4 rounded-2xl border border-olive/10 bg-white/70 p-5"
                  }
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/12 text-teal-dark">
                    <card.icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-olive/45">
                      {card.label}
                    </p>
                    <p className="mt-1 font-medium text-olive">{card.value}</p>
                  </div>
                  {card.href ? (
                    <ArrowUpRight className="h-4 w-4 text-olive/30 transition-all group-hover:text-teal" />
                  ) : null}
                </Wrapper>
              </Reveal>
            );
          })}

          <Reveal delay={0.25}>
            <div className="rounded-2xl bg-ink p-6 text-ivory">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-misty">
                {'"'}Ranking is the outcome. Growth is the goal.{'"'}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                Currently available for freelance SEO projects, audits and
                WordPress builds. Average response time: within 24 hours.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </Container>
    </>
  );
}