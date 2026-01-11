"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text }) => {
  return (
    <div className="relative font-mono text-4xl font-bold text-red-500">
      <motion.div
        className="absolute inset-0"
        animate={{
          clipPath: [
            "inset(0% 0% 0% 0%)",
            "inset(50% 0% 20% 0%)",
            "inset(80% 0% 5% 0%)",
            "inset(20% 0% 40% 0%)",
            "inset(0% 0% 0% 0%)",
          ],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 2,

        }}
      >
        {text}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        animate={{
          clipPath: [
            "inset(10% 0% 85% 0%)",
            "inset(60% 0% 10% 0%)",
            "inset(90% 0% 2% 0%)",
            "inset(30% 0% 60% 0%)",
            "inset(10% 0% 85% 0%)",
          ],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 2,

        }}
      >
        {text}
      </motion.div>
      <div className="opacity-0">{text}</div>
    </div>
  );
};