"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface WorkGridCardProps {
  project: any;
  index: number;
}

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const WorkGridCard = ({ project, index }: WorkGridCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <motion.a
      href={project.link}
      target="_blank"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardReveal}
      className="group relative flex flex-col bg-card border border-border-subtle rounded-lg overflow-hidden hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500"
    >
      {/* Image Container: Absolute Background Style */}
      <div className="relative aspect-square w-full overflow-hidden bg-background">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary/5 animate-pulse">
            <div className="w-4 h-4 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
          </div>
        )}

        <Image
          src={`/${project.image}`}
          alt={project.title}
          fill
          loading="lazy" // Native lazy loading (default in Next.js)
          onLoad={() => setIsLoading(false)}
          className={`
            object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110
            ${isLoading ? "scale-110 blur-sm opacity-0" : "scale-100 blur-0 opacity-100"}
          `}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content Floating Over Image */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
              {project.tags[0]}
            </span>
            <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[9px] text-white font-bold uppercase tracking-widest">
                View
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white tracking-tighter uppercase mb-1">
              {project.title}
            </h3>
            <p className="text-[10px] text-white/50 font-medium uppercase tracking-wider line-clamp-2">
              Built with {project.tags.join(" // ")}
            </p>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default WorkGridCard;
