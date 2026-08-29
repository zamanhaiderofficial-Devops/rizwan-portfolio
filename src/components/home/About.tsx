import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Check, LinkedIn } from "@/components/ui/icons";
import { profile, siteConfig } from "@/data/site";

export function About() {
  return (
    <section id="about" className="bg-ivory py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="relative order-1">
          <div className="relative overflow-hidden rounded-3xl border border-olive/10 shadow-2xl shadow-teal/15">
            <Image
              src={profile.headshot}
              alt="Rizwan Mehdi — SEO Executive"
              width={1200}
              height={1000}
              className="aspect-[6/5] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-4 rounded-2xl border border-olive/10 bg-white p-5 shadow-xl sm:left-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal text-lg font-bold text-ivory">
              2+
            </span>
            <div>
              <p className="font-semibold text-olive">Years of SEO</p>
              <p className="text-sm text-olive/55">experience & counting</p>
            </div>
          </div>
        </Reveal>

        <div className="order-2">
          <Reveal>
            <Eyebrow>About me</Eyebrow>
            <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold tracking-tight text-olive sm:text-4xl">
              Search-obsessed, results-driven SEO executive
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-olive/70">
              {profile.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {profile.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm text-olive/75"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
                    <Check className="h-3 w-3" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/about"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-teal px-7 text-sm font-medium text-ivory transition-colors hover:bg-teal-dark"
              >
                More about me
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-olive/25 px-7 text-sm font-medium text-olive transition-colors hover:border-teal hover:text-teal"
              >
                <LinkedIn className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}