import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Skills } from "@/components/home/Skills";
import { CtaBanner } from "@/components/home/CtaBanner";
import { StatsBand } from "@/components/home/StatsBand";
import {
  ArrowRight,
  Check,
  Clock,
  Mail,
  MapPin,
  Pin,
  Tag,
  TrendingUp,
} from "@/components/ui/icons";
import { experience, pageDescriptions, profile, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About — Rizwan Mehdi",
  description: pageDescriptions.about,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Rizwan Mehdi",
    description: pageDescriptions.about,
    url: "/about",
  },
};

const quickFactIcons = {
  pin: Pin,
  clock: Clock,
  tag: Tag,
  mail: Mail,
} as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            The person behind <span className="text-gradient">the rankings</span>
          </>
        }
        description="A 2+ year SEO journey from intern to executive — and the tools, discipline and curiosity that get client sites on page one."
      />

      <Container className="grid gap-8 pb-16 lg:grid-cols-[1fr_1.1fr] lg:items-stretch lg:gap-12">
        <Reveal>
          <div className="relative h-full">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-28 w-28 rounded-3xl bg-teal/15 sm:h-32 sm:w-32"
            />
            <div className="relative h-full overflow-hidden rounded-3xl border border-olive/10 bg-misty shadow-xl shadow-teal/15">
              <Image
                src={profile.headshot}
                alt="Rizwan Mehdi — SEO Executive portrait"
                width={1200}
                height={1000}
                className="aspect-[6/5] h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/85 p-4 shadow-lg backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-olive">{siteConfig.name}</p>
                    <p className="text-sm text-olive/60">{siteConfig.role}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal-dark ring-1 ring-teal/20">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <div className="flex h-full flex-col rounded-3xl border border-olive/10 bg-white/70 p-6 shadow-lg shadow-teal/5 sm:p-8 lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal/12 text-teal-dark">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-olive">Quick facts</h2>
                  <p className="text-sm text-olive/55">
                    A snapshot of my SEO background
                  </p>
                </div>
              </div>

              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                {profile.quickFacts.map((fact) => {
                  const Icon = quickFactIcons[fact.icon];
                  return (
                    <div
                      key={fact.label}
                      className="rounded-2xl bg-misty/50 p-5 transition hover:bg-misty"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-teal-dark shadow-sm">
                        <Icon className="h-4 w-4" />
                      </span>
                      <dt className="mt-3 text-xs font-medium uppercase tracking-wider text-olive/50">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-olive">
                        {fact.value}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-olive/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="inline-flex items-center gap-2 text-sm text-olive/70">
                <span className="flex h-2 w-2 rounded-full bg-teal" />
                {siteConfig.availability}
              </p>
              <p className="inline-flex items-center gap-1.5 text-sm text-olive/70">
                <MapPin className="h-4 w-4 text-teal-dark" />
                Based in Lahore, working worldwide
              </p>
            </div>
          </div>
        </Reveal>
      </Container>

      <Container className="grid gap-8 pb-16 lg:grid-cols-2 lg:items-start lg:gap-16">
        <Reveal>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-olive/70 sm:text-lg">
            {profile.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-olive/10 bg-misty/40 p-6 sm:p-7">
            <h2 className="text-lg font-semibold text-olive">
              What makes my approach different
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {profile.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm text-olive/75"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
                    <Check className="h-3 w-3" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>

      <Container className="pb-20">
        <Reveal>
          <SectionHeading
            eyebrow="Career"
            title="Where I have worked"
            description="Two years, two teams — from learning the trade as an intern to owning SEO execution end to end."
          />
        </Reveal>

        <div className="relative mt-10">
          <div
            aria-hidden="true"
            className="absolute inset-y-2 left-[14px] w-0.5 bg-gradient-to-b from-teal/40 via-teal/20 to-transparent"
          />
          <ol className="space-y-8">
            {experience.map((job, i) => (
              <li key={job.period} className="relative pl-12 sm:pl-14">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-teal/30 bg-white"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-teal" />
                </span>
                <Reveal delay={i * 0.08}>
                  <div className="relative rounded-2xl border border-olive/10 bg-white/70 p-6 transition duration-300 hover:border-teal/30 hover:shadow-xl hover:shadow-teal/10 sm:p-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-teal">
                          {job.period}
                        </p>
                        <h3 className="mt-1.5 text-xl font-semibold text-olive">
                          {job.role}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-teal-dark">
                          {job.company}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs text-olive/50 sm:pt-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                    </div>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-olive/70"
                        >
                          <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>

      <StatsBand />
      <Skills />
      <CtaBanner />
    </>
  );
}