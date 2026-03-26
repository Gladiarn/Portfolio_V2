"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PiArrowUpRightBold } from "react-icons/pi";
import { useState } from "react";

interface WorkHeroProps {
  project: any;
}

const revealVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const WorkHero = ({ project }: WorkHeroProps) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <section className="border-b border-border-subtle group bg-card overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-112.5">
        {/* LEFT PANEL */}
        <div className="bg-foreground p-8 sm:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border-subtle relative overflow-hidden min-h-75 lg:min-h-0">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
            }}
          />
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="relative z-10 flex flex-col justify-between h-full"
          >
            <div>
              <span className="text-indigo-400 font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">
                // LATEST_RELEASE
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-background italic leading-[0.95] uppercase">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[9px] font-mono text-background/40 border border-background/10 px-3 py-1 uppercase tracking-widest bg-background/3"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 lg:mt-12">
              <a
                href={project.link}
                target="_blank"
                className="group/link inline-flex items-center gap-3 text-[11px] font-black text-background uppercase tracking-[0.25em] hover:text-indigo-400 transition-colors"
              >
                Exploration_Link{" "}
                <PiArrowUpRightBold className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT PANEL: Full image within a padded container */}
        <div className="relative flex items-center justify-center bg-background/10 p-5 sm:p-10 lg:p-12 min-h-87.5 lg:min-h-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full border border-border-subtle overflow-hidden shadow-2xl rounded-xl bg-background"
          >
            {isLoading && (
              <div className="absolute inset-0 bg-secondary/5 animate-pulse z-20" />
            )}

            <Image
              src={`/${project.image}`}
              alt={project.title}
              fill
              priority
              onLoad={() => setIsLoading(false)}
              className={`
                object-cover object-top transition-all duration-700 ease-in-out
                grayscale group-hover:grayscale-0 group-hover:scale-110
                ${isLoading ? "blur-sm opacity-0" : "blur-0 opacity-100"}
            `}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkHero;
