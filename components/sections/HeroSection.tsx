"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { submitToWaitlist } from "@/app/actions/waitlist";
import { track } from "@vercel/analytics";
import AnimatedBackground from "../AnimatedBackground";
import { HolographicDisplay } from "../HolographicDisplay";

interface FormData {
  email: string;
}

export const HeroSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentAnimationState, setCurrentAnimationState] = useState("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        setCurrentAnimationState("phase1"); // SystemSchematic pulse to Scanner, CodeBlock red highlight
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setCurrentAnimationState("phase2"); // SystemSchematic pulse to Block, CodeBlock green highlight
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setCurrentAnimationState("reset"); // Reset for loop
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setCurrentAnimationState("idle"); // Pause before repeating
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };
    sequence();
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const result = await submitToWaitlist(data.email);

      if (result.success) {
        track("Early Access Signup", { email: data.email });

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
        className="relative min-h-screen flex items-center justify-center px-6 py-20 md:py-24 text-center overflow-hidden radial-glow"
        aria-labelledby="hero-heading"
      >
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto w-full relative z-10 min-h-full flex items-center">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center w-full py-8 md:py-0">
            {/* Left: Typography */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left w-full items-center flex flex-col lg:items-start"
            >
              {/* Overline text */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="font-mono text-xs md:text-sm text-accent uppercase tracking-wider">
                  Gen 3 Runtime Defense
                </span>
              </motion.div>

              <h1
                id="hero-heading"
                className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 lg:mb-6 leading-[1.1] md:leading-[1.05]"
              >
                <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  Security.
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent via-accent to-orange-500 bg-clip-text text-transparent">
                  Evolved.
                </span>
              </h1>

              <p className="mb-6 lg:mb-8 font-mono text-sm sm:text-base md:text-base lg:text-lg text-foreground-secondary max-w-xl leading-relaxed px-4 sm:px-0">
                Next-generation runtime protection that adapts, learns, and defends your infrastructure in real-time.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-3 lg:space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full bg-background/50 backdrop-blur-sm border border-foreground-tertiary px-5 py-4 rounded-lg font-mono text-sm text-foreground placeholder:text-foreground-secondary/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all hover:border-foreground-secondary/70"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute -bottom-6 left-0 text-xs text-red-500 font-mono flex items-center gap-1"
                    >
                      <span>⚠</span> {errors.email.message}
                    </motion.p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-background px-6 py-4 rounded-lg font-mono text-sm font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Get Early Access →"
                  )}
                </button>
              </form>

              {/* Trust indicator */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-4 lg:mt-6 text-xs font-mono text-foreground-secondary/60"
              >
                Join 500+ developers in early access
              </motion.p>
            </motion.div>

            {/* Right: Visuals */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center w-full"
            >
              <HolographicDisplay animationState={currentAnimationState} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};