import * as React from "react";
import { cn } from "../utils/cn";

export type GlassBadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "success" | "warning" | "danger";
};

export const GlassBadge = React.forwardRef<HTMLSpanElement, GlassBadgeProps>(function GlassBadge(
  { className, variant = "default", ...props },
  ref
) {
  return <span ref={ref} className={cn("rl-badge", `rl-badge--${variant}`, className)} {...props} />;
});