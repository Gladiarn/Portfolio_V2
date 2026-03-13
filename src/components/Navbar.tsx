"use client";

import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";
import { PiTelegramLogo, PiGithubLogo } from "react-icons/pi";

import { useTheme } from "@/providers/ThemeProvider";
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
  const { isDark, toggleTheme } = useTheme();
  return (
    <nav className="w-full bg-background">
      {/* socials main container*/}
      <div className="bg-card border-b border-border-subtle flex h-9.25">
        {/* socials inner container */}
        <div className="flex canvas-container items-center justify-end gap-4">
          {/* Theme toggle button */}
          <div
            className="relative flex gap-4 border-border-subtle border px-3 py-1.5 rounded-full items-center overflow-hidden group bg-background"
            onClick={toggleTheme}
          >
            {/* slider */}
            <div
              className="absolute h-[80%] w-[46%] bg-foreground rounded-full shadow-md z-0 left-1 transition-transform duration-300 ease-in-out"
              style={{
                transform: isDark ? "translateX(0)" : "translateX(98%)",
              }}
            />
            <p
              className={`relative z-10 text-[11px] font-medium transition-colors duration-300 
              ${isDark ? "text-background" : "text-text-secondary"}`}
            >
              Dark
            </p>
            <p
              className={`relative z-10 text-[11px] font-medium transition-colors duration-300 
            ${!isDark ? "text-background" : "text-text-secondary"}`}
            >
              Light
            </p>
          </div>

          <div className="w-px h-4.5 bg-border-subtle"></div>
          <div className="flex gap-3 items-center">
            {/* socials links */}
            {SOCIAL_LINKS.map((link, index) => (
              <a href={link.href} key={index} target="_blank">
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
        <div className="flex canvas-container items-center justify-between ">
          {/* navigation */}
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <p className="text-xs font-medium text-foreground/75 hover:text-foreground tracking-wide -translate-y-px">
                bulilaniannecarl@gmail.com
              </p>
            </div>

            <div className="w-px h-4.5 bg-border-subtle"></div>

            <div className="flex gap-8">
              {NAVIGATIONS.map((nav, index) => (
                <Link
                  href={""}
                  key={index}
                  className="text-foreground/65 font-medium text-[14.5px] tracking-wide hover:text-foreground"
                >
                  {nav}
                </Link>
              ))}
            </div>
          </div>

          {/* call to actions */}
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
