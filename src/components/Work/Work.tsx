"use client";

import Corner from "@/components/props/Corner";
import WorkHeader from "./Parts/WorkHeader";
import WorkHero from "./Parts/WorkHero";
import WorkGridCard from "./Parts/WorkGridCard";

// Mock Data - You can eventually move this to a /data/projects.ts file
const projects = [
  {
    id: "01",
    title: "TourConnect",
    image: "projects/TourConnect-2.png",
    link: "#",
    tags: ["Next.js", "MongoDB", "Express"],
  },
  {
    id: "02",
    title: "DepHelp",
    image: "projects/Dephelp-1.png",
    link: "#",
    tags: ["Gemini AI", "Next.js", "Mongoose"],
  },
  {
    id: "03",
    title: "TourVan",
    image: "projects/Tour-1.PNG",
    link: "#",
    tags: ["React", "LeafletJS", "NodeJS"],
  },
  {
    id: "04",
    title: "IMS",
    image: "projects/IMS-1.png",
    link: "#",
    tags: ["Django", "ChartJS", "PostgreSQL"],
  },
  {
    id: "05",
    title: "Metaflix",
    image: "projects/Metflix-1.png",
    link: "#",
    tags: ["Django", "JavaScript"],
  },
  {
    id: "06",
    title: "Chess Engine",
    image: "projects/chessGame-1.png",
    link: "#",
    tags: ["React", "TypeScript"],
  },
  {
    id: "07",
    title: "BookKing",
    image: "projects/BookKing-1.png",
    link: "#",
    tags: ["Framer", "React"],
  },
];
const responsivePadding = "p-8 sm:p-10 md:p-12";
const WorkPage = () => {
  const latestProject = projects[0];
  const archiveProjects = projects.slice(1);

  return (
    <div className="relative canvas-container mx-auto bg-card min-h-screen border-l border-r border-border-subtle flex flex-col">
      <Corner pos="tl" /> <Corner pos="tr" />
      <Corner pos="bl" /> <Corner pos="br" />
      <WorkHeader count={projects.length} />
      <WorkHero project={latestProject} />
      <section className={`bg-card/30 ${responsivePadding}`}>
        {/* The padding above prevents the cards from touching the page border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {archiveProjects.map((project, index) => (
            <WorkGridCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
