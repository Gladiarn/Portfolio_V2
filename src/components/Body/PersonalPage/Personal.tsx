"use client";

import { motion } from "framer-motion";
import Corner from "@/components/props/Corner";
import ContributionGraph from "../FormalPage/Parts/ContributionGraph";
import HeroSection from "./Parts/HeroSection";
import InformationSection from "./Parts/InformationSection";
import ProjectSection from "./Parts/ProjectSection"; // Ensure this path is correct

const personalInformation = {
  name: "Ianne Carl Bulilan",
  location: "Tanauan, Leyte, Philippines",
  title: "Full-Stack Web Developer | Junior",
  email: "bulilaniannecarl@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/gladiarn" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ianne-carl-bulilan-321421349/",
    },
    { name: "Telegram", url: "https://t.me/IanneTG" },
    {
      name: "CV",
      url: "https://www.dropbox.com/scl/fi/gztvn9t18w3jslsjgnbof/Ianne-CV.pdf?rlkey=kp003h9zfhrqkoiiu3gyl6iyl&st=3j7giyr0&dl=0",
    },
  ],
  bio: [
    "A *Full-Stack Web Developer* focused on *Next.js, TypeScript, Node.js, and Tailwind CSS*. I specialize in translating *Figma* designs into high-performance, responsive interfaces using *shadcn/ui*.",
    "I engineer full-stack platforms like *TourConnect* and *DepHelp* using *Node.js, Express, and MongoDB*. My workflow includes *Postman* for API testing and *Git* for version control, with a focus on seamless deployment via *Vercel*.",
    "I leverage *AI* to optimize user experiences, specifically integrating the *Google Gemini API* for automated support. Combining *JavaScript and Django*, I build robust infrastructure that bridges the gap between smart logic and scalable web apps.",
  ],
  techStack: [
    {
      category: "Frontend & UI",
      skills: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Zustand",
        "shadcn/ui",
        "Framer Motion",
        "Leaflet.js",
        "Chart.js",
      ],
    },
    {
      category: "Backend & Logic",
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "Django",
        "Laravel",
        "REST APIs",
        "Serverless Functions",
      ],
    },
    {
      category: "Database & Storage",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Mongoose",
        "Prisma",
        "Supabase",
        "Redis",
      ],
    },
    {
      category: "Security & Identity",
      skills: [
        "NextAuth",
        "JWT Auth",
        "Middleware",
        "OAuth 2.0",
        "Refresh Tokens",
        "bcrypt",
        "Role-Based Access (RBAC)",
      ],
    },
    {
      category: "AI & Intelligence",
      skills: [
        "Google Gemini API",
        "Prompt Engineering",
        "Automated Support Logic",
        "LLM Integration",
      ],
    },
    {
      category: "DevTools & Systems",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "VS Code",
        "Cursor IDE",
        "npm / pnpm",
        "Terminal (Zsh)",
      ],
    },
    {
      category: "Design & Prototyping",
      skills: [
        "Figma",
        "UI/UX Design",
        "Wireframing",
        "Responsive Architecture",
      ],
    },
  ],
  experiences: [
    {
      role: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      period: "Mar 2025 — Dec 2025",
      summary:
        "Built and optimized web applications for student and personal projects, focusing on **end-to-end delivery**.",
      contributions: [
        "Developed **TourConnect**, a full-stack tour booking platform using **Next.js**, **TypeScript**, **Express**, and **MongoDB**.",
        "Refactored a student thrift shop reservation system (**Django**/**React**) to improve performance and stability.",
        "Built custom portfolio websites using **Django** and **vanilla JavaScript**.",
        "Managed **database integration** and deployment lifecycles on **Vercel**.",
      ],
    },
    {
      role: "Frontend Intern (Next.js)",
      company: "Symphonics Co. Ltd.",
      period: "Feb 2025 — May 2025",
      summary:
        "Focused on modernizing **legacy systems** and developing high-fidelity user interfaces using **Next.js**.",
      contributions: [
        "Redesigned legacy systems by creating modern **UI/UX mockups** in **Figma**.",
        "Translated **Figma** designs into responsive, high-performance **Next.js** components.",
        "Maintained code quality by reviewing **pull requests** and conducting internal **code reviews**.",
        "Connected frontend interfaces with backend services via **RESTful APIs**.",
      ],
    },
  ],
  projects: [
    {
      title: "TourVan - Cloud-Based Van Tour",
      link: "https://github.com/Gladiarn/TourVan-Front",
      image: "Tour-1.PNG",
      technologies: ["ReactJS", "NodeJS", "Express", "LeafletJS"],
    },
    {
      title: "TourConnect - Full-Stack Travel Platform",
      link: "https://github.com/Gladiarn/Tour-Connect",
      image: "TourConnect-2.png",
      technologies: ["Next.js", "TypeScript", "MongoDB", "JWT"],
    },
    {
      title: "DepHelp - Depression Assessment Platform",
      link: "https://github.com/Gladiarn/Depression-Scale",
      image: "Dephelp-1.png",
      technologies: ["Next.js", "TypeScript", "NextAuth", "Mongoose"],
    },
    {
      title: "Netflix Clone - Front-End Portfolio",
      link: "https://github.com/Gladiarn/netflix-clone",
      image: "Metflix-1.png",
      technologies: ["Django", "JavaScript", "CSS"],
    },
    {
      title: "Inventory Management System (IMS)",
      link: "https://github.com/Gladiarn/IMS",
      image: "IMS-1.png",
      technologies: ["Django", "jQuery", "ChartJS"],
    },
    {
      title: "Entertainment & Logic Games",
      link: "https://github.com/Gladiarn/Chess-Game",
      image: "chessGame-1.png",
      technologies: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "BookKing - Booking Prototype",
      link: "https://github.com/Gladiarn/Booking-Website",
      image: "BookKing-1.png",
      technologies: ["React", "Framer Motion", "JSON Server"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "ACLC College of Tacloban",
      location: "Tacloban City, Leyte",
      period: "2022 — 2025",
      status: "Graduated",
      awards: [
        "Best in **HTML5 & CSS**",
        "Best in **Web Development**",
        'Best in **Capstone Presenter** with the title **"Cloud-based Van Travel and Tours Tracking and Monitoring System of Grand Tours Tacloban City"**',
      ],
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "University of Rizal System Binangonan",
      location: "Binangonan, Rizal",
      period: "2020 — 2022",
      status: "Transferred",
      awards: ["Dean's Lister (First Year)"],
    },
  ] as const,
  activeResearch: [
    {
      category: "Workflow Automation",
      index: "01",
      items: [
        { name: "n8n Automation Logic", status: "Building" },
        { name: "AI Prompt Engineering", status: "Exploring" },
      ],
    },
    {
      category: "DevOps & Infrastructure",
      index: "02",
      items: [
        { name: "Docker Containerization", status: "Learning" },
        { name: "CI/CD Pipeline Design", status: "Building" },
      ],
    },
    {
      category: "Core Engineering",
      index: "03",
      items: [
        { name: "C# Fundamentals", status: "Relearning" },
        { name: "PostgreSQL & Prisma", status: "Refining" },
      ],
    },
  ] as const,
  proficiencies: [
    { label: "Frontend Architecture", val: 93 },
    { label: "Backend Infrastructure", val: 85 },
    { label: "AI Integration (Gemini/LLM)", val: 68 },
  ],
  buildProcess: [
    {
      step: "01",
      title: "Design & Prototyping",
      desc: "Architecting the visual identity and user flow in Figma to establish a clear blueprint.",
    },
    {
      step: "02",
      title: "Decoupled UI Development",
      desc: "Building Next.js interfaces with data-mapped variables, ensuring zero hardcoding for seamless backend injection.",
    },
    {
      step: "03",
      title: "Backend & Logic Core",
      desc: "Provisioning databases followed by RESTful API endpoints, security middlewares, and server-side logic.",
    },
    {
      step: "04",
      title: "Intelligence & Deployment",
      desc: "Integrating Gemini AI for smart features before final deployment via CI/CD pipelines.",
    },
  ],
};
const responsivePadding = "p-8 sm:p-10 md:p-12";
const Personal = () => {
  // Mock data or import from a constants file

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-background min-h-screen relative canvas-container"
    >
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      <div className="w-full flex flex-col">
        {/* SECTION 1: HERO */}
        <HeroSection />

        {/* SECTION 2: IDENTITY & TECH */}
        <div className="border-l border-r border-b border-border-subtle bg-card">
          <InformationSection />
        </div>

        {/* SECTION 3: WORKS & CONTEXT */}
        <div className="border-l border-r border-b border-border-subtle bg-card">
          <ProjectSection
            projects={personalInformation.projects}
            proficiencies={personalInformation.proficiencies}
            buildProcess={personalInformation.buildProcess}
          />
        </div>

        <div
          className={`border-l border-r border-border-subtle bg-card ${responsivePadding}`}
        >
          <ContributionGraph />
        </div>
      </div>
    </motion.main>
  );
};

export default Personal;
