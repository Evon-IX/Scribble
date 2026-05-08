"use client";

import useSWR from "swr";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useState } from "react";

interface AppStats {
  total_words_typed: number;
  active_users: number;
  updated_at: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (latest >= 1000000) {
      return (latest / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (latest >= 1000) {
      return (latest / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return Math.round(latest).toString();
  });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const unsubscribe = rounded.on("change", setDisplayValue);
    const controls = animate(count, value, {
      duration: 2,
      ease: [0.21, 0.47, 0.32, 0.98],
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, count, rounded]);

  return <span>{displayValue}{suffix}</span>;
}

export function Stats() {
  const { data, error, isLoading } = useSWR<AppStats>("/api/stats", fetcher, {
    refreshInterval: 30000,
  });

  const stats = [
    {
      value: data?.total_words_typed || 0,
      label: "words typed",
      description: "Total characters automated",
      isAnimated: true,
    },
    {
      value: data?.active_users || 0,
      label: "downloads",
      description: "People using Scribble",
      isAnimated: true,
    },
    {
      value: "Free",
      label: "forever",
      description: "No hidden costs",
      isAnimated: false,
    },
    {
      value: "100%",
      label: "open source",
      description: "MIT licensed",
      isAnimated: false,
    },
  ];

  return (
    <section id="stats" className="py-24 px-4 relative overflow-hidden">
      {/* Gradient line decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent)_0%,transparent_70%)] opacity-5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300"
              >
                {isLoading ? (
                  <span className="inline-block w-16 h-12 bg-secondary/50 rounded animate-pulse" />
                ) : stat.isAnimated && typeof stat.value === "number" ? (
                  <AnimatedCounter value={stat.value} />
                ) : (
                  stat.value
                )}
              </motion.div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-xs text-muted-foreground mt-8"
          >
            Stats temporarily unavailable
          </motion.p>
        )}
      </div>
    </section>
  );
}
