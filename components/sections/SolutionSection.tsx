"use client";

import React from "react";
import { motion } from "framer-motion";

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-background-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-8">
            The Solution
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 text-xl md:text-2xl"
            >
              <span className="font-mono text-foreground-secondary line-through">
                The Old Way: Audit and Pray
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 text-xl md:text-2xl"
            >
              <span className="font-mono text-accent font-bold">
                The New Way: Runtime Enforcement
              </span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Transaction Flow Diagram */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Malicious Transaction */}
            <div className="relative">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-full bg-[#1a1a1a] border border-red-500/30 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-mono text-sm text-red-500">
                      Malicious TX
                    </span>
                  </div>
                  <code className="font-mono text-xs text-foreground-secondary block">
                    0xBadActor...
                  </code>
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    className="transform rotate-45"
                  >
                    <rect
                      x="10"
                      y="10"
                      width="60"
                      height="60"
                      fill="none"
                      stroke="#FF8700"
                      strokeWidth="3"
                      rx="4"
                    />
                    <rect
                      x="20"
                      y="20"
                      width="40"
                      height="40"
                      fill="none"
                      stroke="#FF8700"
                      strokeWidth="2"
                      rx="2"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-accent font-bold transform -rotate-45 text-xs">
                      SHIELD
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: true }}
                  className="w-full bg-[#1a1a1a] border border-red-500/30 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="font-mono text-sm text-red-500 font-bold">
                      BLOCKED
                    </span>
                  </div>
                  <code className="font-mono text-xs text-foreground-secondary block">
                    Transaction reverted
                  </code>
                </motion.div>
              </div>
            </div>

            {/* Legitimate Transaction */}
            <div className="relative">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-full bg-[#1a1a1a] border border-green-500/30 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="font-mono text-sm text-green-500">
                      Legitimate TX
                    </span>
                  </div>
                  <code className="font-mono text-xs text-foreground-secondary block">
                    0xGoodUser...
                  </code>
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    className="transform rotate-45"
                  >
                    <rect
                      x="10"
                      y="10"
                      width="60"
                      height="60"
                      fill="none"
                      stroke="#FF8700"
                      strokeWidth="3"
                      rx="4"
                    />
                    <rect
                      x="20"
                      y="20"
                      width="40"
                      height="40"
                      fill="none"
                      stroke="#FF8700"
                      strokeWidth="2"
                      rx="2"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-accent font-bold transform -rotate-45 text-xs">
                      SHIELD
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: true }}
                  className="w-full bg-[#1a1a1a] border border-green-500/30 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="font-mono text-sm text-green-500 font-bold">
                      VERIFIED
                    </span>
                  </div>
                  <code className="font-mono text-xs text-foreground-secondary block">
                    Transaction executed
                  </code>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="text-center text-foreground-secondary font-mono text-sm mt-12 max-w-2xl mx-auto"
          >
            ThirdGen enforces security policies at runtime, preventing exploits
            before block finalization while allowing legitimate transactions to
            pass through seamlessly.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
