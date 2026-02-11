"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)] py-28 sm:py-36">
      
      {/* Subtle glow accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[var(--color-text-muted)]">
            // NEXT STEP
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            If this approach resonates,
            <span className="block">let’s start a conversation.</span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-secondary)]">
            We partner with teams who value clarity, long-term ownership,
            and product-aligned engineering.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="
                group inline-flex items-center justify-center
                rounded-full
                bg-[var(--color-accent)]
                px-8 py-4
                text-sm font-medium text-white
                shadow-sm
                transition-all duration-300
                hover:translate-y-[-2px]
                hover:shadow-lg
              "
            >
              Contact Us
            </Link>

            <Link
              href="/services"
              className="
                text-sm font-medium
                text-[var(--color-fg)]
                transition
                hover:text-[var(--color-accent)]
              "
            >
              Explore Services →
            </Link>
          </div>

          {/* Bottom Divider */}
          <div className="mx-auto mt-16 h-px w-24 bg-[var(--color-surface-border)]" />
        </motion.div>
      </div>
    </section>
  );
};
