"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const BarChart = () => {
  return (
    <div className="flex items-end h-16 w-24">
      <motion.div
        className="w-4 bg-zinc-700 mr-1"
        initial={{ height: 0 }}
        whileInView={{ height: "40%" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="w-4 bg-zinc-700 mr-1"
        initial={{ height: 0 }}
        whileInView={{ height: "60%" }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="w-4 bg-red-500 flex items-end justify-center"
        initial={{ height: 0 }}
        whileInView={{ height: "90%" }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <ArrowUp className="w-4 h-4 text-white" />
      </motion.div>
    </div>
  );
};