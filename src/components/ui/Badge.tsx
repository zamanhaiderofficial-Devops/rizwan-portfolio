import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "teal" | "olive" | "misty" | "light";
}

export function Badge({ children, className, tone = "teal" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        tone === "teal" && "bg-teal/10 text-teal-dark ring-1 ring-teal/20",
        tone === "olive" && "bg-olive text-ivory",
        tone === "misty" && "bg-misty text-olive ring-1 ring-olive/10",
        tone === "light" && "bg-white/10 text-ivory ring-1 ring-white/20",
        className
      )}
    >
      {children}
    </span>
  );
}