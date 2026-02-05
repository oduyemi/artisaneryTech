"use client";
import { motion, Variants, Easing } from "framer-motion";


const easeOutExpo: Easing = [0.22, 1, 0.36, 1];

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

export const ContactIntro = () => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="max-w-2xl space-y-6"
    >
      <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
        // CONTACT
      </p>

      <h1 className="text-4xl font-semibold tracking-tight leading-[1.05] text-[var(--color-fg)] sm:text-5xl">
        Start a thoughtful
        <br />
        conversation
      </h1>

      <p className="max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
        Tell us about the product, the challenge, or the direction you’re
        exploring. We’ll respond with clarity — and honesty.
      </p>
    </motion.div>
  );
};
