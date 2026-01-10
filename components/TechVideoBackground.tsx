"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function TechVideoBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reducedMotion) {
      video.pause();
      return;
    }
    video.playbackRate = 0.25;
    video.play().catch(() => undefined);
  }, [reducedMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-40 overflow-hidden">
      <video
        ref={videoRef}
        className="h-full w-full object-cover opacity-55"
        src="/video/tech.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
