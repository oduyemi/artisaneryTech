"use client";

import { motion } from "framer-motion";

interface ServiceHeroProps {
  label: string;
  title: string;
  description: string;
}

export const ServiceHero = ({
  label,
  title,
  description,
}: ServiceHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-36 sm:py-44">

      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,var(--color-fg)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-fg)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="relative pl-10">

          {/* Accent rail */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 140 }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 top-2 w-px bg-[var(--color-accent)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-xs tracking-[0.4em] text-[var(--color-text-muted)]"
          >
            {label}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-5xl leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
