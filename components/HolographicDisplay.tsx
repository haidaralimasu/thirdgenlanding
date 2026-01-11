"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileCode, Scan, Cuboid, Copy } from "lucide-react";

interface HolographicDisplayProps {
  animationState: string;
}

const code = `function exploit(address _target) public payable {
    (bool success, ) = _target.call{value: msg.value}(
        abi.encodeWithSignature("withdraw()")
    );
    require(success, "Withdrawal failed"); // VULNERABLE

    // Re-enter the vulnerable contract
    (success, ) = _target.call(
        abi.encodeWithSignature("deposit()")
    );
    require(success, "Deposit failed"); // FIXED
}`;

const lines = code.split('\n');

const vulnerableLineIndex = 3;
const fixedLineIndex = 7;

export const HolographicDisplay: React.FC<HolographicDisplayProps> = ({ animationState }) => {
  const [vulnerableHighlight, setVulnerableHighlight] = useState(false);
  const [fixedHighlight, setFixedHighlight] = useState(false);

  useEffect(() => {
    if (animationState === "phase1") {
      setVulnerableHighlight(true);
      setFixedHighlight(false);
    } else if (animationState === "phase2") {
      setVulnerableHighlight(false);
      setFixedHighlight(true);
    } else if (animationState === "reset") {
      setVulnerableHighlight(false);
      setFixedHighlight(false);
    }
  }, [animationState]);

  return (
    <div className="relative w-full max-w-full md:max-w-2xl mx-auto p-4 md:p-8 bg-transparent">
      {/* Schematic */}
      <div className="relative w-full h-32 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 600 128"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M 10% 50% L 45% 50%"
            stroke="#808080"
            strokeWidth="1"
            strokeOpacity="0.3"
            strokeDasharray="4 4"
          />
          <motion.path
            d="M 55% 50% L 90% 50%"
            stroke="#808080"
            strokeWidth="1"
            strokeOpacity="0.3"
            strokeDasharray="4 4"
          />
          <motion.path
            d="M 10% 50% L 45% 50%"
            stroke="url(#pulse-gradient)"
            strokeWidth="2"
            animate={animationState === 'phase1' ? { pathLength: [0, 1] } : { pathLength: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
           <motion.path
            d="M 55% 50% L 90% 50%"
            stroke="url(#pulse-gradient)"
            strokeWidth="2"
            animate={animationState === 'phase2' ? { pathLength: [0, 1] } : { pathLength: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF8700" stopOpacity="0" />
                <stop offset="100%" stopColor="#FF8700" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute w-full h-full flex justify-around items-start pt-6 text-zinc-500 font-mono text-xs">
          <motion.div className="flex flex-col items-center flex-1">
            <FileCode className="w-8 h-8"/>
            <span>Code</span>
          </motion.div>
          <motion.div className="flex flex-col items-center flex-1">
            <Scan className="w-8 h-8 text-orange-500" />
            <span>[Scanner]</span>
          </motion.div>
          <motion.div className="flex flex-col items-center flex-1">
            <Cuboid className="w-8 h-8"/>
            <span>Block</span>
          </motion.div>
        </div>
        <motion.div
          className="absolute w-2 h-2 bg-orange-500 rounded-full"
          style={{ transform: "translateY(-50%)" }}
          initial={{ left: "15%" }}
          animate={animationState === 'phase1' ? { left: ["15%", "45%"] } : animationState === 'phase2' ? { left: ["55%", "85%"] } : { left: "15%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      {/* Code Block */}
      <div className="relative mt-4 font-mono text-xs w-full">
        <div className="absolute -top-2 -left-2 w-full h-full bg-grid-pattern opacity-5" />
        <div className="flex justify-between items-center text-zinc-500 mb-2 px-4 py-2 bg-[#0A0A0A]/50 border-b border-white/10 rounded-t-md">
          <span>exploit.sol</span>
          <Copy className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
        </div>
        <div className="overflow-x-auto p-4">
          {lines.map((line, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              style={{
                textShadow:
                  (index === vulnerableLineIndex && vulnerableHighlight)
                    ? "0 0 8px rgba(255,0,0,0.8)"
                    : (index === fixedLineIndex && fixedHighlight)
                    ? "0 0 8px rgba(0,255,0,0.8)"
                    : "none",
              }}
            >
              <span className="text-zinc-600 mr-4 w-4 text-right select-none">{index + 1}</span>
              <pre className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-400 overflow-auto">{line}</pre>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
