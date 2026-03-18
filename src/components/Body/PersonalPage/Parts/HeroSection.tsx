"use client";

import Corner from "@/components/props/Corner";
import { motion, Variants } from "framer-motion";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiFramer, SiFigma, SiShadcnui } from "react-icons/si";

const HERO_CONTENT = {
  missionTag: "// THE GOAL",
  mainQuote: {
    line1: "BUILDING",
    accent: "CLEAN INTERFACES",
    line2: "WITH SOLID CODE.",
  },
  subquote: "Making the web look and work better",
  verticalBranding: "CODE // IMPLEMENTATION",
  identity: {
    firstName: "IANNE",
    lastName: "CARL.",
    signature: {
      top: "FULLSTACK_WEB_DEV",
      bottom: "Based in Philippines",
    },
    description: [
      "I’m a developer who enjoys building ",
      "user-friendly",
      " apps and solving tricky problems.",
    ],
  },
};

const TOOLS = [
  { name: "Next.js", icon: RiNextjsFill },
  { name: "TailwindCSS", icon: RiTailwindCssFill },
  { name: "Shadcn/UI", icon: SiShadcnui },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Figma", icon: SiFigma },
];

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="canvas-container relative mx-auto bg-background border-x border-b border-border-subtle">
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] min-h-[75vh]">
        {/* LEFT PANEL */}
        <div className="bg-foreground p-8 sm:p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border-subtle relative overflow-hidden">
          {/* Textures */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
            }}
          />
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-indigo-500/10 blur-[120px] rounded-full" />
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="relative z-10"
          >
            <span className="text-indigo-400 font-bold text-[11px] tracking-[0.4em] uppercase mb-10 block">
              {HERO_CONTENT.missionTag}
            </span>
            <h2 className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-black leading-[1.05] tracking-tighter text-background italic">
              “{HERO_CONTENT.mainQuote.line1} <br />
              <span className="text-indigo-500/40">
                {HERO_CONTENT.mainQuote.accent}
              </span>{" "}
              <br />
              {HERO_CONTENT.mainQuote.line2}”
            </h2>
            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-8 bg-indigo-500/50" />
              <p className="text-[14px] text-background/50 font-medium tracking-tight uppercase">
                {HERO_CONTENT.subquote}
              </p>
            </div>
          </motion.div>
          <div className="absolute right-0 top-0 bottom-0 w-24 hidden lg:flex items-center justify-center pointer-events-none">
            <span
              className="text-[10px] font-black tracking-[1em] text-background/10 uppercase"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              {HERO_CONTENT.verticalBranding}
            </span>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="p-8 2xl:p-20 flex flex-col justify-center bg-card relative group overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.06), transparent 40%)`,
            }}
          />

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="relative z-10"
          >
            <div className="flex items-center gap-4 mb-12">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 48 }}
                transition={{ duration: 0.8 }}
                className="w-0.5 bg-indigo-500/40"
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-black tracking-[0.3em] text-indigo-500 uppercase">
                  {HERO_CONTENT.identity.signature.top}
                </span>
                <span className="text-[9px] font-mono text-foreground/30 tracking-widest uppercase">
                  {HERO_CONTENT.identity.signature.bottom}
                </span>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter text-foreground mb-8 leading-[0.85] transition-colors duration-500 group-hover:text-indigo-500/95">
              {HERO_CONTENT.identity.firstName} <br />
              <span className="relative">
                {HERO_CONTENT.identity.lastName}
                <span className="absolute -bottom-2 left-0 h-1 bg-indigo-500 w-0 group-hover:w-full transition-all duration-500" />
              </span>
            </h1>

            <div className="relative">
              <p className="text-lg md:text-xl text-foreground/80 font-semibold leading-tight max-w-sm">
                {HERO_CONTENT.identity.description[0]}
                <span className="text-indigo-500 italic">
                  {HERO_CONTENT.identity.description[1]}
                </span>
                {HERO_CONTENT.identity.description[2]}
              </p>

              <div className="mt-10 flex gap-1.5 items-end h-8">
                {[0.4, 0.7, 0.2, 0.9, 0.5].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    style={{ height: `${h * 100}%` }}
                    className="w-1 bg-indigo-500/30 rounded-full origin-bottom"
                  />
                ))}
                <div className="ml-2 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-foreground/20 uppercase tracking-widest">
                    Data_Stream
                  </span>
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-1.5 h-3 bg-indigo-500/40"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="absolute top-8 right-8 font-mono text-[9px] text-foreground/20 text-right select-none">
            <p>LOC_REF: 10.3157° N</p>
            <p>SYS_REF: 123.8854° E</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-border-subtle bg-card py-7 px-8 sm:px-12 lg:px-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <Corner pos="tl" />
        <Corner pos="tr" />
        <div className="flex items-center gap-4">
          <span className="text-foreground/60 text-[10px] font-black uppercase tracking-[0.3em]">
            // CREATED WITH
          </span>
          <div className="h-px w-12 bg-border-subtle" />
        </div>

        <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
          {TOOLS.map((tool, index) => (
            <motion.div
              key={tool.name}
              custom={index + 2}
              initial="hidden"
              animate="visible"
              variants={revealVariants}
              className="group flex items-center gap-3"
            >
              <tool.icon
                size={22}
                className="text-foreground/70 group-hover:text-indigo-500 transition-all duration-300 group-hover:scale-110"
              />
              <span className="text-[11px] font-bold uppercase tracking-widest text-foreground/50 group-hover:text-foreground transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
