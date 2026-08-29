import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("pb-12 pt-14 sm:pb-16 sm:pt-20", className)}>
      <Container>
        <Reveal className="flex flex-col gap-5">
          <div className={cn(align === "center" && "mx-auto flex flex-col items-center text-center")}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1
              className={cn(
                "mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-olive sm:text-5xl md:text-6xl"
              )}
            >
              {title}
            </h1>
            {description ? (
              <p
                className={cn(
                  "mt-5 max-w-2xl text-base leading-relaxed text-olive/65 sm:text-lg",
                  align === "center" && "mx-auto"
                )}
              >
                {description}
              </p>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}