"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";
import { PiTelegramLogo, PiGithubLogo } from "react-icons/pi";
import { useTheme } from "next-themes";
import Slider from "../Slider";
import { useModeStore } from "@/hooks/useModeStore";
import { TbHexagonLetterG } from "react-icons/tb";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MenuButton from "../Buttons/MenuButton";
import Corner from "../props/Corner";
import MobileMenu from "./MobileMenu";
const SOCIAL_LINKS = [
  {
    id: 1,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ianne-carl-bulilan-321421349/",
    icon: FiLinkedin,
  },
  {
    id: 2,
    name: "GitHub",
    href: "https://github.com/Gladiarn",
    icon: PiGithubLogo,
  },
  {
    id: 3,
    name: "Telegram",
    href: "https://t.me/IanneTG",
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <div className="flex flex-col sm:flex-row sm:items-center gap-px sm:gap-3">
            <span className="text-secondary/60 min-[360px]:text-[9px] text-[7px] uppercase tracking-widest font-semibold">
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
              labelClass="text-[8.5px]"
              containerClass="px-3 py-1.5 gap-4 bg-background"
              pillWidth="w-[46%]"
              activeTranslate="100%"
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
      <div className="bg-background border-b border-border-subtle h-16.5 flex items-center overflow-x-hidden">
        {/* main nav inner container */}
        <div className="flex canvas-container items-center justify-between w-full px-6">
          {/* LEFT: Logo & Nav */}
          <div className="flex gap-4 md:gap-15 items-center shrink-0">
            <div className="flex gap-2 items-center group">
              <TbHexagonLetterG
                size={32}
                className="text-foreground transition-all group-hover:text-indigo-500"
              />
              <p className="font-logo text-[18px] font-medium tracking-tight text-foreground leading-none">
                Gladiarn
              </p>
            </div>

            {/* Desktop Links */}
            <div className="hidden min-[1440px]:flex gap-8">
              {NAVIGATIONS.map((nav) => (
                <Link
                  href={`#${nav}`}
                  key={nav}
                  className="group relative text-foreground/60 font-medium tracking-tight hover:text-foreground text-[14.25px]"
                >
                  <span className="pointer-events-none absolute -left-3.5 top-1/2 -translate-y-[45%] text-[9px] font-mono opacity-0 group-hover:opacity-100 transition-all">
                    //
                  </span>
                  {nav}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT: Grouped Slider + Actions */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            {/* Slider - Grouped near actions */}
            <Slider
              isActive={isFormal}
              onToggle={toggleMode}
              leftLabel="Personal"
              rightLabel="Formal"
              containerClass="px-5.25 py-2 gap-8 bg-card hidden min-[1024px]:flex shrink-0"
              pillWidth="w-[48%]"
              activeTranslate="100%"
            />

            <div className="w-px h-4.5 bg-border-subtle hidden min-[1024px]:flex"></div>

            {/* Inquiries */}
            <a
              href="https://t.me/IanneTG"
              target="_blank"
              className="hidden min-[700px]:flex items-center gap-2 group shrink-0"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
              </span>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/60 transition-all group-hover:text-foreground text-nowrap">
                Inquiries // Send DM
              </p>
            </a>

            {/* Schedule */}
            <a
              href="https://cal.com/ianne-carl-bulilan-gladiarn"
              target="_blank"
              className="group relative hidden min-[480px]:flex items-center justify-center border border-border-subtle hover:border-foreground-hover/40 bg-card px-5 py-3 active:scale-[0.99] shrink-0"
            >
              <Corner pos="tl" />
              <Corner pos="tr" />
              <Corner pos="bl" />
              <Corner pos="br" />
              <p className="text-foreground/80 text-[10px] uppercase tracking-[0.2em] font-bold text-nowrap">
                Schedule a Call
              </p>
            </a>

            <MenuButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>

      {/* menu */}
      <Accordion
        type="single"
        collapsible
        value={isMenuOpen ? "mobile-menu" : ""}
        onValueChange={(value) => setIsMenuOpen(value === "mobile-menu")}
      >
        <AccordionItem value="mobile-menu" className="border-none">
          <AccordionContent className="pb-0">
            <MobileMenu
              navigations={NAVIGATIONS}
              isFormal={isFormal}
              toggleMode={toggleMode}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </nav>
  );
};

export default Navbar;
