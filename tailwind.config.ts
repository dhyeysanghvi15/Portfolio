import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "hsl(var(--base))",
        baseElevated: "hsl(var(--base-elevated))",
        text: "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        accent2: "hsl(var(--accent-2))",
        accent3: "hsl(var(--accent-3))",
        border: "hsl(var(--border))"
      },
      boxShadow: {
        glow: "0 0 40px hsl(var(--accent) / 0.35)",
        glass: "0 20px 60px rgba(0, 0, 0, 0.35)"
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
        gradient: "radial-gradient(120% 120% at 10% 10%, hsl(var(--accent) / 0.25), transparent 60%), radial-gradient(120% 120% at 90% 0%, hsl(var(--accent-2) / 0.2), transparent 55%)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulse 4s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
