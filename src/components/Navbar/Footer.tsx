"use client";

import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";
import { PiTelegramLogo, PiGithubLogo } from "react-icons/pi";
import { FaHeart } from "react-icons/fa6";
import { TbHexagonLetterG } from "react-icons/tb";

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
      {/* Outer Wrapper with Borders */}
      <div className="w-full border-y border-border-subtle/50 bg-card/30 backdrop-blur-sm">
        {/* Inner Canvas Container */}
        <div className="canvas-container py-16 flex flex-col md:flex-row justify-between gap-12">
          {/* Left: Branding Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 group">
              <TbHexagonLetterG
                size={40}
                className="text-foreground transition-all group-hover:text-indigo-500"
              />
              <span className="text-3xl font-black tracking-tighter uppercase text-foreground">
                Gladiarn
              </span>
            </div>
            <p className="max-w-xs text-[12px] text-secondary/60 leading-relaxed uppercase tracking-widest font-medium">
              {
                "// Engineering consistency into digital interfaces. Available for global collaboration."
              }
            </p>
          </div>

          {/* Right: Navigation & Socials */}
          <div className="flex flex-col sm:flex-row gap-16 lg:gap-24">
            {/* Column 1: Directory */}
            <div className="flex flex-col gap-5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">
                Index
              </h4>
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((nav) => (
                  <Link
                    key={nav}
                    href={`#${nav}`}
                    className="text-[13px] font-bold text-secondary/70 hover:text-foreground transition-colors uppercase tracking-tight"
                  >
                    {nav}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 2: Connection */}
            <div className="flex flex-col gap-5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">
                Connect
              </h4>
              <div className="flex gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-sm border border-border-subtle bg-background shadow-sm hover:border-indigo-500 hover:text-indigo-500 transition-all"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="canvas-container py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-secondary/40 font-bold uppercase tracking-[0.2em]">
          © {currentYear} Gladiarn. Standard Protocol Reserved.
        </p>

        <div className="flex items-center gap-4 text-[10px] text-secondary/40 font-bold uppercase tracking-[0.2em]">
          <FaHeart size={10} className="text-indigo-500/40" />
          <p>
            Developed by{" "}
            <span className="text-foreground/70 underline decoration-indigo-500/30 underline-offset-4">
              Ianne Carl
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
