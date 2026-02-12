"use client"
import IndustryCTA from "@/components/industry/IndustryCTA"

export default function SaaSIndustryPage() {
  return (
    <main className="text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-48 px-6">

        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/saas.png')] bg-cover bg-center opacity-20" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0" />

        <div className="relative max-w-6xl mx-auto">

          <p className="text-white/40 uppercase tracking-widest text-xs md:text-sm mb-6">
            Industry · SaaS
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl tracking-tight">
            Engineering SaaS Platforms Built for
            <span className="block bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
              Scale, Retention & Revenue Growth
            </span>
          </h1>

          <p className="text-white/60 text-lg mt-10 max-w-2xl leading-relaxed">
            Artisanery Tech partners with SaaS founders and product teams to build
            high-performance platforms engineered for subscription growth,
            architectural clarity, and long-term scalability.
          </p>

        </div>
      </section>


      {/* ================= REALITY SECTION ================= */}
      <section className="py-36 px-6">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24">

          <div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Growth Exposes Architecture.
            </h2>
          </div>

          <div className="space-y-8 text-white/60 leading-relaxed text-lg">

            <p>
              Early traction hides structural weaknesses. As user volume increases,
              feature velocity slows, infrastructure costs spike, and technical debt compounds.
            </p>

            <p>
              Subscription complexity, billing logic, performance bottlenecks,
              and onboarding friction begin to impact retention and revenue.
            </p>

            <p className="text-white">
              Scaling SaaS platforms requires architectural discipline —
              not just more developers.
            </p>

          </div>

        </div>
      </section>


      {/* ================= WHERE SYSTEMS BREAK ================= */}
      <section className="py-36 px-6 border-y border-white/5">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20 tracking-tight">
            Where SaaS Systems Break at Scale
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Multi-tenant architecture complexity",
              "Subscription & billing infrastructure",
              "Data consistency across services",
              "Search & performance bottlenecks",
              "Third-party integration overload",
              "Scaling read/write database loads",
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 bg-white/[0.03] hover:bg-white/[0.06] 
                           border border-white/5 hover:border-white/10
                           transition duration-300"
              >
                <div className="text-white/30 text-sm mb-4">
                  0{i + 1}
                </div>
                <p className="text-lg text-white/70 group-hover:text-white transition">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= ARCHITECTURAL ADVANTAGE ================= */}
      <section className="py-36 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20 tracking-tight">
            Our Architectural Advantage
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            {[
              {
                title: "Platform-First Architecture",
                desc: "We design scalable multi-tenant systems built to evolve with your product roadmap."
              },
              {
                title: "Subscription Infrastructure",
                desc: "Robust billing engines, usage metering, and revenue-aligned system design."
              },
              {
                title: "Scalable API Systems",
                desc: "Clean, extensible APIs engineered for integrations and long-term maintainability."
              },
              {
                title: "Performance + SEO Integration",
                desc: "High-speed applications optimized for user retention and search visibility."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 bg-gradient-to-br from-white/[0.04] to-transparent 
                           border border-white/5 hover:border-white/10
                           transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= CORE CAPABILITIES ================= */}
      <section className="py-36 px-6 border-y border-white/5 bg-neutral-900/30">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20 tracking-tight">
            Core SaaS Engineering Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              "Multi-tenant systems",
              "Role-based access control",
              "Usage metering",
              "Platform analytics",
              "Infrastructure scaling",
              "Distributed system architecture",
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white/[0.03] border border-white/5 
                           hover:bg-white/[0.06] hover:border-white/10
                           transition duration-300 text-white/70 hover:text-white"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= DELIVERY MODEL ================= */}
      <section className="py-36 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20 tracking-tight">
            Delivery Model Built for SaaS Growth
          </h2>

          <div className="grid md:grid-cols-4 gap-12">

            {[
              "Architecture-first roadmap planning",
              "Sprint-based execution",
              "Revenue-aligned milestones",
              "Continuous performance optimization",
            ].map((item, i) => (
              <div
                key={i}
                className="group"
              >
                <div className="text-4xl font-light text-white/20 mb-6 group-hover:text-white transition">
                  0{i + 1}
                </div>
                <p className="text-white/70 group-hover:text-white transition">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      <IndustryCTA
        title="Build Infrastructure That Scales With Your Platform."
        subtitle="We design and engineer SaaS systems that support growth, performance, and long-term market leadership."
        primaryLabel="Schedule a Consultation"
        secondaryLabel="Discuss Your Platform"
      />

    </main>
  )
}
