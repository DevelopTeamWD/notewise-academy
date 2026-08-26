"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button, CounterAnimation } from "@/components/ui";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "500+", label: "Students taught" },
  { value: "98%", label: "Satisfaction rate" },
  { value: "10", label: "Years experience" },
  { value: "40+", label: "Exam distinctions" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1.2 } });

    tl.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
    }).from(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
      },
      "-=0.7"
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-white px-5 lg:px-20 py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left content */}
          <div ref={textRef} className="flex flex-col gap-8 min-w-0 lg:w-[46%]">
            <div className="flex flex-col gap-4">
              <h1 className="font-[family-name:var(--font-heading)] font-bold text-[40px] md:text-[56px] leading-[1.2] text-[#18181b]">
                Learn Music
                <br />
                <span className="text-[#8c00ff]">The Right Way</span>
                <br />
                From Day One
              </h1>
              <p className="text-lg leading-[1.5] text-[#3f3f46] max-w-[502px]">
                Expert-led lessons in piano, guitar, violin, and vocals for children and
                adults, online and in-person. Your personalised musical journey starts here.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="#contact">
                Book free trial
              </Button>
              <Button variant="outline" href="#programs">
                Explore programs
              </Button>
            </div>
          </div>

          {/* Right visual - single collage image */}
          <div ref={imageRef} className="min-w-0 w-full lg:w-[54%]">
            <Image
              src="/images/hero/hero-collage.png"
              alt="Music lessons collage - piano, guitar, violin and vocal training"
              width={751}
              height={513}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Stats row with counter animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <CounterAnimation
                value={stat.value}
                className="font-semibold text-[40px] leading-[1.2] text-[#fc6441] capitalize"
              />
              <span className="text-lg font-medium leading-[1.5] text-[#3f3f46]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
