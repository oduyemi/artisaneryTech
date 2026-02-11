"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do you price projects?",
    answer:
      "Engagements are scoped after technical assessment. Depending on complexity, we offer milestone-based pricing or structured retainers. We avoid vague fixed quotes without architectural clarity.",
  },
  {
    question: "How long does a typical web or mobile application take?",
    answer:
      "Most structured builds range between 8–16 weeks depending on scope. Larger platforms may be delivered in phased releases. We prioritize stable foundations over rushed output.",
  },
  {
    question: "Can you work with our existing engineering team?",
    answer:
      "Yes. We frequently integrate with internal teams, providing architectural oversight, system design guidance, or focused build execution without disrupting workflow.",
  },
  {
    question: "We have a messy codebase. Can you fix it?",
    answer:
      "Absolutely. Refactoring and stabilization are core services. We audit, restructure, and improve maintainability while preserving product continuity.",
  },
  {
    question: "What does your SEO service actually include?",
    answer:
      "Our SEO offering focuses on technical SEO: structured metadata, performance optimization, crawlability, indexing architecture, and search-ready foundations. We do not provide content marketing or ad management.",
  },
  {
    question: "How do you ensure scalability?",
    answer:
      "Scalability begins with architecture. We design modular systems, clear data models, and performance budgets to prevent future bottlenecks and technical debt.",
  },
];

export const ServicesFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[var(--color-bg)] py-32 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}
        <div className="max-w-3xl pl-8 relative mb-20">
          <div className="absolute left-0 top-2 h-20 w-px bg-[var(--color-accent)]" />

          <p className="font-mono text-xs tracking-[0.35em] text-[var(--color-text-muted)]">
            // FAQ
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Practical questions. Clear answers.
          </h2>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-[var(--color-surface-border)]">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={faq.question} className="py-8">
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="text-lg font-medium text-[var(--color-fg)]">
                    {faq.question}
                  </h3>

                  {/* Plus / Minus indicator */}
                  <div className="relative h-4 w-4">
                    <span
                      className={`absolute left-0 top-1/2 h-px w-4 bg-[var(--color-fg)] transition-transform duration-300 ${
                        isOpen ? "rotate-0" : ""
                      }`}
                    />
                    <span
                      className={`absolute left-0 top-1/2 h-px w-4 bg-[var(--color-fg)] transition-transform duration-300 ${
                        isOpen ? "rotate-90 opacity-0" : "rotate-90"
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-6 max-w-3xl leading-relaxed text-[var(--color-text-secondary)]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
