"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const slides = [
  {
    title: "Crafted Digital Products",
    highlight: "Built to last",
    description:
      "We design and build digital products with care, clarity, and long-term ownership — ensuring what’s launched continues to work, scale, and make sense.",
    image: "/images/hero1.png",
  },
  {
    title: "Product-Minded Execution",
    highlight: "Not just delivery",
    description:
      "We operate as technical partners, challenging fragile ideas early and protecting the integrity of the product vision through disciplined execution.",
    image: "/images/hero2.png",
  },
  {
    title: "Stewardship Beyond Launch",
    highlight: "Ongoing responsibility",
    description:
      "From performance tuning to thoughtful iteration, we remain accountable for the systems we build — because durability matters.",
    image: "/images/hero3.png",
  },
  {
    title: "Product-Aligned Growth",
    highlight: "SEO that serves products",
    description:
      "We support discoverability through product-aware SEO — grounded in system reality, not generic marketing tactics.",
    image: "/images/hero4.png",
  },
];

export const Hero = () => {
  const autoplay = useRef(
    Autoplay({ delay: 6500, stopOnInteraction: false })
  );

  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [autoplay.current]
  );

  return (
    <section className="relative isolate">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative min-w-full">
              {/* Background image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="h-[85vh] w-full object-cover sm:h-screen"
              />

              {/* Soft gradient field (not a box) */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-[var(--color-bg)]/85
                  via-[var(--color-bg)]/55
                  to-transparent
                "
              />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-6">
                  <div className="max-w-3xl space-y-8">
                    <h1
                      className="
                        text-4xl sm:text-5xl lg:text-6xl
                        font-semibold
                        tracking-tight
                        leading-[1.05]
                        text-[var(--color-fg)]
                      "
                    >
                      {slide.title}
                      <br />
                      <span className="text-[var(--color-accent)]">
                        {slide.highlight}
                      </span>
                    </h1>

                    <p
                      className="
                        max-w-xl
                        text-base sm:text-lg
                        leading-relaxed
                        text-[var(--color-text-secondary)]
                      "
                    >
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <Button
                        asChild
                        size="lg"
                        className="
                          accent-bg
                          px-6
                          shadow-lg
                          shadow-[var(--color-accent)]/20
                          hover:shadow-[var(--color-accent)]/30
                          transition-all
                        "
                      >
                        <Link href="/about">
                          About  us
                          <ArrowRight className="ml-2 h-4 w-4" />
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
                          transition-colors
                        "
                      >
                        <Link href="/contact">
                          Start a conversation
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
