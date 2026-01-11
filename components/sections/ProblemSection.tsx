"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingDown, ShieldAlert, Zap } from "lucide-react";
import { BarChart } from "@/components/charts/BarChart";
import { PingTimeline } from "@/components/charts/PingTimeline";
import { GlitchText } from "@/components/GlitchText";

const problems = [
  {
    icon: TrendingDown,
    metric: "$2.6B",
    label: "LOST IN 2024",
    description: "The devastating cost of reactive security approaches",
    chart: <BarChart />,
    color: "red",
  },
  {
    icon: ShieldAlert,
    metric: "80%",
    label: "AUDIT FAILURES",
    description: "Traditional audits consistently miss critical logical errors",
    chart: <GlitchText text="80%" />,
    color: "orange",
  },
  {
    icon: Zap,
    metric: "1 BLOCK",
    label: "ATTACK WINDOW",
    description: "The average time attackers need to exploit vulnerabilities",
    chart: <PingTimeline />,
    color: "yellow",
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden" aria-labelledby="problem-heading">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,135,0,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="font-mono text-xs md:text-sm text-red-400 uppercase tracking-wider">
              Critical Alert
            </span>
          </motion.div>

          <h2
            id="problem-heading"
            className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground"
          >
            The Problem
          </h2>
          <p className="text-foreground-secondary font-mono text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Current security paradigms are failing.{" "}
            <span className="text-red-400">The numbers don't lie.</span>
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-b from-background/40 to-background/20 backdrop-blur-sm border border-foreground-tertiary/50 rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                    className="mb-6 inline-flex p-3 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors duration-300"
                  >
                    <problem.icon className="w-6 h-6 text-accent" />
                  </motion.div>

                  {/* Metric */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    className="mb-2"
                  >
                    <h3 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                      {problem.metric}
                    </h3>
                  </motion.div>

                  {/* Label */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    <p className="font-mono text-xs md:text-sm text-accent uppercase tracking-widest font-semibold">
                      {problem.label}
                    </p>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-foreground-secondary font-mono text-sm md:text-base leading-relaxed mb-6"
                  >
                    {problem.description}
                  </motion.p>

                  {/* Chart */}
                  {problem.chart && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                      viewport={{ once: true }}
                      className="mt-auto pt-4 border-t border-foreground-tertiary/30"
                    >
                      {problem.chart}
                    </motion.div>
                  )}
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-[shimmer_2s_linear_infinite]"
                       style={{ backgroundSize: '200% 100%' }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="font-mono text-sm md:text-base text-foreground-secondary/80">
            It's time for a{" "}
            <span className="text-accent font-semibold">new paradigm</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
