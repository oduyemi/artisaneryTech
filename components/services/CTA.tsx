"use client";

import Link from "next/link";

export const ServicesCTA = () => {
  return (
    <section className="bg-[var(--color-surface)] py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="font-mono text-xs tracking-[0.3em] text-[var(--color-text-muted)]">
          // START
        </p>

        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
          Let’s scope your product properly.
        </h2>

        <Link
          href="/contact"
          className="mt-10 inline-block rounded-md bg-[var(--color-accent)] px-8 py-4 text-sm font-medium text-white transition hover:translate-y-[-2px] hover:shadow-lg"
        >
          Book a consultation
        </Link>
      </div>
    </section>
  );
};
