"use client";
import { motion, Variants, Easing } from "framer-motion";
import Image from "next/image";

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

export const ContactAside = () => {
    return (
        <motion.aside
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="
            relative
            flex flex-col
            gap-8
            rounded-xl
            bg-[var(--color-surface)]
            p-8 sm:p-10
            ring-1 ring-[var(--color-surface-border)]
        "
        >
        {/* Image */}
        <div className="relative h-56 w-full overflow-hidden rounded-lg">
            <Image
            src="/images/contact.png"
            alt="Crafted systems and thoughtful execution"
            fill
            className="object-contain"
            priority
            />

            {/* Overlay for calm */}
            <div
            aria-hidden
            className="
                absolute inset-0
                bg-[linear-gradient(to_bottom,rgba(15,23,42,0.15),rgba(15,23,42,0.6))]
            "
            />

            {/* Grain */}
            <div
            aria-hidden
            className="
                pointer-events-none absolute inset-0
                bg-[url('/images/noise.jpg')]
                opacity-[0.05]
                mix-blend-soft-light
            "
            />
        </div>

        {/* Copy */}
        <div className="space-y-6">
            <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
            // WHAT_HAPPENS_NEXT
            </p>

            <ul className="space-y-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            <li>• We review every message ourselves</li>
            <li>• You’ll hear back within 1–2 business days</li>
            <li>• No sales scripts or pressure</li>
            <li>• If we’re not the right fit, we’ll say so</li>
            </ul>

            <div className="h-px w-12 bg-[var(--color-surface-border)]" />

            <p className="text-sm text-[var(--color-text-secondary)]">
            We work best with teams who value clarity, care,
            and long-term product health.
            </p>
        </div>
        </motion.aside>
    );
};
