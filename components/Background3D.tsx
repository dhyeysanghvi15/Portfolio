"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Background3D() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-base via-base to-base/80 opacity-100" />
      <motion.div
        className="absolute left-1/2 top-[70%] h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(24,220,255,0.25), transparent 60%)"
        }}
        animate={
          reducedMotion
            ? undefined
            : { scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-[68%] h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: "perspective(900px) rotateX(65deg)",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "56px 56px"
        }}
        animate={
          reducedMotion ? undefined : { backgroundPosition: ["0px 0px", "0px -700px"] }
        }
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(24,220,255,0.12), transparent 55%), linear-gradient(260deg, rgba(255,80,215,0.12), transparent 60%)"
        }}
        animate={
          reducedMotion
            ? undefined
            : { opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 120px)"
        }}
        animate={
          reducedMotion ? undefined : { backgroundPositionX: ["0px", "600px"] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,80,215,0.22), transparent 45%), radial-gradient(circle at 80% 10%, rgba(122,92,255,0.2), transparent 40%)"
        }}
        animate={
          reducedMotion
            ? undefined
            : { opacity: [0.12, 0.22, 0.12], scale: [1, 1.03, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
