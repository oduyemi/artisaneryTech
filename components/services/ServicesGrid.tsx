"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Applications",
    description:
      "Design and development of scalable web platforms using modern frameworks, structured architecture, and performance-first engineering.",
  },
  {
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile applications engineered for reliability, performance, and long-term maintainability.",
  },
  {
    title: "SEO & Technical Optimization",
    description:
      "Search-optimized architecture, performance tuning, and structured metadata implementation designed for discoverability at scale.",
  },
  {
    title: "System Architecture",
    description:
      "Backend structuring, API design, and infrastructure decisions built for clarity and future growth.",
  },
  {
    title: "UI & Frontend Systems",
    description:
      "Component architecture, design systems, and high-performance rendering strategies.",
  },
  {
    title: "Product Refactoring & Optimization",
    description:
      "Stabilizing and restructuring existing products to improve velocity, clarity, and technical durability.",
  },
];

export const ServiceGrid = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-32 sm:py-40">

      {/* Subtle background depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="max-w-3xl pl-8 relative mb-20">
          <div className="absolute left-0 top-2 h-20 w-px bg-[var(--color-accent)]" />

          <p className="font-mono text-xs tracking-[0.35em] text-[var(--color-text-muted)]">
            // CAPABILITIES
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl leading-tight">
            Web. Mobile. Discoverable.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-secondary)]">
            We engineer digital products across platforms — ensuring structural
            integrity, scalable architecture, and long-term visibility.
          </p>
        </div>

        {/* Structured Grid */}
        <div className="grid gap-px bg-[var(--color-surface-border)] md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="group relative bg-[var(--color-surface)] p-12"
            >
              {/* Number label */}
              <div className="font-mono text-xs text-[var(--color-text-muted)] tracking-widest">
                0{index + 1}
              </div>

              <h3 className="mt-6 text-xl font-medium text-[var(--color-fg)]">
                {service.title}
              </h3>

              <p className="mt-6 leading-relaxed text-[var(--color-text-secondary)]">
                {service.description}
              </p>

              {/* Hover accent */}
              <div className="mt-10 h-px w-12 bg-[var(--color-surface-border)] transition-all duration-300 group-hover:w-24 group-hover:bg-[var(--color-accent)]" />

              {/* Corner detail */}
              <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-[var(--color-surface-border)] transition-all duration-300 group-hover:border-[var(--color-accent)]" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
