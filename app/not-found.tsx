"use client";

import Link from "next/link";
import { ArrowLeft, Terminal, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-6">
      {/* Ambient grid / subtle texture */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_1px_1px,var(--color-surface-border)_1px,transparent_0)]
          [background-size:32px_32px]
          opacity-[0.15]
        "
      />

      <div className="relative z-10 max-w-xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl surface">
          <Terminal className="h-6 w-6 text-[var(--color-accent)]" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-6xl">
          404
        </h1>

        <p className="mt-4 text-xl font-medium text-[var(--color-fg)]">
          This page does not exist.
        </p>

        {/* Copy */}
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[var(--color-text-secondary)]">
          Either the URL is wrong, the page was refactored out of existence,
          or reality failed to compile.
        </p>

        {/* Divider */}
        <div className="mx-auto my-8 h-px w-24 bg-[var(--color-surface-border)]" />

        {/* Secondary joke */}
        <div className="flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)]">
          <Bug className="h-4 w-4" />
          <span>No stack trace available.</span>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="accent-bg">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to safety
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="
              border-[var(--color-surface-border)]
              text-[var(--color-fg)]
              hover:border-[var(--color-accent)]
              hover:text-[var(--color-accent)]
            "
          >
            <Link href="/contact">
              Report a theoretical issue
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
