import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function PerfomanceIndexabilityOptimization() {
  return (
    <>
      <ServiceHero
        label="// VERTICAL SPECIALIZATION"
        title="Performance Indexability Optimization"
        description="Advanced SEO engineering for complex platforms, multi-tenant systems, and product-led architectures."
      />

      <ServiceContent
        intro="Modern SaaS and platform-based systems introduce search challenges that traditional SEO agencies are not equipped to solve. Multi-tenancy, authentication walls, dynamic rendering, API documentation, and integration pages require architectural solutions — not surface-level optimizations. We design indexability strategies that preserve performance, security, and scalability."
        sections={[
          {
            title: "Multi-tenant SEO Challenges",
            content:
              "Multi-tenant platforms often generate thousands of near-duplicate or parameterized URLs. We implement tenant-aware routing strategies, canonical logic, structured URL hierarchies, and controlled indexing policies to prevent duplication, authority dilution, and crawl waste while preserving discoverability where appropriate.",
          },
          {
            title: "Auth-Wall Visibility Strategies",
            content:
              "Product-led growth platforms frequently hide valuable content behind authentication. We design controlled preview layers, public documentation mirrors, and structured marketing surfaces that expose high-value content to search engines without compromising security or user data.",
          },
          {
            title: "Documentation SEO",
            content:
              "Technical documentation is often a major organic acquisition channel. We optimize documentation architecture through semantic structuring, internal linking systems, version-aware canonicalization, and search-friendly rendering strategies to maximize visibility without sacrificing developer usability.",
          },
          {
            title: "Integration Page Strategy",
            content:
              "Integration and ecosystem pages are high-intent search assets. We design scalable integration templates with structured metadata, consistent URL logic, and performance-aware rendering to ensure each integration page contributes measurable organic value.",
          },
          {
            title: "API Documentation Indexability",
            content:
              "API references frequently suffer from poor crawlability due to dynamic rendering or fragmented routing. We implement static or hybrid rendering strategies, structured data enhancements, and optimized navigation hierarchies to ensure API documentation becomes a discoverable, authoritative asset rather than an isolated resource.",
          },
        ]}
      />

      <ServiceCTA />
    </>
  );
}
