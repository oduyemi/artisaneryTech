"use client"

import IndustryCTA from "@/components/industry/IndustryCTA"

export default function HealthcareIndustryPage() {
  return (
    <main className="text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-44 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-white/40 uppercase tracking-widest text-sm mb-6">
            Industry
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl">
            Digital Infrastructure for
            <span className="block text-white/60">
              Modern Healthcare Systems.
            </span>
          </h1>

          <p className="text-white/60 text-lg mt-10 max-w-2xl leading-relaxed">
            Artisanery Tech engineers secure, reliable, and compliant healthcare
            platforms that protect patient data, improve operational workflows,
            and support responsible digital transformation.
          </p>

        </div>
      </section>


      {/* ================= INDUSTRY REALITY ================= */}
      <section className="py-36 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24">

          <div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              In Healthcare, Technology Impacts Lives.
            </h2>
          </div>

          <div className="space-y-8 text-white/60 leading-relaxed">
            <p>
              Healthcare systems require precision, reliability, and strict
              adherence to data protection standards.
            </p>

            <p>
              Downtime is not merely inconvenient — it can affect patient care,
              operational continuity, and institutional credibility.
            </p>

            <p>
              Digital infrastructure must balance usability, security,
              and regulatory compliance at every level.
            </p>
          </div>

        </div>
      </section>


      {/* ================= CORE CHALLENGES ================= */}
      <section className="py-36 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20">
            Key Challenges in Healthcare Technology
          </h2>

          <div className="grid md:grid-cols-2 gap-x-24 gap-y-20">

            {[
              {
                title: "Data Privacy & Protection",
                desc: "Safeguarding sensitive patient information through secure system design and controlled access."
              },
              {
                title: "Regulatory Compliance",
                desc: "Aligning platforms with healthcare data governance standards and operational requirements."
              },
              {
                title: "System Reliability",
                desc: "Ensuring high availability and uninterrupted access to critical systems."
              },
              {
                title: "Workflow Efficiency",
                desc: "Designing digital tools that enhance clinical and administrative processes."
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
      <section className="py-36 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20">
            Our Approach to Healthcare Systems
          </h2>

          <div className="space-y-16">

            {[
              {
                title: "Security-First Architecture",
                desc: "Encryption, access controls, and structured data management to protect patient records."
              },
              {
                title: "Compliance-Aware Engineering",
                desc: "Systems designed with healthcare regulations and auditability in mind."
              },
              {
                title: "High-Availability Infrastructure",
                desc: "Redundant systems and resilient architecture to minimize downtime risk."
              },
              {
                title: "User-Centered Clinical Design",
                desc: "Interfaces that reduce friction and support healthcare professionals in daily operations."
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
            Healthcare Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-16 text-white/70">

            {[
              "Patient portal systems",
              "Electronic records integrations",
              "Secure data storage architecture",
              "Appointment & scheduling platforms",
              "HIPAA-aware system design",
              "Analytics & reporting dashboards",
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
            Supporting Responsible Digital Transformation
          </h2>

          <div className="grid md:grid-cols-3 gap-20 text-white/70">

            {[
              {
                title: "01 — Improve Care Delivery",
                desc: "Streamlined systems that support healthcare professionals."
              },
              {
                title: "02 — Protect Patient Data",
                desc: "Secure architecture designed around privacy and accountability."
              },
              {
                title: "03 — Strengthen Operational Resilience",
                desc: "Reliable infrastructure that supports continuous service."
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
        title="Building Healthcare Technology with Responsibility."
        subtitle="We design secure, compliant, and resilient healthcare systems that support patient care and institutional trust."
        primaryLabel="Schedule a Consultation"
        secondaryLabel="Discuss Your Healthcare Platform"
      />

    </main>
  )
}
