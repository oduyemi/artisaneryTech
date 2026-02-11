import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function APIBackendSystemsPage() {
  return (
    <>
      <ServiceHero
        label="// APPLICATION DEVELOPMENT"
        title="API & Backend Systems"
        description="Scalable backend architectures and API systems engineered for performance, security, and long-term extensibility."
      />

      <ServiceContent
        intro="Modern digital products depend on resilient backend systems. We architect and implement APIs and service layers that support growth, integrations, and high-performance user experiences."
        sections={[
          {
            title: "API Architecture & Modeling",
            content:
              "REST and GraphQL API design, versioning strategy, authentication flows, rate limiting, access control layers, and documentation standards for long-term maintainability.",
          },
          {
            title: "Backend System Engineering",
            content:
              "Modular architecture design, microservices structuring, event-driven workflows, background job processing, and distributed system alignment.",
          },
          {
            title: "Data & Database Strategy",
            content:
              "Relational and NoSQL modeling, indexing strategies, schema design, query optimization, caching layers, and performance baselines.",
          },
          {
            title: "Security & Reliability",
            content:
              "Encryption standards, logging and monitoring implementation, failure isolation strategies, infrastructure redundancy, and uptime-focused engineering.",
          },
          {
            title: "Commercial Outcomes",
            content:
              "• Stable third-party integrations\n• Faster feature development\n• Reduced downtime risk\n• Infrastructure built for scale\n• Long-term extensibility",
          },
        ]}
      />

      <ServiceCTA />
    </>
  );
}
