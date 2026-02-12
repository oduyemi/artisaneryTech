import { ServiceCTA } from "@/components/services/detail/ServiceCTA";
import Image from "next/image";


export default function CTOsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">

        {/* Background Image */}
        <Image
          src="/images/cto.png"
          alt="Advanced infrastructure architecture"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Deep cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />

        {/* Subtle radial depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.06),transparent_65%)]" />

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24">

          <p className="text-xs tracking-[0.4em] text-white/40 mb-10">
            WHO WE HELP
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-[1.02] tracking-tight max-w-4xl">
            Engineering Discipline
            <span className="block text-white/60 mt-5">
              For Teams Scaling at Velocity
            </span>
          </h1>

          <p className="mt-14 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
            As systems grow in complexity, architectural decisions carry
            long-term consequences. We partner with technical leaders to
            strengthen infrastructure, reduce technical risk, and bring
            operational maturity to engineering teams.
          </p>

        </div>
      </section>

      {/* ================= THE REALITY ================= */}
      <section className="relative py-36 px-6 bg-neutral-950">

      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="text-xs tracking-[0.35em] text-white/40 mb-8">
          THE REALITY
        </p>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl text-white font-semibold leading-tight max-w-3xl mb-16">
          Scaling Systems Introduce
          <span className="block text-white/60 mt-3">
            Hidden Structural Risk
          </span>
        </h2>

        {/* Framing Paragraph */}
        <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mb-20">
          As product scope expands and engineering teams grow, complexity compounds.
          Architectural decisions that once felt manageable begin to affect delivery
          speed, system reliability, and long-term maintainability.
        </p>

        {/* Structured Challenges */}
        <div className="grid md:grid-cols-3 gap-12">

          {[
            {
              title: "Technical Debt Accumulation",
              desc: "Short-term delivery decisions gradually reduce architectural flexibility and increase long-term maintenance cost.",
            },
            {
              title: "Scaling Constraints",
              desc: "Infrastructure and system design choices begin limiting performance, resilience, and adaptability.",
            },
            {
              title: "Operational Friction",
              desc: "Inconsistent engineering standards, unclear ownership, and fragmented processes reduce execution clarity.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative pl-6 border-l border-white/10"
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

      </div>
      </section>

      {/* ================= OUR SUPPORT ================= */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white font-semibold mb-24 text-center">
            How We Support Engineering Leadership
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Architectural Audits & Strategy",
                desc: "Comprehensive evaluation of system design, scalability posture, and long-term sustainability.",
              },
              {
                title: "Infrastructure & DevOps Maturity",
                desc: "CI/CD hardening, monitoring improvements, deployment optimization, and operational reliability.",
              },
              {
                title: "Technical Debt Reduction",
                desc: "Strategic refactoring and structured modernization without disrupting roadmap velocity.",
              },
              {
                title: "Code Ownership & Engineering Standards",
                desc: "Improved review processes, documentation practices, and maintainability discipline.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 rounded-2xl bg-neutral-950 border border-white/5"
              >
                <h3 className="text-xl md:text-2xl text-white mb-6">
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

      {/* ================= CTA TRANSITION ================= */}
      <section className="py-24 px-6 bg-neutral-950 border-t border-white/5 text-center">
        <h3 className="text-2xl md:text-3xl text-white font-semibold mb-6">
          Strengthen Your Engineering Foundation
        </h3>

        <p className="text-white/60 max-w-2xl mx-auto mb-10">
          Let’s bring structure, clarity, and long-term resilience to your
          architecture.
        </p>
      </section>

      <ServiceCTA />
    </>
  );
}
