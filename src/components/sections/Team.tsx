import Image from "next/image";
import { AnimateOnScroll, TiltCard } from "@/components/ui";

const teamMembers = [
  { name: "Amélie Laurent", role: "Vocal Training", image: "/images/team/member-1.png" },
  { name: "Nikolas Gibbons", role: "Violin & Strings", image: "/images/team/member-2.png" },
  { name: "Sienna Hewitt", role: "Violin & Strings", image: "/images/team/member-3.png" },
  { name: "Lily-Rose Chedjou", role: "Vocal Training", image: "/images/team/member-4.png" },
  { name: "Marcus Lee", role: "Guitar Lessons", image: "/images/team/member-5.png" },
  { name: "Sofia Martinez", role: "Piano Lessons", image: "/images/team/member-6.png" },
  { name: "Jamal Rivers", role: "Music Theory", image: "/images/team/member-7.png" },
  { name: "Aisha Patel", role: "Music Theory", image: "/images/team/member-8.png" },
];

export default function Team() {
  return (
    <section className="bg-white px-5 lg:px-20 py-20">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        {/* Title */}
        <div className="flex flex-col gap-4 items-center text-center max-w-[768px] mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-[40px] leading-[1.2] text-[#18181b] capitalize">
            Your <span className="text-[#8c00ff]">instructors</span>
          </h2>
          <p className="text-lg leading-[1.5] text-[#3f3f46]">
            Passionate musicians who love teaching as much as they love performing.
          </p>
        </div>

        {/* Team grid - using full card images from Figma */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {teamMembers.map((member, index) => (
            <AnimateOnScroll key={member.name} animation="scaleUp" delay={index * 0.08} className="flex flex-col items-center">
              <TiltCard intensity={10} className="rounded-2xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={296}
                  height={379}
                  className="w-full h-auto object-contain"
                />
              </TiltCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
