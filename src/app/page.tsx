"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  About,
  Programs,
  Journey,
  Team,
  Testimonial,
  Pricing,
  FAQ,
  CTA,
  Contact,
} from "@/components/sections";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [heroReady, setHeroReady] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (loading) return;

    gsap.from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      clearProps: "all",
      onComplete: () => setHeroReady(true),
    });
  }, { dependencies: [loading] });

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />
      <div
        ref={contentRef}
        className={loading ? "invisible" : "visible"}
      >
        <Navbar />
        <main className="flex-1">
          <Hero counterActive={heroReady} />
          <About />
          <Programs />
          <Journey />
          <Team />
          <Testimonial />
          <Pricing />
          <FAQ />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
