"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
};

const defaultVariants = (
  y: number,
  delay: number,
  duration: number
): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: "easeOut",
    },
  },
});

export default function MotionSection({
  children,
  className = "",
  delay = 0.2,
  duration = 0.6,
  y = 40,
}: MotionSectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={defaultVariants(y, delay, duration)}
      className={className}>
      {children}
    </motion.section>
  );
}
