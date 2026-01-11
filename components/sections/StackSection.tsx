"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Radar, Shield } from "lucide-react";
import { Card } from "@/components/ui/Card";

const products = [
  {
    id: "01",
    name: "CI Review",
    description: "Catches logic errors in PRs.",
    status: "Beta Ready",
    statusColor: "bg-green-500",
    icon: GitBranch,
  },
  {
    id: "02",
    name: "Mempool",
    description: "Tracks 50% TVL movements.",
    status: "Dev",
    statusColor: "bg-yellow-500",
    icon: Radar,
  },
  {
    id: "03",
    name: "Runtime",
    description: "The Kill Switch. Reverts hacks instantly.",
    status: "Coming Soon",
    statusColor: "bg-foreground-secondary",
    icon: Shield,
  },
];

export const StackSection: React.FC = () => {
  return (
    <section className="py-32 px-6" aria-labelledby="stack-heading">
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
                <Card className="p-6 relative overflow-hidden h-full">
                  <Icon className="absolute -right-10 -bottom-10 w-48 h-48 text-zinc-500 opacity-10" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-sm text-foreground-secondary">
                        [{product.id}]
                      </span>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${product.statusColor}`} />
                        <span className="font-mono text-sm text-foreground-secondary">
                          {product.status}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-mono text-xl font-bold text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="font-mono text-sm text-foreground-secondary leading-relaxed flex-grow">
                      {product.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
