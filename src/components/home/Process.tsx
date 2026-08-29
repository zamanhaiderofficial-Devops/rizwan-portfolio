import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/site";

export function Process() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The Process"
            align="center"
            title={
              <>
                A clear path from <span className="text-gradient">audit to growth</span>
              </>
            }
            description="No black boxes. A simple, transparent process that turns SEO from a mystery into a system."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-olive/10 bg-olive/10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <div key={step.step} className="relative bg-ivory p-8">
              <Reveal delay={i * 0.07}>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-dark">
                  Step {step.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-olive">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-olive/60">
                  {step.description}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}