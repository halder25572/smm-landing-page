import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
}

export function Card({ children, className, as = "div" }: CardProps) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "rounded-2xl bg-white ring-1 ring-slate-100 shadow-[0_2px_20px_-4px_rgba(15,23,42,0.06)]",
        className
      )}
    >
      {children}
    </Comp>
  );
}
