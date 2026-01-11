"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FileCode, Scan, Cuboid } from "lucide-react";

interface SystemSchematicProps {
  animationState: string;
}

export const SystemSchematic: React.FC<SystemSchematicProps> = ({ animationState }) => {
  const dotControls = useAnimation();

  useEffect(() => {
    const animateDot = async () => {
      if (animationState === "phase1") {
        await dotControls.start({
          left: ["15%", "50%"],
          transition: { duration: 1.5, ease: "easeInOut" },
        });
      } else if (animationState === "phase2") {
        await dotControls.start({
          left: ["50%", "85%"],
          transition: { duration: 1.5, ease: "easeInOut" },
        });
      } else if (animationState === "reset") {
        await dotControls.set({ left: "15%" });
      }
    };
    animateDot();
  }, [animationState, dotControls]);

  return (
    <div className="w-full max-w-md mx-auto p-4 rounded-lg">
      <div className="flex justify-between items-center relative font-mono text-xs text-zinc-500">
        <motion.div
          className="flex flex-col items-center z-10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        >
          <FileCode className="w-8 h-8 text-zinc-500" />
          <span className="mt-2">Code</span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center z-10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <Scan className="w-8 h-8 text-zinc-500" />
          <span className="mt-2">[Scanner]</span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center z-10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <Cuboid className="w-8 h-8 text-zinc-500" />
          <span className="mt-2">Block</span>
        </motion.div>
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-zinc-800" />
        <motion.div
          className="absolute top-1/3 w-2 h-2 bg-orange-500 rounded-full"
          style={{ transform: "translateY(-50%)" }}
          initial={{ left: "15%" }}
          animate={dotControls}
        />
      </div>
    </div>
  );
};