import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  highlighted = false,
}) => {
  return (
    <div
      className={cn(
        "glass p-8 transition-all duration-300",
        highlighted && "border-accent/50 shadow-glow",
        !highlighted && "hover:border-white/20",
        className
      )}
    >
      {children}
    </div>
  );
};
