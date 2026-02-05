"use client"
import Link from "next/link"
import Image from "next/image"
import { Menu, Search, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "What We Do", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
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
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="
                relative text-sm font-medium
                text-[var(--color-fg)]
                transition-colors
                hover:text-[var(--color-accent)]
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-[var(--color-accent)]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {link.name}
            </Link>
          ))}
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
            <Search className="h-5 w-5" />
          </Button>

          <Button
            href="/bookings"
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
            <LogIn className="mr-2 h-4 w-4" />
            Book A Service
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
