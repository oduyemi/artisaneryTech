import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";
import { ServiceHero } from "@/components/services/detail/ServiceHero";

export default function SEODigitalGrowthPage() {
    return (
      <>
        <ServiceHero
          label="// GROWTH ENGINEERING"
          title="SEO & Digital Growth Engineering"
          description="Technical SEO and growth systems engineered to increase visibility, traffic, and qualified conversions."
        />
  
        <ServiceContent
          intro="Visibility without structure does not scale. We implement technical SEO, performance optimization, and content architecture designed to generate sustainable organic growth."
          sections={[
            {
              title: "Technical SEO Implementation",
              content:
                "Site structure optimization, schema markup, indexing strategy, performance tuning, mobile responsiveness, and crawl optimization.",
            },
            {
              title: "Performance & Core Web Vitals",
              content:
                "Load-time reduction, server-side optimization, image compression strategies, caching layers, and Lighthouse performance alignment.",
            },
            {
              title: "Content & Authority Structuring",
              content:
                "Keyword strategy alignment, internal linking architecture, conversion-focused content frameworks, and search-intent mapping.",
            },
            {
              title: "Commercial Impact",
              content:
                "• Increased organic visibility\n• Higher-quality inbound traffic\n• Lower customer acquisition cost\n• Improved conversion rates\n• Sustainable growth without paid dependency",
            },
          ]}
        />
  
        <ServiceCTA />
      </>
    );
  }
  