"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const ServicesHero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle parallax
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative h-[85vh] min-h-[600px] w-full overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          src="/images/serviceHero.png"
          alt="Artisanery Tech Services"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Subtle radial depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="relative max-w-3xl pl-8 text-white">

          {/* Vertical Accent */}
          <div className="absolute left-0 top-2 h-32 w-px bg-[var(--color-accent)]" />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.35em] text-white/70"
          >
            // SERVICES
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 text-4xl font-semibold tracking-tight leading-tight sm:text-5xl"
          >
            Product engineering.
            <span className="block">System architecture.</span>
            <span className="block">Long-term ownership.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80"
          >
            We design and build web and mobile applications with
            structural clarity, scalable architecture, and search-ready foundations.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
