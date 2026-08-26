"use client";

import { useState, useEffect } from "react";
import { Logo, Button } from "@/components/ui";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Program", href: "#programs" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 flex flex-col gap-[5px]">
            <span
              className={`block h-[2px] bg-[#18181b] rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-[#18181b] rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-[#18181b] rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`relative bg-white h-full flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <nav className="flex-1 flex flex-col justify-center items-center gap-8 px-8">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-3xl font-[family-name:var(--font-heading)] font-bold text-[#18181b] hover:text-[#8c00ff] transition-all duration-300 ${
                  mobileOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${150 + index * 75}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            ))}

            <div
              className={`mt-4 transition-all duration-300 ${
                mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: mobileOpen ? `${150 + navLinks.length * 75}ms` : "0ms",
              }}
            >
              <Button variant="primary" href="#contact">
                Book free trial
              </Button>
            </div>
          </nav>

          {/* Bottom decoration */}
          <div className="px-8 pb-10 text-center">
            <p className="text-sm text-[#71717a]">
              Your musical journey starts here
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
