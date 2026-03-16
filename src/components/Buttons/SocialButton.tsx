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
  brandColor,
}: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group relative flex h-11 w-11 items-center justify-center bg-card border border-border-subtle shadow-sm",
        "transition-all duration-150 ease-out",
        "hover:text-white hover:border-transparent active:scale-95",
      )}
    >
      {/* Decorative Corners */}
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      {/* Tooltip - Set to !transition-none so it resets instantly on leave */}
      <span
        style={{
          backgroundColor: brandColor,
          transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        }}
        className={cn(
          "absolute top-0 opacity-0 !transition-none pointer-events-none rounded-sm px-3 py-1",
          "text-[10px] font-bold uppercase tracking-wider text-white shadow-md z-30",
          // The transition ONLY applies when the group is hovered
          "group-hover:-top-11 group-hover:opacity-100 group-hover:!transition-all group-hover:duration-300",
        )}
      >
        {name}
      </span>

      {/* Hover Background Fill */}
      <div
        style={{ backgroundColor: brandColor }}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10"
      />

      {/* Icon */}
      <Icon
        size={22}
        className="relative z-20 text-foreground/70 transition-colors duration-150 group-hover:text-white"
      />
    </a>
  );
};

export default SocialButton;
