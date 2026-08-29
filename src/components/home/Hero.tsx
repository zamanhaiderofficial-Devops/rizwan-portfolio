import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { ArrowUpRight, LinkedIn, TrendingUp, Search, Spark } from "@/components/ui/icons";
import { heroStats, marqueeItems, siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-misty/70 via-ivory to-ivory">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-teal/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-32 top-1/3 h-[380px] w-[380px] rounded-full bg-misty blur-[100px]"
        aria-hidden="true"
      />

      <Container className="relative grid min-h-[86svh] items-center gap-12 py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <Reveal>
            <Badge tone="teal" className="mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              {siteConfig.availability}
            </Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-dark sm:text-sm">
              SEO Executive · Lahore, Pakistan
            </p>
          </Reveal>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-olive sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Turning search signals into{" "}
            <span className="text-gradient">measurable growth</span>
          </h1>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-olive/70 sm:text-lg">
              {siteConfig.name} — {siteConfig.role} with 2+ years of hands-on
              experience in On-Page, Technical and Off-Page SEO. Semantic SEO,
              topical authority and content-driven strategy that ranks.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/work"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-medium text-ivory transition-colors hover:bg-teal"
              >
                View my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-olive/25 px-7 text-sm font-medium text-olive transition-colors hover:border-teal hover:text-teal"
              >
                Let&apos;s talk
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <StatCounter
                    value={`${stat.value}${stat.suffix}`}
                    label={stat.label}
                    valueClassName="!text-2xl sm:!text-3xl"
                  />
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={40} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div className="animate-float-slow relative overflow-hidden rounded-3xl border border-white/60 bg-ink p-8 shadow-2xl shadow-teal/20 sm:p-10">
              <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
              <div
                className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-teal/30 blur-[80px]"
                aria-hidden="true"
              />
              <div className="relative flex items-center justify-between">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ivory text-xl font-bold text-ink">
                  RM
                </span>
                <Badge tone="light">Open to work</Badge>
              </div>
              <div className="relative mt-8">
                <p className="text-xl font-semibold text-ivory">
                  Rizwan Mehdi
                </p>
                <p className="mt-1 text-sm text-ivory/60">
                  SEO Executive & WordPress Developer
                </p>
              </div>
              <div className="relative mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: TrendingUp, label: "Traffic", value: "+120%" },
                  { icon: Search, label: "Rankings", value: "Page 1" },
                  { icon: Spark, label: "CWV", value: "Green" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-ivory/10 bg-ivory/5 p-3"
                  >
                    <item.icon className="h-4 w-4 text-teal" />
                    <p className="mt-2 text-sm font-semibold text-ivory">
                      {item.value}
                    </p>
                    <p className="text-[11px] text-ivory/50">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-float absolute -left-4 -top-5 rounded-2xl border border-olive/10 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:-left-10">
              <p className="text-xs text-olive/55">Organic traffic</p>
              <p className="text-lg font-bold text-teal-dark">+120%</p>
            </div>
            <div className="animate-float absolute -bottom-6 -right-2 rounded-2xl border border-olive/10 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:-right-6">
              <p className="text-xs text-olive/55">Keywords ranked</p>
              <p className="text-lg font-bold text-teal-dark">Page 1</p>
            </div>
          </div>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-2 rounded-full border border-olive/15 bg-white/60 px-5 py-3 text-sm font-medium text-olive backdrop-blur-sm transition-colors hover:border-teal hover:text-teal"
          >
            <LinkedIn className="h-4 w-4" />
            Connect on LinkedIn
          </a>
        </Reveal>
      </Container>

      <div className="relative border-y border-olive/10 bg-white/40 py-4 backdrop-blur-sm">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  );
}