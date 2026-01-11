"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Radar, Shield } from "lucide-react";

const products = [
  {
    icon: GitBranch,
    tag: "[ CI ]",
    name: "Code Review",
    title: "AI Code Review",
    description: "Catches logic errors in PRs.",
    status: "Beta Ready",
    statusColor: "green",
  },
  {
    icon: Radar,
    tag: "[ LIVE ]",
    name: "Mempool Monitor",
    title: "Anomaly Detection",
    description: "Tracks 50% TVL movements.",
    status: "In Development",
    statusColor: "yellow",
  },
  {
    icon: Shield,
    tag: "[ RUNTIME ]",
    name: "Invariant Defense",
    title: "Invariant Firewall",
    description: "The Kill Switch. Reverts hacks instantly.",
    status: "Coming Soon",
    statusColor: "grey",
    comingSoon: true,
  },
];

export const StackSection: React.FC = () => {
  return (
    <section className="py-24 px-6" aria-labelledby="stack-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="stack-heading" className="font-mono text-4xl md:text-5xl font-bold mb-4">
            The Stack
          </h2>
          <p className="text-foreground-secondary text-lg font-mono">
            Multi-layer protection for the modern protocol
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className={`
                    relative h-full
                    bg-black/40 backdrop-blur-sm
                    border rounded-lg
                    transition-all duration-300
                    border-white/10 hover:border-white/30
                    ${product.comingSoon ? "opacity-60" : "opacity-100"}
                    p-8
                  `}
                >
                  <div className="absolute -top-3 right-4 flex items-center gap-2 bg-background border border-foreground-secondary/20 px-3 py-1 rounded font-mono text-xs">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        product.statusColor === "green"
                          ? "bg-green-500"
                          : product.statusColor === "yellow"
                          ? "bg-yellow-500 animate-pulse"
                          : "bg-foreground-secondary/50"
                      }`}
                    />
                    <span className="text-foreground-secondary font-bold">
                      {product.status}
                    </span>
                  </div>

                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-white/5 text-foreground-secondary group-hover:text-foreground transition-colors">
                      <Icon size={24} />
                    </div>

                    <div className="font-mono text-xs text-foreground-secondary mb-2 tracking-wider">
                      {product.tag}
                    </div>

                    <h3 className="font-mono text-sm text-foreground-secondary/70 mb-1">
                      {product.name}
                    </h3>

                    <h4 className="font-mono text-2xl font-bold mb-4 text-foreground">
                      {product.title}
                    </h4>

                    <p className="font-mono text-sm text-foreground-secondary leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
