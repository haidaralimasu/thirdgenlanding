"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const partners = [
  "Aave Fork",
  "Uniswap Fork",
  "Lending Protocol",
  "DEX Protocol",
  "Bridge Protocol",
];

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-[#0d0d0d] border border-accent/30 rounded-lg p-8 md:p-12 relative">
            <div className="absolute -top-4 left-8 bg-accent/20 p-3 rounded">
              <Quote className="text-accent" size={24} />
            </div>

            <blockquote className="font-mono text-xl md:text-2xl text-foreground leading-relaxed mb-6">
              &quot;ThirdGen stopped a{" "}
              <span className="text-accent font-bold">$5M flash loan attack</span>{" "}
              on our treasury before it mined.&quot;
            </blockquote>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="font-mono font-bold text-accent">CT</span>
              </div>
              <div>
                <div className="font-mono text-sm font-bold text-foreground">
                  CTO
                </div>
                <div className="font-mono text-xs text-foreground-secondary">
                  Leading DeFi Protocol
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="font-mono text-sm text-foreground-secondary uppercase tracking-wider">
              Trusted By
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-[#0d0d0d] border border-foreground-secondary/20 hover:border-accent/50 rounded-lg p-6 transition-all duration-300 flex items-center justify-center h-24">
                  <span className="font-mono text-sm text-foreground-secondary group-hover:text-accent transition-colors text-center">
                    {partner}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
