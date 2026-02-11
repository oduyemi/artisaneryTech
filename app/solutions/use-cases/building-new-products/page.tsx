import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function BuildingNewProductsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-40 px-6 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.35em] text-white/40 mb-8">
            USE CASE
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight tracking-tight">
            Building New Products
            <span className="block text-white/60">
              With Structural Integrity
            </span>
          </h1>

          <p className="mt-10 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            From concept to production-ready platform, we design and engineer
            systems that are scalable, maintainable, and aligned with long-term
            business goals.
          </p>
        </div>
      </section>

      {/* ================= CONTEXT ================= */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white font-semibold mb-10">
            The Risk of Early Decisions
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            Early architectural shortcuts can create long-term constraints.
            Many products launch quickly but lack structural foundations that
            support growth, performance, and future iteration.
          </p>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="py-36 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {[
            {
              title: "Strategic Discovery",
              desc: "Defining product scope, technical feasibility, and system boundaries before development begins.",
            },
            {
              title: "Architecture-First Engineering",
              desc: "Clean system design that supports scale, modularity, and long-term maintainability.",
            },
            {
              title: "Scalable Infrastructure",
              desc: "Cloud environments, CI/CD pipelines, and monitoring integrated from the start.",
            },
            {
              title: "Growth-Ready Foundations",
              desc: "Systems designed for performance, security, and evolving product requirements.",
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
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 bg-neutral-950 border-t border-white/5 text-center">
        <h3 className="text-2xl md:text-3xl text-white font-semibold mb-6">
          Ready to Build the Right Way From Day One?
        </h3>

        <p className="text-white/60 max-w-2xl mx-auto mb-10">
          Let’s create a scalable foundation for your next product.
        </p>
      </section>

      <ServiceCTA />
    </>
  );
}
