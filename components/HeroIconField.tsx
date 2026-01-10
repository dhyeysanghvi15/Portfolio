"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrandIcon } from "@/components/icons/BrandIcon";

const icons = [
  { name: "aws", top: "10%", left: "6%", size: 26 },
  { name: "gcp", top: "18%", left: "78%", size: 24 },
  { name: "microsoft", top: "22%", left: "52%", size: 22 },
  { name: "azure", top: "34%", left: "86%", size: 22 },
  { name: "google", top: "40%", left: "10%", size: 24 },
  { name: "docker", top: "24%", left: "70%", size: 22 },
  { name: "python", top: "46%", left: "18%", size: 26 },
  { name: "postgres", top: "44%", left: "72%", size: 20 },
  { name: "elasticsearch", top: "60%", left: "8%", size: 24 },
  { name: "github", top: "66%", left: "60%", size: 20 },
  { name: "linux", top: "30%", left: "40%", size: 22 },
  { name: "airflow", top: "78%", left: "22%", size: 24 },
  { name: "wireshark", top: "16%", left: "40%", size: 22 },
  { name: "burpsuite", top: "54%", left: "52%", size: 20 },
  { name: "metasploit", top: "82%", left: "78%", size: 22 },
  { name: "tableau", top: "34%", left: "92%", size: 20 },
  { name: "cloud", top: "70%", left: "12%", size: 22 }
] as const;

export function HeroIconField() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {icons.map((icon, index) => (
        <motion.div
          key={`${icon.name}-${index}`}
          className="absolute text-accent/35"
          style={{ top: icon.top, left: icon.left, width: icon.size, height: icon.size }}
          animate={
            reducedMotion
              ? undefined
              : {
                  y: [0, -10, 0, 12, 0],
                  x: [0, 6, 0, -6, 0],
                  opacity: [0.2, 0.6, 0.3, 0.5, 0.2]
                }
          }
          transition={{
            duration: 12 + index * 0.6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <BrandIcon name={icon.name} className="h-full w-full text-accent/50" />
          <span className="sr-only">{icon.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
