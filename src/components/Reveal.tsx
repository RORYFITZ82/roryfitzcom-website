"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: delay * 0.09, ease: [0.16, 1, 0.3, 1] },
  }),
};

type RevealProps = {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  as?: "div" | "h2" | "h3" | "p";
};

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    if (as === "h2") return <h2 className={className}>{children}</h2>;
    if (as === "h3") return <h3 className={className}>{children}</h3>;
    if (as === "p") return <p className={className}>{children}</p>;
    return <div className={className}>{children}</div>;
  }

  const shared = {
    className,
    custom: delay,
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.15, margin: "0px 0px -60px 0px" },
    variants,
  };

  if (as === "h2") return <motion.h2 {...shared}>{children}</motion.h2>;
  if (as === "h3") return <motion.h3 {...shared}>{children}</motion.h3>;
  if (as === "p") return <motion.p {...shared}>{children}</motion.p>;
  return <motion.div {...shared}>{children}</motion.div>;
}
