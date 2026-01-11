import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 font-mono text-sm transition-all duration-200 font-medium";

  const variants = {
    primary:
      "bg-accent text-background hover:bg-accent/90 hover:shadow-glow",
    outline:
      "border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-background hover:shadow-glow",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
