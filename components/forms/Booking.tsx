"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


type Props = {
  initialService?: string;
};


export const BookingForm = ({ initialService }: Props) => {
  const [service, setService] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzdaeeky", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Booking submitted successfully. We'll contact you shortly.");
        form.reset();
        setService(initialService || "");
      } else {
        const data = await response.json();
        setStatus("error");
        setMessage(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="surface rounded-3xl px-8 py-10 sm:px-10 space-y-8"
    >
      {/* Service */}
      <div className="space-y-2">
        <label className="font-mono text-xs text-[var(--color-text-muted)]">
          SERVICE
        </label>
        <input
          name="service"
          value={service}
          readOnly
          className="w-full rounded-xl bg-transparent border border-[var(--color-surface-border)] px-4 py-3 text-[var(--color-fg)]"
        />
      </div>

      {/* Name */}
      <div className="space-y-2">
        <label className="font-mono text-xs text-[var(--color-text-muted)]">
          NAME
        </label>
        <input
          name="name"
          required
          className="w-full rounded-xl bg-transparent border border-[var(--color-surface-border)] px-4 py-3 text-[var(--color-fg)] focus:border-[var(--color-accent)] focus:outline-none"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="font-mono text-xs text-[var(--color-text-muted)]">
          EMAIL
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-xl bg-transparent border border-[var(--color-surface-border)] px-4 py-3 text-[var(--color-fg)] focus:border-[var(--color-accent)] focus:outline-none"
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label className="font-mono text-xs text-[var(--color-text-muted)]">
          PHONE
        </label>
        <input
          name="phone"
          type="tel"
          required
          className="w-full rounded-xl bg-transparent border border-[var(--color-surface-border)] px-4 py-3 text-[var(--color-fg)] focus:border-[var(--color-accent)] focus:outline-none"
        />
      </div>

      {/* Product Context */}
      <div className="space-y-2">
        <label className="font-mono text-xs text-[var(--color-text-muted)]">
          PRODUCT CONTEXT
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Briefly describe the product, stage, or problem space."
          required
          className="w-full rounded-xl bg-transparent border border-[var(--color-surface-border)] px-4 py-3 text-[var(--color-fg)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
        />
      </div>

      {/* Feedback Message */}
      <AnimatePresence>
        {status !== "idle" && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`rounded-xl px-4 py-3 text-sm ${
              status === "success"
                ? "bg-green-500/10 text-green-500 border border-green-500/20"
                : status === "error"
                ? "bg-red-500/10 text-red-500 border border-red-500/20"
                : "bg-[var(--color-surface-border)] text-[var(--color-text-muted)]"
            }`}
          >
            {status === "loading" ? "Submitting..." : message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-3 rounded-full bg-[var(--color-accent)] px-8 py-4 text-sm font-medium text-[var(--color-bg)] transition hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? "Submitting..." : "Submit booking"}
          <span className="font-mono text-xs">→</span>
        </button>
      </div>
    </motion.form>
  );
};