import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Quote } from "@/components/ui/icons";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            align="center"
            title={
              <>
                What clients say about <span className="text-gradient">working with me</span>
              </>
            }
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-olive/10 bg-ivory p-7">
                <Quote className="h-7 w-7 text-teal" />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-olive/75">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-olive/10 pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm font-bold text-ivory">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-olive">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-olive/55">
                      {testimonial.role} — {testimonial.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}