"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // easeOutCubic-ish
    },
  },
};

const lineGrow = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Intro = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-28 sm:py-36">
      {/* Grain */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[url('/noise.png')]
          opacity-[0.035]
          mix-blend-soft-light
        "
      />

      <motion.div
        className="relative mx-auto max-w-7xl px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <div className="grid gap-20 lg:grid-cols-[1fr_2fr]">
          
          {/* Left rail */}
          <div className="relative">
            {/* Animated vertical guide */}
            <motion.div
              aria-hidden
              className="
                absolute left-2 top-0 h-full w-px
                origin-top
                bg-[var(--color-surface-border)]
              "
              variants={lineGrow}
            />

            <div className="pl-10">
              <motion.p
                variants={fadeUp}
                className="
                  font-mono text-xs tracking-widest
                  text-[var(--color-text-muted)]
                "
              >
                // ARTISANERY_TECH
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl"
              >
                Product execution,
                <br />
                treated as a craft
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-md text-lg leading-relaxed text-[var(--color-text-secondary)]"
              >
                We exist to turn Artisanery-led ideas into durable digital
                products — built with clarity, responsibility, and long-term
                ownership.
              </motion.p>
            </div>
          </div>

          {/* Right content */}
          <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Product-minded execution",
                text:
                  "We focus on outcomes, not output — ensuring what’s built continues to work, scale, and remain coherent over time.",
              },
              {
                title: "Architecture with intent",
                text:
                  "Systems are designed to evolve. Trade-offs are made consciously, with maintainability and clarity as first-class concerns.",
              },
              {
                title: "Stewardship beyond launch",
                text:
                  "We remain accountable for the health, stability, and evolution of what we build — because reliability is part of the product.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="space-y-4"
              >
                {/* Abstract mark */}
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span className="h-px w-8 bg-[var(--color-surface-border)]" />
                </div>

                <h3 className="text-lg font-medium text-[var(--color-fg)]">
                  {item.title}
                </h3>

                <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Grounding statement */}
        <motion.div
          variants={fadeUp}
          className="mt-24 rounded-2xl surface px-8 py-10 sm:px-12 sm:py-14"
        >
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
            Artisanery Tech operates entirely within the Artisanery brand —
            providing focused technical execution while protecting a singular,
            cohesive identity. Externally, clients experience Artisanery.
            Internally, we ensure the work holds up.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
