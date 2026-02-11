import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function LegacySystemModernizationPage() {
  return (
    <>
      <ServiceHero
        label="// SYSTEM EVOLUTION"
        title="Legacy System Modernization"
        description="Structured modernization strategies that improve performance, scalability, and maintainability — without operational disruption."
      />

      <ServiceContent
        intro="Outdated systems create operational risk, slow feature delivery, and increase maintenance costs. We implement controlled modernization strategies that strengthen infrastructure while preserving business continuity."
        sections={[
          {
            title: "Comprehensive System Assessment",
            content:
              "Architecture audits, dependency mapping, performance bottleneck analysis, security evaluation, and infrastructure risk profiling.",
          },
          {
            title: "Controlled Migration Strategy",
            content:
              "Incremental rebuilds, parallel system deployment, API gateway implementation, database transition planning, and rollback safeguards.",
          },
          {
            title: "Modern Stack Transition",
            content:
              "Cloud migration, containerization, modular service adoption, CI/CD integration, and infrastructure scalability planning.",
          },
          {
            title: "Technical Debt Elimination",
            content:
              "Code refactoring, legacy framework replacement, improved documentation, workflow restructuring, and performance optimization.",
          },
          {
            title: "Business Impact",
            content:
              "• Reduced maintenance costs\n• Improved system reliability\n• Increased engineering velocity\n• Lower operational risk\n• Long-term platform sustainability",
          },
        ]}
      />

      <ServiceCTA />
    </>
  );
}
