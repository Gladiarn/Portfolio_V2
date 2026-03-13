"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";
import { PiTelegramLogo, PiGithubLogo } from "react-icons/pi";
import { useTheme } from "next-themes";

const SOCIAL_LINKS = [
  { id: 1, name: "LinkedIn", href: "https://linkedin.com/in/yourname", icon: FiLinkedin },
  { id: 2, name: "GitHub", href: "https://github.com/yourname", icon: PiGithubLogo },
  { id: 3, name: "Telegram", href: "https://t.me/yourname", icon: PiTelegramLogo },
];

const NAVIGATIONS = ["About", "Projects", "Experience"];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          <div className="canvas-container flex gap-8">
            <div className="h-4 w-32 bg-border-subtle rounded" />
            <div className="h-4 w-20 bg-border-subtle rounded" />
            <div className="h-4 w-20 bg-border-subtle rounded" />
          </div>
        </div>
      </nav>
    );
  }

  const isDark = theme === "dark";

  return (
    <nav className="w-full bg-background">
      <div className="bg-card border-b border-border-subtle flex h-9.25">
        <div className="flex canvas-container items-center justify-end gap-4">
          <div
            className="relative flex gap-4 border-border-subtle border px-3 py-1.5 rounded-full items-center overflow-hidden group bg-background cursor-pointer"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            <div
              className="absolute h-[80%] w-[46%] bg-foreground rounded-full shadow-md z-0 left-1 transition-transform duration-300 ease-in-out"
              style={{ transform: isDark ? "translateX(0)" : "translateX(98%)" }}
            />
            <p className={`relative z-10 text-[11px] font-medium translate-y-[0.5px] ${isDark ? "text-background" : "text-text-secondary"}`}>
              Dark
            </p>
            <p className={`relative z-10 text-[11px] font-medium translate-y-[0.5px] ${!isDark ? "text-background" : "text-text-secondary"}`}>
              Light
            </p>
          </div>

          <div className="w-px h-4.5 bg-border-subtle"></div>
          
          <div className="flex gap-3 items-center">
            {SOCIAL_LINKS.map((link) => (
              <a href={link.href} key={link.id} target="_blank">
                <link.icon size={16} className="text-secondary/75 hover:text-secondary" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-background border-b border-border-subtle h-16.5 flex items-center">
        <div className="flex canvas-container items-center justify-between">
          <div className="flex gap-4 items-center">
            <p className="text-xs font-medium text-foreground/75 hover:text-foreground tracking-wide -translate-y-px cursor-pointer">
              bulilaniannecarl@gmail.com
            </p>
            <div className="w-px h-4.5 bg-border-subtle"></div>
            <div className="flex gap-8">
              {NAVIGATIONS.map((nav) => (
                <Link
                  href={`#${nav}`}
                  key={nav}
                  className="text-foreground/65 font-medium text-[14.5px] tracking-wider hover:text-foreground"
                >
                  {nav}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;