"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need my own instrument to start?",
    answer:
      "Not for the first month! We're happy to lend a practice keyboard or acoustic guitar while you get started. We'll also guide you on the best instruments to buy for your budget when you're ready.",
  },
  {
    question: "What age is too young (or too old) to start?",
    answer:
      "We accept students from age 5 for piano and violin, and age 7 for guitar. There is no upper age limit - many of our adult students started in their 40s, 50s, and beyond.",
  },
  {
    question: "How do online lessons work?",
    answer:
      "We use Zoom with high-quality audio settings. You'll need a stable internet connection, a device with a camera, and your instrument. Our teachers are trained to deliver engaging, effective lessons online.",
  },
  {
    question: "Can I switch instruments later?",
    answer:
      "Absolutely! Many students discover new interests as they progress. You can switch instruments at the start of any new term, and your teacher will help with the transition.",
  },
  {
    question: "What if I need to pause or cancel?",
    answer:
      "Life happens! You can pause your subscription for up to 2 months per year, and cancel anytime with 14 days notice. No penalties, no questions asked.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#fbfaf5] px-5 lg:px-20 py-20">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-20 items-center">
        <h2 className="font-[family-name:var(--font-heading)] font-bold text-[40px] leading-[1.2] text-[#18181b] text-center capitalize">
          Frequently asked <span className="text-[#8c00ff]">questions</span>
        </h2>

        <div className="w-full max-w-[768px] flex flex-col">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`py-6 ${index > 0 ? "border-t border-[#e4e4e7]" : ""}`}
            >
              <button
                type="button"
                className="w-full flex items-start justify-between gap-6 cursor-pointer text-left"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-lg leading-[1.5] text-[#18181b]">
                  {faq.question}
                </span>
                <span className="shrink-0 mt-0.5 text-[#18181b]">
                  {openIndex === index ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-base leading-[1.5] text-[#3f3f46] pr-12">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
