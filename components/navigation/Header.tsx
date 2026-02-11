"use client";
import { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import { Menu, LogIn, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


const servicesMenu = {
  "Product Engineering": [
    {
      label: "Product Discovery & Validation",
      href: "/services/product-engineering/product-discovery",
    },
    {
      label: "System & Architecture Design",
      href: "/services/product-engineering/system-architecture-design",
    },
    {
      label: "MVP & Early-Stage Builds",
      href: "/services/product-engineering/mvp-early-stage-builds",
    },
    {
      label: "Scaling & Platform Evolution",
      href: "/services/product-engineering/scaling-platform-evolution",
    },
  ],
  "Software Development": [
    { label: "Web Application Development", href: "/services/software-development/web-development" },
    { label: "Mobile App Development", href: "/services/software-development/mobile-app-development" },
    { label: "API & Backend Systems", href: "/services/software-development/api-backend-systems" },
    { label: "Software Maintenance & Refactoring", href: "/services/software-development/software-maintenance-refactoring" },
  ],
  "Technical Stewardship": [
    { label: "Long-term Code Ownership", href: "/services/technical-stewardship/long-term-code-ownership" },
    { label: "Technical Audits & Reviews", href: "/services/technical-stewardship/cto-as-a-service" },
    { label: "Reliability & Performance Optimization", href: "/services/technical-stewardship/maintenance-performance-optimization" },
    { label: "Legacy System Modernization", href: "/services/technical-stewardship/legacy-system-modernization" },
  ],
  "Product-aligned SEO": [
    { label: "Technical SEO Foundations", href: "/services/seo/technical-seo-foundations" },
    { label: "Search-driven Product Architecture", href: "/services/seo/search-driven-product-architecture" },
    { label: "Performance & Indexability Optimization", href: "/services/seo/performance-indexability-optimization" },
    { label: "SEO for SaaS & Platforms", href: "/services/seo/saas-and-platforms" },
  ],
};

const solutionsMenu = {
  "USE CASES": [
    {
      label: "Building New Products",
      href: "/solutions/use-cases/building-new-products",
    },
    {
      label: "Rebuilding Legacy Systems",
      href: "",
    },
    {
      label: "Scaling Engineering Teams",
      href: "",
    },
    {
      label: "Improving System Reliability",
      href: "",
    },
    {
      label: "Reducing Technical Debt",
      href: "",
    },
  ],
  "Who WE HELP": [
    { label: "Startups & Founders", href: "/solutions/who-we-help/startups-founders" },
    { label: "Scale-ups", href: "/solutions/who-we-help/scale-ups" },
    { label: "Product Teams", href: "/solutions/who-we-help/product-teams" },
    { label: "CTOs & Engineering Leaders", href: "/solutions/who-we-help/ctos-engineering-leaders" },
    { label: "Non Technical Founders", href: "/solutions/who-we-help/non-technical-founders" },
  ],
  "Industries": [
    { label: "SaaS & Platforms", href: "" },
    { label: "Fintech", href: "" },
    { label: "Healthcare & Healthtech", href: "" },
    { label: "E-commerce", href: "" },
    { label: "Professional Services", href: "" },
  ],
};
function MegaMenu({
  label,
  items,
}: {
  label: string;
  items: Record<string, { label: string; href: string }[]>;
}) {
  return (
    <div className="relative group">
      {/* Trigger */}
      <button
        className="
          flex items-center gap-1
          text-sm font-medium
          text-[var(--color-fg)]
          transition-colors
          hover:text-[var(--color-accent)]
        "
      >
        {label}

        <ChevronDown
          className="
            h-4 w-4
            text-[var(--color-text-muted)]
            transition-transform duration-200 ease-out
            group-hover:rotate-180
            group-hover:text-[var(--color-accent)]
          "
        />
      </button>

      {/* Dropdown */}
      <div
        className="
          invisible opacity-0 translate-y-3
          group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
          absolute left-1/2 top-full z-50
          mt-8 w-[980px] -translate-x-1/2
          transition-all duration-200
        "
      >
        <div
          className="
            relative overflow-hidden rounded-2xl
            bg-[var(--color-surface)]
            shadow-2xl
            ring-1 ring-[var(--color-surface-border)]
            p-12
          "
        >
          {/* Subtle grid texture */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,var(--color-fg)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-fg)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative grid grid-cols-4 gap-12">
            {Object.entries(items).map(([section, links], index) => (
              <div
                key={section}
                className={`space-y-6 ${
                  index !== 3 ? "border-r border-[var(--color-surface-border)] pr-8" : ""
                }`}
              >
                <p className="
                  font-mono text-xs tracking-[0.35em]
                  text-[var(--color-text-muted)]
                ">
                  {section.toUpperCase()}
                </p>

                <ul className="space-y-4">
                  {links.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="
                          group relative block text-sm
                          text-[var(--color-text-secondary)]
                          transition
                          hover:text-[var(--color-fg)]
                        "
                      >
                        {item.label}

                        {/* Accent underline animation */}
                        <span
                          className="
                            absolute bottom-0 left-0 h-px w-0
                            bg-[var(--color-accent)]
                            transition-all duration-300
                            group-hover:w-full
                          "
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



function MobileMenuGroup({
  label,
  items,
}: {
  label: string;
  items: Record<string, string[]>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-3">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex w-full items-center justify-between
          text-base font-medium
          text-[var(--color-fg)]
        "
      >
        {label}
        <ChevronDown
          className={`
            h-4 w-4 transition-transform
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {open && (
        <div className="space-y-4 pl-4">
          {Object.entries(items).map(([section, links]) => (
            <div key={section} className="space-y-2">
              <p className="font-mono text-xs tracking-widest text-[var(--color-text-muted)]">
                {section.toUpperCase()}
              </p>
              <ul className="space-y-1">
                {links.map(item => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="
                        block text-sm
                        text-[var(--color-text-secondary)]
                        hover:text-[var(--color-accent)]
                      "
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Contact Us", href: "/contact" },
]

export default function Header() {
  return (
    <header className="
      sticky top-0 z-50 w-full
      bg-[var(--color-surface)/90]
      backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/logotext.png"
            alt="Logo"
            width={250}
            height={40}
            priority
            className="
              w-[180px] md:w-[200px] lg:w-[220px]
              transition-transform duration-200
              hover:scale-[1.02] pt-3
            "
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
  <Link href="/" className="nav-link">Home</Link>
  <Link href="/about" className="nav-link">About</Link>

  <MegaMenu label="Services" items={servicesMenu} />
  <MegaMenu label="Solutions" items={solutionsMenu} />

  <Link href="/contact" className="nav-link">Contact</Link>
</nav>


        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="
              text-[var(--color-text-secondary)]
              hover:text-[var(--color-accent)]
            "
          >
          </Button>

          <Button
            asChild
            size="sm"
            className="
              bg-transparent
              border border-gray-400
              text-[var(--color-fg)]
              hover:border-[var(--color-accent)]
              hover:text-[var(--color-accent)]
              hover:bg-[var(--color-accent)/5]
            "
          >
            <Link href="/bookings">
              <LogIn className="mr-2 h-4 w-4" />
              Book A Service
            </Link>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[var(--color-fg)]"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="
              bg-[var(--color-surface)]
              border-l border-[var(--color-surface-border)]
            "
          >
            <nav className="mt-10 flex flex-col gap-8 px-4">
              <Link
                href="/"
                className="text-base font-medium text-[var(--color-fg)]"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-base font-medium text-[var(--color-fg)]"
              >
                About
              </Link>

              <MobileMenuGroup label="Services" items={servicesMenu} />
              <MobileMenuGroup label="Solutions" items={solutionsMenu} />

              <Link
                href="/contact"
                className="text-base font-medium text-[var(--color-fg)]"
              >
                Contact
              </Link>

              <div className="pt-4">
                <Button className="w-full">
                  <LogIn className="mr-2 h-4 w-4" />
                  Book a Service
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
