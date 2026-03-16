"use client";

import React from "react";
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
  brandColor,
}: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex h-11 w-11 items-center justify-center bg-card border border-border-subtle shadow-sm transition-all duration-300 hover:text-white hover:border-transparent"
    >
      {/* Decorative Corners */}
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      {/* Tooltip */}
      <span
        style={{
          backgroundColor: brandColor,
          transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        }}
        className={cn(
          "absolute top-0 opacity-0 transition-all duration-300 group-hover:-top-11 group-hover:opacity-100",
          "pointer-events-none rounded-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md z-30",
        )}
      >
        {name}
      </span>

      {/* Hover Background Fill */}
      <div
        style={{ backgroundColor: brandColor }}
        /* Added z-10 and ensured it has no rounded-full inside */
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
      />

      {/* Icon */}
      <Icon
        size={22}
        /* Increased z-index to stay above the background fill */
        className="relative z-20 text-foreground/70 transition-colors duration-300 group-hover:text-white"
      />
    </a>
  );
};

export default SocialButton;
