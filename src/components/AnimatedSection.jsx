"use client";

import { motion } from "framer-motion";

export default function AnimatedSection({ children, delay = 0, className, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}