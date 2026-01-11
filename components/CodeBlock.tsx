"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";

interface CodeBlockProps {
  animationState: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ animationState }) => {
  const code = `function exploit(address _target) public payable {
    (bool success, ) = _target.call{value: msg.value}(
        abi.encodeWithSignature("withdraw()")
    );
    require(success, "Withdrawal failed"); // VULNERABLE LINE

    // Re-enter the vulnerable contract
    (success, ) = _target.call(
        abi.encodeWithSignature("deposit()")
    );
    require(success, "Deposit failed"); // FIXED LINE
}`;

  const lines = code.split('\n');

  const vulnerableLineIndex = 3; // Line index for "require(success, "Withdrawal failed");"
  const fixedLineIndex = 7; // Line index for "require(success, "Deposit failed");"

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
    <div className="relative bg-[#0A0A0A]/50 backdrop-blur-md border border-white/10 rounded-lg p-4 font-mono text-xs w-full max-w-lg mx-auto">
      <div className="flex justify-between items-center text-zinc-500 mb-2">
        <span>exploit.sol</span>
        <Copy className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
      </div>
      <div className="overflow-x-auto">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className="flex items-center"
            style={{
              backgroundColor:
                index === vulnerableLineIndex && vulnerableHighlight
                  ? "rgba(255,0,0,0.2)"
                  : index === fixedLineIndex && fixedHighlight
                  ? "rgba(0,255,0,0.2)"
                  : "transparent",
            }}
          >
            <span className="text-zinc-600 mr-4 w-4 text-right">{index + 1}</span>
            <pre className="text-white">{line}</pre>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
