"use client";
import Corner from "@/components/props/Corner";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  image: string;
  githubUrl: string;
  index: number;
}

const ProjectCard = ({ title, image, githubUrl, index }: ProjectCardProps) => {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <div className="relative w-full h-50 min-h-50 overflow-hidden group border border-border-subtle rounded-md bg-card">
      {/* 1. Base Image - Steel Gray / Blueprint Draft */}
      <div className="absolute inset-0 grayscale-80 transition-all duration-700">
        <Image
          src={`/projects/${image}`}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* 2. The Curtain - Color Reveal */}
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
        <div className="absolute top-0 left-0 w-full h-px bg-foreground/50 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
      </div>

      {/* 3. Upper Left: Blueprint Label */}
      <div className="absolute top-0 left-0 z-20 flex items-start">
        <div className="bg-foreground text-background font-mono text-[10px] font-bold px-2 py-1 border-b border-r border-border-subtle shrink-0">
          P_{formattedIndex}
        </div>

        <div className="bg-background border-b border-r border-border-subtle px-4 py-2 transition-colors duration-300 backdrop-blur-sm shadow-xl">
          <h3 className="text-[12px] font-mono uppercase tracking-widest text-foreground flex items-center gap-2">
            // {title}
          </h3>
        </div>
      </div>

      {/* 4. GitHub Button */}
      <div className="absolute bottom-4 right-4 z-20">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-3 px-4 py-2 border border-border-subtle bg-background/90 hover:bg-foreground hover:text-background text-foreground group/btn font-mono text-[10px] tracking-widest uppercase"
        >
          <Corner pos="tl" />
          <Corner pos="tr" />
          <Corner pos="bl" />
          <Corner pos="br" />
          <span>GITHUB_REPOSITORY</span>
          <FiGithub
            size={14}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
