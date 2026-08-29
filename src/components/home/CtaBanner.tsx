import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
      <div
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal/25 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-teal/20 blur-[120px]"
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal">
            Let&apos;s grow together
          </p>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-ivory sm:text-4xl md:text-5xl">
            Ready to turn search traffic into real revenue?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/60 sm:text-lg">
            Whether it&apos;s a full SEO strategy, a technical audit or a
            WordPress build — let&apos;s talk about what your website needs to
            rank.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-teal px-7 text-sm font-medium text-ivory transition-colors hover:bg-ivory hover:text-ink"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex h-12 items-center justify-center rounded-full border border-ivory/25 px-7 text-sm font-medium text-ivory transition-colors hover:border-teal hover:text-teal"
            >
              See my work
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}