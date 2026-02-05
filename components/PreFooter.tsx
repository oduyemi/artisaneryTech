"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const PreFooter = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Accent background */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[linear-gradient(135deg,var(--color-accent),#7ad6c4)]
        "
      />

      {/* Controlled bloom */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.16),transparent_60%)]
        "
      />

      {/* Grain */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[url('/noise.png')]
          opacity-[0.06]
          mix-blend-soft-light
        "
      />

      {/* Frame */}
      <div
        aria-hidden
        className="
          absolute inset-0
          ring-1 ring-inset ring-white/10
        "
      />

      <motion.div
        className="relative mx-auto max-w-5xl px-6 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs tracking-widest text-white/80"
        >
          // NEXT_STEP
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="
            mt-4
            text-3xl sm:text-4xl
            font-semibold
            tracking-tight
            leading-[1.05]
            text-white
          "
        >
          Let’s build something
          <br />
          that holds up
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="
            mx-auto mt-4 max-w-xl
            text-base sm:text-lg
            leading-relaxed
            text-white/90
          "
        >
          Thoughtful execution and long-term ownership —
          from first decision to steady evolution.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex justify-center"
        >
          <Link
            href="/contact"
            className="
              group relative inline-flex items-center gap-3
              rounded-full
              bg-white
              px-8 py-3.5
              text-sm font-medium
              text-[var(--color-bg)]
              shadow-lg
              transition
              hover:scale-[1.03]
              hover:shadow-xl
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/60
            "
          >
            {/* Glow */}
            <span
              aria-hidden
              className="
                absolute inset-0 -z-10
                rounded-full
                bg-white/40
                blur-lg
                opacity-0
                transition
                group-hover:opacity-100
              "
            />
            Start a conversation
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
