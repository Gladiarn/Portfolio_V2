"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import FlipLoader from "@/components/Loader/FlipLoader";

export default function InitialEntryLoader() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasLoaded");
    if (!hasSeen) {
      setShowLoader(true);
      document.body.style.overflow = "hidden";
      
      const timer = setTimeout(() => {
        setShowLoader(false);
        document.body.style.overflow = "unset";
        sessionStorage.setItem("hasLoaded", "true");
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {showLoader && <FlipLoader key="first-load" onComplete={() => setShowLoader(false)} />}
    </AnimatePresence>
  );
}