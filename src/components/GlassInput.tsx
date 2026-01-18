import * as React from "react";
import { cn } from "../utils/cn";

export type GlassInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const GlassInput = React.forwardRef<HTMLInputElement, GlassInputProps>(function GlassInput(
  { className, leftIcon, rightIcon, ...props },
  ref
) {
  return (
    <label className={cn("rl-input", className)}>
      <span className="rl-input__bg" aria-hidden="true" />
      {leftIcon ? <span className="rl-input__icon rl-input__icon--left">{leftIcon}</span> : null}
      <input ref={ref} className="rl-input__field" {...props} />
      {rightIcon ? <span className="rl-input__icon rl-input__icon--right">{rightIcon}</span> : null}
    </label>
  );
});