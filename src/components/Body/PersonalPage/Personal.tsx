"use client";

import { motion } from "framer-motion";
import HeroSection from "./Parts/HeroSection";

const Personal = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-background"
    >
      <div className="w-full">
        <HeroSection />

        {/* This is where you would stack future sections.
            Example: <WorksSection /> or <AboutSection /> 
        */}
      </div>
    </motion.main>
  );
};

export default Personal;
