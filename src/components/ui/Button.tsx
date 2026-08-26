interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "dark";
  size?: "default" | "full";
  href?: string;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  type = "button",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 h-12 font-semibold text-lg leading-[1.2] font-[family-name:var(--font-body)] transition-colors whitespace-nowrap";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    outline: "border border-neutral-800 text-neutral-800 hover:bg-neutral-100",
    dark: "bg-neutral-800 text-white hover:bg-neutral-500",
  };

  const sizes = {
    default: "",
    full: "w-full",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
