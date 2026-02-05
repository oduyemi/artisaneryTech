"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE_OUT,
    },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE_OUT,
    },
  },
};

const capabilities = [
  {
    index: "01",
    title: "Product Engineering",
    description:
      "We design and build software as long-lived systems. Architecture, interfaces, and data models are shaped around product reality — not trends.",
    image: "/images/product.png",
  },
  {
    index: "02",
    title: "Web & Mobile Applications",
    description:
      "From early-stage MVPs to production platforms, we build responsive, accessible, and maintainable applications that hold up under growth.",
    image: "/images/app.png",
  },
  {
    index: "03",
    title: "Technical Stewardship",
    description:
      "We remain accountable after launch. This includes maintenance, iteration, performance tuning, and long-term system health.",
    image: "/images/review.png",
  },
  {
    index: "04",
    title: "Product-Aligned Growth",
    description:
      "Where appropriate, we support discoverability through product-aware SEO and technical growth foundations — grounded in system truth.",
    image: "/images/growth.png",
  },
];

export const Capabilities = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-32 sm:py-40">
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.035] mix-blend-soft-light"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          viewport={{ once: true, margin: "-120px" }}
          className="mb-28 max-w-2xl"
        >
          <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
            // CAPABILITIES
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            What we’re responsible for
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-secondary)]">
            These are not services in isolation. They are connected
            responsibilities that support the full lifecycle of a product.
          </p>
        </motion.div>

        {/* List */}
        <div className="space-y-32">
          {capabilities.map((capability, i) => {
            const motionVariant = i % 2 === 0 ? fadeLeft : fadeRight;

            return (
              <motion.div
                key={capability.index}
                variants={motionVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-120px" }}
                className="grid items-center gap-16 lg:grid-cols-2"
              >
                {/* Text */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
                    {capability.index}
                  </p>

                  <h3 className="mt-4 text-2xl font-medium tracking-tight text-[var(--color-fg)]">
                    {capability.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-[var(--color-text-secondary)]">
                    {capability.description}
                  </p>
                </div>

                {/* Image */}
                <div
                  className={`relative h-[360px] w-full rounded-2xl bg-[var(--color-surface)] border border-[var(--color-surface-border)] p-10 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
