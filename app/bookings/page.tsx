import { BookingForm } from "@/components/forms/Booking";

type Props = {
  searchParams: {
    service?: string;
  };
};

export default function BookingsPage({ searchParams }: Props) {
  return (
    <main className="relative min-h-screen bg-[var(--color-bg)] px-6 py-28">
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/images/noise.jpg')] opacity-[0.04] mix-blend-soft-light"
      />

      <div className="relative mx-auto max-w-3xl">
        <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
          // BOOK_A_SERVICE
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-5xl">
          Book a service
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
          Tell us a bit about your product and what you’re looking to build.
          We’ll review the details and follow up with next steps.
        </p>

        <div className="mt-14">
          <BookingForm initialService={searchParams.service} />
        </div>
      </div>
    </main>
  );
}
