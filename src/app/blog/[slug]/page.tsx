import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/data/blog";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { BlogCard } from "@/components/blog/BlogCard";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ArrowUpRight, Calendar, Clock } from "@/components/ui/icons";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.dateISO,
      url: `/blog/${slug}`,
      images: [{ url: post.image, width: 1600, height: 1000, alt: post.title }],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  return (
    <>
      <section className="border-b border-olive/10 bg-misty/40">
        <Container size="narrow" className="py-14 sm:py-20">
          <Reveal className="flex flex-col items-start gap-5">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{post.category}</Badge>
              <span className="flex items-center gap-1.5 text-sm text-olive/50">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.dateISO}>{post.date}</time>
              </span>
              <span className="flex items-center gap-1.5 text-sm text-olive/50">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-olive sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-olive/65">
              {post.lead}
            </p>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-bold text-ivory">
                RM
              </span>
              <div>
                <p className="text-sm font-semibold text-olive">{post.author}</p>
                <p className="text-xs text-olive/50">{post.authorRole}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container size="narrow" className="py-12">
        <Reveal className="relative overflow-hidden rounded-3xl border border-olive/10 shadow-xl shadow-teal/10">
          <Image
            src={post.image}
            alt={`${post.title} — cover image`}
            width={1600}
            height={1000}
            priority
            className="aspect-[16/8] w-full object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </Reveal>

        <article className="mt-12">
          {post.content.map((section) => (
            <Reveal key={section.heading} className="mb-10">
              <h2 className="text-2xl font-semibold tracking-tight text-olive sm:text-[1.7rem]">
                {section.heading}
              </h2>
              {section.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-5 text-base leading-[1.85] text-olive/70"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          ))}

          <Reveal className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-olive/10 pt-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} tone="misty">
                  #{tag}
                </Badge>
              ))}
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-teal-dark transition-colors hover:text-olive"
            >
              Back to all articles
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </article>
      </Container>

      <section className="border-t border-olive/10 bg-misty/30 py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal-dark">
              More reading
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-olive sm:text-3xl">
              Related articles
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {related.map((post) => (
              <Reveal key={post.slug} delay={0.05}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}