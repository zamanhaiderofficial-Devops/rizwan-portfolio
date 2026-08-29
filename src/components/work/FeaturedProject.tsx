import Link from "next/link";
import { featuredProject } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowUpRight,
  Calendar,
  MapPin,
  TrendingUp,
} from "@/components/ui/icons";

export function FeaturedProject() {
  const project = featuredProject;
  return (
    <section className="relative overflow-hidden rounded-3xl border border-olive/10 bg-gradient-to-br from-misty via-white to-ivory">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="relative flex flex-col gap-8 p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:p-12">
        <div className="max-w-xl">
          <Badge className="mb-4">Featured Case Study</Badge>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal-dark">
            {project.category} · {project.year}
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold leading-snug tracking-tight text-olive sm:text-3xl md:text-4xl md:leading-tight">
            How Urban Pet Guide broke through to Google&apos;s first page
          </h2>
          <p className="mt-4 text-base leading-relaxed text-olive/70">
            A new pet content site with zero organic visibility became an
            authority — 100+ structured articles, semantic keyword clusters and
            5 target pages ranking on page one.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={`/work/${project.slug}`}
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-ivory transition-colors hover:bg-teal"
            >
              View Case Study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-full border border-olive/25 px-6 text-sm font-medium text-olive transition-colors hover:border-teal hover:text-teal"
            >
              Start a project
            </Link>
          </div>
        </div>

        <div className="w-full shrink-0 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg shadow-teal/10 backdrop-blur-sm lg:max-w-md">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal/15 text-teal-dark">
              <TrendingUp className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-base font-semibold tracking-tight text-olive">
                The results
              </h3>
              <p className="text-xs text-olive/60">
                A content-driven semantic SEO program in numbers
              </p>
            </div>
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-xl font-bold tracking-tight text-teal-dark sm:text-2xl">
                  {stat.value}
                </dd>
                <dt className="mt-0.5 text-xs leading-snug text-olive/55">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-olive/10 pt-4 text-xs text-olive/60">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-teal" />
              {project.year} · Ongoing
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-teal" />
              {project.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}