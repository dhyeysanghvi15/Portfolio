"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const themes = ["neon", "minimal", "solarized"] as const;
export type ThemeName = (typeof themes)[number];

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (value: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>("neon");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme") as ThemeName | null;
    if (stored && themes.includes(stored)) {
      setTheme(stored);
      document.documentElement.dataset.theme = stored;
      return;
    }
    document.documentElement.dataset.theme = "neon";
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    root.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
    const timeout = window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 500);

    return () => window.clearTimeout(timeout);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div data-theme={theme} className="min-h-screen">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
