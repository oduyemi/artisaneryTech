import Image from "next/image";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function NonTechnicalFoundersPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-36 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          
          {/* TEXT */}
          <div>
            <p className="text-xs tracking-[0.35em] text-white/40 mb-8">
              WHO WE HELP
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight tracking-tight">
              Bringing Technical Clarity
              <span className="block text-white/60">
                To Non-Technical Founders
              </span>
            </h1>

            <p className="mt-10 text-lg text-white/70 leading-relaxed max-w-xl">
              You have the product vision and market insight. We translate that
              vision into structured architecture, disciplined execution, and
              scalable systems — without overwhelming you with technical jargon.
            </p>

            <div className="mt-12 flex gap-8 text-sm text-white/50">
              <span>Clear Communication</span>
              <span>•</span>
              <span>Structured Delivery</span>
              <span>•</span>
              <span>Transparent Process</span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -inset-6 bg-white/5 blur-3xl rounded-3xl opacity-30" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/nontechnical.png"
                alt="Founder reviewing product strategy"
                width={900}
                height={1000}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE CONCERN ================= */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white font-semibold mb-10">
            The Uncertainty Is Real
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            Many non-technical founders struggle with evaluating developers,
            understanding architectural decisions, or determining whether their
            product is being built for long-term scalability.
          </p>

          <p className="mt-8 text-white/60 leading-relaxed">
            Without structured guidance, projects can overrun budgets, drift
            from scope, or accumulate technical debt that becomes expensive
            later.
          </p>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white font-semibold mb-24 text-center">
            How We Support Non-Technical Founders
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Translation of Complexity",
                desc: "We explain technical decisions in business terms, ensuring you remain fully informed and confident.",
              },
              {
                title: "Structured Roadmaps",
                desc: "Clear development phases, defined milestones, and transparent deliverables.",
              },
              {
                title: "Architectural Integrity",
                desc: "Systems built correctly from the beginning to avoid costly rewrites.",
              },
              {
                title: "Long-Term Partnership",
                desc: "Ongoing guidance as your product evolves and your team grows.",
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
          You Don’t Need to Be Technical to Build a Strong Product
        </h3>

        <p className="text-white/60 max-w-2xl mx-auto mb-10">
          We provide the engineering structure so you can focus on vision,
          strategy, and growth.
        </p>
      </section>

      <ServiceCTA />
    </>
  );
}
