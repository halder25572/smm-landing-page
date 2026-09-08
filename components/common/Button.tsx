import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: undefined;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-linear-to-r from-[#FF9243] via-[#DD6017] to-[#983200] text-white shadow-sm shadow-[#983200]/25 hover:brightness-105",
  outline:
    "bg-linear-to-r from-[#FF9243] via-[#DD6017] to-[#983200] text-white shadow-sm shadow-[#983200]/25 hover:brightness-105",
  ghost: "text-slate-700 hover:text-brand-600",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 whitespace-nowrap";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    const styles = cn(base, variantStyles[variant], sizeStyles[size], className);

    if ("href" in props && props.href) {
      const { href, ...rest } = props as ButtonAsLink;
      return (
        <Link href={href} className={styles} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={styles} {...(props as ButtonAsButton)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";