"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimateOnScroll } from "@/components/ui";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "/svg/icon-personalised.svg",
    title: "Personalised path",
    description: "No two students learn the same way",
  },
  {
    icon: "/svg/icon-exam.svg",
    title: "Exam preparation",
    description: "ABRSM & Trinity College exams",
  },
  {
    icon: "/svg/icon-online.svg",
    title: "Online & in-person",
    description: "Flexible lessons that fit your life",
  },
  {
    icon: "/svg/icon-allages.svg",
    title: "All ages welcome",
    description: "Children from age 5, adults any age",
  },
];

export default function About() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const image = imageRef.current;
    const start = startRef.current;
    const end = endRef.current;
    if (!image || !start || !end) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Calculate positions dynamically
      ScrollTrigger.create({
        trigger: start,
        start: "top 80%",
        endTrigger: end,
        end: "top 30%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          // Get rects
          const startRect = start.getBoundingClientRect();
          const endRect = end.getBoundingClientRect();
          const wrapperRect = wrapperRef.current!.getBoundingClientRect();

          // Start: full width of the start container
          const startWidth = startRect.width;
          const startHeight = startRect.height;

          // End: the placeholder size
          const endWidth = endRect.width;
          const endHeight = endRect.height;

          // Interpolate size
          const currentWidth = gsap.utils.interpolate(startWidth, endWidth, progress);
          const currentHeight = gsap.utils.interpolate(startHeight, endHeight, progress);

          // Interpolate position (relative to wrapper)
          const startX = startRect.left - wrapperRect.left;
          const startY = startRect.top - wrapperRect.top;
          const endX = endRect.left - wrapperRect.left;
          const endY = endRect.top - wrapperRect.top;

          const currentX = gsap.utils.interpolate(startX, endX, progress);
          const currentY = gsap.utils.interpolate(startY, endY, progress);

          // Interpolate border radius
          const currentRadius = gsap.utils.interpolate(0, 24, progress);

          gsap.set(image, {
            width: currentWidth,
            height: currentHeight,
            x: currentX,
            y: currentY,
            borderRadius: currentRadius,
            position: "absolute",
            top: 0,
            left: 0,
          });
        },
      });
    });

    return () => mm.revert();
  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} className="relative">
      {/* Start position: full width image area below Hero */}
      <div
        ref={startRef}
        className="w-full h-[60vh] lg:h-[80vh] bg-[#fbfaf5]"
      />

      {/* The floating image that animates between positions */}
      <div
        ref={imageRef}
        className="absolute top-0 left-0 w-full h-[60vh] lg:h-[80vh] overflow-hidden will-change-transform z-10"
      >
        <Image
          src="/images/about/about-children.jpeg"
          alt="Children in music class"
          fill
          className="object-cover"
        />
      </div>

      {/* About section content */}
      <section id="about" className="bg-[#fbfaf5] px-5 lg:px-16 py-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
            {/* End position placeholder for the image */}
            <div
              ref={endRef}
              className="flex-1 w-full h-[500px] lg:h-[700px] rounded-[24px] shrink-0 lg:max-w-[50%]"
            />

            {/* Right content */}
            <AnimateOnScroll animation="fadeRight" className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-[40px] leading-[1.2] text-[#18181b] capitalize">
                  Music <span className="text-[#8c00ff]">education</span>
                  <br />
                  that actually works
                </h2>
                <div className="text-base leading-[1.5] text-[#3f3f46]">
                  <p>
                    Notewise Academy has been nurturing musicians since 2015. We combine
                    proven music pedagogy with a personalised, encouraging teaching style that
                    keeps students motivated at every level — from first-timers to exam candidates.
                  </p>
                  <br />
                  <p>
                    Every student gets a customised learning path — not a one-size-fits-all
                    curriculum. We believe music should feel joyful, achievable, and deeply personal.
                  </p>
                </div>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 py-2">
                {features.map((feature) => (
                  <div key={feature.title} className="flex flex-col gap-4">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={48}
                      height={48}
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-2xl leading-[1.2] text-[#18181b]">
                        {feature.title}
                      </h3>
                      <p className="text-base leading-[1.5] text-[#3f3f46]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
