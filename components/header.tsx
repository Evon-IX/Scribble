"use client";

import { Button } from "@/components/ui/button";
import { PenTool, Download } from "lucide-react";
import Link from "next/link";
import { SupportDialog } from "./support-dialog";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -5 }}
            transition={{ duration: 0.2 }}
            className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center glow-accent-sm"
          >
            <PenTool className="w-4 h-4 text-accent-foreground" />
          </motion.div>
          <span className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
            Scribble
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Stats", "FAQ"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <SupportDialog>
            <Button size="sm" className="glow-accent-sm hover:glow-accent transition-shadow duration-300">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </SupportDialog>
        </motion.div>
      </div>
    </motion.header>
  );
}
