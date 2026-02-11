import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System & Architecture Design Services | Artisanery Tech",
  description:
    "Scalable system architecture design for SaaS platforms, enterprise systems, and high-growth products. API design, infrastructure planning, and performance modeling.",
  keywords: [
    "system architecture design",
    "software architecture consulting",
    "scalable SaaS architecture",
    "API design services",
    "enterprise system design",
  ],
  openGraph: {
    title: "System & Architecture Design | Artisanery Tech",
    description:
      "Resilient, scalable architecture built for long-term product growth.",
    url: "https://artisanery.tech/services/product-engineering/system-architecture-design",
    siteName: "Artisanery Tech",
    type: "website",
  },
};

export default function SystemArchitecturePage() {
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
            name: "System & Architecture Design",
            item:
              "https://artisanery.tech/services/product-engineering/system-architecture-design",
          },
        ],
      };
      
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "System & Architecture Design",
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
        title="System & Architecture Design"
        description="Designing scalable, resilient system architectures that support long-term product growth, performance, and maintainability."
      />

      <ServiceContent
        intro="Strong architecture determines whether a product scales smoothly or collapses under complexity. We design systems that remain stable under growth."
        sections={[
          {
            title: "Architecture Strategy",
            content:
              "High-level system design, service boundaries, domain modeling, infrastructure planning, and technology stack alignment.",
          },
          {
            title: "Scalability & Resilience",
            content:
              "Load distribution strategies, caching layers, database optimization, redundancy modeling, and failure isolation planning.",
          },
          {
            title: "API & Data Design",
            content:
              "REST and GraphQL API modeling, versioning strategy, authentication flows, database schema design, and performance indexing.",
          },
          {
            title: "When This Is Critical",
            content:
              "• Pre-MVP architecture decisions\n• Systems experiencing performance strain\n• Rapidly growing SaaS platforms\n• Enterprises rebuilding legacy systems",
          },
        ]}
      />

      <ServiceCTA />
    </>
  );
}
