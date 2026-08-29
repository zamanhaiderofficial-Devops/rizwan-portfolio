"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectCategories, projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { CategoryTabs } from "@/components/ui/CategoryTabs";

type Category = (typeof projectCategories)[number];

export function ProjectFilter() {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.categories.includes(active as Category));
  }, [active]);

  return (
    <div>
      <CategoryTabs
        categories={["All", ...projectCategories]}
        active={active}
        onChange={(c) => setActive(c as Category | "All")}
      />
      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}