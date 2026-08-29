import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { SelectedWork } from "@/components/home/SelectedWork";
import { StatsBand } from "@/components/home/StatsBand";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Skills } from "@/components/home/Skills";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogPreview } from "@/components/home/BlogPreview";
import { Faq } from "@/components/home/Faq";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <StatsBand />
      <Services />
      <Process />
      <Skills />
      <Testimonials />
      <BlogPreview />
      <Faq />
      <CtaBanner />
    </>
  );
}