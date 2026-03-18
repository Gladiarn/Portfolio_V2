"use client";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiChartdotjs,
  SiLeaflet,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiLaravel,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiSupabase,
  SiRedis,
  SiJsonwebtokens,
  SiAuth0,
  SiGooglegemini,
  SiOpenai,
  SiN8N,
  SiDotnet,
  SiDocker,
} from "react-icons/si";
import {
  TbApi,
  TbLambda,
  TbShieldLock,
  TbBrain,
  TbRobot,
  TbLoaderQuarter,
} from "react-icons/tb";
import TechIcon from "./TechIcon";

const InformationSection = () => {
  const responsivePadding = "p-4 sm:p-6 md:p-8 lg:p-12";

  const TECH_STACK = [
    {
      category: "Frontend_Core",
      icons: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Framer", icon: <SiFramer /> },
        { name: "Charts", icon: <SiChartdotjs /> },
        { name: "Maps", icon: <SiLeaflet /> },
      ],
    },
    {
      category: "Backend_Infrastructure",
      icons: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "Postgres", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "Redis", icon: <SiRedis /> },
      ],
    },
    {
      category: "Intelligence_Security",
      icons: [
        { name: "Gemini", icon: <SiGooglegemini /> },
        { name: "OpenAI", icon: <SiOpenai /> },
        { name: "AI_Logic", icon: <TbBrain /> },
        { name: "REST", icon: <TbApi /> },
        { name: "Serverless", icon: <TbLambda /> },
        { name: "JWT", icon: <SiJsonwebtokens /> },
        { name: "Auth0", icon: <SiAuth0 /> },
        { name: "RBAC", icon: <TbShieldLock /> },
      ],
    },
    {
      category: "In_Progress_Integration",
      status: "learning",
      icons: [
        { name: "n8n", icon: <SiN8N /> },
        { name: ".NET", icon: <SiDotnet /> },
        { name: "Automation_AI", icon: <TbRobot /> },
        { name: "Docker", icon: <SiDocker /> },
      ],
    },
  ];

  const content = {
    label: "Identity_Protocol",
    title: "Ianne_Carl_Bulilan",
    description: [
      { text: "I am a ", type: "normal" },
      { text: "Full-Stack Web Developer", type: "bold-foreground" },
      {
        text: " specialized in transforming Figma designs into high-performance web applications. My experience spans ",
        type: "normal",
      },
      { text: "Professional Internships", type: "bold-indigo" },
      { text: " and ", type: "normal" },
      { text: "Freelance Development", type: "bold-indigo" },
      { text: ", focusing on scalable architectures using ", type: "normal" },
      { text: "Next.js, TypeScript, and Node.js.", type: "bold-foreground" },
    ],
    stats: [
      { label: "Status", val: "Available for Hire" },
      { label: "Core_Focus", val: "Full-Stack Web Systems" },
      { label: "Intelligence", val: "LLM / Gemini Integration" },
      { label: "Architecture", val: "PostgreSQL / MongoDB" },
    ],
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 relative border-border-subtle bg-card">
      {/* LEFT PANEL: The Matrix */}
      <div className={`${responsivePadding} border-r border-border-subtle`}>
        <div className="flex flex-col gap-11">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">
              System_Capabilities
            </span>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-foreground">
              Tech_Stack.
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            {TECH_STACK.map((group) => (
              <div key={group.category} className="flex flex-col gap-5">
                <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${group.status === "learning" ? "text-red-500/30" : "text-foreground/30"} px-1 border-l-2 border-indigo-500/50`}>
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.icons.map((item) => (
                    <TechIcon
                      key={item.name}
                      name={item.name}
                      icon={item.icon}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: About */}
      <div
        className={`${responsivePadding} border-t border-border-subtle lg:border-t-0`}
      >
        <div className="flex flex-col gap-12 max-w-xl">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">
              {content.label}
            </span>
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-foreground leading-none">
              {content.title}
            </h2>
          </div>

          <p className="text-[16px] text-foreground/70 leading-relaxed font-medium">
            {content.description.map((part, index) => {
              if (part.type === "bold-foreground") {
                return (
                  <span
                    key={index}
                    className="text-foreground font-black uppercase italic tracking-tight"
                  >
                    {part.text}
                  </span>
                );
              }
              if (part.type === "bold-indigo") {
                return (
                  <span
                    key={index}
                    className="text-indigo-500 font-bold uppercase italic tracking-tight"
                  >
                    {part.text}
                  </span>
                );
              }
              return <span key={index}>{part.text}</span>;
            })}
          </p>

          <div className="flex flex-col border-t border-border-subtle/30 mt-4">
            {content.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex justify-between items-center py-4 border-b border-border-subtle/20 group hover:bg-indigo-500/1 transition-colors"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 group-hover:text-indigo-500 transition-colors">
                  {stat.label}
                </span>
                <span className="text-[13px] font-bold text-foreground uppercase tracking-tight">
                  {stat.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
