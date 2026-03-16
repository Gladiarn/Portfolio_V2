"use client";
import Corner from "@/components/props/Corner";
import Image from "next/image";
import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  image: string;
  githubUrl: string;
  index: number;
}

const ProjectCard = ({ title, image, githubUrl, index }: ProjectCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const formattedIndex = String(index + 1).padStart(2, "0");

  // Matching the pattern in your ExperienceCard
  const renderBoldText = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-bold text-foreground mx-0.5">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="relative w-full h-50 min-h-50 overflow-hidden group border border-border-subtle rounded-md bg-card">
      {/* 1. Skeleton Loader */}
      {isLoading && (
        <div className="absolute inset-0 z-30 bg-[#2a2a2a] animate-pulse flex items-center justify-center">
          <span className="text-secondary/20 font-mono text-[10px] tracking-widest uppercase">
            Loading Asset {formattedIndex}
          </span>
        </div>
      )}

      {/* 2. Base Image */}
      <div
        className={`absolute inset-0 grayscale-80 transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={`/projects/${image}`}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* 3. The Curtain */}
      <div className="absolute inset-0 z-10 h-0 group-hover:h-full transition-all duration-500 ease-in-out overflow-hidden bottom-0 top-auto">
        <div className="absolute bottom-0 left-0 w-full h-50">
          <Image
            src={`/projects/${image}`}
            alt={title}
            fill
            className="object-cover grayscale-0 brightness-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-foreground/50" />
      </div>

      {/* 4. Upper Left: Blueprint Label */}
      <div className="absolute top-0 left-0 z-20 flex items-start">
        <div className="bg-foreground text-background font-mono text-[10px] font-bold px-2 py-1 border-b border-r border-border-subtle shrink-0">
          P_{formattedIndex}
        </div>

        <div className="bg-background border-b border-r border-border-subtle px-4 py-2 shadow-xl backdrop-blur-sm">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
            <span className="text-secondary/50 font-bold tracking-normal">
              //
            </span>
            {renderBoldText(title)}
          </h3>
        </div>
      </div>

      {/* 5. GitHub Button (Removed Underscores) */}
      <div className="absolute bottom-4 right-4 z-20">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-3 px-4 py-2 border border-border-subtle bg-background/90 hover:bg-foreground hover:text-background text-foreground transition-all duration-300 group/btn font-bold text-[10px] tracking-[0.2em] uppercase"
        >
          <Corner pos="tl" />
          <Corner pos="tr" />
          <Corner pos="bl" />
          <Corner pos="br" />
          <span>View on GitHub</span>
          <FiGithub
            size={14}
            className="group-hover:scale-110 transition-transform"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
