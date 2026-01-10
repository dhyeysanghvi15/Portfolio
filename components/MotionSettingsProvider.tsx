"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { useReducedMotion } from "framer-motion";

export type MotionIntensity = "minimal" | "standard" | "ultra";

const intensityMap: Record<MotionIntensity, { distance: number; scale: number; density: number }> = {
  minimal: { distance: 10, scale: 1.02, density: 0.6 },
  standard: { distance: 20, scale: 1.04, density: 1 },
  ultra: { distance: 28, scale: 1.08, density: 1.3 }
};

type MotionSettingsValue = {
  intensity: MotionIntensity;
  setIntensity: (value: MotionIntensity) => void;
  distance: number;
  scale: number;
  density: number;
  reducedMotion: boolean;
};

const MotionSettingsContext = createContext<MotionSettingsValue | null>(null);

export function MotionSettingsProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const [intensity, setIntensity] = useState<MotionIntensity>("standard");

  useEffect(() => {
    const stored = window.localStorage.getItem("motion-intensity") as MotionIntensity | null;
    if (stored && intensityMap[stored]) {
      setIntensity(stored);
      return;
    }
    setIntensity("standard");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("motion-intensity", intensity);
    const settings = intensityMap[intensity];
    document.documentElement.style.setProperty("--motion-distance", `${settings.distance}px`);
    document.documentElement.style.setProperty("--motion-scale", `${settings.scale}`);
    document.documentElement.style.setProperty("--motion-density", `${settings.density}`);
  }, [intensity]);

  const value = useMemo(() => {
    const settings = intensityMap[intensity];
    return {
      intensity,
      setIntensity,
      distance: settings.distance,
      scale: settings.scale,
      density: settings.density,
      reducedMotion: prefersReducedMotion ?? false
    };
  }, [intensity, prefersReducedMotion]);

  return (
    <MotionSettingsContext.Provider value={value}>
      {children}
    </MotionSettingsContext.Provider>
  );
}

export function useMotionSettings() {
  const context = useContext(MotionSettingsContext);
  if (!context) {
    throw new Error("useMotionSettings must be used within MotionSettingsProvider");
  }
  return context;
}

export function MotionIntensityToggle() {
  const { intensity, setIntensity } = useMotionSettings();
  const options: MotionIntensity[] = ["minimal", "standard", "ultra"];

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden items-center gap-2 rounded-full border border-border bg-base/70 px-3 py-2 text-xs backdrop-blur md:flex">
      <span className="text-muted">Motion</span>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setIntensity(option)}
          className={`rounded-full px-2 py-1 transition ${
            intensity === option
              ? "bg-accent text-base shadow-glow"
              : "bg-base text-text hover:text-accent"
          }`}
          aria-pressed={intensity === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
