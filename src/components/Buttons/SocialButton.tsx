"use client";

import type React from "react";
import { cn } from "@/lib/utils";

interface SocialButtonProps {
  icon: React.ElementType;
  name: string;
  href: string;
}

const SocialButton = ({ icon: Icon, name, href }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group relative flex h-11 w-11 items-center justify-center border border-border-subtle",
        "hover:border-indigo-500 hover:bg-indigo-500/2 transition-all duration-300",
      )}
    >
      {/* Icon: Neutral to Indigo on hover */}
      <div className="text-xl text-foreground group-hover:text-indigo-500 transition-colors duration-300">
        <Icon size={20} />
      </div>

      <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none text-[9px] font-black uppercase tracking-[0.15em] text-indigo-500 whitespace-nowrap bg-background px-1">
        {name}
      </span>
    </a>
  );
};

export default SocialButton;
