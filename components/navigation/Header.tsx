"use client"
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
    "Product Discovery & Validation",
    "System & Architecture Design",
    "MVP & Early-Stage Builds",
    "Scaling & Platform Evolution",
  ],
  "Software Development": [
    "Web Application Development",
    "Mobile App Development",
    "API & Backend Systems",
    "Software Maintenance & Refactoring",
  ],
  "Technical Stewardship": [
    "Long-term Code Ownership",
    "Technical Audits & Reviews",
    "Reliability & Performance Optimization",
    "Legacy System Modernization",
  ],
  "Product-aligned SEO": [
    "Technical SEO Foundations",
    "Search-driven Product Architecture",
    "Performance & Indexability Optimization",
    "SEO for SaaS & Platforms",
  ],
};

const solutionsMenu = {
  "Use Cases": [
    "Building New Products",
    "Rebuilding Legacy Systems",
    "Scaling Engineering Teams",
    "Improving System Reliability",
    "Reducing Technical Debt",
  ],
  "Who We Help": [
    "Startups & Founders",
    "Scale-ups",
    "Product Teams",
    "CTOs & Engineering Leaders",
    "Non-technical Founders",
  ],
  "Industries": [
    "SaaS & Platforms",
    "Fintech",
    "Healthcare & Healthtech",
    "E-commerce",
    "Professional Services",
  ],
};



function MegaMenu({
  label,
  items,
}: {
  label: string;
  items: Record<string, string[]>;
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

        {/* Arrow */}
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
          invisible opacity-0 translate-y-2
          group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
          absolute left-1/2 top-full z-40
          mt-6 w-[720px] -translate-x-1/2
          rounded-xl
          bg-[var(--color-surface)]
          ring-1 ring-[var(--color-surface-border)]
          p-8
          transition-all duration-200
        "
      >
        <div className="grid grid-cols-4 gap-8">
          {Object.entries(items).map(([section, links]) => (
            <div key={section} className="space-y-4">
              <p className="
                font-mono text-xs tracking-widest
                text-[var(--color-text-muted)]
              ">
                {section.toUpperCase()}
              </p>

              <ul className="space-y-2">
                {links.map(item => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="
                        text-sm
                        text-[var(--color-text-secondary)]
                        hover:text-[var(--color-accent)]
                        transition-colors
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
      </div>
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
            <nav className="mt-10 flex flex-col gap-6 pl-4">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    text-base font-medium
                    text-[var(--color-fg)]
                    hover:text-[var(--color-accent)]
                  "
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-6">
                <Button className="w-full">
                  <LogIn className="mr-2 h-4 w-4" />
                  Book A Service
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
