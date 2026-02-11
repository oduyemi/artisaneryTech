import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";
import { ServiceHero } from "@/components/services/detail/ServiceHero";

export default function MaintenanceOptimizationPage() {
    return (
      <>
        <ServiceHero
          label="// CONTINUOUS SUPPORT"
          title="Maintenance & Performance Optimization"
          description="Ongoing system stability, security hardening, and performance refinement for production environments."
        />
  
        <ServiceContent
          intro="Software is not static. We provide structured maintenance programs designed to protect uptime, optimize performance, and reduce technical debt."
          sections={[
            {
              title: "Performance Monitoring",
              content:
                "Application monitoring, load testing, performance audits, database tuning, and response-time optimization.",
            },
            {
              title: "Security & Stability",
              content:
                "Patch management, dependency updates, vulnerability scanning, access audits, and infrastructure hardening.",
            },
            {
              title: "Technical Debt Reduction",
              content:
                "Code refactoring, modular restructuring, documentation improvements, and CI/CD workflow refinement.",
            },
            {
              title: "Business Impact",
              content:
                "• Reduced downtime\n• Lower operational risk\n• Improved user retention\n• Infrastructure cost control\n• Long-term platform sustainability",
            },
          ]}
        />
  
        <ServiceCTA />
      </>
    );
  }
  