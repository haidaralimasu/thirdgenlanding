"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { submitToWaitlist } from "@/app/actions/waitlist";
import { track } from "@vercel/analytics";

interface FormData {
  email: string;
}

const terminalLines = [
  { text: "> Initializing Invariant Engine...", status: "OK", delay: 0 },
  { text: "> Connecting to Mempool...", status: "PENDING", delay: 1 },
  { text: "> Loading Security Protocols...", status: "OK", delay: 2 },
  { text: "> System Status:", status: "LOADING", delay: 3 },
];

export const HeroSection: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) =>
        prev < terminalLines.length ? prev + 1 : prev
      );
    }, 800);
    return () => clearInterval(timer);
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
        className="min-h-screen flex items-center justify-center px-6 pt-20"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Typography */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                id="hero-heading"
                className="font-mono text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
              >
                Security Is <span className="text-accent">Evolving.</span>
              </h1>

              <div className="space-y-3 mb-8 font-mono text-lg md:text-xl text-foreground-secondary">
                <p>Gen 1 was Audits.</p>
                <p>Gen 2 was Monitoring.</p>
                <p className="text-foreground text-2xl font-bold flex items-center gap-2">
                  <span className="text-accent">Gen 3 is Loading</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-accent"
                  >
                    ...
                  </motion.span>
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
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
                    className="w-full bg-[#1a1a1a] border border-foreground-secondary/20 rounded px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground-secondary/50 focus:border-accent focus:outline-none transition-colors"
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

            {/* Right: Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#0d0d0d] border border-foreground-secondary/20 rounded-lg overflow-hidden"
            >
              <div className="bg-[#1a1a1a] border-b border-foreground-secondary/20 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 font-mono text-xs text-foreground-secondary">
                  system.terminal
                </span>
              </div>

              <div className="p-6 font-mono text-sm leading-relaxed space-y-2 min-h-[300px]">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: index < visibleLines ? 1 : 0,
                      x: index < visibleLines ? 0 : -10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-foreground-secondary">
                      {line.text}
                    </span>
                    {index < visibleLines && (
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded ${
                          line.status === "OK"
                            ? "bg-green-500/20 text-green-400"
                            : line.status === "PENDING"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-accent/20 text-accent"
                        }`}
                      >
                        [{line.status}]
                      </span>
                    )}
                  </motion.div>
                ))}

                {visibleLines >= terminalLines.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 pt-4 border-t border-foreground-secondary/20"
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-accent"
                      />
                      <span className="text-accent font-bold">LOADING...</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
