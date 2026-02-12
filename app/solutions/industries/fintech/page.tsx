"use client"
import IndustryCTA from "@/components/industry/IndustryCTA"

export default function FintechIndustryPage() {
  return (
    <main className="text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-44 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">

          <p className="text-white/40 uppercase tracking-widest text-sm mb-6">
            Industry
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl">
            Secure Digital Infrastructure for
            <span className="block text-white/60">
              Modern Financial Platforms.
            </span>
          </h1>

          <p className="text-white/60 text-lg mt-10 max-w-2xl leading-relaxed">
            Artisanery Tech engineers compliant, scalable, and high-performance 
            fintech systems designed to support trust, regulatory standards, 
            and long-term platform growth.
          </p>

        </div>
      </section>


      {/* ================= INDUSTRY REALITY ================= */}
      <section className="py-36 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24">

          <div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Financial Technology Demands Precision.
            </h2>
          </div>

          <div className="space-y-8 text-white/60 leading-relaxed">
            <p>
              Every transaction carries risk. Every millisecond affects user trust.
              Every compliance gap exposes legal and reputational liability.
            </p>

            <p>
              Fintech systems must meet strict regulatory frameworks,
              ensure data protection, and deliver seamless user experiences.
            </p>

            <p>
              Engineering quality is not optional — it is foundational.
            </p>
          </div>

        </div>
      </section>


      {/* ================= CORE CHALLENGES ================= */}
      <section className="py-36 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20">
            Critical Challenges in Fintech Engineering
          </h2>

          <div className="grid md:grid-cols-2 gap-x-24 gap-y-20">

            {[
              {
                title: "Regulatory Compliance",
                desc: "Aligning systems with financial regulations, KYC requirements, and data governance standards."
              },
              {
                title: "Data Security & Privacy",
                desc: "Protecting sensitive financial data from breaches and unauthorized access."
              },
              {
                title: "Transaction Reliability",
                desc: "Ensuring system stability and zero-failure tolerance in high-volume environments."
              },
              {
                title: "Scalable Architecture",
                desc: "Supporting growth without compromising performance or compliance."
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


      {/* ================= OUR ENGINEERING APPROACH ================= */}
      <section className="py-36 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20">
            Our Approach to Financial Systems
          </h2>

          <div className="space-y-16">

            {[
              {
                title: "Compliance-First Architecture",
                desc: "System design aligned with industry standards and regulatory requirements from day one."
              },
              {
                title: "Security Engineering",
                desc: "Encryption, authentication systems, role-based access control, and secure data handling."
              },
              {
                title: "High-Availability Infrastructure",
                desc: "Redundancy, load balancing, and failover mechanisms to ensure uninterrupted service."
              },
              {
                title: "Auditability & Transparency",
                desc: "Structured logging and traceability systems to support audits and accountability."
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
      <section className="py-36 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20">
            Fintech Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-16 text-white/70">

            {[
              "Payment gateway integration",
              "Digital wallet systems",
              "KYC & identity verification systems",
              "Transaction processing infrastructure",
              "Fraud detection integrations",
              "Secure API development",
            ].map((item, i) => (
              <div key={i} className="border-t border-white/10 pt-6">
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= STRATEGIC IMPACT ================= */}
      <section className="py-36 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20">
            Engineering Financial Confidence
          </h2>

          <div className="grid md:grid-cols-3 gap-20 text-white/70">

            {[
              {
                title: "01 — Strengthen Trust",
                desc: "Secure systems that protect users and reinforce brand credibility."
              },
              {
                title: "02 — Enable Growth",
                desc: "Scalable architecture that supports expansion and increased transaction volume."
              },
              {
                title: "03 — Reduce Risk",
                desc: "Compliance-aware infrastructure that minimizes legal and operational exposure."
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
        title="Engineering Digital Trust at Scale."
        subtitle="We build secure, compliant, and performance-driven financial platforms designed for long-term resilience and growth."
        primaryLabel="Schedule a Consultation"
        secondaryLabel="Discuss Your Platform"
      />

    </main>
  )
}
