interface MarqueeProps {
  items: string[];
  className?: string;
  tone?: "light" | "dark";
}

export function Marquee({ items, className, tone = "light" }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={className ?? "relative overflow-hidden"}>
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap py-1">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={
              tone === "dark"
                ? "font-mono text-xs uppercase tracking-[0.3em] text-ivory/50"
                : "font-mono text-xs uppercase tracking-[0.3em] text-olive/45"
            }
          >
            {item}
          </span>
        ))}
        <span aria-hidden="true" />
      </div>
    </div>
  );
}