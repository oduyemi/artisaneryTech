import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function MVPEarlyStagePage() {
  return (
    <>
      <ServiceHero
        label="// PRODUCT ENGINEERING"
        title="MVP & Early-Stage Builds"
        description="Structured MVP development focused on speed, clarity, and architectural integrity — without compromising long-term scalability."
      />

      <ServiceContent
        intro="Early-stage products require disciplined execution. We build minimum viable products that are lean, testable, and technically sound."
        sections={[
          {
            title: "Lean Product Development",
            content:
              "Feature scoping, rapid iteration cycles, prioritized core functionality, and validation-focused engineering.",
          },
          {
            title: "Engineering Foundations",
            content:
              "Clean code standards, scalable architecture patterns, structured repository management, and CI/CD setup from day one.",
          },
          {
            title: "Startup-Ready Infrastructure",
            content:
              "Cloud infrastructure setup, authentication systems, payment integration, analytics instrumentation, and performance baselines.",
          },
          {
            title: "When This Is Critical",
            content:
              "• Seed-funded startups\n• Founders building first technical version\n• Product validation before large capital investment\n• Teams transitioning from prototype to production",
          },
        ]}
      />

      <ServiceCTA />
    </>
  );
}
