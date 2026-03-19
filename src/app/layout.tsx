"use client";

import { Geist, Geist_Mono, Syne } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import FlipLoader from "@/components/Loader/FlipLoader";
import PageSkeleton from "@/components/Loader/PageSkeleton";
import Footer from "@/components/Navbar/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";

const syne = Syne({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasSeen = sessionStorage.getItem("hasLoaded");

    if (hasSeen) {
      // REFRESH STATE: Skip cinematic loader, show quick skeleton
      setIsFirstLoad(false);
      const timer = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "unset";
      }, 600); // Short pulse for refresh
      return () => clearTimeout(timer);
    } else {
      // FIRST LOAD STATE: Cinematic entrance
      setIsFirstLoad(true);
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "unset";
        sessionStorage.setItem("hasLoaded", "true");
      }, 3200); // Long cinematic flip
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {mounted ? (
            <>
              {/* LOADER LAYER */}
              <AnimatePresence mode="wait">
                {isLoading &&
                  (isFirstLoad ? (
                    <FlipLoader
                      key="loader"
                      onComplete={() => setIsLoading(false)}
                    />
                  ) : (
                    <PageSkeleton key="skeleton" />
                  ))}
              </AnimatePresence>

              {/* CONTENT LAYER */}
              <motion.div
                className="w-full flex flex-col"
                style={{ visibility: isLoading ? "hidden" : "visible" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <Navbar />
                <main className="grow">{children}</main>
                <Footer />
              </motion.div>
            </>
          ) : (
            /* SERVER-SIDE INITIAL PAINT (Static tags only) */
            <div className="w-full flex flex-col invisible">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
