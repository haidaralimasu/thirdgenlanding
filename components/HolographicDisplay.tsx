"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileCode, Scan, Shield, Copy, Check, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";

interface HolographicDisplayProps {
  animationState: string;
}

const codeLines = [
  { text: "function exploit(address _target) public payable {", indent: 0 },
  { text: "    (bool success, ) = _target.call{value: msg.value}(", indent: 1 },
  { text: '        abi.encodeWithSignature("withdraw()")', indent: 2 },
  { text: "    );", indent: 1 },
  { text: '    require(success, "Withdrawal failed");', indent: 1, vulnerable: true, tag: "VULNERABLE" },
  { text: "", indent: 0 },
  { text: "    // Re-enter the vulnerable contract", indent: 1 },
  { text: "    (success, ) = _target.call(", indent: 1 },
  { text: '        abi.encodeWithSignature("deposit()")', indent: 2 },
  { text: "    );", indent: 1 },
  { text: '    require(success, "Deposit failed");', indent: 1, fixed: true, tag: "PROTECTED" },
  { text: "}", indent: 0 },
];

export const HolographicDisplay: React.FC<HolographicDisplayProps> = ({ animationState }) => {
  const [vulnerableHighlight, setVulnerableHighlight] = useState(false);
  const [fixedHighlight, setFixedHighlight] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const handleCopy = () => {
    const fullCode = codeLines.map(line => line.text).join('\n');
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-full lg:max-w-2xl mx-auto scale-90 lg:scale-95">
      {/* Analysis Pipeline */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-4 p-3 md:p-4 bg-gradient-to-br from-background/60 to-background/30 backdrop-blur-md border border-foreground-tertiary/30 rounded-xl"
      >
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Code Node */}
          <motion.div
            className="flex flex-col items-center gap-2 flex-1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.div
              className={`relative p-2 md:p-3 rounded-xl border-2 transition-all duration-300 ${
                animationState === 'phase1' ? 'border-accent bg-accent/10 shadow-lg shadow-accent/20' : 'border-foreground-tertiary/50 bg-background/40'
              }`}
              animate={animationState === 'phase1' ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 2, repeat: animationState === 'phase1' ? Infinity : 0 }}
            >
              <FileCode className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${animationState === 'phase1' ? 'text-accent' : 'text-foreground-secondary'}`} />
              {animationState === 'phase1' && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-accent/20"
                  animate={{ opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.div>
            <span className="font-mono text-[10px] md:text-xs text-foreground-secondary uppercase tracking-wide">Code</span>
          </motion.div>

          {/* Connection Line 1 */}
          <div className="relative flex-1 h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-foreground-tertiary/30 via-foreground-tertiary/50 to-foreground-tertiary/30" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={animationState === 'phase1' ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-lg shadow-accent/50"
              initial={{ left: "0%" }}
              animate={animationState === 'phase1' ? { left: "100%" } : { left: "0%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>

          {/* Scanner Node */}
          <motion.div
            className="flex flex-col items-center gap-2 flex-1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.div
              className={`relative p-2 md:p-3 rounded-xl border-2 transition-all duration-300 ${
                animationState === 'phase1' || animationState === 'phase2' ? 'border-accent bg-accent/10 shadow-lg shadow-accent/20' : 'border-foreground-tertiary/50 bg-background/40'
              }`}
              animate={animationState === 'phase1' || animationState === 'phase2' ? { rotate: [0, 360] } : {}}
              transition={{ duration: 3, repeat: (animationState === 'phase1' || animationState === 'phase2') ? Infinity : 0, ease: "linear" }}
            >
              <Scan className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${(animationState === 'phase1' || animationState === 'phase2') ? 'text-accent' : 'text-foreground-secondary'}`} />
            </motion.div>
            <span className="font-mono text-[10px] md:text-xs text-accent uppercase tracking-wide font-semibold">Scanner</span>
          </motion.div>

          {/* Connection Line 2 */}
          <div className="relative flex-1 h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-foreground-tertiary/30 via-foreground-tertiary/50 to-foreground-tertiary/30" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={animationState === 'phase2' ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
              initial={{ left: "0%" }}
              animate={animationState === 'phase2' ? { left: "100%" } : { left: "0%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>

          {/* Block Node */}
          <motion.div
            className="flex flex-col items-center gap-2 flex-1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.div
              className={`relative p-2 md:p-3 rounded-xl border-2 transition-all duration-300 ${
                animationState === 'phase2' ? 'border-green-500 bg-green-500/10 shadow-lg shadow-green-500/20' : 'border-foreground-tertiary/50 bg-background/40'
              }`}
              animate={animationState === 'phase2' ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 2, repeat: animationState === 'phase2' ? Infinity : 0 }}
            >
              <Shield className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${animationState === 'phase2' ? 'text-green-500' : 'text-foreground-secondary'}`} />
              {animationState === 'phase2' && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-green-500/20"
                  animate={{ opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.div>
            <span className="font-mono text-[10px] md:text-xs text-foreground-secondary uppercase tracking-wide">Protected</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Code Display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative group"
      >
        {/* Glow effect */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative bg-gradient-to-br from-[#0D0D0D] to-[#0A0A0A] border border-foreground-tertiary/40 rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-3 md:px-5 py-2 md:py-3 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-sm border-b border-foreground-tertiary/30">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 ml-2">
                <FileCode className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
                <span className="font-mono text-xs md:text-sm text-foreground-secondary">exploit.sol</span>
              </div>
            </div>
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/30 transition-colors"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5 text-green-500" />
                    <span className="font-mono text-xs text-green-500 hidden md:inline">Copied</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5 text-accent" />
                    <span className="font-mono text-xs text-accent hidden md:inline">Copy</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Code Content */}
          <div className="relative p-3 md:p-4 overflow-x-auto">
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                 style={{
                   backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                   backgroundSize: '20px 20px'
                 }}
            />

            <div className="space-y-1">
              {codeLines.map((line, index) => {
                const isVulnerable = line.vulnerable && vulnerableHighlight;
                const isFixed = line.fixed && fixedHighlight;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`relative flex items-start gap-3 md:gap-4 py-1 px-2 md:px-3 rounded-md transition-all duration-300 ${
                      isVulnerable ? 'bg-red-500/10 border-l-2 border-red-500' :
                      isFixed ? 'bg-green-500/10 border-l-2 border-green-500' :
                      'hover:bg-white/[0.02]'
                    }`}
                  >
                    {/* Line number */}
                    <span className="select-none font-mono text-[10px] md:text-xs text-foreground-tertiary min-w-[1.5rem] md:min-w-[2rem] text-right pt-[2px]">
                      {index + 1}
                    </span>

                    {/* Code text */}
                    <pre className="flex-1 font-mono text-xs md:text-sm">
                      <code className={`${
                        isVulnerable ? 'text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]' :
                        isFixed ? 'text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]' :
                        'text-gray-300'
                      }`}>
                        {line.text}
                      </code>
                    </pre>

                    {/* Tags */}
                    {line.tag && (
                      <AnimatePresence>
                        {((line.vulnerable && vulnerableHighlight) || (line.fixed && fixedHighlight)) && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 10 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.8, x: 10 }}
                            className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] md:text-xs font-mono font-semibold ${
                              line.vulnerable ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                              'bg-green-500/20 text-green-400 border border-green-500/30'
                            }`}
                          >
                            {line.vulnerable ? (
                              <><AlertTriangle className="w-3 h-3" /> {line.tag}</>
                            ) : (
                              <><CheckCircle2 className="w-3 h-3" /> {line.tag}</>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {/* Scanning effect */}
                    {((line.vulnerable && isVulnerable) || (line.fixed && isFixed)) && (
                      <motion.div
                        className={`absolute inset-0 rounded-md ${
                          line.vulnerable ? 'bg-red-500/5' : 'bg-green-500/5'
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Status Footer */}
          <div className="flex items-center justify-between px-3 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-background/60 to-background/40 backdrop-blur-sm border-t border-foreground-tertiary/30">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="font-mono text-[10px] md:text-xs text-foreground-secondary">
                Real-time Analysis Active
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <motion.div
                  className="w-1 h-1 rounded-full bg-accent"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-1 h-1 rounded-full bg-accent"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-1 h-1 rounded-full bg-accent"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
