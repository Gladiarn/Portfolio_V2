"use client";

import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { PiGithubLogo, PiTelegramLogo } from "react-icons/pi";
import { TbHexagonLetterG } from "react-icons/tb";
import Corner from "../props/Corner";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ianne-carl-bulilan-321421349/",
    icon: FiLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/Gladiarn",
    icon: PiGithubLogo,
  },
  {
    name: "Telegram",
    href: "https://t.me/IanneTG",
    icon: PiTelegramLogo,
  },
];

const NAV_LINKS = ["About", "Projects", "Experience"];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      {/* Top Border with Accent Dot */}
      <div className="w-full border-t border-border-subtle/50 relative">
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-500 rotate-45" />
      </div>

      <div className="canvas-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Section 1: Brand & Bio (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <TbHexagonLetterG
                size={32}
                className="text-foreground transition-colors duration-300 group-hover:text-indigo-500"
              />
              <p className="font-logo text-[22px] font-medium tracking-tight text-foreground leading-none transition-colors duration-300 group-hover:text-indigo-500">
                Gladiarn
              </p>
            </Link>

            <div className="space-y-4">
              <p className="text-[13px] text-secondary/70 leading-relaxed max-w-sm">
                Independent Developer specializing in the intersection of design
                systems and functional engineering. Building high-fidelity
                digital experiences from Leyte, PH.
              </p>
              <div className="flex items-center gap-3">
                <span className="w-2 h-px bg-indigo-500" />
                <span className="text-[9px] uppercase tracking-[0.3em] font-black text-indigo-500/80">
                  System Status: Active
                </span>
              </div>
            </div>
          </div>

          {/* Section 2: Directory Links (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground border-l-2 border-indigo-500 pl-4">
              Directory
            </h4>
            <nav className="flex flex-col gap-4 pl-4">
              {NAV_LINKS.map((nav) => (
                <Link
                  key={nav}
                  href={`#${nav}`}
                  className="text-[12px] font-bold text-secondary/60 hover:text-indigo-500 transition-all hover:translate-x-1 uppercase tracking-widest"
                >
                  {`// ${nav}`}
                </Link>
              ))}
            </nav>
          </div>

          {/* Section 3: Connectivity (Span 4) */}
          {/* Section 3: Connectivity */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 border-l-2 border-indigo-500 pl-4">
              Connect
            </h4>
            <div className="grid grid-cols-1 gap-3 pl-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  /* Removed overflow-hidden to prevent Corner clipping */
                  className="group relative flex items-center justify-between px-5 py-3 border border-border-subtle bg-card/40 hover:bg-foreground active:scale-[0.98] shrink-0 transition-all"
                >
                  {/* Corner Accents - They stay visible even if they slightly bleed over the edge */}
                  <Corner pos="tl" />
                  <Corner pos="tr" />
                  <Corner pos="bl" />
                  <Corner pos="br" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/70 group-hover:text-background z-10">
                    {social.name}
                  </span>

                  <social.icon
                    size={14}
                    className="text-secondary/40 group-hover:text-background group-hover:scale-110 transition-all z-10"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Utility Bar */}
      <div className="w-full bg-card/50 border-t border-border-subtle/30">
        <div className="canvas-container py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[9px] text-secondary/40 font-bold uppercase tracking-[0.2em]">
              © {currentYear} Gladiarn
            </p>
            <div className="h-3 w-px bg-border-subtle" />
            <p className="text-[9px] text-secondary/40 font-bold uppercase tracking-[0.2em]">
              V.02-2026
            </p>
          </div>

          <div className="flex items-center gap-3 px-4 py-1.5 border border-border-subtle/50 rounded-full">
            <FaHeart size={10} className="text-indigo-500 animate-pulse" />
            <p className="text-[9px] text-secondary/60 font-bold uppercase tracking-[0.2em]">
              Engineered by <span className="text-foreground">Ianne Carl</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
