import Link from "next/link";
import Image from "next/image";


export default function SolutionsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden px-6">
        <Image
          src="/images/enterprise.png"
          alt="Enterprise engineering solutions"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0" />
        <div className="relative max-w-5xl mx-auto py-32">
          <p className="text-xs tracking-[0.35em] text-white/40 mb-8">
            SOLUTIONS
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white leading-[1.05] max-w-3xl">
            Engineering Engagement
            <span className="block text-white/60 mt-4">
              Designed for Scale, Stability & Growth
            </span>
          </h1>

          <p className="mt-12 text-lg text-white/70 leading-relaxed max-w-2xl">
            We partner with organizations across critical engineering moments —
            strengthening architecture, modernizing systems, and enabling
            scalable product delivery.
          </p>
        </div>
      </section>

      {/* ================= SEGMENTATION ================= */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* WHO WE HELP */}
          <div>
            <p className="text-xs tracking-[0.35em] text-white/40 mb-6">
              WHO WE HELP
            </p>

            <h2 className="text-3xl text-white font-semibold mb-8">
              Leadership & Teams
            </h2>

            <p className="text-white/70 leading-relaxed mb-10">
              We collaborate with technical leaders and product teams to
              strengthen engineering foundations and delivery confidence.
            </p>

            <div className="space-y-6">
              <Link
                href="/solutions/who-we-help/ctos-engineering-leaders"
                className="block text-white hover:text-white/70 transition"
              >
                CTOs & Engineering Leaders →
              </Link>

              <Link
                href="/solutions/who-we-help/product-teams"
                className="block text-white hover:text-white/70 transition"
              >
                Product Teams →
              </Link>

              <Link
                href="/solutions/who-we-help/scale-ups"
                className="block text-white hover:text-white/70 transition"
              >
                Scale-ups →
              </Link>
            </div>
          </div>

          {/* USE CASES */}
          <div>
            <p className="text-xs tracking-[0.35em] text-white/40 mb-6">
              USE CASES
            </p>

            <h2 className="text-3xl text-white font-semibold mb-8">
              Engineering Transitions
            </h2>

            <p className="text-white/70 leading-relaxed mb-10">
              We engage across defined business moments — product creation,
              modernization, and platform scaling.
            </p>

            <div className="space-y-6">
              <Link
                href="/solutions/use-cases/building-new-products"
                className="block text-white hover:text-white/70 transition"
              >
                Building New Products →
              </Link>

              <Link
                href="/solutions/use-cases/modernizing-legacy-systems"
                className="block text-white hover:text-white/70 transition"
              >
                Modernizing Legacy Systems →
              </Link>

              <Link
                href="/solutions/use-cases/scaling-existing-platforms"
                className="block text-white hover:text-white/70 transition"
              >
                Scaling Existing Platforms →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ================= POSITIONING CLOSE ================= */}
      <section className="py-36 px-6 text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl text-white font-semibold mb-10">
            Structured Engagement.
            <span className="block text-white/60 mt-4">
              Long-Term Engineering Strength.
            </span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            Our role is not to replace internal teams, but to reinforce them —
            introducing architectural discipline, operational maturity, and
            delivery confidence where it matters most.
          </p>

        </div>
      </section>
    </>
  );
}
