import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-medium text-brand-600 border-b-2 border-brand-500 pb-1 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-[2.25rem] font-semibold text-slate-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-500 text-[15px] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
