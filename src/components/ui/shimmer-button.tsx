import { cn } from "@/lib/utils";
import React from "react";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3 font-body text-sm font-medium transition-all duration-300",
          variant === "primary" && "bg-ctext-primary text-white hover:bg-primary-hover",
          variant === "secondary" && "bg-white text-ctext-primary border border-primary hover:bg-primary hover:text-white",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <span
          className={cn(
            "absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            variant === "primary" && "bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"
          )}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
export { ShimmerButton };
