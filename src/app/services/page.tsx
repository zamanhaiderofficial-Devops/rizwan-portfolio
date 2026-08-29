import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Process } from "@/components/home/Process";
import { Faq } from "@/components/home/Faq";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Check } from "@/components/ui/icons";
import { pageDescriptions, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services — SEO & Web Development",
  description: pageDescriptions.services,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — SEO & Web Development | Rizwan Mehdi",
    description: pageDescriptions.services,
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Search-first services that <span className="text-gradient">compound over time</span>
          </>
        }
        description="Every engagement is scoped around your goals — with clear deliverables, tools and expectations. Pick a service or combine them into a full SEO program."
      />

      <Container className="flex flex-col gap-16 pb-20 lg:gap-20">
        {services.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className="grid scroll-mt-24 gap-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16"
          >
            <Reveal className="order-1">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/12 text-teal-dark">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-olive/40">
                  Service 0{i + 1}
                </span>
              </div>
              <h2 className="mt-5 text-balance text-2xl font-semibold leading-tight tracking-tight text-olive sm:text-3xl">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-olive/70">
                {service.description}
              </p>
              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal-dark">
                  Tools I use
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <Badge key={tool} tone="misty">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="order-2">
              <div className="rounded-2xl border border-olive/10 bg-white/70 p-7 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal-dark">
                  What&apos;s included
                </p>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {service.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex items-start gap-3 text-sm leading-relaxed text-olive/75 sm:text-base"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
                        <Check className="h-3 w-3" />
                      </span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </section>
        ))}
      </Container>

      <Process />
      <Faq />
      <CtaBanner />
    </>
  );
}