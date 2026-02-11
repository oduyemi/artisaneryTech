"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { BookServiceDialog } from "../dialog/book-service";

const services = [
  "Product Engineering",
  "Web & Mobile Development",
  "Technical Stewardship",
  "Product-Aligned SEO",
];

export const BookServiceCTA = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
      {/* Accent */}
      <div
        aria-hidden
        className="
          absolute inset-0
          opacity-40
        "
      />

      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/images/noise.jpg')] opacity-[0.05] mix-blend-soft-light"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl px-6"
      >
        <div
          className="
            relative rounded-[32px]
            bg-[var(--color-bg)]
            border border-[var(--color-surface-border)]
            px-10 py-14 sm:px-16 sm:py-20
          "
        >
          <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
            // READY_WHEN_YOU_ARE
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-5xl">
            Let’s build something
            <br />
            <span className="text-[var(--color-accent)]">
              worth maintaining
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
            Choose how you’d like to work together. We’ll take care of the
            system — end to end.
          </p>

          {/* Services */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => {
                  setSelected(service);
                  setOpen(true);
                }}
                className="
                  group flex items-center justify-between
                  rounded-2xl
                  border border-[var(--color-surface-border)]
                  px-6 py-5
                  text-left
                  transition
                  hover:border-[var(--color-accent)]
                  hover:bg-[var(--color-accent)]/5
                "
              >
                <span className="text-base font-medium text-[var(--color-fg)]">
                  {service}
                </span>
                <span className="font-mono text-xs text-[var(--color-text-muted)] transition group-hover:text-[var(--color-accent)]">
                  SELECT →
                </span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <BookServiceDialog
        open={open}
        onClose={() => setOpen(false)}
        service={selected}
      />
    </section>
  );
};
