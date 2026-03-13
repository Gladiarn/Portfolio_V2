"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";
import { PiTelegramLogo, PiGithubLogo } from "react-icons/pi";
import { useTheme } from "next-themes";

const SOCIAL_LINKS = [
  {
    id: 1,
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourname",
    icon: FiLinkedin,
  },
  {
    id: 2,
    name: "GitHub",
    href: "https://github.com/yourname",
    icon: PiGithubLogo,
  },
  {
    id: 3,
    name: "Telegram",
    href: "https://t.me/yourname",
    icon: PiTelegramLogo,
  },
];

const NAVIGATIONS = ["About", "Projects", "Experience"];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // State for Professional Mode
  const [isFormal, setIsFormal] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // --- SKELETON LOADER ---
  if (!mounted) {
    return (
      <nav className="w-full bg-background animate-pulse">
        {/* Top bar skeleton */}
        <div className="bg-card/50 border-b border-border-subtle h-9.25 flex items-center">
          <div className="canvas-container flex justify-end gap-4">
            <div className="h-6 w-24 bg-border-subtle rounded-full" />
            <div className="h-4 w-20 bg-border-subtle rounded" />
          </div>
        </div>
        {/* Bottom bar skeleton */}
        <div className="bg-background border-b border-border-subtle h-16.5 flex items-center">
          <div className="canvas-container flex justify-between w-full">
            <div className="flex gap-8">
              <div className="h-4 w-32 bg-border-subtle rounded" />
              <div className="h-4 w-20 bg-border-subtle rounded" />
            </div>
            <div className="h-6 w-28 bg-border-subtle rounded-full" />
          </div>
        </div>
      </nav>
    );
  }

  const isDark = theme === "dark";

  return (
    <nav className="w-full bg-background">
      {/* socials main container*/}
      <div className="bg-card border-b border-border-subtle flex h-9.25">
        {/* socials inner container */}
        <div className="flex canvas-container items-center justify-end gap-4">
          {/* Theme toggle button */}
          <div
            className="relative flex gap-4 border-border-subtle border px-3 py-1.5 rounded-full items-center overflow-hidden group bg-background cursor-pointer"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {/* slider */}
            <div
              className="absolute h-[80%] w-[46%] bg-foreground rounded-full shadow-md z-0 left-1 transition-transform duration-300 ease-in-out"
              style={{
                transform: isDark ? "translateX(0)" : "translateX(98%)",
              }}
            />
            <p
              className={`relative z-10 text-[11px] font-light translate-y-[0.5px] ${isDark ? "text-background" : "text-text-secondary"}`}
            >
              Dark
            </p>
            <p
              className={`relative z-10 text-[11px] font-light translate-y-[0.5px] ${!isDark ? "text-background" : "text-text-secondary"}`}
            >
              Light
            </p>
          </div>

          <div className="w-px h-4.5 bg-border-subtle"></div>

          <div className="flex gap-3 items-center">
            {/* socials links */}
            {SOCIAL_LINKS.map((link) => (
              <a href={link.href} key={link.id} target="_blank">
                <link.icon
                  size={16}
                  className="text-secondary/75 hover:text-secondary"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* main nav container */}
      <div className="bg-background border-b border-border-subtle h-16.5 flex items-center">
        {/* main nav inner container */}
        <div className="flex canvas-container items-center justify-between">
          <div className="flex justify-between w-full">
            {/* navigation */}
            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center">
                <p className="text-xs font-medium text-foreground/75 hover:text-foreground tracking-wide -translate-y-px">
                  bulilaniannecarl@gmail.com
                </p>
              </div>

              <div className="w-px h-4.5 bg-border-subtle"></div>

              <div className="flex gap-8">
                {NAVIGATIONS.map((nav) => (
                  <Link
                    href={`#${nav}`}
                    key={nav}
                    className="text-foreground/65 font-medium text-[14.25px] tracking-wider hover:text-foreground"
                  >
                    {nav}
                  </Link>
                ))}
              </div>
            </div>

            {/* switch professional mode */}
            <div
              className="relative flex gap-7 border-border-subtle border px-5.25 py-1.75 rounded-full items-center overflow-hidden group bg-card cursor-pointer"
              onClick={() => setIsFormal(!isFormal)}
            >
              {/* slider */}
              <div
                className="absolute h-[80%] w-[48%] bg-foreground rounded-full shadow-md z-0 left-1 transition-transform duration-300 ease-in-out"
                style={{
                  transform: isFormal ? "translateX(95%)" : "translateX(0)",
                }}
              />
              <p
                className={`relative z-10 text-[11px] font-medium translate-y-[0.5px] ${!isFormal ? "text-background" : "text-text-secondary"}`}
              >
                Creative
              </p>
              <p
                className={`relative z-10 text-[11px] font-medium translate-y-[0.5px] tracking-wide ${isFormal ? "text-background" : "text-text-secondary"}`}
              >
                Formal
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
