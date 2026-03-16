import Corner from "@/components/props/Corner";
import UpperInfo from "./Parts/UpperInfo";
import Techstack from "./Parts/Techstack";
import ExperienceCard from "./Parts/ExperienceCard";
import ProjectCard from "./Parts/ProjectCard";
import EducationCard from "./Parts/EducationCard";
import ResearchCard from "./Parts/ResearchCard";
import ContributionGraph from "./Parts/ContributionGraph";
const Formal = () => {
  const responsivePadding = "p-4 sm:p-6 md:p-8 lg:p-12";
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
      "A *Full-Stack Web Developer* focused on *Next.js, TypeScript, and Tailwind CSS*. I specialize in translating *Figma* designs into high-performance, responsive interfaces using *shadcn/ui*.",
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
          <div className="flex items-center gap-2">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/50">
              02 // Tech Stack
            </h2>
            <div className="h-px flex-1 bg-border-subtle/50" />
          </div>

          <div className="mt-8 min-h-37.5">
            {/* Passing the techStack array directly */}
            <Techstack stack={personalInformation.techStack} />
          </div>
        </div>
      </section>

      {/* Row 2: Experience / Projects (Collapses at 1200px) */}
      <section className="relative grid grid-cols-2 max-[1200px]:grid-cols-1 border-b border-border-subtle">
        <Corner pos="bl" />
        <Corner pos="br" />
        <div
          className={`${responsivePadding} max-[1200px]:p-6 border-r max-[1200px]:border-r-0 max-[1200px]:border-b border-border-subtle flex flex-col`}
        >
          <div className="flex items-center gap-2">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/50">
              03 // Experience
            </h2>
            <div className="h-px flex-1 bg-border-subtle/50" />
          </div>
          <div className="overflow-y-auto max-h-212 pr-4 mt-3">
            {personalInformation.experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                role={exp.role}
                company={exp.company}
                period={exp.period}
                summary={exp.summary}
                contributions={exp.contributions}
              />
            ))}
          </div>
        </div>
        <div className={`${responsivePadding} max-[1200px]:p-6 flex flex-col`}>
          <div className="flex items-center gap-2">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/50">
              04 // Projects
            </h2>
            <div className="h-px flex-1 bg-border-subtle/50" />
          </div>

          <div className="mt-8 overflow-y-auto max-h-212 pr-2 custom-scrollbar flex flex-col gap-4 rounded-md">
            {personalInformation.projects.map((project, index) => (
              <div key={index} className="shrink-0">
                <ProjectCard
                  title={project.title}
                  image={project.image}
                  githubUrl={project.link}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Row 3: Education / Certs (Collapses at 1200px) */}
      <section className="grid grid-cols-2 max-[1200px]:grid-cols-1">
        <div
          className={`${responsivePadding} max-[1200px]:p-6 max-[1200px]:border-b border-border-subtle`}
        >
          <div className="flex items-center gap-2">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/50">
              05 // Education
            </h2>
            <div className="h-px flex-1 bg-border-subtle/50" />
          </div>
          <div className="mt-3 min-h-25 flex flex-col">
            {personalInformation.education.map((edu, index) => (
              <EducationCard
                key={index}
                degree={edu.degree}
                institution={edu.institution}
                location={edu.location}
                period={edu.period}
                status={edu.status}
                awards={edu.awards}
              />
            ))}
          </div>
        </div>

        <div className={`${responsivePadding} max-[1200px]:p-6`}>
          <div className="flex items-center gap-2">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/50">
              06 // Active Research
            </h2>
            <div className="h-px flex-1 bg-border-subtle/50" />
          </div>
          <div className="mt-6 min-h-25 flex flex-col gap-2">
            {personalInformation.activeResearch.map((group) => (
              <ResearchCard
                key={group.index}
                category={group.category}
                items={group.items}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle last:border-b-0 border-t">
        <div className="relative bg-secondary/5 border-b border-border-subtle px-8 py-4 flex items-center justify-between">
          <Corner pos="tl" />
          <Corner pos="tr" />
          <Corner pos="bl" />
          <Corner pos="br" />
          <div className="flex items-center gap-2">
            <h3 className="text-foreground font-bold text-[11px] uppercase tracking-wider">
              07 // Development Activity
            </h3>
          </div>
          <span className="text-[10px] text-secondary/70 font-mono uppercase">
            Source: GitHub_API
          </span>
        </div>

        <div className={responsivePadding}>
          <ContributionGraph />
        </div>
      </section>
    </div>
  );
};

export default Formal;
