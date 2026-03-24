"use client";

import { useModeStore } from "@/hooks/useModeStore";
import { useEffect, useState, useTransition, Suspense } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

// Lazy load with SSR disabled
const Formal = dynamic(() => import("@/components/Body/FormalPage/Formal"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-background animate-pulse" />
});

const Personal = dynamic(() => import("@/components/Body/PersonalPage/Personal"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-background animate-pulse" />
});

export default function LandingPage() {
  const { isFormal } = useModeStore();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isHomePage) {
      setMounted(true);
    } else {
      setMounted(false);
    }
  }, [isHomePage]);

  if (!isHomePage) {
    return null;
  }

  return (
    <div className="w-full min-h-screen">
      {mounted ? (
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          {isFormal ? <Formal /> : <Personal />}
        </Suspense>
      ) : (
        <div className="min-h-screen bg-background" />
      )}
    </div>
  );
}