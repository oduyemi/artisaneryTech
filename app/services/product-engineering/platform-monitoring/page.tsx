import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";
import { ServiceHero } from "@/components/services/detail/ServiceHero";

export default function ContinuousImprovementPage() {
    return (
      <>
        <ServiceHero
          label="// PLATFORM EVOLUTION"
          title="Platform Monitoring & Continuous Improvement"
          description="Data-driven refinement, feature iteration, and structured evolution aligned with product growth."
        />
  
        <ServiceContent
          intro="Growth introduces complexity. We implement structured monitoring and iteration frameworks to ensure your platform evolves efficiently and predictably."
          sections={[
            {
              title: "Analytics & Insight Integration",
              content:
                "User behavior tracking, performance analytics, funnel analysis, and KPI alignment with business objectives.",
            },
            {
              title: "Feature Iteration Cycles",
              content:
                "A/B testing support, structured release planning, performance benchmarking, and incremental improvement strategies.",
            },
            {
              title: "Scalability Reviews",
              content:
                "Traffic growth analysis, database health checks, infrastructure scaling adjustments, and load optimization planning.",
            },
            {
              title: "When This Is Critical",
              content:
                "• Growing SaaS platforms\n• Products with increasing traffic\n• Post-launch optimization phase\n• Teams focused on retention & expansion",
            },
          ]}
        />
  
        <ServiceCTA />
      </>
    );
  }
  