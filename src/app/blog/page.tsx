import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import { pageDescriptions } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog — SEO Insights",
  description: pageDescriptions.blog,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — SEO Insights | Rizwan Mehdi",
    description: pageDescriptions.blog,
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title={
          <>
            SEO thinking, <span className="text-gradient">in practice</span>
          </>
        }
        description="Step-by-step guides on semantic SEO, topical authority, keyword clustering, Core Web Vitals and the tactics I use on real client projects."
      />
      <Container className="pb-16 sm:pb-20">
        <Reveal>
          <BlogFilter />
        </Reveal>
      </Container>
      <CtaBanner />
    </>
  );
}