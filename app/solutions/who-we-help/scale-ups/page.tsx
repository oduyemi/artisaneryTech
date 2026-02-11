import Image from "next/image";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function ScaleUpsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 bg-black overflow-hidden">
        <Image
          src="/images/scaleup.png"
          alt="Scaling product team collaborating"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.35em] text-white/40 mb-8">
            WHO WE HELP
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-[1.05] tracking-tight">
            Scaling Without
            <span className="block text-white/60">
              Breaking Your Architecture
            </span>
          </h1>

          <p className="mt-10 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            As user growth accelerates and engineering teams expand, systems
            begin to strain. We stabilize architecture, mature engineering
            processes, and ensure your platform scales with confidence.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <span>Performance Optimization</span>
            <span>•</span>
            <span>Scalable Infrastructure</span>
            <span>•</span>
            <span>Delivery Discipline</span>
          </div>
        </div>
      </section>

      {/* ================= GROWTH REALITY ================= */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-4xl text-white font-semibold mb-8">
              Growth Introduces Structural Stress
            </h2>

            <p className="text-white/70 text-lg leading-relaxed">
              What worked at 1,000 users often fails at 100,000. Scaling exposes
              weaknesses in architecture, deployment pipelines, monitoring, and
              internal delivery workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Infrastructure Strain",
                desc: "Increased traffic leads to performance degradation and reliability risks.",
              },
              {
                title: "Team Expansion",
                desc: "Growing engineering teams require process maturity and structured code ownership.",
              },
              {
                title: "Technical Debt Accumulation",
                desc: "Rapid iteration introduces architectural shortcuts that compound over time.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-black border border-white/5 hover:border-white/10 transition"
              >
                <h3 className="text-xl text-white mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="py-36 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white font-semibold mb-24 text-center">
            How We Support Scaling Teams
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Architectural Refactoring",
                desc: "We evaluate and evolve existing systems to support scale without full rewrites, reducing risk while improving performance.",
              },
              {
                title: "Infrastructure Optimization",
                desc: "Cloud environments, deployment strategies, and monitoring systems are strengthened for reliability and observability.",
              },
              {
                title: "Engineering Process Maturity",
                desc: "We introduce structured workflows, CI/CD discipline, code review standards, and documentation practices.",
              },
              {
                title: "Performance & Reliability Engineering",
                desc: "Load testing, database optimization, caching strategies, and system hardening ensure stability under growth.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 rounded-2xl bg-neutral-950 border border-white/5 hover:border-white/10 transition"
              >
                <h3 className="text-xl md:text-2xl text-white mb-6 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OPERATIONAL MATURITY ================= */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white font-semibold mb-10">
            Scaling Is Not Just Technical — It’s Operational
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            High-growth environments demand disciplined engineering culture.
            We align technical architecture with business velocity, ensuring
            roadmap execution remains predictable and sustainable.
          </p>

          <div className="mt-12 space-y-4 text-white/60 text-base">
            <p>• Roadmap-aligned engineering decisions</p>
            <p>• Clear code ownership structures</p>
            <p>• Reduced firefighting and production instability</p>
            <p>• Scalable systems built for long-term growth</p>
          </div>
        </div>
      </section>

      {/* ================= CTA TRANSITION ================= */}
      <section className="py-24 px-6 bg-black border-t border-white/5 text-center">
        <h3 className="text-2xl md:text-3xl text-white font-semibold mb-6">
          Ready to Scale With Stability?
        </h3>

        <p className="text-white/60 max-w-2xl mx-auto mb-10">
          Let’s strengthen your architecture, mature your engineering
          processes, and support your next phase of growth.
        </p>
      </section>

      <ServiceCTA />
    </>
  );
}
