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
      <section id="waitlist" className="py-24 px-6 border-t border-foreground-secondary/10" aria-labelledby="waitlist-heading">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 id="waitlist-heading" className="font-mono text-3xl md:text-5xl font-bold mb-4">
              Don&apos;t Get Hacked While You Wait
            </h2>
            <p className="text-foreground-secondary font-mono text-sm md:text-base">
              Join the waitlist for early access
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
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
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`
                  w-full bg-[#1a1a1a] border rounded px-4 py-3
                  font-mono text-sm text-foreground
                  placeholder:text-foreground-secondary/50
                  focus:outline-none transition-colors
                  ${
                    isFocused || errors.email
                      ? "border-accent"
                      : "border-foreground-secondary/20"
                  }
                `}
              />
              {errors.email && (
                <p className="mt-2 text-xs text-red-500 font-mono">
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/90 text-background px-6 py-3 rounded font-mono text-sm font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Joining..." : "Request Access"}
            </button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-foreground-secondary/50 text-xs font-mono mt-6"
          >
            We respect your privacy. No spam, ever.
          </motion.p>
        </div>
      </section>
    </>
  );
};
