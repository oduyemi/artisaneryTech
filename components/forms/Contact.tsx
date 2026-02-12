"use client";
import { motion, Variants, Easing, AnimatePresence } from "framer-motion";
import { useState } from "react";


const easeOutExpo: Easing = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const ContactForm = () => {
  const [status, setStatus] = useState<"form" | "loading" | "success" | "error">("form");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xnjbppop", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json?.errors?.[0]?.message || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        /* SUCCESS PANEL */
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="
            rounded-xl
            bg-[var(--color-surface)]
            p-12 text-center
            ring-1 ring-[var(--color-surface-border)]
            space-y-4
          "
        >
          <div className="text-3xl">✓</div>
          <h3 className="text-xl font-semibold">Message sent</h3>
          <p className="text-[var(--color-text-secondary)] text-sm">
            Thank you for reaching out. Our team will contact you shortly.
          </p>
        </motion.div>
      ) : (
        /* FORM */
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0 }}
          className="
            relative space-y-10
            rounded-xl
            bg-[var(--color-surface)]
            p-8 sm:p-10
            ring-1 ring-[var(--color-surface-border)]
          "
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name">
              <input name="name" required placeholder="Your name" />
            </Field>

            <Field label="Email">
              <input name="email" type="email" required placeholder="you@company.com" />
            </Field>
          </div>

          <Field label="Company / Product">
            <input name="company" placeholder="Company or product name" />
          </Field>

          <Field label="What are you looking to build?">
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Briefly describe the product or challenge"
            />
          </Field>

          {status === "error" && (
            <div className="text-sm text-red-500">{errorMsg}</div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
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
              disabled:opacity-60
            "
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

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
        focus-within:border-[var(--color-accent)]
        focus-within:ring-1
        focus-within:ring-[var(--color-accent)]/40
      "
    >
      {children}
    </div>
  </div>
);