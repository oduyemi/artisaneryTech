"use client";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative bg-[var(--color-surface)]">
      {/* Top divider */}
      <div
        aria-hidden
        className="
          absolute inset-x-0 top-0
          h-px
          bg-[var(--color-surface-border)]
        "
      />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="space-y-4">
            <p className="text-lg font-medium text-[var(--color-fg)]">
              Artisanery Tech
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--color-text-secondary)]">
              The product and engineering execution arm of Artisanery —
              focused on clarity, durability, and long-term ownership.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
              NAVIGATION
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[var(--color-text-secondary)] transition hover:text-[var(--color-fg)]"
                >
                  Homepage
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[var(--color-text-secondary)] transition hover:text-[var(--color-fg)]"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/bookings"
                  className="text-[var(--color-text-secondary)] transition hover:text-[var(--color-fg)]"
                >
                  Booking a service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--color-text-secondary)] transition hover:text-[var(--color-fg)]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
              SERVICES
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li>Product-focused development</li>
              <li>Application stewardship</li>
              <li>Technical strategy</li>
              <li>Product-aligned growth</li>
            </ul>
          </div>

          {/* Meta */}
          <div className="space-y-3">
            <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
              SYSTEM
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Calm. Thoughtful. Durable.
            </p>
            <p className="font-mono text-xs text-[var(--color-text-muted)]">
              © {new Date().getFullYear()} Artisanery
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--color-surface-border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--color-text-muted)]">
            Built with care. Maintained with responsibility.
          </p>

          <p className="font-mono text-xs text-[var(--color-text-muted)]">
            v1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
};
