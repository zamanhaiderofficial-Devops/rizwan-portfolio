"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoryTabsProps<T extends string> {
  categories: readonly T[];
  active: T;
  onChange: (category: T) => void;
  className?: string;
}

export function CategoryTabs<T extends string>({
  categories,
  active,
  onChange,
  className,
}: CategoryTabsProps<T>) {
  return (
    <div
      className={cn(
        "scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 py-1 sm:mx-0 sm:flex-wrap sm:px-0",
        className
      )}
      role="tablist"
      aria-label="Filter by category"
    >
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={cn(
              "relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors sm:shrink",
              isActive
                ? "text-ivory"
                : "text-olive/70 hover:text-olive"
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="category-active"
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            ) : (
              <span className="absolute inset-0 rounded-full border border-olive/15 transition-colors hover:border-teal/40" />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}