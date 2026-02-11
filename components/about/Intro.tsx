"use client";

import { motion } from "framer-motion";

export const AboutIntro = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-32 sm:py-40">
      
      {/* Soft Background Depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(0,0,0,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-24 md:grid-cols-12">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 h-36 w-px bg-[var(--color-fg)]/20" />

              <p className="font-mono text-xs tracking-[0.3em] text-[var(--color-text-muted)]">
                // WHO WE ARE
              </p>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
                A United States–based,
                <span className="block">
                  product-focused engineering company.
                </span>
              </h2>
            </div>

            {/* Subtle Geo Badge */}
            <div className="mt-10 inline-flex items-center rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface)] px-4 py-2 text-xs font-medium text-[var(--color-text-secondary)]">
              🇺🇸 Headquartered in the United States
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
              Artisanery Tech is a <span className="text-[var(--color-fg)] font-medium">US-based software development company</span> 
              specializing in custom software development, scalable web applications, 
              and long-term software architecture. We partner with startups, 
              growth-stage companies, and enterprise teams to design and build 
              durable digital products.
            </p>

            <p>
              As a <span className="text-[var(--color-fg)] font-medium">product-focused engineering firm</span>, 
              we combine modern software engineering, product strategy, and 
              enterprise-grade systems thinking to deliver solutions that remain 
              adaptable and maintainable over time.
            </p>

            <p>
              Our software consulting services extend across North America, 
              supporting organizations that value clarity, accountability, 
              and long-term technical stewardship.
            </p>
          </motion.div>
        </div>

        {/* ---------- DATA STRIP ---------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-y border-[var(--color-surface-border)] py-10"
        >
          <div className="grid gap-10 text-sm md:grid-cols-4">
            
            <div>
              <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
                FOUNDED
              </p>
              <p className="mt-2 font-medium text-[var(--color-fg)]">
                2024
              </p>
            </div>

            <div>
              <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
                FOCUS
              </p>
              <p className="mt-2 font-medium text-[var(--color-fg)]">
                Product Strategy & Engineering
              </p>
            </div>

            <div>
              <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
                MARKET
              </p>
              <p className="mt-2 font-medium text-[var(--color-fg)]">
                Startups & Enterprise Teams
              </p>
            </div>

            <div>
              <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
                MODEL
              </p>
              <p className="mt-2 font-medium text-[var(--color-fg)]">
                Long-Term Technical Stewardship
              </p>
            </div>

          </div>
        </motion.div>

        {/* ---------- TRUST INDICATOR ROW ---------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-16"
        >
          <div className="flex flex-wrap items-center justify-between gap-8 text-sm text-[var(--color-text-muted)]">
            <span>Enterprise-grade Architecture</span>
            <span>Scalable Web Applications</span>
            <span>Custom Software Development</span>
            <span>Product-Focused Engineering</span>
            <span>Long-Term System Design</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
