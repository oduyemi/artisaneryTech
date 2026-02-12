"use client"
import IndustryCTA from "@/components/industry/IndustryCTA"

export default function EcommerceIndustryPage() {
  return (
    <main className="text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-44 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-white/40 uppercase tracking-widest text-sm mb-6">
            Industry
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl">
            High-Performance Platforms for
            <span className="block text-white/60">
              Modern E-commerce Brands.
            </span>
          </h1>

          <p className="text-white/60 text-lg mt-10 max-w-2xl leading-relaxed">
            Artisanery Tech builds fast, conversion-focused commerce systems
            engineered to increase revenue, optimize customer journeys,
            and support long-term brand growth.
          </p>

        </div>
      </section>


      {/* ================= INDUSTRY REALITY ================= */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24">

          <div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              In E-commerce, Performance Drives Profit.
            </h2>
          </div>

          <div className="space-y-8 text-white/60 leading-relaxed">
            <p>
              Speed, usability, and trust directly influence conversion rates.
              Even small friction points create measurable revenue loss.
            </p>

            <p>
              Brands need platforms engineered for scalability,
              operational efficiency, and data-driven optimization.
            </p>

            <p>
              Digital infrastructure must support marketing,
              inventory, fulfillment, and customer retention seamlessly.
            </p>
          </div>

        </div>
      </section>


      {/* ================= COMMON CHALLENGES ================= */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20">
            Where E-commerce Brands Lose Revenue
          </h2>

          <div className="grid md:grid-cols-2 gap-x-24 gap-y-20">

            {[
              {
                title: "Slow Page Performance",
                desc: "Milliseconds of delay reduce conversion rates and increase cart abandonment."
              },
              {
                title: "Fragmented Technology Stack",
                desc: "Disconnected tools create inefficiencies across marketing, inventory, and fulfillment."
              },
              {
                title: "Poor Mobile Optimization",
                desc: "Mobile-first commerce demands frictionless, intuitive user journeys."
              },
              {
                title: "Limited Scalability",
                desc: "Infrastructure that struggles under traffic spikes restricts growth potential."
              },
            ].map((item, i) => (
              <div key={i}>
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


      {/* ================= OUR APPROACH ================= */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20">
            Our Revenue-Focused Approach
          </h2>

          <div className="space-y-16">

            {[
              {
                title: "Performance Engineering",
                desc: "Optimized front-end architecture, caching strategies, and server efficiency."
              },
              {
                title: "Conversion-Centered Design",
                desc: "Structured user journeys that guide visitors toward decisive action."
              },
              {
                title: "Integrated Commerce Systems",
                desc: "Seamless connection between storefront, payment processing, CRM, and fulfillment."
              },
              {
                title: "Scalable Infrastructure",
                desc: "Built to support growth, traffic spikes, and international expansion."
              },
            ].map((item, i) => (
              <div key={i} className="relative pl-10">
                <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= CAPABILITIES ================= */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20">
            E-commerce Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-16 text-white/70">

            {[
              "Custom storefront development",
              "Headless commerce architecture",
              "Payment gateway integration",
              "Checkout optimization",
              "CRM & marketing automation integration",
              "Analytics & performance tracking systems",
            ].map((item, i) => (
              <div key={i} className="border-t border-white/10 pt-6">
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= STRATEGIC IMPACT ================= */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20">
            Turning Commerce Into a Competitive Advantage
          </h2>

          <div className="grid md:grid-cols-3 gap-20 text-white/70">

            {[
              {
                title: "01 — Increase Conversion",
                desc: "Reduce friction and improve checkout performance."
              },
              {
                title: "02 — Improve Retention",
                desc: "Build structured post-purchase and customer lifecycle systems."
              },
              {
                title: "03 — Enable Scalable Growth",
                desc: "Create infrastructure that grows alongside the brand."
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-white text-lg mb-4">
                  {item.title}
                </h3>
                <p>{item.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <IndustryCTA
        title="Turn Digital Commerce Into a Growth Engine."
        subtitle="We design high-performance commerce platforms that increase conversion, retention, and revenue."
        primaryLabel="Schedule a Strategy Call"
        secondaryLabel="Discuss Your Store"
      />

    </main>
  )
}
