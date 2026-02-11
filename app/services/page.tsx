import { ServicesHero } from "@/components/services/Hero";
import { ServicesOverview } from "@/components/services/Intro";
import { ServiceGrid } from "@/components/services/ServicesGrid";
import { DeliveryModel } from "@/components/services/DeliveryModel";
import { ServicesFAQ } from "@/components/services/FAQ";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { BookServiceCTA } from "@/components/home/BookCTA";
import { PreFooter } from "@/components/PreFooter";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <SectionReveal>
        <ServicesOverview />
      </SectionReveal>

      <SectionReveal>
        <ServiceGrid />
      </SectionReveal>

      <SectionReveal>
        <BookServiceCTA />
      </SectionReveal>

      <SectionReveal>
        <DeliveryModel />
      </SectionReveal>

      <SectionReveal>
        <ServicesFAQ />
      </SectionReveal>

      <SectionReveal>
        <PreFooter />
      </SectionReveal>
    </>
  );
}
