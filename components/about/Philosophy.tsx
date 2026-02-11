"use client";
import { motion } from "framer-motion";

export const AboutPhilosophy = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)] py-28 sm:py-36">
      {/* Large Faint Backdrop Word */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-[14vw] font-semibold tracking-tight text-[var(--color-fg)] opacity-[0.03] select-none">
          SYSTEMS
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-20 md:grid-cols-12">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="relative pl-8">
              {/* Vertical Accent Line */}
              <div className="absolute left-0 top-2 h-28 w-px bg-[var(--color-fg)]/20" />

              <p className="font-mono text-xs tracking-[0.3em] text-[var(--color-text-muted)]">
                // OUR PHILOSOPHY
              </p>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
                Software is infrastructure,
                <span className="block">
                  not decoration.
                </span>
              </h2>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 md:col-start-7 space-y-8 text-lg leading-relaxed text-[var(--color-text-secondary)]"
          >
            <p>
              Many products are built quickly and maintained reluctantly.
              We take a different approach. Every system should remain
              understandable, adaptable, and accountable long after launch.
            </p>

            <p>
              Good engineering reduces cognitive load. Clear architecture
              prevents chaos. Stewardship protects investment.
            </p>

            <div className="pt-6">
              <div className="h-px w-16 bg-[var(--color-surface-border)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
