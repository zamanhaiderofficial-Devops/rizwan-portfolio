import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";
import { ArrowRight } from "@/components/ui/icons";
import { projects } from "@/data/projects";

export function SelectedWork() {
  const selected = projects.slice(0, 2);
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Selected Work"
              title={
                <>
                  Case studies that <span className="text-gradient">speak for themselves</span>
                </>
              }
              description="A look at two projects where SEO strategy turned into measurable, first-page results."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-teal-dark transition-colors hover:text-olive"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {selected.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}