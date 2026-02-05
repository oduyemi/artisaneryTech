"use client";
import { motion, Variants, Easing } from "framer-motion";
import Image from "next/image";

const easeOutExpo: Easing = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};

const lineGrow: Variants = {
  hidden: {
    scaleY: 0,
  },
  show: {
    scaleY: 1,
    transition: {
      duration: 0.9,
      ease: easeOutExpo,
    },
  },
};

export const HowWeWork = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-32 sm:py-40">
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.035] mix-blend-soft-light"
      />

      <motion.div
        className="relative mx-auto max-w-7xl px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <div className="grid gap-24 lg:grid-cols-[1fr_2fr]">
          {/* Left framing */}
          <div className="space-y-10">
            <motion.p
              variants={fadeUp}
              className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]"
            >
              // HOW_WE_WORK
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl"
            >
              A deliberate,
              <br />
              product-led process
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-md text-lg leading-relaxed text-[var(--color-text-secondary)]"
            >
              We don’t treat software delivery as a linear checklist. Our process
              is designed to reduce risk, clarify decisions, and support the
              product over its entire lifecycle.
            </motion.p>
          </div>

          {/* Process column */}
          <div className="relative">
            {/* Framed image */}
            <div className="pointer-events-none absolute -inset-x-10 -top-16 hidden lg:block">
              <div className="relative h-[420px] overflow-hidden rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface)] shadow-2xl">
                <Image
                  src="/images/product.png"
                  alt=""
                  fill
                  className="object-cover opacity-[0.14] mix-blend-luminosity"
                />
              </div>
            </div>

            {/* Surface plate */}
            <div className="relative rounded-2xl surface px-10 py-14">
              {/* Vertical spine */}
              <motion.div
                aria-hidden
                className="absolute left-10 top-0 h-full w-px origin-top bg-[var(--color-surface-border)]"
                variants={lineGrow}
              />

              <div className="space-y-18 pl-12">
                {[
                  {
                    label: "01",
                    title: "Understand the product",
                    description:
                      "We start by understanding the problem, the context, and the constraints.",
                  },
                  {
                    label: "02",
                    title: "Define the system",
                    description:
                      "Architecture is shaped around product reality — not trends.",
                  },
                  {
                    label: "03",
                    title: "Build with care",
                    description:
                      "Execution is disciplined and transparent.",
                  },
                  {
                    label: "04",
                    title: "Steward and evolve",
                    description:
                      "After launch, we remain accountable.",
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="relative group"
                  >
                    {/* Node */}
                    <div className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_0_6px_rgba(95,179,162,0.08)] transition group-hover:shadow-[0_0_0_10px_rgba(95,179,162,0.12)]" />
                    </div>

                    <div className="space-y-3">
                      <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
                        {step.label}
                      </p>
                      <h3 className="text-lg font-medium text-[var(--color-fg)]">
                        {step.title}
                      </h3>
                      <p className="max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
