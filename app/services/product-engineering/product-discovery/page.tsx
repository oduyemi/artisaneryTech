import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function ProductDiscoveryPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Services",
        item: "https://artisanery.tech/services",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Product Engineering",
        item: "https://artisanery.tech/services/product-engineering",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Product Discovery & Validation",
        item:
          "https://artisanery.tech/services/product-engineering/product-discovery-validation",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Product Discovery & Validation",
    description:
      "Structured product discovery and validation process designed to reduce risk, clarify scope, and ensure technical feasibility before engineering investment.",
    provider: {
      "@type": "Organization",
      name: "Artisanery Tech",
      url: "https://artisanery.tech",
    },
    areaServed: "Global",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <ServiceHero
        label="// PRODUCT ENGINEERING"
        title="Product Discovery & Validation"
        description="Clarifying product direction, validating assumptions, and defining technical feasibility before meaningful engineering begins."
      />

      <ServiceContent
        intro="Before building software, we ensure the product concept is strategically aligned, technically feasible, and commercially viable. Discovery reduces risk, eliminates ambiguity, and creates a structured path toward execution."
        sections={[
          {
            title: "Strategic Product Framing",
            content:
              "Stakeholder workshops, vision clarification, user persona definition, market positioning analysis, and structured problem articulation. We translate abstract ideas into executable product strategies.",
          },
          {
            title: "Assumption & Risk Mapping",
            content:
              "Identification of critical assumptions, technical unknowns, scalability risks, regulatory considerations, and operational constraints. We surface hidden complexity early — before capital is deployed.",
          },
          {
            title: "Technical Feasibility & Architecture Preview",
            content:
              "Early system modeling, infrastructure direction, API strategy, database considerations, integration mapping, and performance forecasting to validate engineering viability.",
          },
          {
            title: "Scope Definition & Prioritization",
            content:
              "Feature breakdown, MVP scoping, user journey mapping, dependency sequencing, and roadmap structuring aligned with capital efficiency and time-to-market objectives.",
          },
          {
            title: "When This Is Critical",
            content:
              "• Pre-seed and seed-stage founders preparing for build\n• Teams pivoting product direction\n• Enterprises launching new digital platforms\n• Projects suffering from scope creep or unclear objectives\n• Founders preparing for investor due diligence",
          },
        ]}
      />

      <ServiceCTA />
    </>
  );
}
