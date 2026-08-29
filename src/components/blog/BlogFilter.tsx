"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { blogCategories, blogPosts } from "@/data/blog";
import { BlogCard } from "./BlogCard";
import { CategoryTabs } from "@/components/ui/CategoryTabs";

type Category = (typeof blogCategories)[number];

export function BlogFilter() {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return blogPosts;
    return blogPosts.filter((p) => p.category === active);
  }, [active]);

  return (
    <div>
      <CategoryTabs
        categories={["All", ...blogCategories]}
        active={active}
        onChange={(c) => setActive(c as Category | "All")}
      />
      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((post) => (
            <motion.div
              key={post.slug}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}