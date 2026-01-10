import { type Variants, type Transition } from "framer-motion";

export const motionTokens = {
  duration: {
    fast: 0.18,
    base: 0.4,
    slow: 0.7,
    cinematic: 1.1
  },
  ease: {
    inOut: [0.4, 0, 0.2, 1],
    out: [0.16, 1, 0.3, 1],
    in: [0.6, 0, 0.9, 0.4]
  },
  spring: {
    soft: { type: "spring", stiffness: 140, damping: 18 },
    medium: { type: "spring", stiffness: 180, damping: 22 },
    snappy: { type: "spring", stiffness: 240, damping: 24 }
  }
} as const;

export const fadeSlide = (distance = 24): Variants => ({
  hidden: { opacity: 0, y: distance },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.base, ease: motionTokens.ease.out }
  }
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.base, ease: motionTokens.ease.out }
  }
};

export const blurIn: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: motionTokens.duration.base, ease: motionTokens.ease.out }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: motionTokens.duration.base, ease: motionTokens.ease.out }
  }
};

export const staggerContainer = (delay = 0.08, stagger = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } }
});

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

export const hoverLift: Transition = {
  type: "spring",
  stiffness: 240,
  damping: 20
};

export const drawerOpen: Variants = {
  hidden: { height: 0, opacity: 0 },
  show: {
    height: "auto",
    opacity: 1,
    transition: { duration: motionTokens.duration.base, ease: motionTokens.ease.out }
  },
  exit: { height: 0, opacity: 0, transition: { duration: motionTokens.duration.fast } }
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 24 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.base, ease: motionTokens.ease.out }
  },
  exit: { opacity: 0, y: -18, transition: { duration: motionTokens.duration.fast } }
};
