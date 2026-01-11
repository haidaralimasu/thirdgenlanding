"use client";

import React from "react";
import { motion } from "framer-motion";

export const PingTimeline = () => {
  return (
    <div className="relative w-full h-8">
      <div className="absolute inset-0 w-full h-full bg-zinc-800 rounded-full" />
      <motion.div
        className="absolute inset-y-0 left-0 w-full h-full"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="w-full h-full bg-orange-500 rounded-full" />
      </motion.div>
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-white"
        style={{
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
          top: "50%",
          translateY: "-50%",
        }}
        initial={{ left: "0%" }}
        animate={{ left: "95%" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      />
    </div>
  );
};