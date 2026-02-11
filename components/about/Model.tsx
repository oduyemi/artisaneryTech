"use client";

import { motion } from "framer-motion";

const model = [
  {
    title: "Embedded Partnership",
    description:
      "We operate as an extension of your product and leadership team — not as an external vendor.",
  },
  {
    title: "Architectural Accountability",
    description:
      "Every technical decision is intentional, documented, and aligned with long-term system durability.",
  },
  {
    title: "Measured Continuity",
    description:
      "We prioritize continuity, transparency, and sustainable velocity over short-term output.",
  },
];

export const AboutOperatingModel = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-32 sm:py-40">
      
      {/* Subtle background depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(0,0,0,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-24 md:grid-cols-12">
          
          {/* Left Column */}
          <div className="md:col-span-5">
            <div className="relative pl-8">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute left-0 top-2 h-40 w-px origin-top bg-[var(--color-accent)]"
              />

              <p className="font-mono text-xs tracking-[0.3em] text-[var(--color-text-muted)]">
                // OPERATING MODEL
              </p>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl leading-tight">
                Embedded. Accountable.
                <span className="block">Designed for longevity.</span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-secondary)]">
                Our operating model is structured around clarity,
                responsibility, and long-term technical stewardship.
                We build systems that remain understandable and adaptable.
              </p>
            </div>
          </div>

          {/* Right Column Grid */}
          <div className="md:col-span-7">
            <div className="grid gap-px bg-[var(--color-surface-border)] sm:grid-cols-2">
              {model.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 22 }}
                  className="group relative bg-[var(--color-surface)] p-12"
                >
                  <h3 className="text-xl font-medium text-[var(--color-fg)]">
                    {item.title}
                  </h3>

                  <p className="mt-6 leading-relaxed text-[var(--color-text-secondary)]">
                    {item.description}
                  </p>

                  {/* Micro underline interaction */}
                  <div className="mt-8 h-px w-12 bg-[var(--color-surface-border)] transition-all duration-300 group-hover:w-24 group-hover:bg-[var(--color-accent)]" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
