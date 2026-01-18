import * as React from "react";
import { cn } from "../utils/cn";
import type { GlassIntensity, GlassTone } from "../utils/tokens";
import { intensityToVars } from "../utils/tokens";

export type GlassSurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: GlassTone;
  intensity?: GlassIntensity;
  radius?: number;
  border?: boolean;
  glow?: boolean;
  noise?: boolean;
  highlight?: boolean;
};

export const GlassSurface = React.forwardRef<HTMLDivElement, GlassSurfaceProps>(function GlassSurface(
  {
    className,
    tone = "auto",
    intensity = "normal",
    radius = 18,
    border = true,
    glow = false,
    noise = true,
    highlight = true,
    style,
    ...props
  },
  ref
) {
  const vars = intensityToVars[intensity];

  return (
    <div
      ref={ref}
      data-liquid=""
      data-tone={tone}
      data-glow={glow ? "" : undefined}
      data-border={border ? "" : undefined}
      data-noise={noise ? "" : undefined}
      data-highlight={highlight ? "" : undefined}
      className={cn("rl-glass", className)}
      style={{
        ...(style || {}),
        ["--rl-radius" as any]: `${radius}px`,
        ["--rl-blur" as any]: `${vars.blur}px`,
        ["--rl-saturation" as any]: `${vars.saturation}`,
        ["--rl-alpha" as any]: `${vars.alpha}`
      }}
      {...props}
    />
  );
});