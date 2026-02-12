import Image from "next/image";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function ModernizingLegacySystemsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden px-6">

        {/* Background Image */}
        <Image
          src="/images/revamp.png"
          alt="Modernizing enterprise infrastructure"
          fill
          priority
          className="object-cover object-center opacity-40"
        />

        {/* Overlay */}
        <div className="absolute inset-0" />

        {/* Content */}
        <div className="relative max-w-5xl mx-auto py-32">
          <p className="text-xs tracking-[0.35em] text-white/40 mb-8">
            USE CASE
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold text-white leading-[1.05] max-w-3xl">
            Modernizing Legacy Systems
            <span className="block text-white/60 mt-4">
              Without Disrupting Operations
            </span>
          </h1>

          <p className="mt-12 text-lg text-white/70 leading-relaxed max-w-2xl">
            We help organizations evolve aging systems into scalable,
            maintainable architectures while preserving operational continuity
            and minimizing risk.
          </p>
        </div>
      </section>

      {/* ================= THE RISK ================= */}
      <section className="py-36 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto">

          <p className="text-xs tracking-[0.35em] text-white/40 mb-8">
            THE REALITY
          </p>

          <h2 className="text-3xl md:text-5xl text-white font-semibold leading-tight max-w-3xl mb-16">
            Legacy Systems Carry
            <span className="block text-white/60 mt-3">
              Structural Constraints
            </span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
            Over time, incremental fixes, outdated frameworks, and evolving
            business requirements create fragile systems. Teams often hesitate
            to modernize due to fear of downtime, data loss, or unexpected
            regression.
          </p>

        </div>
      </section>

      {/* ================= COMMON CHALLENGES ================= */}
      <section className="py-36 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

          {[
            {
              title: "Tightly Coupled Architecture",
              desc: "Monolithic structures limit flexibility and slow feature delivery.",
            },
            {
              title: "Outdated Technology Stack",
              desc: "Unsupported dependencies increase security and maintenance risk.",
            },
            {
              title: "Operational Fragility",
              desc: "Manual processes and insufficient monitoring create instability.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 border border-white/10 rounded-2xl bg-neutral-950"
            >
              <h3 className="text-xl text-white mb-4">
                {item.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="py-36 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl text-white font-semibold mb-16">
            Our Modernization Approach
          </h2>

          <ul className="space-y-8 text-white/70 text-lg leading-relaxed">
            <li>
              • Comprehensive system audit and dependency mapping
            </li>
            <li>
              • Incremental refactoring strategy (strangler pattern where applicable)
            </li>
            <li>
              • Infrastructure hardening and observability improvements
            </li>
            <li>
              • Phased deployment with rollback safeguards
            </li>
          </ul>

        </div>
      </section>

      {/* ================= OUTCOME ================= */}
      <section className="py-36 px-6 bg-black text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl text-white font-semibold mb-10">
            The Outcome
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            A modernized system architecture that improves maintainability,
            enhances security posture, and restores engineering velocity —
            without business disruption.
          </p>

        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
