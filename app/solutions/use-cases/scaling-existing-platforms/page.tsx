import Image from "next/image";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function ScalingExistingPlatformsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden px-6">

        <Image
          src="/images/scale.png"
          alt="High performance digital infrastructure"
          fill
          priority
          className="object-cover object-center opacity-40"
        />

        <div className="absolute inset-0" />

        <div className="relative max-w-5xl mx-auto py-32">
          <p className="text-xs tracking-[0.35em] text-white/40 mb-8">
            USE CASE
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold text-white leading-[1.05] max-w-3xl">
            Scaling Existing Platforms
            <span className="block text-white/60 mt-4">
              For Growth, Performance & Reliability
            </span>
          </h1>

          <p className="mt-12 text-lg text-white/70 leading-relaxed max-w-2xl">
            As demand increases, systems must evolve. We help organizations
            strengthen infrastructure, improve performance, and build
            resilient architectures capable of sustained growth.
          </p>
        </div>
      </section>

      {/* ================= GROWTH PRESSURE ================= */}
      <section className="py-36 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto">

          <p className="text-xs tracking-[0.35em] text-white/40 mb-8">
            THE CHALLENGE
          </p>

          <h2 className="text-3xl md:text-5xl text-white font-semibold max-w-3xl mb-16">
            Growth Exposes
            <span className="block text-white/60 mt-3">
              Architectural Weaknesses
            </span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
            Increased traffic, data volume, and feature expansion reveal
            bottlenecks that were previously manageable. Performance
            degradation, scaling inefficiencies, and reliability issues begin
            affecting customer experience and operational stability.
          </p>

        </div>
      </section>

      {/* ================= PERFORMANCE RISKS ================= */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

          {[
            {
              title: "Infrastructure Bottlenecks",
              desc: "Insufficient load handling and poor horizontal scalability.",
            },
            {
              title: "Performance Degradation",
              desc: "Increased latency and unstable response times under peak demand.",
            },
            {
              title: "Reliability Gaps",
              desc: "Limited monitoring, alerting, and incident response maturity.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 border border-white/10 rounded-2xl bg-neutral-950"
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
      </section>

      {/* ================= HARDENING APPROACH ================= */}
      <section className="py-36 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl text-white font-semibold mb-16">
            Our Platform Hardening Approach
          </h2>

          <ul className="space-y-8 text-white/70 text-lg leading-relaxed">
            <li>• Load testing and performance profiling</li>
            <li>• Infrastructure optimization & autoscaling strategies</li>
            <li>• Observability & monitoring upgrades</li>
            <li>• Reliability engineering & incident reduction</li>
          </ul>

        </div>
      </section>

      {/* ================= OUTCOME ================= */}
      <section className="py-36 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl text-white font-semibold mb-10">
            The Outcome
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            A resilient, high-performance platform engineered to handle
            sustained growth, reduced incident frequency, and improved
            operational confidence.
          </p>

        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
