import * as React from "react";
import { cn } from "../utils/cn";
import { GlassSurface } from "./GlassSurface";
import { usePrefersReducedMotion } from "../utils/usePrefersReducedMotion";

type Toast = { id: string; title?: string; message: string };

const ToastCtx = React.createContext<{
  push: (t: Omit<Toast, "id">) => void;
} | null>(null);

export function GlassToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);
  const reduced = usePrefersReducedMotion();

  const push = React.useCallback((t: Omit<Toast, "id">) => {
    const id = crypto.randomUUID?.() ?? String(Math.random());
    const toast: Toast = { id, ...t };
    setToasts((prev) => [toast, ...prev].slice(0, 4));
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== id));
    }, 3200);
  }, []);

  return (
    <ToastCtx.Provider value={{ push }}>
      {children}
      <div className={cn("rl-toasts", reduced && "is-reduced")} aria-live="polite" aria-relevant="additions">
        {toasts.map((t) => (
          <GlassSurface key={t.id} className="rl-toast" intensity="normal" radius={18} border noise highlight>
            {t.title ? <div className="rl-toast__title">{t.title}</div> : null}
            <div className="rl-toast__msg">{t.message}</div>
          </GlassSurface>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

export function useGlassToast() {
  const ctx = React.useContext(ToastCtx);
  if (!ctx) throw new Error("useGlassToast must be used inside <GlassToastProvider>");
  return ctx;
}