"use client";
import Image from "next/image";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  image: string;
  githubUrl: string;
}

const ProjectCard = ({ title, image, githubUrl }: ProjectCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="group relative w-full h-72 border border-border-subtle bg-card overflow-hidden transition-all duration-500 hover:border-indigo-500/50">
      {/* 1. THE ASSET (Full Bleed) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`/projects/${image}`}
          alt={title}
          fill
          className={`object-cover transition-all duration-300 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105 ${
            isLoading ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />

        {/* TOP VIGNETTE: Ensures visibility for top-aligned labels on white images */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

        {/* BOTTOM VIGNETTE: Ensures visibility for title/button on white images */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
      </div>

      {/* 2. TOP UI LAYER (Status & Meta) */}
      <div className="absolute top-5 left-6 right-6 z-20 flex justify-between items-start pointer-events-none">
        <div className="flex flex-col gap-1.5">
          <span className="text-[7px] font-mono text-indigo-400 uppercase tracking-[0.4em] font-bold">
            Project_Status // Active
          </span>
          <div className="h-px w-6 bg-indigo-500/40 group-hover:w-12 transition-all duration-500" />
        </div>

        <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest italic">
          Verified_Asset
        </span>
      </div>

      {/* 3. BOTTOM UI LAYER (Title & Github) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 flex justify-between items-end gap-6 bg-linear-to-t from-black/40 to-transparent">
        {/* Title: Pure White for maximum visibility on all backgrounds */}
        <div className="flex flex-col gap-1 flex-1">
          <h3 className="text-[18px] font-black uppercase italic tracking-tighter text-white leading-[1.1] drop-shadow-md">
            {title.replace(/\*\*/g, "")}.
          </h3>
          <span className="text-[8px] font-mono text-white/40 uppercase tracking-[0.3em]">
            Build_Ref // 2026_Stable
          </span>
        </div>

        {/* Action: TechIcon DNA (Clean, Solid Background for visibility) */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn relative flex h-11 w-11 shrink-0 items-center justify-center border border-border-subtle bg-background hover:border-indigo-500 transition-all duration-300"
        >
          <FiGithub
            size={20}
            className="text-foreground group-hover/btn:text-indigo-500 transition-colors"
          />

          {/* Exact TechIcon Tooltip Style: Centered, Background-cutout, Indigo text */}
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/btn:opacity-100 transition-all duration-200 pointer-events-none text-[9px] font-black uppercase tracking-[0.15em] text-indigo-500 whitespace-nowrap bg-background px-1 z-30">
            SRC_CODE
          </span>
        </a>
      </div>

      {/* 4. ACTIVE BORDER: Subtle 1px Line */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-700" />
    </div>
  );
};

export default ProjectCard;
