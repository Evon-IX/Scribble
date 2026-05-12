"use client";

import { Button } from "@/components/ui/button";
import { Download, Play, Sparkles } from "lucide-react";
import { TypingDemo } from "./typing-demo";
import { SupportDialog } from "./support-dialog";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/15 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-accent font-medium">
            Typing Automation Bot
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">Scribble</span>
          <br />
          <span className="text-gradient">Types For You</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
        >
          Paste text or screenshot it, and let Scribble type it out for you.
          Adjustable speed, human-like mistakes, and OCR support built in.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <SupportDialog>
            <Button
              size="lg"
              className="h-12 px-8 text-base font-medium glow-accent-sm hover:glow-accent transition-shadow duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download App
            </Button>
          </SupportDialog>
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-8 text-base font-medium hover:bg-secondary/80 transition-all duration-300"
          >
            <Play className="mr-2 h-4 w-4" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Typing Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <TypingDemo />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-muted-foreground"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
