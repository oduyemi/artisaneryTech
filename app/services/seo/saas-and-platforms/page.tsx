import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function SaasAndPlatformsPage() {
  return (
    <>
      <ServiceHero
        label="// SAAS GROWTH ENGINEERING"
        title="SEO for SaaS & Platforms"
        description="Scalable, architecture-driven SEO designed for product-led growth."
      />

      <ServiceContent
        intro="SaaS platforms face search challenges that traditional websites do not. Multi-tenant environments, dynamic routing, gated product experiences, integrations, and technical documentation require architectural SEO decisions — not surface-level optimizations. We design search visibility strategies that align with product structure, scalability, and long-term growth."
        sections={[
          {
            title: "Multi-Layer Indexability Control",
            content:
              "We implement intelligent indexation strategies across marketing pages, product surfaces, tenant-generated content, and gated environments. This ensures high-value pages are discoverable while preventing duplication, thin content, or crawl waste common in SaaS architectures.",
          },
          {
            title: "Scalable Sitemap Architecture",
            content:
              "SaaS platforms evolve rapidly. We design automated, dynamic sitemap systems aligned with your routing logic and feature hierarchy. Whether supporting integration libraries, documentation hubs, or feature templates, your sitemap remains accurate, canonical, and growth-ready.",
          },
          {
            title: "Crawl Budget & Routing Optimization",
            content:
              "Dynamic parameters, filters, and tenant paths can exhaust crawl budgets quickly. We eliminate crawl traps, optimize internal linking, and enforce routing discipline to ensure search engines prioritize the pages that drive acquisition and conversion.",
          },
          {
            title: "Canonicalization & Authority Consolidation",
            content:
              "Feature variations, regional paths, and duplicate content can fragment ranking signals. We implement canonical strategies and redirect logic that consolidate authority and maintain a clear hierarchy across your platform.",
          },
          {
            title: "Structured Data for Product-Led Growth",
            content:
              "We embed schema markup directly into your application layer to enhance visibility for features, integrations, documentation, and use cases. Structured data improves search interpretation, eligibility for rich results, and organic click-through performance.",
          },
        ]}
      />

      <ServiceCTA />
    </>
  );
}
