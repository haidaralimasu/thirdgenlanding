"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Eye, Shield } from "lucide-react";

const evolutionStages = [
  {
    title: "Gen 1",
    subtitle: "Audits",
    icon: FileText,
    opacity: "opacity-50",
    description: "Post-deployment code review",
  },
  {
    title: "Gen 2",
    subtitle: "Monitoring",
    icon: Eye,
    opacity: "opacity-50",
    description: "Reactive threat detection",
  },
  {
    title: "ThirdGen Tech",
    subtitle: "Runtime",
    icon: Shield,
    opacity: "opacity-100",
    glow: true,
    description: "Active defense before finalization",
  },
];

export const EvolutionSection: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            The Evolution
          </h2>
          <p className="text-foreground-secondary text-lg font-mono">
            Three generations of security. One inevitable future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {evolutionStages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`glass p-8 text-center transition-all duration-300 ${
                  stage.glow ? "border-accent/50 glow-accent" : ""
                } ${stage.opacity}`}
              >
                <div className="mb-6 flex justify-center">
                  <div
                    className={`p-4 rounded-lg ${
                      stage.glow
                        ? "bg-accent/10 text-accent"
                        : "bg-foreground-secondary/10 text-foreground-secondary"
                    }`}
                  >
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="font-mono text-2xl font-bold mb-2">
                  {stage.title}
                </h3>
                <p className="text-foreground-secondary font-mono text-sm mb-4">
                  {stage.subtitle}
                </p>
                <p className="text-foreground-secondary/70 text-sm">
                  {stage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
