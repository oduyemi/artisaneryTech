"use client";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Clarity over complexity",
    description:
      "Systems should be understandable by humans first, machines second.",
  },
  {
    title: "Durability over trend",
    description:
      "We choose technologies and patterns for longevity, not novelty.",
  },
  {
    title: "Stewardship over delivery",
    description:
      "Shipping is a milestone. Responsibility continues after launch.",
  },
  {
    title: "Product before code",
    description:
      "Technical decisions serve the product, not the other way around.",
  },
];

export const AboutPrinciples = () => {
  return (
    <section className="relative bg-[var(--color-bg)] py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <p className="font-mono text-xs tracking-[0.3em] text-[var(--color-text-muted)]">
            // PRINCIPLES
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            How we think about building software.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-px bg-[var(--color-surface-border)] md:grid-cols-2">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="group relative bg-[var(--color-surface)] p-12"
            >
              {/* Animated Accent Line */}
              <div className="absolute left-0 top-0 h-full w-px bg-[var(--color-accent)] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />

              <h3 className="text-xl font-medium text-[var(--color-fg)]">
                {item.title}
              </h3>

              <p className="mt-6 text-[var(--color-text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
