import ClientLogos from "@/components/ClientLogos";
import { BookServiceCTA } from "@/components/home/BookCTA";
import { Capabilities } from "@/components/home/Capabilities";
import { Hero } from "@/components/home/Hero";
import { HowWeWork } from "@/components/home/How";
import { Intro } from "@/components/home/Intro";
import { Stewardship } from "@/components/home/Stewardship";
import { PreFooter } from "@/components/PreFooter";
import { SectionReveal } from "@/components/ui/SectionReveal";



export default function Home() {
  return (
    <>
      <Hero />
      <SectionReveal>
        <Intro />
      </SectionReveal>

      <SectionReveal>
        <HowWeWork />
      </SectionReveal>

      <SectionReveal>
        <BookServiceCTA />
      </SectionReveal>

      <SectionReveal>
        <ClientLogos />
      </SectionReveal>

      <SectionReveal>
        <Capabilities />
      </SectionReveal>

      <SectionReveal>
        <Stewardship />
      </SectionReveal>

      <SectionReveal>
        <PreFooter />
      </SectionReveal>
    </>
  );
}
