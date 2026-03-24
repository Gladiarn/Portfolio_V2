"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CreativeLoader from "./CreativeLoader";

export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 800); // intentional slight delay for effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!isReady ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.4 }}
          >
            <CreativeLoader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}