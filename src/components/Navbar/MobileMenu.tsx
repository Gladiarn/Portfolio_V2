"use client";

import Link from "next/link";
import Corner from "../props/Corner";
import Slider from "../Slider";

interface MobileMenuProps {
  navigations: string[];
  isFormal: boolean;
  toggleMode: () => void;
}

const MobileMenu = ({ navigations, isFormal, toggleMode }: MobileMenuProps) => {
  return (
    <div className="bg-background border-b border-border-subtle">
      <div className="canvas-container py-6 flex flex-col gap-10">
        {/* NAV LINKS - Synchronized with Desktop Navbar (1440px) */}
        <div className="flex flex-col gap-1 min-[1440px]:hidden">
          <p className="text-[9px] uppercase tracking-[0.3em] text-foreground/30 font-bold mb-4 px-2">
            Index // Navigation
          </p>
          <div className="flex flex-col">
            {navigations.map((nav) => (
              <Link
                key={nav}
                href={`#${nav}`}
                className="group relative flex items-center justify-between py-4 border-b border-border-subtle/30 last:border-0 no-underline!"
              >
                <span className="text-[15px] font-medium tracking-tight text-foreground/70 group-hover:text-foreground transition-all">
                  <span className="pointer-events-none absolute -left-3.5 top-1/2 -translate-y-[45%] text-[9px] font-mono text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300">
                    //
                  </span>
                  {nav}
                </span>
                <span className="text-[9px] font-mono text-foreground/20 group-hover:text-indigo-500/50 transition-all no-underline!">
                  → SHIFT_VIEW
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* MODE TOGGLE - Synchronized with Navbar (1024px) */}
        <div className="flex flex-col gap-4 items-start min-[1024px]:hidden border-t border-border-subtle/30 pt-5">
          <p className="text-[9px] uppercase tracking-[0.3em] text-foreground/30 font-bold px-2">
            Environment // Toggle
          </p>
          <Slider
            isActive={isFormal}
            onToggle={toggleMode}
            leftLabel="Personal"
            rightLabel="Formal"
            containerClass="px-5.25 py-2.5 gap-8 bg-card inline-flex items-center"
            pillWidth="w-[48%]"
            activeTranslate="100%"
            labelClass="text-[11px] leading-none -translate-y-px"
          />
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex-col gap-4 border-t border-border-subtle/30 pt-5 min-[700px]:hidden flex">
          <p className="text-[9px] uppercase tracking-[0.3em] text-foreground/30 font-bold px-2">
            Connect // Booking
          </p>
          <div className="flex flex-col items-start min-[420px]:items-center gap-6 px-2 min-[420px]:flex-row">
            {/* Telegram - Synchronized with Navbar (700px) */}
            <a
              href="https://t.me/IanneTG"
              target="_blank"
              className="min-[700px]:hidden flex items-center gap-2 group no-underline!"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
              </span>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/60 transition-all group-hover:text-foreground text-nowrap">
                Inquiries // Send DM
              </p>
            </a>

            {/* Separator - Only visible if both buttons are hidden on desktop but visible here */}
            <div className="hidden min-[420px]:max-[480px]:block w-px h-4.5 bg-border-subtle"></div>

            {/* Schedule Button - Synchronized with Navbar (480px) */}
            <a
              href="https://cal.com/ianne-carl-bulilan-gladiarn"
              target="_blank"
              className="min-[480px]:hidden group relative flex items-center justify-center border border-border-subtle hover:border-foreground-hover/40 bg-card px-5 py-3 active:scale-[0.99] no-underline!"
            >
              <Corner pos="tl" />
              <Corner pos="tr" />
              <Corner pos="bl" />
              <Corner pos="br" />
              <p className="text-foreground/80 text-[10px] uppercase tracking-[0.2em] font-bold transition-colors group-hover:text-foreground/90 text-nowrap">
                Schedule a Call
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
