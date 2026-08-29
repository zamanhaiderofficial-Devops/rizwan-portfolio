import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { FeaturedProject } from "@/components/work/FeaturedProject";
import { ProjectFilter } from "@/components/work/ProjectFilter";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { pageDescriptions } from "@/data/site";

export const metadata: Metadata = {
  title: "Work — SEO Case Studies",
  description: pageDescriptions.work,
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — SEO Case Studies | Rizwan Mehdi",
    description: pageDescriptions.work,
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="My Work"
        title={
          <>
            Projects that moved the{" "}
            <span className="text-gradient">organic needle</span>
          </>
        }
        description="On-Page, Technical, Local, Content & Semantic SEO and WordPress builds — real projects, real search intent, measurable growth."
      />
      <Container className="pb-16 sm:pb-20">
        <Reveal>
          <FeaturedProject />
        </Reveal>

        <div className="mt-16 sm:mt-20">
          <Reveal>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-olive sm:text-3xl">
              All projects
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-olive/60 sm:text-base">
              Filter by category — every project below has its own case study
              with the challenge, the strategy and the results.
            </p>
          </Reveal>
          <div className="mt-8">
            <Reveal delay={0.05}>
              <ProjectFilter />
            </Reveal>
          </div>
        </div>
      </Container>
      <CtaBanner />
    </>
  );
}