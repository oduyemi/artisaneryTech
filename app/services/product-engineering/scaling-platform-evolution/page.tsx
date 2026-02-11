import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function ScalingPlatformEvolutionPage() {
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
            name: "Scaling & Platform Evolution",
            item:
              "https://artisanery.tech/services/product-engineering/scaling-platform-evolution",
          },
        ],
      };
      
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Scaling & Platform Evolution",
        description:
          "Scalable system architecture design, API modeling, infrastructure planning, and performance optimization for modern software products.",
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
        title="Scaling & Platform Evolution"
        description="Evolving growing platforms into stable, scalable systems capable of supporting long-term product and market expansion."
      />

      <ServiceContent
        intro="As products grow, complexity compounds. We restructure and evolve platforms to handle increased traffic, larger datasets, and expanding feature sets."
        sections={[
          {
            title: "Platform Refactoring",
            content:
              "Codebase restructuring, modularization, removal of technical debt, and improved maintainability patterns.",
          },
          {
            title: "Performance Optimization",
            content:
              "Database indexing, caching strategies, query optimization, load testing, and performance monitoring implementation.",
          },
          {
            title: "Infrastructure Evolution",
            content:
              "Microservices transitions, containerization, cloud scaling strategies, distributed system alignment, and CI/CD hardening.",
          },
          {
            title: "When This Is Critical",
            content:
              "• User growth exceeding infrastructure capacity\n• Frequent outages or degraded performance\n• Feature velocity slowing due to complexity\n• Investors requiring technical due diligence readiness",
          },
        ]}
      />

      <ServiceCTA />
    </>
  );
}
