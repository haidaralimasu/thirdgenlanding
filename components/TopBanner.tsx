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
      <div
        className="absolute inset-0 w-full h-full bg-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="3" viewBox="0 0 100 3"><path d="M0 1h100" stroke="%23000" stroke-opacity="0.1" stroke-width="1"/></svg>')`,
        }}
      />
      <motion.div
        className="absolute top-0 left-0 w-20 h-full bg-white/10"
        animate={{
          x: ["-100%", "1500%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <p className="font-mono text-[10px] font-bold text-black tracking-wider relative z-10">
        {text}
      </p>
    </motion.div>
  );
};
