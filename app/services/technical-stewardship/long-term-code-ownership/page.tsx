import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function LongTermCodeOwnershipPage() {
  return (
    <>
      <ServiceHero
        label="// TRUST + DURABILITY"
        title="Long Term Code Ownership"
        description="Sustainable engineering stewardship that protects your systems long after launch."
      />

      <ServiceContent
        intro="Shipping software is only the beginning. Without structured ownership, governance, and continuity planning, even well-built systems degrade over time. We provide long-term code stewardship that ensures stability, institutional knowledge retention, and engineering discipline across the lifecycle of your platform."
        sections={[
          {
            title: "Governance & Documentation",
            content:
              "We establish and maintain structured architecture documentation, enforce version control discipline, and define clear technical standards. From branching strategies to review protocols and dependency management policies, we ensure your codebase evolves intentionally — not reactively. Every decision is traceable, documented, and aligned with engineering best practices.",
          },
          {
            title: "Codebase Stewardship",
            content:
              "Our team oversees structured release cycles, monitors system stability, and maintains a forward-looking refactoring roadmap. We prevent architectural drift, manage technical debt proactively, and ensure new features integrate cleanly into the broader system. The goal is sustained velocity without sacrificing reliability.",
          },
          {
            title: "Continuity Assurance",
            content:
              "We protect your organization from knowledge silos and single points of failure. Through structured knowledge transfer, developer onboarding frameworks, and redundancy planning, we ensure operational continuity even as teams evolve. Your software remains understandable, maintainable, and resilient — regardless of personnel changes.",
          },
        ]}
      />

      <ServiceCTA />
    </>
  );
}
