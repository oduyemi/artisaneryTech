"use client"

import IndustryCTA from "@/components/industry/IndustryCTA"

export default function ProfessionalServicesIndustryPage() {
  return (
    <main className="text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-44 px-6 border-b border-white/5">

        <div className="max-w-6xl mx-auto">

          <p className="text-white/40 uppercase tracking-widest text-sm mb-6">
            Industry
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl">
            Digital Platforms for
            <span className="block text-white/60">
              Professional Services Firms.
            </span>
          </h1>

          <p className="text-white/60 text-lg mt-10 max-w-2xl leading-relaxed">
            Artisanery Tech partners with consulting, legal, and advisory firms
            to build digital systems that reflect authority, elevate reputation,
            and support long-term client relationships.
          </p>

        </div>
      </section>


      {/* ================= INDUSTRY REALITY ================= */}
      <section className="py-36 px-6 border-b border-white/5">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24">

          <div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              In Professional Services, Credibility Is Everything.
            </h2>
          </div>

          <div className="space-y-8 text-white/60 leading-relaxed">

            <p>
              Clients evaluate expertise before they engage.
              Digital presence influences perception long before conversations begin.
            </p>

            <p>
              Firms require platforms that communicate authority,
              support knowledge publishing, and reinforce brand integrity.
            </p>

            <p>
              The architecture must align with discretion, performance,
              and long-term strategic positioning.
            </p>

          </div>

        </div>

      </section>


      {/* ================= WHERE FIRMS STRUGGLE ================= */}
      <section className="py-36 px-6 border-b border-white/5">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20">
            Common Digital Challenges in Professional Services
          </h2>

          <div className="grid md:grid-cols-2 gap-x-24 gap-y-20">

            {[
              {
                title: "Outdated Brand Perception",
                desc: "Legacy websites fail to reflect modern expertise and innovation."
              },
              {
                title: "Fragmented Knowledge Publishing",
                desc: "Whitepapers, insights, and case studies lack structured visibility."
              },
              {
                title: "Lead Qualification Gaps",
                desc: "No strategic intake systems to qualify and segment prospects."
              },
              {
                title: "Reputation Risk",
                desc: "Security and data handling must reflect professional responsibility."
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


      {/* ================= STRATEGIC APPROACH ================= */}
      <section className="py-36 px-6 border-b border-white/5">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20">
            Our Authority-Driven Approach
          </h2>

          <div className="space-y-16">

            {[
              {
                title: "Reputation-Focused Design",
                desc: "Structured visual systems that communicate expertise and discretion."
              },
              {
                title: "Knowledge Architecture",
                desc: "Structured publishing frameworks for insights, case studies, and research."
              },
              {
                title: "Strategic Client Intake Systems",
                desc: "Thoughtfully designed inquiry processes aligned with firm positioning."
              },
              {
                title: "Secure Infrastructure",
                desc: "Professional-grade security standards to protect sensitive client interactions."
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
            Professional Services Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-16 text-white/70">

            {[
              "Corporate website architecture",
              "Case study & insight publishing systems",
              "Thought leadership platforms",
              "Client portals & secure document exchange",
              "CRM integration & lead qualification",
              "SEO for professional authority positioning",
            ].map((item, i) => (
              <div key={i} className="border-t border-white/10 pt-6">
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= STRATEGIC POSITIONING ================= */}
      <section className="py-36 px-6 border-b border-white/5">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-20">
            Long-Term Positioning Over Short-Term Visibility
          </h2>

          <div className="grid md:grid-cols-3 gap-20 text-white/70">

            {[
              {
                title: "01 — Elevate Perception",
                desc: "Align digital presence with the firm’s true level of expertise."
              },
              {
                title: "02 — Strengthen Authority",
                desc: "Structure content systems that reinforce credibility over time."
              },
              {
                title: "03 — Support Growth",
                desc: "Build scalable infrastructure that supports expansion and new practice areas."
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

      <IndustryCTA
        title="Build a Digital Presence That Reflects Your Expertise."
        subtitle="We design and engineer platforms that elevate professional firms, reinforce authority, and support strategic growth."
        primaryLabel="Schedule a Consultation"
        secondaryLabel="Discuss Your Firm"
      />      
    </main>
  )
}
