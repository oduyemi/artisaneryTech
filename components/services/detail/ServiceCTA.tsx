"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServiceCTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 " />

      {/* Subtle Glow Accent */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 blur-3xl rounded-full" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] text-white/60 mb-6"
        >
          // START YOUR BUILD
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-semibold text-white leading-tight"
        >
          Let’s Build Something
          <span className="block text-white/70">
            Structured, Scalable, and Commercially Sound.
          </span>
        </motion.h2>

        {/* Value Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-lg text-white/70 max-w-2xl mx-auto"
        >
          Whether you're validating an idea, launching an MVP, or scaling a
          growing platform — we engineer solutions aligned with business
          objectives, capital efficiency, and long-term stability.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium tracking-wide rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Schedule a Strategy Call
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 border border-white/30 text-white text-sm font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-white/10"
          >
            Explore All Services
          </Link>
        </motion.div>

        {/* Trust Reinforcement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 1.1 }}
          className="mt-8 text-sm text-white/50"
        >
          Structured process. Transparent communication. Long-term partnership.
        </motion.p>
      </div>
    </section>
  );
}
