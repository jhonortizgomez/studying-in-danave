"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  variant?: "fadeInUp" | "fadeInDown" | "slideUp" | "slideInLeft" | "scaleIn";
};

export function AnimatedSection({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
