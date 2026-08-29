import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types";
import { ArrowUpRight, Clock } from "@/components/ui/icons";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-olive/10 bg-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={`${post.title} — SEO blog article cover`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-ivory/90 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-olive backdrop-blur-sm">
            {post.category}
          </span>
        </div>
        <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-ink text-ivory opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-3 text-xs text-olive/50">
          <time dateTime={post.dateISO}>{post.date}</time>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-olive/30" />
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-olive transition-colors group-hover:text-teal-dark">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-olive/60">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-4">
          <span className="text-sm font-medium text-teal-dark">
            {post.author}
          </span>
        </div>
      </div>
    </Link>
  );
}