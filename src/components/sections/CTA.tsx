import Image from "next/image";
import { Button, AnimateOnScroll } from "@/components/ui";

export default function CTA() {
  return (
    <section className="bg-white px-5 lg:px-20 py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8">
        {/* Decorative music notes illustration */}
        <AnimateOnScroll animation="scaleUp">
          <Image
            src="/images/cta-decoration.png"
            alt=""
            width={162}
            height={139}
            className="object-contain"
          />
        </AnimateOnScroll>

        {/* Title + subtitle */}
        <AnimateOnScroll animation="fadeUp" delay={0.2} className="flex flex-col gap-4 items-center text-center w-full">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-[40px] leading-[1.2] text-[#18181b] capitalize">
            Your <span className="text-[#8c00ff]">first lesson</span> is completely
            <span className="text-[#8c00ff]"> free</span>
          </h2>
          <p className="text-lg leading-[1.5] text-[#3f3f46]">
            No commitment, no pressure. Just you, an instrument, and a great teacher.
          </p>
        </AnimateOnScroll>

        {/* Actions */}
        <AnimateOnScroll animation="fadeUp" delay={0.4} className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" href="#contact">
            Book free trial
          </Button>
          <Button variant="outline" href="#programs">
            Explore programs
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
