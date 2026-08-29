import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}

export function Eyebrow({ children, className, tone = "dark" }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.25em]",
        tone === "dark" ? "text-teal-dark" : "text-misty",
        className
      )}
    >
      <span className={cn("h-px w-8", tone === "dark" ? "bg-teal" : "bg-teal")} aria-hidden="true" />
      {children}
    </span>
  );
}