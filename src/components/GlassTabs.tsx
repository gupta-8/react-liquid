import * as React from "react";
import { cn } from "../utils/cn";

export type GlassTabsItem = { id: string; label: string; disabled?: boolean };

export function GlassTabs({
  items,
  value,
  onChange,
  className
}: {
  items: GlassTabsItem[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
}) {
  return (
    <div className={cn("rl-tabs", className)} role="tablist" aria-orientation="horizontal">
      <span className="rl-tabs__bg" aria-hidden="true" />
      {items.map((it) => {
        const active = it.id === value;
        return (
          <button
            key={it.id}
            type="button"
            className={cn("rl-tabs__tab", active && "is-active")}
            role="tab"
            aria-selected={active}
            aria-disabled={it.disabled || undefined}
            disabled={it.disabled}
            onClick={() => onChange(it.id)}
          >
            <span className="rl-tabs__tabBg" aria-hidden="true" />
            {it.label}
          </button>
        );
      })}
    </div>
  );
}