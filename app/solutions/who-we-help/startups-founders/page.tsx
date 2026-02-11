import { ServiceCTA } from "@/components/services/detail/ServiceCTA";
import Image from "next/image";


export default function StartupsFoundersPage() {
  return (
    <>
        {/* HERO */}
        <section className="relative py-36 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            
            {/* LEFT — TEXT */}
            <div>
            <p className="text-xs tracking-[0.35em] text-white/40 mb-8">
                WHO WE HELP
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold text-white leading-[1.05] tracking-tight">
                Turning Product Vision Into
                <span className="block text-white/60">
                Structured, Scalable Execution
                </span>
            </h1>

            <p className="mt-10 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
                Early-stage founders operate under compressed timelines and capital
                constraints. We bring disciplined engineering and architectural clarity
                to transform ideas into production-ready platforms built for growth.
            </p>

            {/* Optional Micro Credibility Row */}
            <div className="mt-12 flex items-center gap-8 text-sm text-white/50">
                <span>Scalable MVP Builds</span>
                <span>•</span>
                <span>Architecture-First Engineering</span>
                <span>•</span>
                <span>Long-Term Technical Partnership</span>
            </div>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="relative">
            {/* Soft outer glow */}
            <div className="absolute -inset-6 bg-white/5 blur-3xl rounded-3xl opacity-30" />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-950">
                <Image
                src="/images/founder.png"
                alt="Founder working on product strategy"
                width={900}
                height={1100}
                className="w-full h-auto object-cover"
                priority
                />

                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            </div>
        </div>
        </section>

      {/* THE CHALLENGE */}
<section className="py-32 px-6 bg-neutral-950">
  <div className="max-w-6xl mx-auto">
    <div className="max-w-3xl mb-20">
      <h2 className="text-3xl md:text-4xl text-white font-semibold mb-8">
        The Reality of Early-Stage Execution
      </h2>

      <p className="text-white/70 text-lg leading-relaxed">
        Decisions made during MVP development directly impact scalability,
        investor confidence, hiring velocity, and long-term sustainability.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          title: "Capital Pressure",
          desc: "Limited runway requires efficient engineering decisions and disciplined scope control.",
        },
        {
          title: "Technical Uncertainty",
          desc: "Founders often lack structured architectural guidance during early development.",
        },
        {
          title: "Scalability Risk",
          desc: "Short-term builds frequently introduce technical debt that slows future growth.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-8 rounded-2xl border border-white/5 hover:border-white/10 transition"
        >
          <h3 className="text-xl text-white mb-4">{item.title}</h3>
          <p className="text-white/60 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* OUR APPROACH */}
<section className="py-36 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl text-white font-semibold mb-24 text-center">
      Our Approach to Founder-Led Products
    </h2>

    <div className="grid md:grid-cols-2 gap-12">
      {[
        {
          title: "Structured Product Discovery",
          desc: "Clarifying assumptions, aligning feasibility with business goals, and defining the right MVP scope before development begins.",
        },
        {
          title: "Scalable MVP Engineering",
          desc: "Lean builds supported by clean code standards, CI/CD pipelines, and performance baselines from day one.",
        },
        {
          title: "Infrastructure & Growth Readiness",
          desc: "Cloud deployment, authentication systems, analytics instrumentation, and monitoring integrated early.",
        },
        {
          title: "Long-Term Technical Partnership",
          desc: "Ongoing architectural evolution, performance optimization, and technical leadership as traction increases.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group p-10 rounded-2xl bg-neutral-950 border border-white/5 hover:border-white/10 transition-all duration-300"
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

      <ServiceCTA />
    </>
  );
}
