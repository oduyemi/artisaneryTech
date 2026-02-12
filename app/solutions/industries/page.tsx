"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"

const industries = [
  {
    title: "Fintech",
    desc: "Secure, compliant systems built for financial reliability and transaction integrity.",
    href: "/industries/fintech",
    tags: ["Regulated", "Enterprise"],
  },
  {
    title: "HealthTech",
    desc: "Scalable platforms designed for data privacy, security, and regulatory alignment.",
    href: "/industries/healthtech",
    tags: ["Regulated", "High-Scale"],
  },
  {
    title: "SaaS Platforms",
    desc: "High-performance architectures supporting subscription growth and platform scalability.",
    href: "/industries/saas",
    tags: ["High-Scale"],
  },
  {
    title: "Enterprise Systems",
    desc: "Modernization and integration for large-scale internal platforms.",
    href: "/industries/enterprise",
    tags: ["Enterprise"],
  },
  {
    title: "E-commerce",
    desc: "Performance-optimized systems built to handle demand spikes and global traffic.",
    href: "/industries/ecommerce",
    tags: ["High-Scale"],
  },
  {
    title: "Logistics & Mobility",
    desc: "Reliable, real-time infrastructure supporting complex operational coordination.",
    href: "/industries/logistics",
    tags: ["Enterprise", "High-Scale"],
  },
]

const filters = ["All", "Enterprise", "Regulated", "High-Scale"]

const filterInsights: Record<string, string> = {
  All: "We build resilient systems across regulated, enterprise, and high-growth environments where failure is not an option.",
  Enterprise:
    "Enterprise environments demand architectural clarity, governance, and long-term scalability.",
  Regulated:
    "Regulated industries require precision engineering, auditability, and compliance-first design.",
  "High-Scale":
    "High-scale platforms demand performance optimization, distributed systems thinking, and infrastructure maturity.",
}

export default function IndustriesSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredIndustries = useMemo(() => {
    if (activeFilter === "All") return industries
    return industries.filter((industry) =>
      industry.tags.includes(activeFilter)
    )
  }, [activeFilter])

  return (
    <section className="relative py-40 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-24">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-1">

          <p className="text-white/40 text-sm uppercase tracking-widest mb-6">
            Industries
          </p>

          <h2 className="text-4xl md:text-5xl text-white font-semibold leading-tight mb-12">
            Complex
            <br />
            Environments.
          </h2>

          {/* FILTERS */}
          <div className="space-y-6 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="relative text-left block text-lg group"
              >
                <span
                  className={`transition ${
                    activeFilter === filter
                      ? "text-white"
                      : "text-white/40 group-hover:text-white/70"
                  }`}
                >
                  {filter}
                </span>

                {/* Animated underline */}
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilterLine"
                    className="absolute left-0 -bottom-2 h-px w-16 bg-white"
                  />
                )}
              </button>
            ))}
          </div>

          {/* INSIGHT PANEL */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="text-white/60 leading-relaxed max-w-sm"
            >
              {filterInsights[activeFilter]}
            </motion.p>
          </AnimatePresence>

        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2">

          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-x-20 gap-y-24"
          >
            {filteredIndustries.map((industry, i) => (
              <motion.a
                key={industry.title}
                href={industry.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.4,
                }}
                className={`group relative block ${
                  i % 2 !== 0 ? "md:mt-16" : ""
                }`}
              >
                <div className="absolute left-0 top-0 h-full w-px bg-white/10 group-hover:bg-white/40 transition-all duration-300" />

                <div className="pl-8">
                  <h3 className="text-2xl md:text-3xl text-white font-semibold mb-6 group-hover:text-white/80 transition">
                    {industry.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed max-w-md">
                    {industry.desc}
                  </p>

                  <div className="mt-6 flex gap-4 text-xs text-white/40 uppercase tracking-wide">
                    {industry.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="mt-8 text-sm text-white/40 group-hover:text-white/70 transition">
                    Explore →
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>

      </div>

    </section>
  )
}
