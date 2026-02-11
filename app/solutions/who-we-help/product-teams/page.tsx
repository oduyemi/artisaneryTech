import Image from "next/image";
import { ServiceCTA } from "@/components/services/detail/ServiceCTA";

export default function ProductTeamsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-36 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-6 bg-white/5 blur-3xl rounded-3xl opacity-30" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/team.png"
                alt="Product team collaborating"
                width={900}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.35em] text-white/40 mb-8">
              WHO WE HELP
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
              Embedded Engineering Support
              <span className="block text-white/60">
                For Product-Driven Teams
              </span>
            </h1>

            <p className="mt-10 text-lg text-white/70 leading-relaxed max-w-xl">
              When product velocity increases, engineering bottlenecks follow.
              We integrate seamlessly with internal teams to improve delivery
              speed, technical clarity, and system stability.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COLLABORATION ================= */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white font-semibold mb-20 text-center">
            Collaborative Execution
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Sprint Integration",
                desc: "We operate within your agile workflows and delivery cadence.",
              },
              {
                title: "Technical Clarity",
                desc: "Reducing ambiguity in architecture and system behavior.",
              },
              {
                title: "Performance Optimization",
                desc: "Strengthening systems without disrupting roadmap progress.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-black border border-white/5"
              >
                <h3 className="text-xl text-white mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DELIVERY ================= */}
      <section className="py-32 px-6 bg-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white font-semibold mb-10">
            Designed to Enhance — Not Disrupt
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            Our role is not to replace your team, but to reinforce it. We bring
            senior engineering experience that improves system reliability,
            code quality, and execution speed.
          </p>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
