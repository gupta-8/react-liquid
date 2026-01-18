import * as React from "react";
import { useFloating, offset, flip, shift, autoUpdate, useHover, useFocus, useDismiss, useRole, useInteractions } from "@floating-ui/react";
import { cn } from "../utils/cn";
import { GlassSurface } from "./GlassSurface";

export function GlassTooltip({
  children,
  content,
  open: controlledOpen,
  onOpenChange,
  className
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}) {
  const [uncontrolled, setUncontrolled] = React.useState(false);
  const open = controlledOpen ?? uncontrolled;
  const setOpen = onOpenChange ?? setUncontrolled;

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [offset(10), flip(), shift({ padding: 10 })],
    whileElementsMounted: autoUpdate
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

  return (
    <>
      <span ref={refs.setReference} className="rl-tooltipRef" {...getReferenceProps()}>
        {children}
      </span>
      {open ? (
        <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
          <GlassSurface className={cn("rl-tooltip", className)} intensity="subtle" radius={14} border noise highlight>
            {content}
          </GlassSurface>
        </div>
      ) : null}
    </>
  );
}