"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Founded in the United States",
    description:
      "Artisanery Tech was established as a product-focused engineering company centered on long-term software stewardship.",
  },
  {
    year: "2024",
    title: "Product & Architecture Focus",
    description:
      "Structured services around custom software development, scalable systems, and enterprise-grade architecture.",
  },
  {
    year: "Ongoing",
    title: "Long-Term Stewardship Model",
    description:
      "Shifted from delivery-based engagements to embedded, accountability-driven operating partnerships.",
  },
];

export const AboutTimeline = () => {
  return (
    <section className="relative bg-[var(--color-surface)] py-32 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.3em] text-[var(--color-text-muted)]">
            // TIMELINE
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Structured growth. Intentional evolution.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-[var(--color-surface-border)]" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div className="absolute left-[6px] top-2 h-3 w-3 rounded-full bg-[var(--color-accent)]" />

                <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
                  {item.year}
                </p>

                <h3 className="mt-2 text-lg font-medium text-[var(--color-fg)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
