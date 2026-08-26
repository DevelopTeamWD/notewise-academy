"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "fadeIn" | "scaleUp";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 1,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = {
      fadeUp: { opacity: 0, y: 40 },
      fadeLeft: { opacity: 0, x: -40 },
      fadeRight: { opacity: 0, x: 40 },
      fadeIn: { opacity: 0 },
      scaleUp: { opacity: 0, scale: 0.95 },
    }[animation];

    gsap.from(el, {
      ...fromVars,
      duration,
      delay,
      ease: "power2.out",
      clearProps: "all",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });
  }, { scope: ref });

  return (
    <div ref={ref} className={className} style={{ willChange: "transform, opacity" }}>
      {children}
    </div>
  );
}
