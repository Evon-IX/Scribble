"use client";

import { Type, ScanText, Gauge, Shuffle, Timer, Monitor } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Type,
    title: "Text Input",
    description:
      "Paste any text directly and let Scribble type it out character by character.",
  },
  {
    icon: ScanText,
    title: "Image to Text (OCR)",
    description:
      "Screenshot text and Scribble will extract and type it automatically.",
  },
  {
    icon: Gauge,
    title: "Adjustable Speed",
    description:
      "Control typing speed with WPM settings or custom delay per character.",
  },
  {
    icon: Shuffle,
    title: "Human-like Mistakes",
    description:
      "Optional realistic typos and corrections to mimic natural typing patterns.",
  },
  {
    icon: Timer,
    title: "Randomized Delays",
    description:
      "Natural timing variations between keystrokes for authentic typing simulation.",
  },
  {
    icon: Monitor,
    title: "Works Anywhere",
    description:
      "Compatible with any text field, browser, or application on your system.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export function Features() {
  return (
    <section id="features" className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_50%)] opacity-5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-accent text-sm font-medium mb-4 tracking-wider uppercase"
          >
            Features
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Powerful typing automation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to automate text input with human-like precision
            and natural timing.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 hover:bg-card/80 transition-all duration-300"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="w-12 h-12 rounded-xl bg-secondary/80 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300"
                >
                  <feature.icon className="w-6 h-6 text-accent" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
