import * as React from "react";
import { cn } from "../utils/cn";

export function GlassDivider({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rl-divider", className)} role="separator" {...props} />;
}