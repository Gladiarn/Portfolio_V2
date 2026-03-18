"use client";

import { motion } from "framer-motion";
import HeroSection from "./Parts/HeroSection";
import InformationSection from "./Parts/InformationSection";
import Corner from "@/components/props/Corner";

const Personal = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-background min-h-screen relative canvas-container"
    >
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />
      {/* Removing flex gaps here ensures sections touch. 
          Each section handles its own internal padding.
      */}
      <div className="w-full flex flex-col">
        <HeroSection />

        <div
          className={`border-l border-r border-border-subtle bg-card`}
        >
          <InformationSection />
        </div>

        {/* Next sections will follow the same pattern */}
      </div>
    </motion.main>
  );
};

export default Personal;
