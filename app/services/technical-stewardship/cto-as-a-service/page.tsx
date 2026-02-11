import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function TechnicalAdvisoryPage() {
  return (
    <>
      <ServiceHero
        label="// STRATEGIC PARTNERSHIP"
        title="Technical Advisory & CTO-as-a-Service"
        description="Senior technical leadership without the overhead of a full-time executive hire."
      />

      <ServiceContent
        intro="Growing products require structured technical direction. We provide strategic oversight, architectural governance, and engineering leadership to ensure execution aligns with business goals."
        sections={[
          {
            title: "Technical Roadmapping",
            content:
              "Architecture planning, stack decisions, infrastructure modeling, scalability forecasting, and structured execution sequencing.",
          },
          {
            title: "Engineering Oversight",
            content:
              "Codebase reviews, development workflow optimization, hiring guidance, and technical due diligence preparation.",
          },
          {
            title: "Investor & Stakeholder Alignment",
            content:
              "Technology strategy communication, system documentation, risk assessments, and growth-readiness evaluation.",
          },
          {
            title: "When This Is Critical",
            content:
              "• Funded startups without senior technical leadership\n• Founders transitioning from MVP to growth\n• Teams scaling rapidly\n• Companies preparing for fundraising or acquisition",
          },
        ]}
      />

      <ServiceCTA />
    </>
  );
}
