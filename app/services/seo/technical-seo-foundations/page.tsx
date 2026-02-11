import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function TechnicalSEOFoundationsPage() {
  return (
    <>
      <ServiceHero
        label="// ENGINEERING LAYER SEO"
        title="TECHNICAL SEO FOUNDATIONS"
        description="Search visibility engineered directly into your application architecture."
      />

      <ServiceContent
        intro="Technical SEO is not a marketing task — it is an engineering responsibility. If your platform cannot be efficiently crawled, interpreted, and indexed, growth efforts will always underperform. We implement structural SEO controls at the application layer to ensure search engines can access, understand, and prioritize your content correctly."
        sections={[
          {
            title: "Indexability Control",
            content:
              "We implement granular control over what search engines can and cannot index. Through strategic use of meta directives, header configurations, environment-aware rules, and route-level policies, we prevent duplicate environments, thin content, and low-value pages from polluting search results while ensuring priority assets remain discoverable.",
          },
          {
            title: "Sitemap Architecture",
            content:
              "We design scalable, automated sitemap systems aligned with your routing logic and content structure. Whether static, dynamic, or multi-regional, your sitemap reflects canonical URLs, prioritizes key content, and updates automatically as your application evolves.",
          },
          {
            title: "Robots & Crawl Budget Optimization",
            content:
              "Search engines allocate limited crawl resources to each domain. We eliminate crawl traps, control parameterized URLs, optimize robots directives, and streamline internal linking to ensure critical pages are crawled efficiently and indexed faster.",
          },
          {
            title: "Canonicalization",
            content:
              "Duplicate paths, inconsistent URL patterns, and query-based variations dilute ranking authority. We implement canonical tags, redirect strategies, and URL normalization rules that consolidate authority and create a single source of truth for every page.",
          },
          {
            title: "Structured Data",
            content:
              "We integrate schema markup at the application layer to enhance search interpretation and unlock rich results. From organization and product schemas to FAQs and articles, structured data ensures your platform communicates context clearly to search engines.",
          },
        ]}
      />

      <ServiceCTA />
    </>
  );
}
