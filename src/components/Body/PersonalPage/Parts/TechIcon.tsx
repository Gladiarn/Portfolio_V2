"use client";
import { ReactNode } from "react";

const TechIcon = ({ name, icon }: { name: string; icon: ReactNode }) => {
  return (
    <div className="group relative flex items-center justify-center h-11 w-11 border border-border-subtle hover:border-indigo-500 hover:bg-indigo-500/2 transition-all duration-300">
      <div className="text-xl text-foreground group-hover:text-indigo-500 transition-colors duration-300">
        {icon}
      </div>
      
      {/* Tooltip: Now slightly lower and bold for readability */}
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none text-[9px] font-black uppercase tracking-[0.15em] text-indigo-500 whitespace-nowrap bg-background px-1">
        {name}
      </span>
    </div>
  );
};

export default TechIcon;