"use client";

import { useState } from "react";
import { Logo, Button } from "@/components/ui";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Program", href: "#programs" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-0 flex items-center justify-between h-[72px]">
        <Logo variant="dark" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium leading-[1.5] text-[#18181b] hover:text-[#8c00ff] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="primary" href="#contact">
            Book free trial
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-[#e4e4e7] bg-white px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-[#18181b]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" href="#contact">
            Book free trial
          </Button>
        </nav>
      )}
    </header>
  );
}
