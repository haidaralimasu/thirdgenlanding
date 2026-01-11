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
        className="relative min-h-screen flex items-center justify-center px-6 py-32 text-center overflow-hidden radial-glow"
        aria-labelledby="hero-heading"
      >
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
            {/* Left: Typography */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left w-full items-center flex flex-col"
            >
              <h1
                id="hero-heading"
                className="font-mono text-7xl md:text-8xl lg:text-9xl font-bold mb-4 leading-[1.1] text-white"
              >
                Security.
                <br />
                Evolved.
              </h1>

              <p className="mb-8 font-mono text-lg md:text-xl text-foreground-secondary">
                Gen 3 Runtime Defense. Loading...
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-full max-w-sm">
                <div>
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
                    className="w-full bg-transparent border-b border-foreground-tertiary px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground-secondary/50 focus:border-accent focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 font-mono">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-background px-6 py-3 rounded font-mono text-sm font-bold transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Get Early Access"}
                </button>
              </form>
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