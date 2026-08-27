import Image from "next/image";
import { AnimateOnScroll, TiltCard } from "@/components/ui";

const programs = [
  {
    image: "/images/programs/program-3.png",
    tags: ["Ages 7 & up", "Beginner to Advanced"],
    title: "Piano Lessons",
    description:
      "Classical and contemporary technique, from first notes to advanced repertoire. ABRSM exam preparation included.",
  },
  {
    image: "/images/programs/program-2.png",
    tags: ["Ages 7 & up", "Beginner to Advanced"],
    title: "Violin & Strings",
    description:
      "Classical foundation with modern repertoire options. Patient, structured teaching for young beginners and adult starters.",
  },
  {
    image: "/images/programs/Music-Theory.png",
    tags: ["Ages 5 & up", "All Level"],
    title: "Music Theory",
    description:
      "Stand-alone or as a complement to instrument lessons. Essential for exam candidates and anyone who wants to understand music deeply.",
  },
  {
    image: "/images/programs/guitar.png",
    tags: ["Ages 7 & up", "Beginner to Advanced"],
    title: "Guitar Lessons",
    description:
      "Acoustic, electric, and fingerstyle guitar. Learn chords, scales, and your favourite songs from day one.",
  },
  {
    image: "/images/programs/vocal-training.png",
    tags: ["Ages 8 & up", "Beginner to Advanced"],
    title: "Vocal Training",
    description:
      "Breath control, technique, pitch accuracy, and performance confidence. All genres welcome — pop, classical, musical theatre.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-white px-5 lg:px-16 py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-20 items-center">
        {/* Title */}
        <div className="flex flex-col gap-4 items-center text-center w-full">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-[40px] leading-[1.2] text-[#18181b] capitalize">
            Our <span className="text-[#8c00ff]">programs</span>
          </h2>
          <p className="text-lg leading-[1.5] text-[#3f3f46]">
            Expert instruction across five core disciplines, for all ages and levels.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {programs.map((program, index) => (
            <AnimateOnScroll
              key={program.title}
              animation="fadeUp"
              delay={index * 0.1}
              className="flex flex-col"
            >
              <div className="flex flex-col gap-6">
                {/* Image with purple circle background + 3D tilt */}
                <TiltCard className="relative w-full h-[270px] flex items-center justify-center rounded-2xl">
                  {/* Purple circle */}
                  <div className="absolute w-[240px] h-[240px] rounded-full bg-[#e3c4ff]" />
                  {/* Program image */}
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-contain relative z-10"
                  />
                </TiltCard>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm font-medium leading-[1.5] rounded-full bg-[#f9f5ff] border border-[#e3c4ff] text-[#6d00c5]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-2xl leading-[1.2] text-[#18181b]">
                      {program.title}
                    </h3>
                    <p className="text-lg leading-[1.5] text-[#3f3f46]">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
