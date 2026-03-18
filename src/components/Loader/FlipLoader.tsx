"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FlipLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  // 1. SCROLL LOCK LOGIC
  useEffect(() => {
    // Prevent scrolling while loader is active
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    return () => {
      // Restore scrolling when loader is removed
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    };
  }, []);

  // 2. PHASE TRANSITION LOGIC
  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => prev + 1);
    }, 750);

    if (phase > 4) {
      clearInterval(timer);
      setTimeout(onComplete, 400);
    }

    return () => clearInterval(timer);
  }, [phase, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[9999] h-screen w-screen flex flex-col items-center justify-center bg-background antialiased overflow-hidden touch-none select-none"
    >
      {/* 1. Subtle Radial Glow */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at 50% 50%, rgba(99, 102, 241, 0.04), transparent 40%)`,
        }}
      />

      {/* 2. Grid Overlay (Matches Hero Section) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 3. Corner Blueprint Label */}
      <div className="absolute top-12 left-12 flex flex-col gap-1">
        <span className="text-[10px] font-black text-indigo-500 tracking-[0.3em] uppercase">
          Boot_Sequence
        </span>
        <span className="text-[8px] font-mono text-foreground/20 tracking-widest uppercase italic">
          Ianne_Carl // v3.0
        </span>
      </div>

      <div className="relative flex flex-col items-center z-10">
        {/* 4. The Monogram */}
        <div className="flex items-baseline gap-1">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 10 }}
            className="text-8xl font-black italic tracking-tighter text-foreground"
          >
            I
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 10 }}
            className="text-8xl font-black italic tracking-tighter text-indigo-500"
          >
            C
          </motion.span>
          {/* Terminal Block Cursor */}
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-4 h-12 bg-indigo-500/40 ml-2 self-center"
          />
        </div>

        {/* 5. Progress Indicators */}
        <div className="mt-10 flex flex-col items-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: phase >= 3 ? 140 : 0 }}
            className="h-px bg-indigo-500/20 mb-4"
          />
          <div className="flex flex-col gap-2 items-center">
            <span className="text-[9px] font-mono font-bold tracking-[0.4em] text-foreground/30 uppercase">
              {phase >= 4 ? "Ready" : "Loading_Core"}
            </span>
            {/* Discrete Loading Dots */}
            <div className="flex gap-1.5 justify-center h-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: phase > 0 ? [1, 1.5, 1] : 1,
                    backgroundColor: phase > i ? "#6366f1" : "rgba(120, 120, 120, 0.1)",
                  }}
                  transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                  className="w-1 h-1 rounded-full transition-colors duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 6. Footer System Data */}
      <div className="absolute bottom-12 w-full px-12 flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <span className="text-[8px] font-mono text-foreground/10 uppercase">
            Identity_Key
          </span>
          <span className="text-[9px] font-bold text-foreground/40 uppercase tracking-widest">
            Fullstack // Implementation
          </span>
        </div>
        <div className="font-mono text-[10px] text-indigo-500/60 font-bold tabular-nums">
          0{phase}.00%_SYS
        </div>
      </div>
    </motion.div>
  );
};

export default FlipLoader;