"use client";
import { motion } from "framer-motion";
import Image from "next/image";

/* -----------------------------
   Motion
----------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

/* -----------------------------
   Component
----------------------------- */

export const Stewardship = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-32 sm:py-40">
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-soft-light"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="space-y-8"
          >
            <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
              // STEWARDSHIP
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
              We don’t ship and disappear
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
              Software doesn’t end at launch. It accumulates decisions, trade-offs,
              and responsibility over time. We stay accountable for what we build
              — technically and operationally.
            </p>

            <div className="space-y-6 pt-6">
              {[
                {
                  title: "Operational continuity",
                  text:
                    "We understand the system because we designed it. That means faster diagnosis, safer changes, and fewer unknowns.",
                },
                {
                  title: "Measured evolution",
                  text:
                    "Features are added with respect for the existing system — not layered recklessly on top of it.",
                },
                {
                  title: "Technical trust",
                  text:
                    "We document decisions, surface risk early, and never leave teams guessing how things work.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative pl-6"
                >
                  {/* Marker */}
                  <span className="absolute left-0 top-[0.55rem] h-2 w-2 rounded-full bg-[var(--color-accent)] opacity-70" />

                  <h3 className="text-base font-medium text-[var(--color-fg)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-lg text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="
              relative h-[420px] w-full
              rounded-2xl
              bg-[var(--color-surface)]
              border border-[var(--color-surface-border)]
              p-10
              shadow-[0_25px_80px_rgba(0,0,0,0.35)]
            "
          >
            <Image
              src="/images/hero1.png"
              alt="Long-term system stewardship"
              fill
              className="object-contain"
            />

            {/* Inner frame */}
            <div
              aria-hidden
              className="
                pointer-events-none absolute inset-0
                rounded-2xl
                ring-1 ring-inset ring-[var(--color-surface-border)]
              "
            />

            {/* Subtle caption */}
            <div className="absolute bottom-6 left-6">
              <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
                SYSTEM · CARE · TIME
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
