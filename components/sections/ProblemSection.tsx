"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const alerts = [
  {
    title: "$2.6 Billion Lost",
    year: "2024",
    subtext: "The cost of reactive security.",
    color: "red",
  },
  {
    title: "80% Audit Failure",
    year: "",
    subtext: "Audits missed the logical errors.",
    color: "red",
  },
  {
    title: "Current Status",
    year: "VULNERABLE",
    subtext: "Your protocol needs active defense.",
    color: "red",
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-[#0a0a0a]" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="problem-heading" className="font-mono text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Why We&apos;re Building This
          </h2>
          <p className="text-foreground-secondary font-mono text-sm">
            The current state of Web3 security
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {alerts.map((alert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0d0d0d] border-2 border-red-500/30 rounded-lg p-6 hover:border-red-500/50 transition-colors h-full flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="text-red-500 flex-shrink-0" size={24} />
                  <div className="flex-1">
                    <h3 className="font-mono text-xl font-bold text-foreground mb-2">
                      {alert.title}
                    </h3>
                    {alert.year && (
                      <div className="inline-block bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-mono text-xs font-bold">
                        {alert.year}
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-foreground-secondary font-mono text-sm leading-relaxed mt-auto">
                  {alert.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
