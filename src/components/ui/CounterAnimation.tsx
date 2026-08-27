"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface CounterAnimationProps {
  value: string;
  className?: string;
  active?: boolean;
}

export default function CounterAnimation({ value, className = "", active = false }: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!active || hasRun.current) return;

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

    hasRun.current = true;

    gsap.to(obj, {
      val: endValue,
      duration: 2.2,
      ease: "power3.out",
      onUpdate: () => {
        el.textContent = Math.round(obj.val) + suffix;
      },
    });
  }, [active, value]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
