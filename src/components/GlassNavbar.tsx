import * as React from "react";
import { cn } from "../utils/cn";
import { GlassSurface } from "./GlassSurface";

export function GlassNavbar({
  className,
  left,
  right,
  center
}: {
  className?: string;
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <GlassSurface className={cn("rl-navbar", className)} intensity="normal" radius={22} border noise highlight glow>
      <div className="rl-navbar__side">{left}</div>
      <div className="rl-navbar__center">{center}</div>
      <div className="rl-navbar__side rl-navbar__side--right">{right}</div>
    </GlassSurface>
  );
}