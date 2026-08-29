import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { ArrowRight, MapPin } from "@/components/ui/icons";

interface ProjectCardProps {
  project: Project;
}

function clientInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .filter(Boolean)
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-olive/10 bg-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/30 hover:shadow-2xl hover:shadow-teal/15"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.client} — ${project.category} case study`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/5 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-ivory/90 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-ink backdrop-blur">
            {project.category}
          </span>
          <span className="inline-flex items-center rounded-full bg-ink/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-ivory backdrop-blur">
            {project.year}
          </span>
        </div>
        <span className="absolute right-4 top-4 flex h-11 w-11 translate-y-1 items-center justify-center rounded-full bg-ivory text-ink opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowRight className="h-4 w-4" />
        </span>
        <span className="absolute bottom-4 right-4 hidden items-center gap-1.5 text-xs font-medium text-ivory sm:inline-flex">
          <MapPin className="h-3.5 w-3.5" />
          {project.location}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <h3 className="text-balance text-lg font-semibold leading-snug tracking-tight text-olive transition-colors group-hover:text-teal-dark sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-olive/60 sm:text-[15px]">
          {project.summary}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-olive/10 pt-4 sm:mt-6">
          <span className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-misty text-xs font-semibold uppercase text-olive ring-1 ring-olive/10">
              {clientInitials(project.client)}
            </span>
            <span className="text-sm font-medium text-olive">
              {project.client}
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-dark opacity-80 transition-opacity group-hover:opacity-100">
            Read case study
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}