"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const notesRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useGSAP(() => {
    const notes = notesRef.current?.children;
    if (!notes) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false);
        onComplete();
      },
    });

    // Notes bounce in staggered
    tl.from(notes, {
      y: 40,
      opacity: 0,
      duration: 0.4,
      stagger: 0.12,
      ease: "back.out(2)",
    });

    // Notes dance/bounce continuously for a moment
    tl.to(notes, {
      y: -15,
      duration: 0.3,
      stagger: { each: 0.08, repeat: 3, yoyo: true },
      ease: "sine.inOut",
    });

    // Scale up and rotate notes playfully
    tl.to(notes, {
      scale: 1.2,
      rotation: () => gsap.utils.random(-20, 20),
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.out",
    }, "-=0.3");

    // Fade out notes
    tl.to(notes, {
      y: -60,
      opacity: 0,
      scale: 0.5,
      duration: 0.4,
      stagger: 0.05,
      ease: "power3.in",
    });

    // Slide loader up and out
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power3.inOut",
    }, "-=0.2");
  }, { scope: containerRef });

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white gap-6"
    >
      {/* Music notes */}
      <div ref={notesRef} className="flex items-end gap-3">
        {/* Note 1 - quarter note */}
        <svg width="28" height="48" viewBox="0 0 28 48" fill="none" className="text-[#8c00ff]">
          <ellipse cx="10" cy="40" rx="10" ry="7" fill="currentColor" />
          <rect x="18" y="4" width="3" height="37" fill="currentColor" />
          <path d="M21 4C21 4 28 8 28 16C28 24 21 20 21 20" fill="currentColor" />
        </svg>
        {/* Note 2 - eighth note */}
        <svg width="24" height="42" viewBox="0 0 24 42" fill="none" className="text-[#fc6441]">
          <ellipse cx="8" cy="35" rx="8" ry="6" fill="currentColor" />
          <rect x="14" y="2" width="2.5" height="34" fill="currentColor" />
          <path d="M16.5 2C16.5 2 24 6 24 12C24 18 16.5 15 16.5 15" fill="currentColor" />
        </svg>
        {/* Note 3 - double eighth */}
        <svg width="36" height="50" viewBox="0 0 36 50" fill="none" className="text-[#8c00ff]">
          <ellipse cx="8" cy="42" rx="8" ry="6" fill="currentColor" />
          <ellipse cx="28" cy="42" rx="8" ry="6" fill="currentColor" />
          <rect x="14" y="8" width="2.5" height="35" fill="currentColor" />
          <rect x="34" y="8" width="2.5" height="35" fill="currentColor" />
          <rect x="14" y="8" width="22.5" height="3" fill="currentColor" />
          <rect x="14" y="14" width="22.5" height="3" fill="currentColor" />
        </svg>
        {/* Note 4 - quarter note */}
        <svg width="24" height="44" viewBox="0 0 24 44" fill="none" className="text-[#c9fe34]">
          <ellipse cx="8" cy="37" rx="8" ry="6" fill="currentColor" />
          <rect x="14" y="4" width="2.5" height="34" fill="currentColor" />
        </svg>
        {/* Note 5 - eighth note */}
        <svg width="28" height="46" viewBox="0 0 28 46" fill="none" className="text-[#fc6441]">
          <ellipse cx="10" cy="38" rx="10" ry="7" fill="currentColor" />
          <rect x="18" y="4" width="3" height="35" fill="currentColor" />
          <path d="M21 4C21 4 28 8 28 14C28 20 21 17 21 17" fill="currentColor" />
        </svg>
      </div>

      {/* Brand text */}
      <p className="text-sm font-black tracking-[0.24px] text-[#18181b] uppercase">
        Notewise Academy
      </p>
    </div>
  );
}
