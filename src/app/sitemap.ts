import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: root, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${root}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${root}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${root}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${root}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${root}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${root}/work/${project.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${root}/blog/${post.slug}`,
    lastModified: new Date(post.dateISO),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}