"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterAnimationProps {
  value: string;
  className?: string;
}

export default function CounterAnimation({ value, className = "" }: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      el.textContent = value;
      return;
    }

    const endValue = parseInt(match[1], 10);
    const suffix = match[2] || "";
    const obj = { val: 0 };

    gsap.to(obj, {
      val: endValue,
      duration: 2.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        once: true,
      },
      onUpdate: () => {
        el.textContent = Math.round(obj.val) + suffix;
      },
    });
  }, { scope: ref });

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
