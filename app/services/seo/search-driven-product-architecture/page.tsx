import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function SearchDrivenProductArchitecturePage() {
  return (
    <>
      <ServiceHero
        label="// GROWTH ENGINEERING"
        title="Search-Driven Product Architecture"
        description="Product structures engineered for discoverability, indexability, and scalable organic growth."
      />

      <ServiceContent
        intro="Search visibility should not be an afterthought. We architect products with structured URL systems, scalable content frameworks, and indexable page models designed to generate sustainable organic traffic."
        sections={[
          {
            title: "Programmatic SEO Architecture",
            content:
              "Dynamic page generation, structured URL hierarchy modeling, scalable landing page frameworks, and automated content indexing systems.",
          },
          {
            title: "Search-Intent Mapping",
            content:
              "Keyword clustering aligned with product features, search journey modeling, internal linking systems, and conversion-aligned content structuring.",
          },
          {
            title: "Technical Visibility Engineering",
            content:
              "Schema markup implementation, crawl path optimization, canonical management, sitemap structuring, and structured data modeling.",
          },
          {
            title: "Performance & Indexability",
            content:
              "SSR/SSG optimization, rendering strategy alignment, edge caching, image optimization pipelines, and Core Web Vitals compliance.",
          },
          {
            title: "Commercial Outcomes",
            content:
              "• Increased qualified organic traffic\n• Lower acquisition cost\n• Sustainable growth infrastructure\n• Competitive search positioning\n• Product-led traffic expansion",
          },
        ]}
      />

      <ServiceCTA />
    </>
  );
}
