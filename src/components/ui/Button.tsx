import { cn } from "@/lib/utils";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: React.ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-ring border-primary",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-accent focus:ring-ring",
  outline:
    "border border-border text-foreground bg-transparent hover:bg-muted/20 hover:text-accent-foreground hover:border-primary focus:ring-ring",
  ghost: "bg-transparent text-foreground hover:bg-muted focus:ring-ring",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
