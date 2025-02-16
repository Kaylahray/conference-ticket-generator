// components/ui/button.tsx
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      isLoading = false,
      fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          "flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-normal text-base leading-[150%] transition-colors",
          {
            // Primary variant (filled)
            "bg-[#24A0B5] text-white border border-[#24A0B5] hover:bg-[#1B8A9D]":
              variant === "primary",
            // Secondary variant (outline)
            "border border-[#24A0B5] text-[#24A0B5] hover:bg-[#24A0B5] hover:text-white":
              variant === "secondary",
            // Full width option
            "w-full": fullWidth,
            // Disabled state
            "opacity-50 cursor-not-allowed": disabled || isLoading,
          },
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Processing...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
