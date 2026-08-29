import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BlogCard } from "@/components/blog/BlogCard";
import { ArrowRight } from "@/components/ui/icons";
import { blogPosts } from "@/data/blog";

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="From the Blog"
              title={
                <>
                  Latest <span className="text-gradient">SEO insights</span>
                </>
              }
              description="Practical, strategy-first articles on the tactics I use with real client projects."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-teal-dark transition-colors hover:text-olive"
            >
              Read all articles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}