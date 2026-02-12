"use client"
import Link from "next/link"
import RequestCallbackDialog from "../dialog/request-callback"


interface IndustryCTAProps {
  title: string
  subtitle: string
  primaryLabel?: string
  secondaryLabel?: string
}

export default function IndustryCTA({
  title,
  subtitle,
  primaryLabel = "Schedule a Consultation",
  secondaryLabel = "Discuss Your Project",
}: IndustryCTAProps) {
  return (
    <section className="py-44 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-10">
          {title}
        </h2>

        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">

          {/* Primary Button → Opens Dialog */}
          <RequestCallbackDialog>
            <button className="px-10 py-4 bg-white text-black font-medium hover:bg-white/90 transition rounded-full">
              {primaryLabel}
            </button>
          </RequestCallbackDialog>

          {/* Secondary Button → Also Opens Dialog */}
          <Link
            href="/contact"
            className="px-10 py-4 border border-teal/20 text-white hover:border-white/50 transition rounded-full"
          >
            {secondaryLabel}
          </Link>

        </div>

      </div>
    </section>
  )
}
