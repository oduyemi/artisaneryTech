"use client";
import Image from "next/image";
import { motion, Variants, Easing, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const easeOutExpo: Easing = [0.22, 1, 0.36, 1];



export const AboutHero = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll progress for parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle parallax movement
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden text-white"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/abthero.png"
          alt="About background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </motion.div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative max-w-3xl pl-8"
        >
          {/* Vertical Accent Line */}
          <div className="absolute left-0 top-2 h-24 w-px bg-white/40" />

          <motion.p
            variants={fadeUp}
            className="font-mono text-xs tracking-[0.3em] text-white/70"
          >
            // ABOUT
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            We build and steward
            <span className="block">
              durable software systems.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80"
          >
            Artisanery Tech exists to help teams design, build, and sustain
            software that remains clear, adaptable, and reliable over time.
            We prioritize long-term product health over short-term velocity.
          </motion.p>
        </motion.div>
      </div>

      {/* Floating Micro Caption */}
      <div className="absolute bottom-8 right-8 hidden text-xs font-mono tracking-wider text-white/60 md:block">
        EST. 2024 · LONG-TERM THINKING
      </div>

      {/* Smooth transition fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  );
};
