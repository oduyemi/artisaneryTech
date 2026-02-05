"use client";
import { BookingForm } from "@/components/forms/Booking";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  service: string | null;
};

export const BookServiceDialog = ({ open, onClose, service }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="
            fixed inset-0 z-50
            flex items-end sm:items-center justify-center
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            aria-hidden
            onClick={onClose}
            className="
              absolute inset-0
              bg-[var(--color-bg)]/80
              backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Dialog */}
          <motion.div
            initial={{ y: 48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 48, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="
              relative z-10
              w-full sm:max-w-2xl
              max-h-[92vh]
              overflow-y-auto
              rounded-t-3xl sm:rounded-3xl
              bg-[var(--color-surface)]
              border border-[var(--color-surface-border)]
              px-6 sm:px-10
              py-8 sm:py-12
              shadow-2xl
            "
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
                  // BOOK_SERVICE
                </p>

                <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-[var(--color-fg)]">
                  {service}
                </h3>

                <p className="mt-4 max-w-xl text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                  We’ll start with context, constraints, and goals — then propose
                  the right technical shape for the product.
                </p>
              </div>

              {/* Close */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-[var(--color-surface-border)]
                  text-[var(--color-text-muted)]
                  transition
                  hover:text-[var(--color-fg)]
                  hover:border-[var(--color-accent)]
                "
              >
                <X size={16} />
              </button>
            </div>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-[var(--color-surface-border)]" />

            {/* Form */}
            <BookingForm initialService={service ?? ""} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
