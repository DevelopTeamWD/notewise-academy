"use client";

import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "My daughter has blossomed since joining Notewise. The teachers are patient, creative, and genuinely invested in each child's progress. She now practices without being asked!",
    name: "Rebecca Johnson",
    role: "Parent of Grade 3 piano student",
  },
  {
    quote:
      "I started guitar lessons at 42 thinking it was too late. Six months in, I'm playing songs I love. The personalised approach made all the difference.",
    name: "David Chen",
    role: "Adult guitar student",
  },
  {
    quote:
      "The exam preparation was outstanding. My son achieved a distinction in his ABRSM Grade 5 violin — something we never thought possible a year ago.",
    name: "Maria Santos",
    role: "Parent of violin student",
  },
];

export default function Testimonial() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex gap-2 mt-8">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2.5 h-2.5 rounded-full bg-[#e4e4e7] transition-all duration-300 cursor-pointer" />
    ),
  };

  return (
    <section className="bg-[#fbfaf5] px-5 lg:px-20 py-20">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
        <h2 className="font-[family-name:var(--font-heading)] font-bold text-[40px] leading-[1.2] text-[#18181b] text-center capitalize">
          What our <span className="text-[#8c00ff]">students</span> say
        </h2>

        <div className="bg-white rounded-[24px] overflow-hidden lg:flex lg:flex-row-reverse">
          {/* Left: fixed image with play icon */}
          <div className="relative w-full lg:w-[480px] h-[300px] lg:h-auto shrink-0 group cursor-pointer">
            <Image
              src="/images/testimonial/testimonial-person.jpeg"
              alt="Student video testimonial"
              fill
              className="object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z"
                    fill="#8c00ff"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: text slider */}
          <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center min-w-0">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.name}>
                  <div className="flex flex-col gap-6">
                    {/* Stars */}
                    <div className="flex">
                      <Image
                        src="/svg/star.svg"
                        alt="5 stars"
                        width={116}
                        height={19}
                      />
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl lg:text-2xl leading-[1.5] text-[#18181b] font-normal">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Attribution */}
                    <div className="flex flex-col">
                      <span className="text-lg font-medium text-[#18181b]">
                        {testimonial.name}
                      </span>
                      <span className="text-base text-[#3f3f46]">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
