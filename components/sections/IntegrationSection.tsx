"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const IntegrationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"new" | "live">("new");

  return (
    <section className="py-24 px-6 bg-background-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            Integration
          </h2>
          <p className="text-foreground-secondary text-lg font-mono">
            2 Lines of Code. Access Restricted to Partners.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-foreground-secondary/20">
            <button
              onClick={() => setActiveTab("new")}
              className={`
                px-4 py-3 font-mono text-sm font-medium transition-colors relative
                ${
                  activeTab === "new"
                    ? "text-accent"
                    : "text-foreground-secondary hover:text-foreground"
                }
              `}
            >
              New Protocol
              {activeTab === "new" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("live")}
              className={`
                px-4 py-3 font-mono text-sm font-medium transition-colors relative
                ${
                  activeTab === "live"
                    ? "text-accent"
                    : "text-foreground-secondary hover:text-foreground"
                }
              `}
            >
              Live Protocol
              {activeTab === "live" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-[#0d0d0d] border border-foreground-secondary/20 rounded-lg overflow-hidden">
            {activeTab === "new" ? (
              <motion.div
                key="new"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-[#1a1a1a] border-b border-foreground-secondary/20 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 font-mono text-xs text-foreground-secondary">
                    YourProtocol.sol
                  </span>
                </div>

                <div className="p-6 font-mono text-sm leading-relaxed relative">
                  {/* Locked Overlay */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-foreground-secondary/10 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-foreground-secondary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                      <p className="font-mono text-sm font-bold text-foreground mb-1">
                        Access Restricted
                      </p>
                      <p className="font-mono text-xs text-foreground-secondary">
                        Available to Partners Only
                      </p>
                    </div>
                  </div>

                  <div className="text-green-400 mb-3 blur-sm">
                    {"//"} SPDX-License-Identifier: MIT
                  </div>
                  <div className="mb-3">
                    <span className="text-purple-400">pragma</span>{" "}
                    <span className="text-blue-400">solidity</span>{" "}
                    <span className="text-orange-400">^0.8.0</span>
                    <span className="text-foreground-secondary">;</span>
                  </div>

                  <div className="my-4 border-l-2 border-accent pl-4">
                    <div className="mb-1">
                      <span className="text-purple-400">import</span>{" "}
                      <span className="text-orange-400">
                        &quot;@thirdgen/protect&quot;
                      </span>
                      <span className="text-foreground-secondary">;</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="text-purple-400">contract</span>{" "}
                    <span className="text-blue-400">YourProtocol</span>{" "}
                    <span className="text-purple-400">is</span>{" "}
                    <span className="text-blue-400">ThirdGenProtected</span>{" "}
                    <span className="text-foreground">{"{"}</span>
                  </div>

                  <div className="ml-4 mb-3">
                    <span className="text-purple-400">function</span>{" "}
                    <span className="text-blue-400">criticalOperation</span>
                    <span className="text-foreground">()</span>{" "}
                    <span className="text-purple-400">external</span>{" "}
                    <div className="ml-4 my-2 border-l-2 border-accent pl-4">
                      <span className="text-accent font-bold">
                        onlyThirdGen
                      </span>
                    </div>
                    <span className="text-foreground">{"{"}</span>
                  </div>

                  <div className="ml-8 text-foreground-secondary">
                    <span className="text-green-400">
                      {"//"} Your code here - fully protected
                    </span>
                  </div>

                  <div className="ml-4 mt-2">
                    <span className="text-foreground">{"}"}</span>
                  </div>

                  <div className="mt-2">
                    <span className="text-foreground">{"}"}</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="live"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-[#1a1a1a] border-b border-foreground-secondary/20 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 font-mono text-xs text-foreground-secondary">
                    Gnosis Safe - Add Module
                  </span>
                </div>

                <div className="p-6">
                  <div className="bg-[#1a1a1a] border border-foreground-secondary/10 rounded-lg p-6 space-y-4">
                    <div>
                      <label className="block font-mono text-xs text-foreground-secondary mb-2 uppercase tracking-wider">
                        Module Address
                      </label>
                      <div className="bg-background border border-accent/50 rounded px-4 py-3 font-mono text-sm text-accent">
                        0xThirdGen...SecurityModule
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-foreground-secondary mb-2 uppercase tracking-wider">
                        Configuration
                      </label>
                      <div className="bg-background border border-foreground-secondary/20 rounded px-4 py-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="font-mono text-sm text-foreground">
                            Invariant Monitoring: Active
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="font-mono text-sm text-foreground">
                            Anomaly Detection: Enabled
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="font-mono text-sm text-foreground">
                            Auto-Revert: On
                          </span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-accent hover:bg-accent/90 text-background py-3 rounded font-mono text-sm font-bold transition-colors">
                      Enable ThirdGen Protection
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
