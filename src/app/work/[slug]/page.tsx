import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getProjectBySlug,
  getRelatedProjects,
  projects,
} from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatCounter } from "@/components/ui/StatCounter";
import { ProjectCard } from "@/components/work/ProjectCard";
import { CtaBanner } from "@/components/home/CtaBanner";
import {
  ArrowUpRight,
  Calendar,
  Check,
  MapPin,
  Tag,
} from "@/components/ui/icons";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.client} — ${project.category} Case Study`,
    description: project.summary,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: `${project.client} — ${project.category} Case Study`,
      description: project.summary,
      url: `/work/${slug}`,
      images: [{ url: project.image, width: 1600, height: 1000, alt: project.title }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug);
  const challengeImage = project.gallery[0] ?? project.image;
  const approachImage = project.gallery[1] ?? project.image;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-olive/10 bg-gradient-to-b from-misty via-white to-ivory">
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
        <Container className="relative py-12 sm:py-16">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-olive/55 transition-colors hover:text-teal"
            >
              <span aria-hidden="true">←</span>
              Back to all projects
            </Link>
          </Reveal>

          <Reveal
            delay={0.05}
            className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start lg:gap-12"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge>{project.category}</Badge>
                {project.categories.slice(1).map((c) => (
                  <Badge key={c} tone="misty">
                    {c}
                  </Badge>
                ))}
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-teal-dark">
                Case study · {project.year}
              </p>
              <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-olive sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-olive/65 sm:text-lg">
                {project.summary}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-olive/60">
                <span>{project.client}</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-teal" />
                <span>{project.industry}</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-teal" />
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-teal" />
                  {project.location}
                </span>
              </div>
            </div>

            <aside className="rounded-3xl border border-olive/10 bg-white/85 p-7 shadow-xl shadow-teal/10 backdrop-blur sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal/15 text-teal-dark">
                    <Tag className="h-4 w-4" />
                  </span>
                  <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-teal-dark">
                    Case details
                  </h2>
                </div>
                <span className="rounded-full bg-misty px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-olive ring-1 ring-olive/10">
                  {project.year}
                </span>
              </div>
              <dl className="mt-5 divide-y divide-olive/10 border-y border-olive/10 text-sm">
                <div className="flex items-start justify-between gap-4 py-3.5">
                  <dt className="text-olive/50">Client</dt>
                  <dd className="text-right font-medium text-olive">
                    {project.client}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 py-3.5">
                  <dt className="text-olive/50">Location</dt>
                  <dd className="text-right font-medium text-olive">
                    {project.location}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 py-3.5">
                  <dt className="text-olive/50">Industry</dt>
                  <dd className="text-right font-medium text-olive">
                    {project.industry}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 py-3.5">
                  <dt className="text-olive/50">Scope</dt>
                  <dd className="text-right font-medium text-olive">
                    {project.categories.join(" · ")}
                  </dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-col gap-2.5 text-sm text-olive/60">
                <span className="flex items-center gap-2.5">
                  <Calendar className="h-4 w-4 text-teal" />
                  Active since {project.year}
                </span>
                <span className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-teal" />
                  {project.location}
                </span>
              </div>
              <Link
                href="/contact"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-medium text-ivory transition-colors hover:bg-ink"
              >
                Start a similar project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </aside>
          </Reveal>
        </Container>
      </section>

      {/* Banner image */}
      <Container className="relative -mt-10 pb-4 sm:-mt-14">
        <Reveal className="relative overflow-hidden rounded-3xl border border-olive/10 shadow-2xl shadow-teal/15">
          <Image
            src={project.image}
            alt={`${project.client} — ${project.category} case study cover`}
            width={1600}
            height={1000}
            priority
            className="aspect-[16/8] w-full object-cover"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </Reveal>
      </Container>

      {/* Stats */}
      <Container className="pb-16 pt-12 sm:pb-20 sm:pt-16">
        <Reveal>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-olive/10 bg-olive/10 sm:grid-cols-3">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center bg-white/90 px-6 py-9 text-center"
              >
                <StatCounter
                  value={stat.value}
                  label={stat.label}
                  valueClassName="sm:text-3xl"
                />
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>

      {/* Challenge */}
      <Container className="pb-16 sm:pb-20">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Phase 01</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-olive sm:text-4xl">
              The challenge
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-olive/70 sm:text-lg">
            {project.challenge}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <figure className="relative mt-8 overflow-hidden rounded-3xl border border-olive/10 shadow-xl shadow-teal/10">
            <Image
              src={challengeImage}
              alt={`${project.client} — the challenge overview`}
              width={1600}
              height={1000}
              className="aspect-[16/8] w-full object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </figure>
        </Reveal>
      </Container>

      {/* Approach */}
      <Container className="pb-16 sm:pb-20">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Phase 02</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-olive sm:text-4xl">
              The approach
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-olive/70 sm:text-lg">
            {project.solution}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <figure className="relative mt-8 overflow-hidden rounded-3xl border border-olive/10 shadow-xl shadow-teal/10">
            <Image
              src={approachImage}
              alt={`${project.client} — the approach in action`}
              width={1600}
              height={1000}
              className="aspect-[16/8] w-full object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </figure>
        </Reveal>
      </Container>

      {/* Services & tools */}
      <Container className="pb-16 sm:pb-20">
        <Reveal className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-olive/10 bg-white/80 p-7 sm:p-9">
            <Eyebrow>Services delivered</Eyebrow>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {project.services.map((service) => (
                <Badge key={service} tone="misty">
                  {service}
                </Badge>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-olive/10 bg-white/80 p-7 sm:p-9">
            <Eyebrow>Tools used</Eyebrow>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {project.tools.map((tool) => (
                <Badge key={tool}>{tool}</Badge>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>

      {/* Project results */}
      <Container className="pb-16 sm:pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-olive/10 bg-gradient-to-br from-misty/70 via-white to-ivory">
            <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
            <div className="relative px-6 py-12 sm:px-12 sm:py-16">
              <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                <Eyebrow>Outcomes</Eyebrow>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-olive sm:text-4xl">
                  Project results
                </h2>
                <p className="mt-4 text-olive/60">
                  The measurable difference this engagement made for{" "}
                  {project.client}.
                </p>
              </div>
              <ul className="mt-10 grid gap-5 sm:grid-cols-2">
                {project.highlights.map((result) => (
                  <li
                    key={result.title}
                    className="flex items-start gap-4 rounded-2xl border border-olive/10 bg-white/85 p-6 transition-colors hover:border-teal/30"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal text-ivory shadow-lg shadow-teal/25">
                      <Check className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                    <div className="pt-0.5">
                      <h3 className="font-semibold text-olive">{result.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-olive/60">
                        {result.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Next case study */}
      <section className="border-t border-olive/10 bg-misty/30 py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal-dark">
              Keep exploring
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-olive sm:text-3xl">
              Related projects
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((relatedProject) => (
              <Reveal key={relatedProject.slug} delay={0.05}>
                <ProjectCard project={relatedProject} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}