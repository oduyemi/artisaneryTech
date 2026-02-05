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

export const ContactForm = () => {
  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="
        relative space-y-10
        rounded-xl
        bg-[var(--color-surface)]
        p-8 sm:p-10
        ring-1 ring-[var(--color-surface-border)]
      "
    >
      {/* subtle grain */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[url('/images/noise.jpg')]
          opacity-[0.04]
          mix-blend-soft-light
          rounded-xl
        "
      />

      <div className="relative grid gap-6 sm:grid-cols-2">
        <Field label="Name">
          <input type="text" placeholder="Your name" />
        </Field>

        <Field label="Email">
          <input type="email" placeholder="you@company.com" />
        </Field>
      </div>

      <Field label="Company / Product">
        <input type="text" placeholder="Company or product name" />
      </Field>

      <Field label="What are you looking to build?">
        <textarea
          rows={4}
          placeholder="Briefly describe the product, challenge, or stage you're in"
        />
      </Field>

      <div className="pt-2">
        <button
          type="submit"
          className="
            inline-flex items-center justify-center
            rounded-md
            bg-[var(--color-accent)]
            px-7 py-3.5
            text-sm font-medium
            text-white
            shadow-md
            transition
            hover:shadow-lg
            hover:translate-y-[-1px]
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--color-accent)]
          "
        >
          Send message
        </button>
      </div>
    </motion.form>
  );
};

/* -----------------------------
   Field
----------------------------- */

const Field = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <label className="block text-sm text-[var(--color-text-secondary)]">
      {label}
    </label>
    <div
      className="
        rounded-md
        border border-[var(--color-surface-border)]
        bg-[var(--color-bg)]
        px-3 py-2.5
        transition
        focus-within:border-[var(--color-accent)]
        focus-within:ring-1
        focus-within:ring-[var(--color-accent)]/40
      "
    >
      {children}
    </div>
  </div>
);
