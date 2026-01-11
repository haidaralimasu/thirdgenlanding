"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  "0x5A...f2", "SHA256", "eth_call", "Invariant", "panic(0x41)",
  "1, 1, 2, 3, 5", "Reentrancy", "y = mx + c", "Merkle", "0.001 ETH",
  "SIG:0x...", "Nonce", "E(X)", "Oracle", "Gas Limit",
];

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-foreground-tertiary text-xs font-mono"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.2, 0],
            x: `+=${(Math.random() - 0.5) * 100}`,
            y: `+=${(Math.random() - 0.5) * 100}`,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5,
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
