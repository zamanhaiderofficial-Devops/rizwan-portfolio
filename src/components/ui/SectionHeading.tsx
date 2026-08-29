import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <Eyebrow tone={tone === "dark" ? "light" : "dark"}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.6rem] md:leading-[1.15]",
          tone === "dark" ? "text-ivory" : "text-olive"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-ivory/70" : "text-olive/70"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}