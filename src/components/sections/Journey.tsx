"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "University-trained instructors",
    description:
      "All teachers hold degrees or diplomas from accredited music conservatories. No hobbyists.",
    indent: false,
  },
  {
    title: "Customised learning plan",
    description:
      "Every student receives a tailored curriculum built around their goals, schedule, and musical taste.",
    indent: true,
  },
  {
    title: "Regular progress reviews",
    description:
      "Monthly check-ins with parents and students to celebrate growth and adjust the learning path.",
    indent: false,
  },
  {
    title: "Student recitals & performances",
    description:
      "Twice-yearly recitals give every student a chance to perform in a warm, supportive setting.",
    indent: true,
  },
];

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const girlRef = useRef<HTMLImageElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Subtle parallax on the girl image
    gsap.to(girlRef.current, {
      y: 200,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Stagger steps in
    const steps = stepsRef.current?.children;
    if (steps) {
      gsap.from(steps, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-[#f9f5ff] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-20 relative">
        <div className="flex flex-col lg:flex-row">
          {/* Left side */}
          <div className="flex-1 flex flex-col gap-10 relative z-10 max-w-[500px]">
            {/* Title */}
            <div className="flex flex-col gap-4">
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-[40px] leading-[1.2] text-[#18181b] capitalize">
                Teaching that goes
                <br />
                beyond <span className="text-[#8c00ff]">technique</span>
              </h2>
              <p className="text-lg leading-[1.5] text-[#3f3f46]">
                We don&apos;t just teach you to play notes. We help you fall in love with music for life.
              </p>
            </div>

            {/* Music notes decoration */}
            <div className="relative w-full">
              <Image
                src="/images/journey/Group.png"
                alt=""
                width={905}
                height={264}
                className="object-contain max-w-none object-left h-auto relative z-1 hidden md:block"
              />
            </div>

            {/* Steps */}
            <div ref={stepsRef} className="flex flex-col gap-6">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className={`flex flex-col gap-2 ${step.indent ? "lg:ml-[118px]" : ""}`}
                >
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-2xl leading-[1.2] text-[#18181b]">
                    {step.title}
                  </h3>
                  <p className="text-lg leading-[1.5] text-[#3f3f46]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - girl with guitar */}
          <div className="flex-1 lg:block min-h-[835px]">
            
            {/* Purple wave background */}
            <div className="relative">
              <Image
              src="/svg/journey-wave.svg"
              alt=""
              width={677}
              height={661}
              className="absolute top-[3px] right-[2%] w-[677px] h-[500px] md:h-[661px] opacity-100"
              />
               <Image
                src="/images/journey/Group.png"
                alt=""
                width={905}
                height={264}
                className="object-contain absolute top-[100px] right-[2%] w-full object-left h-auto z-[1] block md:hidden"
              />
            {/* Girl with guitar */}
            <Image
              ref={girlRef}
              src="/images/journey/girl.png"
              alt="Young woman playing guitar"
              width={594}
              height={835}
              className="absolute z-999 top-[57px] right-0 w-[594px] h-[835px] object-contain will-change-transform"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
