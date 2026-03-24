"use client";
import { motion } from "framer-motion";
import Corner from "@/components/props/Corner";

const CreativeLoader = () => {
  return (
    <div className="relative canvas-container mx-auto bg-card min-h-screen border-l border-r border-border-subtle flex flex-col items-center justify-center overflow-hidden">
      {/* Structural Anchors */}
      <Corner pos="tl" /> <Corner pos="tr" />
      <Corner pos="bl" /> <Corner pos="br" />
      {/* 1. Subtle Background Grid - Minimalist Engineering Vibe */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px]" />
      {/* 2. Central Technical Readout */}
      <div className="relative z-20 flex flex-col items-center gap-6">
        {/* Status Indicator */}
        <div className="flex items-center gap-3">
          <div className="h-1 w-1 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-secondary/40">
            System.Initialize()
          </span>
        </div>

        {/* Minimalist Progress Line */}
        <div className="w-64 h-px bg-border-subtle/30 relative overflow-hidden">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1],
            }}
            className="absolute top-0 h-full w-1/2 bg-linear-to-rfrom-transparent via-indigo-500 to-transparent"
          />
        </div>

        {/* Dynamic Version Counter */}
        <div className="flex gap-8 items-center">
          <span className="text-[9px] font-mono text-secondary/20">
            EST_2026
          </span>
          <span className="text-[9px] font-mono text-secondary/20">
            LOC_REGION_VIII
          </span>
        </div>
      </div>
      {/* 3. The Vertical Scanline - Moves from Top to Bottom */}
      <motion.div
        initial={{ y: "-10vh" }}
        animate={{ y: "110vh" }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-px bg-indigo-500/10 z-10"
      />
    </div>
  );
};

export default CreativeLoader;
