import * as React from "react";
import { cn } from "../utils/cn";
import { GlassSurface, type GlassSurfaceProps } from "./GlassSurface";

export type GlassCardProps = GlassSurfaceProps & {
  inset?: boolean;
};

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(function GlassCard(
  { className, inset = false, ...props },
  ref
) {
  return (
    <GlassSurface
      ref={ref}
      className={cn("rl-card", inset && "rl-card--inset", className)}
      {...props}
    />
  );
});