import Image from "next/image";
import { SectionTitle, AnimateOnScroll } from "@/components/ui";

const plans = [
  { image: "/images/pricing/card-starter.png", alt: "Starter plan - $49/mo" },
  { image: "/images/pricing/card-growth.png", alt: "Growth plan - $79/mo" },
  { image: "/images/pricing/card-intensive.png", alt: "Intensive plan - $129/mo" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-5 lg:px-16 py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-20 items-center">
        <SectionTitle
          heading={
            <>
              Simple, <span className="text-[#8c00ff]">transparent</span> pricing
            </>
          }
          subtitle="No hidden fees. Cancel or pause anytime. First lesson is always free."
        />

        {/* Pricing cards as images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {plans.map((plan, index) => (
            <AnimateOnScroll key={plan.alt} animation="fadeUp" delay={index * 0.15} className="relative w-full">
              <Image
                src={plan.image}
                alt={plan.alt}
                width={405}
                height={555}
                className="w-full h-auto object-contain"
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
