import Link from "next/link";

export default function UseCasesOverviewPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="py-36 px-6 text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.35em] text-white/40 mb-8">
            USE CASES
          </p>

          <h1 className="text-5xl md:text-6xl text-white font-semibold leading-tight mb-12">
            Engineering Engagement
            <span className="block text-white/60 mt-4">
              Aligned With Business Intent
            </span>
          </h1>

          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We support organizations across critical engineering transitions —
            from product creation to infrastructure modernization and platform scaling.
          </p>
        </div>
      </section>

      {/* ================= USE CASE GRID ================= */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Building New Products",
              desc: "Designing and delivering scalable products from concept to production.",
              href: "/solutions/use-cases/building-new-products",
            },
            {
              title: "Modernizing Legacy Systems",
              desc: "Evolving aging architectures without disrupting operations.",
              href: "/solutions/use-cases/modernizing-legacy-systems",
            },
            {
              title: "Scaling Existing Platforms",
              desc: "Strengthening performance, reliability, and growth capacity.",
              href: "/solutions/use-cases/scaling-existing-platforms",
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group p-10 rounded-2xl border border-white/10 bg-stone-100 hover:border-white/30 transition-all duration-300"
            >
              <h3 className="text-black text-xl mb-6 group-hover:text-green-700">
                {item.title}
              </h3>
              <p className="text-black leading-relaxed">
                {item.desc}
              </p>
            </Link>
          ))}

        </div>
      </section>
    </>
  );
}
