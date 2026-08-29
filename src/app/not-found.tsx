import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-misty/40">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <Container className="relative flex flex-col items-center text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-dark">
          Error 404
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-olive sm:text-6xl">
          This page fell off the SERP
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-olive/65">
          The page you&apos;re looking for was moved, removed or never
          indexed. Let&apos;s get you back to ranking territory.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-7 text-sm font-medium text-ivory transition-colors hover:bg-teal"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-olive/25 px-7 text-sm font-medium text-olive transition-colors hover:border-teal hover:text-teal"
          >
            Contact me
          </Link>
        </div>
      </Container>
    </section>
  );
}