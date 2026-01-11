"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Radar, Shield, ArrowRight, Layers } from "lucide-react";

const products = [
  {
    id: "01",
    name: "CI Review",
    tagline: "Prevention at Source",
    description: "Automated smart contract analysis directly in your pull requests. Catches critical logic errors before they reach production.",
    status: "Beta Ready",
    statusColor: "bg-green-500",
    statusTextColor: "text-green-400",
    statusBorderColor: "border-green-500/30",
    statusBgColor: "bg-green-500/10",
    icon: GitBranch,
    gradient: "from-green-500/20 to-transparent",
    features: ["Logic Error Detection", "PR Integration", "Instant Feedback"],
  },
  {
    id: "02",
    name: "Mempool",
    tagline: "Real-time Threat Detection",
    description: "Monitor blockchain mempool for suspicious large-value transactions. Get instant alerts on significant TVL movements.",
    status: "Dev",
    statusColor: "bg-yellow-500",
    statusTextColor: "text-yellow-400",
    statusBorderColor: "border-yellow-500/30",
    statusBgColor: "bg-yellow-500/10",
    icon: Radar,
    gradient: "from-yellow-500/20 to-transparent",
    features: ["TVL Monitoring", "Anomaly Detection", "Real-time Alerts"],
  },
  {
    id: "03",
    name: "Runtime",
    tagline: "The Kill Switch",
    description: "Autonomous runtime protection that instantly detects and reverts malicious transactions. Your last line of defense.",
    status: "Coming Soon",
    statusColor: "bg-purple-500",
    statusTextColor: "text-purple-400",
    statusBorderColor: "border-purple-500/30",
    statusBgColor: "bg-purple-500/10",
    icon: Shield,
    gradient: "from-purple-500/20 to-transparent",
    features: ["Auto Revert", "Instant Response", "Zero Downtime"],
  },
];

export const StackSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden" aria-labelledby="stack-heading">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

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
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-accent/30 bg-accent/5"
          >
            <Layers className="w-4 h-4 text-accent" />
            <span className="font-mono text-xs md:text-sm text-accent uppercase tracking-wider">
              Defense Layers
            </span>
          </motion.div>

          <h2 id="stack-heading" className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            The Stack
          </h2>
          <p className="text-foreground-secondary font-mono text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Multi-layer protection for the modern protocol
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
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
                <div className="relative h-full bg-gradient-to-br from-background/60 to-background/30 backdrop-blur-sm border border-foreground-tertiary/40 rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02]">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  {/* Large background icon */}
                  <Icon className="absolute -right-8 -bottom-8 w-40 h-40 md:w-48 md:h-48 text-foreground-tertiary/5 group-hover:text-accent/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />

                  {/* Content */}
                  <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300"
                      >
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                      </motion.div>

                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${product.statusBgColor} border ${product.statusBorderColor}`}>
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`w-1.5 h-1.5 rounded-full ${product.statusColor}`}
                        />
                        <span className={`font-mono text-xs ${product.statusTextColor} font-semibold uppercase tracking-wide`}>
                          {product.status}
                        </span>
                      </div>
                    </div>

                    {/* Number badge */}
                    <div className="mb-4">
                      <span className="font-mono text-5xl md:text-6xl font-bold text-foreground-tertiary/20 group-hover:text-accent/20 transition-colors duration-300">
                        {product.id}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div className="mb-4">
                      <h3 className="font-mono text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="font-mono text-xs md:text-sm text-accent uppercase tracking-widest">
                        {product.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-mono text-sm md:text-base text-foreground-secondary leading-relaxed mb-6 flex-grow">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.15 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-xs md:text-sm font-mono text-foreground-secondary/80"
                        >
                          <div className="w-1 h-1 rounded-full bg-accent" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                      className="flex items-center gap-2 font-mono text-sm text-accent group-hover:gap-4 transition-all duration-300 cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Hover border glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-accent/30 to-transparent blur-sm"
                         style={{
                           animation: 'shimmer 3s linear infinite',
                           backgroundSize: '200% 100%'
                         }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-background/60 backdrop-blur-sm border border-foreground-tertiary/30">
            <Shield className="w-5 h-5 text-accent" />
            <p className="font-mono text-sm text-foreground-secondary">
              <span className="text-accent font-semibold">3 layers</span> of autonomous protection
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
