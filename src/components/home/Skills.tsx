import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills & Tools"
            title={
              <>
                The toolkit behind <span className="text-gradient">the results</span>
              </>
            }
            description="The SEO disciplines, analytics platforms and web technologies I use every day on client projects."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-olive/10 bg-white/70 p-7">
                <h3 className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-teal-dark">
                  {group.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-olive/10 bg-ivory px-3 py-1.5 text-xs font-medium text-olive/75"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}