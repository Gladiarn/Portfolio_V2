"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";
import { PiTelegramLogo, PiGithubLogo } from "react-icons/pi";
import { useTheme } from "next-themes";
import Slider from "./Slider";
import { useModeStore } from "@/hooks/useModeStore";
import { TbHexagonLetterG } from "react-icons/tb";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { isFormal, toggleMode } = useModeStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  // --- SKELETON LOADER ---
  if (!mounted) {
    return (
      <nav className="w-full bg-background animate-pulse">
        <div className="bg-card/50 border-b border-border-subtle h-9.25 flex items-center">
          <div className="canvas-container flex justify-end gap-4">
            <div className="h-6 w-24 bg-border-subtle rounded-full" />
            <div className="h-4 w-20 bg-border-subtle rounded" />
          </div>
        </div>
        <div className="bg-background border-b border-border-subtle h-16.5 flex items-center">
          <div className="canvas-container flex justify-between w-full">
            <div className="flex gap-8">
              <div className="h-4 w-32 bg-border-subtle rounded" />
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
        <div className="flex canvas-container items-center justify-between">
          {/* Footer for header taglines small */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <span className="text-secondary/60 text-[9px] uppercase tracking-widest font-semibold">
              Leyte, PH —{" "}
              {time.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </span>

            <div className="hidden sm:block w-px h-2.5 bg-border-subtle/50" />

            <span className="text-foreground/50 text-[9px] uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="relative flex h-1 w-1">
                <span className="animate-[ping_3s_linear_infinite] absolute inline-flex h-full w-full rounded-full bg-green-500/30"></span>
                <span className="relative inline-flex rounded-full h-1 w-1 bg-green-500/60"></span>
              </span>
              Open for projects
            </span>
          </div>
          <div className="flex gap-4">
            {/* Theme Toggle */}
            <Slider
              isActive={!isDark}
              onToggle={() => setTheme(isDark ? "light" : "dark")}
              leftLabel="Dark"
              rightLabel="Light"
              labelClass="text-[10px]"
              containerClass="px-3 py-1.25 gap-4 bg-background"
              pillWidth="w-[46%]"
              activeTranslate="98%"
            />
            <div className="w-px h-4.5 bg-border-subtle"></div>
            <div className="flex gap-3 items-center">
              {/* socials links */}
              {SOCIAL_LINKS.map((link) => (
                <a
                  href={link.href}
                  key={link.id}
                  target="_blank"
                  rel="noreferrer"
                >
                  <link.icon
                    size={16}
                    className="text-secondary/75 hover:text-secondary"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* main nav container */}
      <div className="bg-background border-b border-border-subtle h-16.5 flex items-center">
        {/* main nav inner container */}
        <div className="flex canvas-container items-center justify-between">
          <div className="flex justify-between w-full px-6">
            {/* navigation */}
            <div className="flex gap-15 items-center">
              <div className="flex gap-2 items-center group">
                {/* Icon */}
                <TbHexagonLetterG
                  size={32}
                  className="text-foreground transition-all duration-300 group-hover:text-indigo-500"
                />

                {/* Logo */}
                <p className="font-logo text-[18px] font-medium tracking-tight text-foreground leading-none transition-all duration-300 group-hover:text-indigo-500">
                  Gladiarn
                </p>
              </div>

              <div className="flex gap-8">
                {NAVIGATIONS.map((nav) => (
                  <Link
                    href={`#${nav}`}
                    key={nav}
                    className="text-foreground/70 font-medium tracking-wider hover:text-foreground transition-colors 
             text-[14.25px]"
                  >
                    {nav}
                  </Link>
                ))}
              </div>
            </div>

            {/* switch formal mode */}
            <Slider
              isActive={isFormal}
              onToggle={toggleMode}
              leftLabel="Personal"
              rightLabel="Formal"
              containerClass="px-5.25 py-1.5 gap-8 bg-card"
              pillWidth="w-[48%]"
              activeTranslate="100%"
            />
          </div>

          <div className="flex gap-6 items-center">
            <div className="w-px h-4.5 bg-border-subtle"></div>
            <div className="flex items-center gap-1.5 group">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600 translate-y-px group-hover:bg-indigo-500"></div>
              <p className="text-[12px] text-nowrap font-mono text-foreground/80 hover:text-foreground-hover">
                Send a DM
              </p>
            </div>
            <button className="group flex items-center justify-center bg-foreground px-5 py-3 rounded-md transition-colors duration-300 hover:bg-foreground-hover active:scale-[0.98]">
              <p className="text-background text-[13px] font-semibold tracking-wide whitespace-nowrap pointer-events-none -translate-y-0.5">
                Schedule a Call
              </p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
