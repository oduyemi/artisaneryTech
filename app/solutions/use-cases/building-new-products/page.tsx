import Image from "next/image";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function BuildingNewProductsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6">

        <Image
          src="/images/newproducts.png"
          alt="Building new digital product"
          fill
          priority
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0" />

        <div className="relative max-w-5xl mx-auto py-32">
          <p className="text-xs tracking-[0.35em] text-white/40 mb-8">
            USE CASE
          </p>

          <h1 className="text-5xl md:text-6xl text-white font-semibold leading-tight max-w-3xl">
            Building New Products
            <span className="block text-white/60 mt-4">
              From Concept to Production
            </span>
          </h1>

          <p className="mt-12 text-lg text-white/70 max-w-2xl leading-relaxed">
            We help organizations design, architect, and deliver new digital
            products with scalable foundations and production-ready systems.
          </p>
        </div>
      </section>

      {/* ================= SITUATION ================= */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-white font-semibold mb-12">
            The Situation
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            Launching a new product requires more than feature velocity. Early
            architectural decisions shape long-term scalability, maintainability,
            and operational resilience.
          </p>
        </div>
      </section>

      {/* ================= CHALLENGES ================= */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

          {[
            "Unclear system architecture",
            "Rushed technical decisions",
            "Limited DevOps maturity",
          ].map((item, i) => (
            <div key={i} className="p-8 border border-white/10 rounded-2xl bg-stone-100">
              <p className="text-black text-lg">{item}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= ENGAGEMENT ================= */}
      <section className="py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl text-white font-semibold mb-16">
            How We Engage
          </h2>

          <ul className="space-y-6 text-white/70 text-lg">
            <li>• Technical discovery & product scoping</li>
            <li>• Architecture blueprinting</li>
            <li>• Infrastructure setup & CI/CD pipelines</li>
            <li>• Secure production deployment</li>
          </ul>
        </div>
      </section>

      {/* ================= OUTCOMES ================= */}
      <section className="py-36 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl text-white font-semibold mb-10">
            Outcome
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            A production-ready product built on scalable architecture,
            optimized infrastructure, and disciplined engineering practices.
          </p>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
