"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  initialService?: string;
};

export const BookingForm = ({ initialService }: Props) => {
  const [service, setService] = useState("");

  // 🔑 Sync selected service into form
  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="
        surface
        rounded-3xl
        px-8 py-10 sm:px-10
        space-y-8
      "
    >
      {/* Service */}
      <div className="space-y-2">
        <label className="font-mono text-xs text-[var(--color-text-muted)]">
          SERVICE
        </label>
        <input
          value={service}
          readOnly
          className="
            w-full rounded-xl
            bg-transparent
            border border-[var(--color-surface-border)]
            px-4 py-3
            text-[var(--color-fg)]
          "
        />
      </div>

      {/* Name */}
      <div className="space-y-2">
        <label className="font-mono text-xs text-[var(--color-text-muted)]">
          NAME
        </label>
        <input
          required
          className="
            w-full rounded-xl
            bg-transparent
            border border-[var(--color-surface-border)]
            px-4 py-3
            text-[var(--color-fg)]
            focus:border-[var(--color-accent)]
            focus:outline-none
          "
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="font-mono text-xs text-[var(--color-text-muted)]">
          EMAIL
        </label>
        <input
          type="email"
          required
          className="
            w-full rounded-xl
            bg-transparent
            border border-[var(--color-surface-border)]
            px-4 py-3
            text-[var(--color-fg)]
            focus:border-[var(--color-accent)]
            focus:outline-none
          "
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label className="font-mono text-xs text-[var(--color-text-muted)]">
          PHONE
        </label>
        <input
          type="tel"
          required
          className="
            w-full rounded-xl
            bg-transparent
            border border-[var(--color-surface-border)]
            px-4 py-3
            text-[var(--color-fg)]
            focus:border-[var(--color-accent)]
            focus:outline-none
          "
        />
      </div>

      {/* Product context */}
      <div className="space-y-2">
        <label className="font-mono text-xs text-[var(--color-text-muted)]">
          PRODUCT CONTEXT
        </label>
        <textarea
          rows={4}
          placeholder="Briefly describe the product, stage, or problem space."
          className="
            w-full rounded-xl
            bg-transparent
            border border-[var(--color-surface-border)]
            px-4 py-3
            text-[var(--color-fg)]
            placeholder:text-[var(--color-text-muted)]
            focus:border-[var(--color-accent)]
            focus:outline-none
          "
        />
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          className="
            inline-flex items-center gap-3
            rounded-full
            bg-[var(--color-accent)]
            px-8 py-4
            text-sm font-medium
            text-[var(--color-bg)]
            transition hover:opacity-90
          "
        >
          Submit booking
          <span className="font-mono text-xs">→</span>
        </button>
      </div>
    </motion.form>
  );
};
