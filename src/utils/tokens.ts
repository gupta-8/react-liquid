export type GlassTone = "light" | "dark" | "auto";

export type GlassIntensity = "subtle" | "normal" | "strong";

export const intensityToVars: Record<GlassIntensity, { blur: number; saturation: number; alpha: number }> = {
  subtle: { blur: 12, saturation: 1.05, alpha: 0.45 },
  normal: { blur: 18, saturation: 1.1, alpha: 0.52 },
  strong: { blur: 26, saturation: 1.18, alpha: 0.62 }
};