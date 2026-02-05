"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
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

      {/* Vertical guide spine */}
      <div
        aria-hidden
        className="
          absolute left-1/2 top-0 hidden h-full w-px
          -translate-x-1/2
          bg-[linear-gradient(to_bottom,transparent,var(--color-surface-border),transparent)]
          opacity-40
          lg:block
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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

        {/* Capabilities list */}
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

                  <p className="mt-2 font-mono text-xs text-[var(--color-text-muted)]">
                    Responsibility · Execution · Stewardship
                  </p>

                  <p
                    className="
                      mt-6 max-w-xl
                      text-[15px]
                      leading-[1.75]
                      text-[var(--color-text-secondary)]
                    "
                  >
                    {capability.description}
                  </p>
                </div>

                {/* Image plate */}
                <div
                  className={`
                    relative h-[360px] w-full
                    rounded-2xl
                    bg-[var(--color-surface)]
                    border border-[var(--color-surface-border)]
                    p-10
                    shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                    transition-transform duration-500
                    lg:hover:-translate-y-1
                    ${i % 2 === 1 ? "lg:order-1" : ""}
                  `}
                >
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    className="object-contain"
                  />

                  {/* Corner markers */}
                  <span className="absolute left-4 top-4 h-2 w-2 rounded-full bg-[var(--color-accent)] opacity-60" />
                  <span className="absolute right-4 bottom-4 h-2 w-2 rounded-full bg-[var(--color-accent)] opacity-40" />

                  {/* Inner frame */}
                  <div
                    aria-hidden
                    className="
                      absolute inset-0
                      rounded-2xl
                      ring-1 ring-inset ring-[var(--color-surface-border)]
                      pointer-events-none
                    "
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
