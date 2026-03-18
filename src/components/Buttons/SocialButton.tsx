"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import Corner from "../props/Corner";

interface SocialButtonProps {
  icon: React.ElementType;
  name: string;
  href: string;
  brandColor: string;
}

const SocialButton = ({
  icon: Icon,
  name,
  href,
}: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group relative flex h-10 w-10 items-center justify-center bg-card border border-border-subtle",
        "transition-all duration-300 ease-out",
        "hover:border-indigo-500/50 active:scale-95"
      )}
    >
      {/* 1. Subtle HUD Corners */}
      <Corner pos="tl" /><Corner pos="tr" /><Corner pos="bl" /><Corner pos="br" />

      {/* 2. Technical Tooltip (Blueprint Style) */}
      <div className={cn(
          "absolute -top-8 opacity-0 pointer-events-none flex items-center gap-2",
          "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "group-hover:-top-10 group-hover:opacity-100 z-30"
      )}>
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-500 bg-background px-2 py-0.5 border border-indigo-500/20 whitespace-nowrap shadow-xl">
          {name}_REF
        </span>
        {/* Tiny connector line */}
        <div className="w-px h-2 bg-indigo-500/40 absolute -bottom-2 left-1/2 -translate-x-1/2" />
      </div>

      {/* 3. Hover Background (Glow instead of solid fill) */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-indigo-500/3"
      />

      {/* 4. The Icon (Indigo hover) */}
      <Icon
        size={18}
        className="relative z-20 text-foreground/40 transition-all duration-300 group-hover:text-indigo-500 group-hover:scale-110"
      />

      {/* 5. Bottom "Active" Bar */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-500 group-hover:w-full z-20" />
    </a>
  );
};

export default SocialButton;