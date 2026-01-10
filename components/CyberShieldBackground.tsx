"use client";

import { useReducedMotion } from "framer-motion";

export function CyberShieldBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,220,255,0.15),transparent_55%),radial-gradient(circle_at_70%_40%,rgba(122,92,255,0.12),transparent_60%),radial-gradient(circle_at_50%_70%,rgba(0,0,0,0.6),transparent_70%)]" />
      <svg
        viewBox="0 0 1200 800"
        className="absolute inset-0 h-full w-full opacity-70"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14D4FF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#9B7BFF" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <g
          className={!reducedMotion ? "cyber-rotate-slow" : ""}
          transform="translate(600 400)"
        >
          <circle r="180" fill="none" stroke="url(#glow)" strokeWidth="2" />
          <circle r="230" fill="none" stroke="url(#glow)" strokeWidth="1.5" strokeDasharray="4 10" />
          <circle r="280" fill="none" stroke="url(#glow)" strokeWidth="1" strokeDasharray="2 8" />
        </g>
        <g className={!reducedMotion ? "cyber-pulse" : ""}>
          <path
            d="M600 250l60 40v80l-60 40-60-40v-80l60-40z"
            fill="none"
            stroke="url(#glow)"
            strokeWidth="2"
          />
          <path
            d="M600 300l30 20v40l-30 20-30-20v-40l30-20z"
            fill="none"
            stroke="url(#glow)"
            strokeWidth="2"
          />
        </g>
        <g
          className={!reducedMotion ? "cyber-rotate" : ""}
          transform="translate(600 400)"
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <line
              key={`ray-${index}`}
              x1="0"
              y1="-240"
              x2="0"
              y2="-300"
              stroke="url(#glow)"
              strokeWidth="2"
              transform={`rotate(${index * 30})`}
            />
          ))}
        </g>
        <g className="cyber-drift">
          {Array.from({ length: 16 }).map((_, index) => (
            <path
              key={`trace-${index}`}
              d={`M${80 + index * 70} ${360 + (index % 2) * 40} h100`}
              stroke="rgba(20,220,255,0.35)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
        </g>
      </svg>
      {!reducedMotion ? <div className="cyber-scan" /> : null}
    </div>
  );
}
