import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { ArrowUpRight, Check } from "@/components/ui/icons";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="bg-ivory py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What I do"
            align="center"
            title={
              <>
                SEO services engineered for <span className="text-gradient">rankings</span>
              </>
            }
            description="From technical foundations to semantic content strategies — every service is built around one goal: measurable organic growth."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-olive/10 bg-white/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-xl hover:shadow-teal/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/12 text-teal-dark transition-colors group-hover:bg-teal group-hover:text-ivory">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-olive">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-olive/60">
                  {service.description}
                </p>
                <ul className="mt-5 flex flex-1 flex-col gap-2">
                  {service.deliverables.slice(0, 3).map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex items-start gap-2 text-sm text-olive/70"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal-dark">
                  Explore service
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}