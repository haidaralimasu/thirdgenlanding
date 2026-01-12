"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { submitToWaitlist } from "@/app/actions/waitlist";
import { track } from "@vercel/analytics";
import { Mail, ArrowRight, Shield, Users, Sparkles, Check } from "lucide-react";

interface FormData {
  email: string;
}

const benefits = [
  { icon: Shield, text: "Priority security features" },
  { icon: Users, text: "Exclusive community access" },
  { icon: Sparkles, text: "Beta testing opportunities" },
];

export const WaitlistSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const result = await submitToWaitlist(data.email);

      if (result.success) {
        track("Sign Up", { email: data.email });

        toast.success(result.message, {
          style: {
            background: "#050505",
            color: "#EDEDED",
            border: "1px solid #FF8700",
          },
          iconTheme: {
            primary: "#FF8700",
            secondary: "#050505",
          },
        });

        reset();
      }
    } catch {
      toast.error("Something went wrong. Try again.", {
        style: {
          background: "#050505",
          color: "#EDEDED",
          border: "1px solid #ef4444",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <section
        id="waitlist"
        className="relative py-24 md:py-32 px-6 overflow-hidden border-t border-foreground-tertiary/30"
        aria-labelledby="waitlist-heading"
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-background to-background pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-accent/30 bg-accent/5"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span className="font-mono text-xs md:text-sm text-accent uppercase tracking-wider">
                Join the Waitlist
              </span>
            </motion.div>

            <h2
              id="waitlist-heading"
              className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            >
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Ready to Evolve
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-accent to-orange-500 bg-clip-text text-transparent">
                Your Security?
              </span>
            </h2>
            <p className="text-foreground-secondary font-mono text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Be among the first to experience next-generation runtime
              protection
            </p>
          </motion.div>

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-accent/30 via-accent/10 to-accent/30 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-foreground-tertiary/40 rounded-2xl p-6 md:p-10">
              {/* Benefits grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-background/40 border border-foreground-tertiary/30 group/benefit hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 group-hover/benefit:bg-accent/20 transition-colors">
                      <benefit.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-mono text-xs md:text-sm text-foreground-secondary group-hover/benefit:text-foreground transition-colors">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="relative group/input">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`
                      w-full bg-background/60 border rounded-xl pl-12 pr-4 py-4
                      font-mono text-sm md:text-base text-foreground
                      placeholder:text-foreground-secondary/50
                      focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300
                      ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : isFocused
                          ? "border-accent"
                          : "border-foreground-tertiary/50"
                      }
                      group-hover/input:border-foreground-tertiary
                    `}
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="mt-2 text-xs text-red-500 font-mono flex items-center gap-1.5 ml-1"
                      >
                        <span>⚠</span> {errors.email.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-accent hover:bg-accent/90 text-background px-6 py-4 rounded-xl font-mono text-sm md:text-base font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-accent/20 flex items-center justify-center gap-2 group/btn"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Joining Waitlist...</span>
                    </>
                  ) : (
                    <>
                      <span>Secure Your Spot</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </motion.form>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-foreground-tertiary/30"
              >
                <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-foreground-secondary">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>No spam, unsubscribe anytime</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-foreground-secondary">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>500+ developers already joined</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-foreground-tertiary">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="font-mono text-sm text-white">ThirdGen © 2026</p>
          <div className="flex gap-4 font-mono text-sm text-foreground-secondary">
            <a
              href="https://twitter.com/thirdgentech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://github.com/thirdgentech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
