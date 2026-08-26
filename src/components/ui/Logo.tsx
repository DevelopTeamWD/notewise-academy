import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const textColor = variant === "dark" ? "text-neutral-800" : "text-white";
  const iconSrc = variant === "dark" ? "/svg/logo-icon-dark.svg" : "/svg/logo-icon.svg";

  return (
    <a href="/" className={`flex items-center gap-1 ${className}`}>
      <Image src={iconSrc} alt="" width={15} height={40} className="shrink-0" />
      <div className="flex flex-col leading-[16px]">
        <span className={`text-xs font-black tracking-[0.24px] uppercase ${textColor}`}>
          NOTEWISE
        </span>
        <span className={`text-xs font-black tracking-[0.24px] uppercase ${textColor}`}>
          ACADEMY
        </span>
      </div>
    </a>
  );
}
