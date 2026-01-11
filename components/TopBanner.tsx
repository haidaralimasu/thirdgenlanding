"use client";

import React from "react";
import { motion } from "framer-motion";

interface TopBannerProps {
  text?: string;
}

export const TopBanner: React.FC<TopBannerProps> = ({
  text = "/// SYSTEM INITIALIZING... COMING SOON ///",
}) => {
  return (
    <motion.div
      initial={{ y: -32 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-accent h-8 flex items-center justify-center overflow-hidden"
    >
      <motion.div
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="font-mono text-xs md:text-sm font-bold text-background tracking-wider"
      >
        {text}
      </motion.div>
    </motion.div>
  );
};
