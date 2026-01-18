import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../utils/cn";

export type GlassButtonVariant = "primary" | "ghost" | "danger";

export type GlassButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: GlassButtonVariant;
  size?: "sm" | "md" | "lg";
  loading?: boolean;
};

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(function GlassButton(
  { className, asChild, variant = "primary", size = "md", loading = false, disabled, children, ...props },
  ref
) {
  const Comp: any = asChild ? Slot : "button";
  const isDisabled = disabled || loading;

  return (
    <Comp
      ref={ref}
      className={cn("rl-btn", `rl-btn--${variant}`, `rl-btn--${size}`, className)}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...props}
    >
      <span className="rl-btn__bg" aria-hidden="true" />
      <span className="rl-btn__content">
        {loading ? <span className="rl-spinner" aria-hidden="true" /> : null}
        <span className={cn(loading && "rl-btn__label--loading")}>{children}</span>
      </span>
    </Comp>
  );
});