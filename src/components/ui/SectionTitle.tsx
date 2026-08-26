interface SectionTitleProps {
  heading: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  heading,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      <h2 className="font-[family-name:var(--font-heading)] font-bold text-[40px] leading-[1.2] text-neutral-800 capitalize">
        {heading}
      </h2>
      {subtitle && (
        <p className="text-lg leading-[1.5] text-neutral-400">{subtitle}</p>
      )}
    </div>
  );
}
