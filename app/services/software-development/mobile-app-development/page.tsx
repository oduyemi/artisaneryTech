import { ServiceContent } from "@/components/services/detail/ServiceContent";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";
import { ServiceHero } from "@/components/services/detail/ServiceHero";

export default function MobileAppDevelopmentPage() {
    return (
      <>
        <ServiceHero
          label="// APPLICATION DEVELOPMENT"
          title="Mobile Application Development"
          description="High-performance mobile applications built for engagement, retention, and scalable user growth."
        />
  
        <ServiceContent
          intro="We design and engineer mobile applications that are stable, responsive, and commercially viable — whether launching a new product or extending an existing platform."
          sections={[
            {
              title: "iOS & Android Development",
              content:
                "Cross-platform and native development, optimized UI performance, offline capabilities, push notifications, and secure backend integration.",
            },
            {
              title: "Growth & Retention Architecture",
              content:
                "User onboarding optimization, analytics integration, engagement tracking, monetization flows, and performance monitoring.",
            },
            {
              title: "Infrastructure & Deployment",
              content:
                "App store deployment management, CI/CD setup, scalable backend connectivity, version control workflows, and release management.",
            },
            {
              title: "Typical Use Cases",
              content:
                "• Consumer mobile apps\n• Fintech & transactional apps\n• Logistics & operations platforms\n• Healthcare & booking systems\n• Enterprise mobility solutions",
            },
          ]}
        />
  
        <ServiceCTA />
      </>
    );
  }
  