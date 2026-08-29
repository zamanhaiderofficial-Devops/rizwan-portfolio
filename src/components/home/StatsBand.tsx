import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { heroStats } from "@/data/site";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-20">
      <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-teal/20 blur-[120px]"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.07}>
              <div className="border-l border-teal/40 pl-5">
                <StatCounter
                  value={`${stat.value}${stat.suffix}`}
                  label={stat.label}
                  valueClassName="!text-ivory"
                  className="[&>p]:!text-ivory/60"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}