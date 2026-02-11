import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function RefactoringPage() {
  return (
    <>
      <ServiceHero
        label="// VELOCITY RESTORATION"
        title="Software Maintenance & Refactoring"
        description="Stabilize, refactor, and strengthen your existing codebase to unlock performance, security, and long-term scalability."
      />

      <ServiceContent
        intro="Legacy code, architectural drift, and rushed feature releases can silently slow your business down. We help organizations regain control of their software by eliminating technical debt, improving structure, and aligning systems with current business and security requirements — without disrupting operations."
        sections={[
          {
            title: "Codebase Audit",
            content:
              "We begin with a structured technical audit of your application. This includes architecture review, dependency analysis, security posture assessment, performance bottlenecks, and maintainability scoring. You receive a clear, prioritized remediation roadmap — not just observations, but actionable direction aligned with business risk and engineering effort.",
          },
          {
            title: "Structured Refactoring",
            content:
              "Our refactoring approach is systematic and low-risk. We modularize tightly coupled components, improve naming and code clarity, remove dead code, enforce consistent design patterns, and introduce automated tests where missing. The result is a cleaner, more predictable system that engineers can confidently build on.",
          },
          {
            title: "Performance Optimization",
            content:
              "We identify inefficiencies across the stack — database queries, API latency, memory usage, rendering cycles, and infrastructure configuration. Through targeted optimization and architectural adjustments, we reduce load times, improve throughput, and enhance system responsiveness under scale.",
          },
          {
            title: "Business Value",
            content:
              "Refactoring is not cosmetic — it is strategic. A well-structured codebase reduces incident frequency, accelerates feature delivery, lowers long-term development costs, and improves security resilience. By restoring engineering velocity, your team spends less time firefighting and more time innovating.",
          },
        ]}
      />

      <ServiceCTA />
    </>
  );
}
