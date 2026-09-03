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
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Scale down: image starts larger and shrinks to normal as user scrolls
    gsap.fromTo(imageRef.current, 
      { scale: 1.3 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="about" className="bg-[#fbfaf5] px-5 lg:px-16 py-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left image with parallax */}
          <div className="flex-1 w-full overflow-hidden rounded-[24px]">
            <div className="relative w-full h-[500px] lg:h-[700px]">
              <Image
                ref={imageRef}
                src="/images/about/about-children.jpeg"
                alt="Children in music class"
                fill
                className="object-cover will-change-transform"
              />
            </div>
          </div>

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
                  keeps students motivated at every level - from first-timers to exam candidates.
                </p>
                <br />
                <p>
                  Every student gets a customised learning path - not a one-size-fits-all
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
                    width={32}
                    height={32}
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
  );
}
