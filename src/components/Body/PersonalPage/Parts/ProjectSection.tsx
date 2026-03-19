"use client";
import ProjectCard from "../../FormalPage/Parts/ProjectCard";

interface ProjectSectionProps {
  projects: any[];
  proficiencies: { label: string; val: number }[];
  buildProcess: { step: string; title: string; desc: string }[];
}

const ProjectSection = ({
  projects,
  proficiencies,
  buildProcess,
}: ProjectSectionProps) => {
  const responsivePadding = "p-8 sm:p-10 md:p-12";

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 relative bg-card">
      {/* LEFT PANEL: The System Core */}
      <div className="border-r border-border-subtle flex flex-col h-full bg-card">
        {/* TOP DIV: Technical Capabilities */}
        <div
          className={`${responsivePadding} flex flex-col gap-10 border-b border-border-subtle`}
        >
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">
              Technical_Proficiency
            </span>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-foreground leading-none">
              Skill_Mastery.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500/50 italic">
                // Logic_Distribution
              </span>
              <div className="space-y-5">
                {proficiencies.map((skill) => (
                  <div key={skill.label} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter">
                      <span className="text-foreground/60">{skill.label}</span>
                      <span className="text-indigo-500">{skill.val}%</span>
                    </div>
                    <div className="h-0.5 w-full bg-border-subtle relative overflow-hidden">
                      <div
                        className="absolute h-full bg-indigo-500 transition-all duration-1000"
                        style={{ width: `${skill.val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM DIV: Build_Strategy */}
        <div
          className={`${responsivePadding} flex-1 flex flex-col bg-card relative overflow-hidden`}
        >
          <div className="space-y-8 relative">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">
                My_Process
              </span>
              <h2 className="text-2xl font-black uppercase italic tracking-tighter text-foreground leading-none">
                How_I_Build.
              </h2>
            </div>

            <div className="flex flex-col gap-10 relative pl-6">
              <div className="absolute left-1.75 top-2 bottom-2 w-px bg-border-subtle" />

              {buildProcess.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-5 top-6.5 w-2 h-2 bg-indigo-500 rotate-45" />
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono font-bold text-indigo-500/40 uppercase">
                      Phase_{item.step}
                    </span>
                    <h4 className="text-[13px] font-black uppercase text-foreground leading-none">
                      {item.title}
                    </h4>
                    <p className="text-[12px] text-foreground/50 leading-snug max-w-60">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Project Feed */}
      <div className={`${responsivePadding} flex flex-col gap-10`}>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">
            Resource_Gallery
          </span>
          <h2 className="text-2xl font-black uppercase italic tracking-tighter text-foreground leading-none">
            Project_Index.
          </h2>
        </div>

        <div className="overflow-y-auto max-h-195 pr-2 custom-scrollbar flex flex-col gap-4">
          {projects.map((project, index) => (
            <div key={index} className="shrink-0">
              <ProjectCard
                title={project.title}
                image={project.image}
                githubUrl={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
