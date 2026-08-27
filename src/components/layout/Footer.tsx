"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { Logo } from "@/components/ui";

const academyLinks = [
  { label: "About us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Facebook", icon: "/svg/facebook.svg" },
  { label: "Instagram", icon: "/svg/instagram.svg" },
  { label: "X", icon: "/svg/x.svg" },
  { label: "LinkedIn", icon: "/svg/linkedin.svg" },
  { label: "Youtube", icon: "/svg/youtube.svg" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const formData = new URLSearchParams();
    formData.append("form-name", "subscribe");
    formData.append("email", email);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    })
      .then(() => {
        toast.success("Subscribed successfully!");
        setEmail("");
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <footer className="bg-[#18181b] px-5 lg:px-16 py-10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.6fr_1.6fr] gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Logo variant="light" />
            <p className="text-base leading-[1.5] text-white">
              Elevating musical education through precision, discipline, and
              artistic excellence since 1998.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Academy links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-base text-white">Academy</h4>
            <nav className="flex flex-col gap-3">
              {academyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base leading-[1.5] text-white hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-base text-white">Location</h4>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-start">
                <Image src="/svg/location.svg" alt="" width={20} height={20} className="shrink-0 mt-0.5" />
                <span className="text-base leading-[1.5] text-white">
                  280 - 282 Tran Hung Dao Street, An Hai Nam Ward, Son Tra District, Da Nang, Vietnam.
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <Image src="/svg/phone.svg" alt="" width={20} height={20} className="shrink-0" />
                <span className="text-base leading-[1.5] text-white">
                  +84935 463 423
                </span>
              </div>
              <div className="flex gap-1 items-start">
                <Image src="/svg/email.svg" alt="" width={20} height={20} className="shrink-0" />
                <span className="text-base leading-[1.5] text-white">
                  hello@notewiseacademy.com
                </span>
              </div>
              <div className="flex gap-1 items-start">
                <Image src="/svg/clock.svg" alt="" width={20} height={20} className="shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <span className="text-base leading-[1.5] text-white">
                    Mon-Fri: 9:00 AM - 5:00 PM
                  </span>
                  <span className="text-base leading-[1.5] text-white">
                    Sat-Sun: 8:00 AM - 6:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-base text-white">Subscribe</h4>
            <p className="text-base leading-[1.5] text-white">
              Join our community for exclusive masterclasses and recital updates.
            </p>
            <form
              name="subscribe"
              method="POST"
              noValidate
              onSubmit={handleSubscribe}
            >
              <input type="hidden" name="form-name" value="subscribe" />
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 w-full pl-4 pr-12 rounded-lg border border-[#d4d4d8] bg-[#18181b] text-base text-white placeholder:text-[#71717a] focus:outline-none focus:border-[#8c00ff] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-3 rounded-md bg-[#8c00ff] hover:bg-[#7000cc] transition-colors flex items-center justify-center cursor-pointer"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 10h14M12 5l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#3f3f46] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-base leading-[1.5] text-white">
            &copy; 2026 Enosta. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-base leading-[1.5] text-white hover:opacity-80 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="text-base leading-[1.5] text-white hover:opacity-80 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
