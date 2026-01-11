"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-[#0A0A0A]/50 backdrop-blur-md border border-white/10 rounded-lg group-hover:border-white/20 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};