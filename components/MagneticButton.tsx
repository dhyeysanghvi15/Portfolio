"use client";

import Link from "next/link";
import { useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMotionSettings } from "@/components/MotionSettingsProvider";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  cursor?: "button" | "link" | "drag";
};

export function MagneticButton({
  href,
  onClick,
  className,
  children,
  target,
  rel,
  cursor = "button"
}: MagneticButtonProps) {
  const { reducedMotion } = useMotionSettings();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 18 });
  const springY = useSpring(y, { stiffness: 240, damping: 18 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.12);
    y.set(offsetY * 0.12);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const commonProps = useMemo(
    () => ({
      className: cn(
        "inline-flex items-center justify-center rounded-full transition focus-visible:outline-none",
        className
      ),
      "data-cursor": cursor
    }),
    [className, cursor]
  );

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {href ? (
        href.startsWith("/") ? (
          <Link href={href} {...commonProps}>
            {children}
          </Link>
        ) : (
          <a href={href} target={target} rel={rel} {...commonProps}>
            {children}
          </a>
        )
      ) : (
        <button type="button" onClick={onClick} {...commonProps}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
