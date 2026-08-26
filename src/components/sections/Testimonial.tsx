"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "My daughter has blossomed since joining Notewise. The teachers are patient, creative, and genuinely invested in each child's progress. She now practices without being asked!",
    name: "Rebecca Johnson",
    role: "Parent of Grade 3 piano student",
    rating: 5,
  },
  {
    quote:
      "I started guitar lessons at 42 thinking it was too late. Six months in, I'm playing songs I love. The personalised approach made all the difference.",
    name: "David Chen",
    role: "Adult guitar student",
    rating: 5,
  },
  {
    quote:
      "The exam preparation was outstanding. My son achieved a distinction in his ABRSM Grade 5 violin — something we never thought possible a year ago.",
    name: "Maria Santos",
    role: "Parent of violin student",
    rating: 5,
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  return (
    <section className="bg-[#fbfaf5] px-5 lg:px-20 py-20">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
        <h2 className="font-[family-name:var(--font-heading)] font-bold text-[40px] leading-[1.2] text-[#18181b] text-center capitalize">
          What our <span className="text-[#8c00ff]">students</span> say
        </h2>

        <div className="flex flex-col lg:flex-row bg-white rounded-[24px] overflow-hidden">
          {/* Text content */}
          <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center gap-6">
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

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === current ? "bg-[#18181b]" : "bg-[#e4e4e7]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-[480px] h-[300px] lg:h-[448px]">
            <Image
              src="/images/testimonial/testimonial-person.jpeg"
              alt="Student testimonial"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
