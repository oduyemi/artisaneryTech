"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Technical Audit",
    description:
      "We assess your product, codebase, infrastructure, and business objectives. This phase clarifies scope, constraints, and long-term technical direction.",
  },
  {
    title: "Architecture & Planning",
    description:
      "We define system structure, stack decisions, performance considerations, and delivery milestones. Everything is documented and aligned.",
  },
  {
    title: "Iterative Build Cycles",
    description:
      "Structured development sprints focused on clarity, maintainability, and measurable progress. No chaotic iteration.",
  },
  {
    title: "Launch & Stewardship",
    description:
      "Deployment, monitoring, performance refinement, and ongoing architectural oversight for long-term stability.",
  },
];

export const DeliveryModel = () => {
  return (
    <section className="relative bg-[var(--color-surface)] py-32 sm:py-40">

      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="max-w-3xl pl-8 relative mb-20">
          <div className="absolute left-0 top-2 h-20 w-px bg-[var(--color-accent)]" />

          <p className="font-mono text-xs tracking-[0.35em] text-[var(--color-text-muted)]">
            // ENGAGEMENT MODEL
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Structured. Transparent. Measured.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-secondary)]">
            Every engagement follows a deliberate process designed to reduce
            ambiguity and ensure architectural clarity.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-[var(--color-surface-border)] pl-10 space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Number marker */}
              <div className="absolute -left-[44px] flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-surface-border)] bg-[var(--color-bg)] font-mono text-xs text-[var(--color-accent)]">
                0{index + 1}
              </div>

              <h3 className="text-xl font-medium text-[var(--color-fg)]">
                {step.title}
              </h3>

              <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-text-secondary)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
