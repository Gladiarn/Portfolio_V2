import Corner from "@/components/props/Corner";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { PiTelegramLogo, PiXLogo } from "react-icons/pi";
import SocialButton from "@/components/Buttons/SocialButton";
import { CgMail } from "react-icons/cg";
import UpperInfo from "./Parts/UpperInfo";

const Formal = () => {
  const responsivePadding = "p-4 sm:p-6 md:p-8 lg:p-12";
  const collapsedPadding = "max-[1200px]:p-6 max-[1024px]:p-5";
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
      { name: "X", url: "https://x.com/iannetg" },
    ],
    bio: [
      "A *Full-Stack Web Developer* focused on *Next.js, TypeScript, and Tailwind CSS*. I specialize in translating *Figma* designs into high-performance, responsive interfaces using *shadcn/ui*.",
      "I engineer full-stack platforms like *TourConnect* and *DepHelp* using *Node.js, Express, and MongoDB*. My workflow includes *Postman* for API testing and *Git* for version control, with a focus on seamless deployment via *Vercel*.",
      "I leverage *AI* to optimize user experiences, specifically integrating the *Google Gemini API* for automated support. Combining *JavaScript and Django*, I build robust infrastructure that bridges the gap between smart logic and scalable web apps.",
    ],
  };
  const SOCIAL_CONFIG = {
    GitHub: { icon: FiGithub, color: "#333333" },
    LinkedIn: { icon: FiLinkedin, color: "#0077b5" },
    Telegram: { icon: PiTelegramLogo, color: "#0088cc" },
    X: { icon: PiXLogo, color: "#000000" },
  };
  return (
    <div className="relative canvas-container mx-auto bg-card min-h-screen border-l border-r border-b border-border-subtle flex flex-col">
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      {/* Row 1: About / Tech (Collapses at 1024px) */}
      <section className="grid grid-cols-2 max-[1024px]:grid-cols-1 border-b border-border-subtle">
        <div
          className={`${responsivePadding} max-[1024px]:p-6 border-r max-[1024px]:border-r-0 max-[1024px]:border-b border-border-subtle`}
        >
          <div className="min-h-37.5 flex flex-col">
            {/* includes lower info, forgot to change name */}
            <UpperInfo personalInformation={personalInformation} />
          </div>
        </div>

        <div className={`${responsivePadding} max-[1024px]:p-6`}>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/50">
            02 // Tech Stack
          </h2>
          <div className="mt-6 min-h-37.5">{/* Tech Stack Content */}</div>
        </div>
      </section>

      {/* Row 2: Experience / Projects (Collapses at 1200px) */}
      <section className="grid grid-cols-2 max-[1200px]:grid-cols-1 border-b border-border-subtle">
        <div
          className={`${responsivePadding} max-[1200px]:p-6 border-r max-[1200px]:border-r-0 max-[1200px]:border-b border-border-subtle`}
        >
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/50">
            03 // Experience
          </h2>
          <div className="mt-6 min-h-50">{/* Experience Content */}</div>
        </div>
        <div className={`${responsivePadding} max-[1200px]:p-6`}>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/50">
            04 // Projects
          </h2>
          <div className="mt-6 min-h-50">{/* Projects Content */}</div>
        </div>
      </section>

      {/* Row 3: Education / Certs (Collapses at 1200px) */}
      <section className="grid grid-cols-2 max-[1200px]:grid-cols-1">
        <div
          className={`${responsivePadding} max-[1200px]:p-6 border-r max-[1200px]:border-r-0 max-[1200px]:border-b border-border-subtle`}
        >
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/50">
            05 // Education
          </h2>
          <div className="mt-6 min-h-25">{/* Education Content */}</div>
        </div>
        <div className={`${responsivePadding} max-[1200px]:p-6`}>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/50">
            06 // Certifications
          </h2>
          <div className="mt-6 min-h-25">{/* Certs Content */}</div>
        </div>
      </section>
    </div>
  );
};

export default Formal;
