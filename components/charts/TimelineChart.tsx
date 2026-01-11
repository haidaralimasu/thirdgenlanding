"use client";

import React from "react";
import { motion } from "framer-motion";

export const TimelineChart = () => {
  return (
    <div className="w-full h-8 bg-zinc-800 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-orange-500"
        initial={{ width: 0 }}
        whileInView={{ width: "95%" }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </div>
  );
};