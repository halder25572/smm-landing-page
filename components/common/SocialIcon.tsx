import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialIconProps {
  icon: LucideIcon;
  href?: string;
  label: string;
  className?: string;
}

export function SocialIcon({ icon: Icon, href = "#", label, className }: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-100 transition-colors hover:bg-brand-600 hover:text-white",
        className
      )}
    >
      <Icon size={16} strokeWidth={2} />
    </a>
  );
}
