"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Clock, Ban } from "lucide-react";
import { BarChart } from "@/components/charts/BarChart";
import { PingTimeline } from "@/components/charts/PingTimeline";
import { GlitchText } from "@/components/GlitchText";
import { Card } from "@/components/ui/Card";

const problems = [
  {
    icon: ArrowUp,
    title: "$2.6B LOST",
    description: "The cost of reactive security.",
    chart: <BarChart />,
    value: "2024",
  },
  {
    icon: Ban,
    title: "80% FAILURE",
    description: "Audits missed the logical errors.",
    chart: <GlitchText text="80%" />,
    value: "AUDIT COVERAGE",
  },
  {
    icon: Clock,
    title: "1 BLOCK",
    description: "Time to attack.",
    chart: <PingTimeline />,
    value: "ATTACK TIME",
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-32 px-6" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="problem-heading" className="font-mono text-3xl md:text-4xl font-bold mb-3 text-foreground">
            The Problem
          </h2>
          <p className="text-foreground-secondary font-mono text-sm">
            Current security paradigms are failing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="p-6 h-full flex flex-col justify-between">
                <div className="flex items-start gap-4 mb-4">
                  {problem.icon && <problem.icon className="w-5 h-5 text-zinc-500 flex-shrink-0" />}
                  <div>
                    <h3 className="font-mono text-xl font-bold text-white mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-foreground-secondary font-mono text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
                {problem.chart && <div className="mt-4">{problem.chart}</div>}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
