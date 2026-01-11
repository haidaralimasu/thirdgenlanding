import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            "w-full bg-background-dark border border-foreground-secondary/30 px-4 py-3",
            "text-foreground font-mono text-sm",
            "focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50",
            "transition-all duration-200",
            "placeholder:text-foreground-secondary/50",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/50",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-xs text-red-500 font-mono">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
