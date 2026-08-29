"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: string;
  label: string;
  className?: string;
  valueClassName?: string;
}

export function StatCounter({
  value,
  label,
  className,
  valueClassName,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const match = value.match(/^(\d+)(.*)$/);
  const isNumeric = Boolean(match);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(isNumeric ? "0" : value);

  useEffect(() => {
    if (!isNumeric) return;
    if (!inView) return;
    let frame = 0;
    const duration = 1100;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(String(Math.round(target * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setDisplay(String(target));
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, isNumeric, target, value]);

  return (
    <div ref={ref} className={cn(className)}>
      <div
        className={cn(
          "text-3xl font-bold tracking-tight text-teal-dark sm:text-4xl",
          valueClassName
        )}
      >
        {display}
        {suffix}
      </div>
      <p className="mt-2 text-sm leading-snug text-olive/60">{label}</p>
    </div>
  );
}