import Script from "next/script";
import { AboutCTA } from "@/components/about/CTA";
import { AboutHero } from "@/components/about/Hero";
import { AboutIntro } from "@/components/about/Intro";
import { AboutOperatingModel } from "@/components/about/Model";
import { AboutPhilosophy } from "@/components/about/Philosophy";
import { AboutPrinciples } from "@/components/about/Principle";
import { AboutTimeline } from "@/components/about/Timeline";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { PreFooter } from "@/components/PreFooter";

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Artisanery Tech",
    url: "https://artisanery.io",
    logo: "https://artisanery.io/logo.png",
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US"
    },
    description:
      "Artisanery Tech is a US-based software development company specializing in custom software development, scalable web applications, product strategy, and long-term software architecture.",
    serviceType: [
      "Custom Software Development",
      "Product Strategy",
      "Software Consulting",
      "Enterprise Architecture",
      "Scalable Web Applications"
    ],
    foundingDate: "2024"
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <AboutHero />

      <SectionReveal>
        <AboutIntro />
      </SectionReveal>

      <SectionReveal>
        <AboutPhilosophy />
      </SectionReveal>

      <SectionReveal>
        <AboutPrinciples />
      </SectionReveal>

      <SectionReveal>
        <AboutTimeline />
      </SectionReveal>

      <SectionReveal>
        <AboutOperatingModel />
      </SectionReveal>

      <SectionReveal>
        <AboutCTA />
      </SectionReveal>

      <SectionReveal>
        <PreFooter />
      </SectionReveal>
    </>
  );
}
