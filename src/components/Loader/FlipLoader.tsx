"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const FlipLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => prev + 1);
    }, 800);

    if (phase > 3) {
      clearInterval(timer);
      onComplete();
    }

    return () => clearInterval(timer);
  }, [phase, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -20,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      style={{ backgroundColor: "#FFFFFF", color: "#111111" }}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center antialiased"
    >
      <div className="relative flex items-center justify-center gap-4">
        {/* Letter I Container */}
        <div className="relative w-20 h-28 border border-black/5 bg-[#F9F9F9] flex items-center justify-center overflow-hidden shadow-sm">
          <AnimatePresence>
            {phase >= 1 && (
              <motion.span
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl font-black italic tracking-tighter"
              >
                I
              </motion.span>
            )}
          </AnimatePresence>
          {/* Scanning Line Effect */}
          <motion.div
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-0.5 bg-indigo-500/30 z-10 shadow-[0_0_10px_#6366f1]"
          />
        </div>

        {/* Letter C Container */}
        <div className="relative w-20 h-28 border border-black/5 bg-[#F9F9F9] flex items-center justify-center overflow-hidden shadow-sm">
          <AnimatePresence>
            {phase >= 2 && (
              <motion.span
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl font-black italic tracking-tighter text-indigo-500"
              >
                C
              </motion.span>
            )}
          </AnimatePresence>
          {/* Scanning Line Effect */}
          <motion.div
            animate={{ top: ["-10%", "110%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: 0.2,
            }}
            className="absolute left-0 w-full h-0.5 bg-black/10 z-10"
          />
        </div>

        {/* Technical Coordinate Overlay (Top Left of Box) */}
        <div className="absolute -top-6 -left-2 text-[8px] font-mono text-black/20 uppercase tracking-[0.2em]">
          Data_Stream // 01
        </div>
      </div>

      {/* Progress Footer */}
      <div className="mt-12 flex flex-col items-center gap-3">
        <motion.div className="h-0.5 bg-black/5 w-40 relative overflow-hidden">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "0%" }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
            className="absolute top-0 h-full w-full bg-indigo-500"
          />
        </motion.div>
        <span className="text-black/40 font-bold text-[9px] tracking-[0.5em] uppercase">
          Identity_Verified
        </span>
      </div>
    </motion.div>
  );
};

export default FlipLoader;
