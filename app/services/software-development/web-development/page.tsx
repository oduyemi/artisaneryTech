import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function WebAppDevelopmentPage() {
  return (
    <>
      <ServiceHero
        label="// APPLICATION DEVELOPMENT"
        title="Web Application Development"
        description="Production-grade web platforms engineered for performance, security, and measurable business outcomes."
      />

      <ServiceContent
        intro="We build scalable web applications designed to convert users, streamline operations, and support long-term product growth. Every build is structured for performance, maintainability, and business impact."
        sections={[
          {
            title: "Full-Stack Development",
            content:
              "Frontend architecture, backend services, database design, API integration, authentication systems, and secure deployment pipelines.",
          },
          {
            title: "Business-Focused Engineering",
            content:
              "Conversion-driven UI implementation, analytics instrumentation, performance monitoring, and feature optimization aligned with KPIs.",
          },
          {
            title: "Security & Stability",
            content:
              "Role-based access control, data protection standards, secure authentication flows, infrastructure hardening, and production readiness testing.",
          },
          {
            title: "Typical Use Cases",
            content:
              "• SaaS platforms\n• Internal enterprise systems\n• Marketplaces & booking systems\n• Dashboards & analytics platforms\n• Customer portals",
          },
        ]}
      />

      <ServiceCTA />
    </>
  );
}
