"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const demoText =
  "Scribble automatically types out your text with natural timing and human-like variations. Just paste or screenshot, and watch it work...";

export function TypingDemo() {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < demoText.length) {
        setDisplayedText(demoText.slice(0, index + 1));
        index++;
      } else {
        setTimeout(() => {
          index = 0;
          setDisplayedText("");
        }, 2000);
      }
    }, 35);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Glow effect behind the card */}
      <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-2xl transform scale-95 opacity-50" />
      
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="relative rounded-2xl border border-border/80 bg-card/90 backdrop-blur-xl p-6 shadow-2xl"
      >
        {/* Window controls */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer"
          />
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer"
          />
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer"
          />
          <span className="ml-4 text-sm text-muted-foreground font-mono">
            scribble-editor.txt
          </span>
        </div>

        {/* Typing area */}
        <div className="min-h-[140px] font-mono text-left text-sm md:text-base">
          <span className="text-foreground leading-relaxed">{displayedText}</span>
          <motion.span
            animate={{ opacity: cursorVisible ? 1 : 0 }}
            className="inline-block w-0.5 h-5 bg-accent ml-0.5 align-middle"
          />
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Bot Active
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">{displayedText.length} chars</span>
          </div>
          <span className="font-mono">~45 WPM</span>
        </div>
      </motion.div>
    </div>
  );
}
