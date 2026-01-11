"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const IntegrationSection: React.FC = () => {
  return (
    <section className="py-32 px-6" aria-labelledby="integration-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="integration-heading" className="font-mono text-4xl md:text-5xl font-bold mb-4">
            Integration
          </h2>
          <p className="text-foreground-secondary text-lg font-mono">
            Seamlessly connect your protocol
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 font-mono text-white text-lg md:text-xl">
          <div className="flex items-center gap-4">
            <div className="p-4 border border-white/10 rounded-lg bg-[#0A0A0A]/50 backdrop-blur-md">
              Your Protocol
            </div>
          </div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 lg:w-20 bg-accent rounded-full hidden lg:block"
            style={{ boxShadow: "0 0 10px rgba(255, 135, 0, 0.5)" }}
          />
          <ArrowRight className="w-8 h-8 text-accent lg:hidden" />

          <div className="flex items-center gap-4">
            <div className="p-4 border border-white/10 rounded-lg bg-[#0A0A0A]/50 backdrop-blur-md">
              ThirdGen Node
            </div>
          </div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 lg:w-20 bg-accent rounded-full hidden lg:block"
            style={{ boxShadow: "0 0 10px rgba(255, 135, 0, 0.5)" }}
          />
          <ArrowRight className="w-8 h-8 text-accent lg:hidden" />

          <div className="flex items-center gap-4">
            <div className="p-4 border border-white/10 rounded-lg bg-[#0A0A0A]/50 backdrop-blur-md">
              Ethereum Mainnet
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};