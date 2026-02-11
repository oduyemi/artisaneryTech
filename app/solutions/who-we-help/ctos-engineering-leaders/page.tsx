import { ServiceCTA } from "@/components/services/detail/ServiceCTA";
import Image from "next/image";


export default function CTOsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
        <section className="relative min-h-[85vh] flex items-center px-6 overflow-hidden">

        {/* Background Image */}
        <Image
            src="/images/cto.png"
            alt="Dark architectural engineering structure"
            fill
            priority
            className="object-cover opacity-40"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black" />

        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:40px_40px]" />

        {/* Content */}
        <div className="relative max-w-4xl mx-auto w-full py-32">
            <p className="text-xs tracking-[0.35em] text-white/40 mb-10">
            WHO WE HELP
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold text-white leading-[1.05] tracking-tight">
            Engineering Discipline
            <span className="block text-white/60">
                For Teams Scaling at Velocity
            </span>
            </h1>

            <p className="mt-12 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
            As systems grow in complexity, architectural decisions carry long-term
            consequences. We partner with technical leaders to strengthen
            infrastructure, reduce technical risk, and bring operational maturity to
            engineering teams.
            </p>
        </div>
        </section>

      {/* ================= THE REALITY ================= */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white font-semibold mb-16">
            The Leadership Challenge
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <p className="text-white/70 leading-relaxed text-lg">
              Balancing delivery speed with architectural integrity becomes
              increasingly difficult as product scope expands. Technical debt,
              scaling constraints, and inconsistent engineering practices can
              quietly compound.
            </p>

            <p className="text-white/70 leading-relaxed text-lg">
              Leadership requires not just shipping features, but building
              systems that remain adaptable, observable, and resilient over
              time.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR SUPPORT ================= */}
      <section className="py-36 px-6 bg-black">
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
