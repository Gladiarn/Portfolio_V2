import React from "react";

interface TechGroup {
  category: string;
  skills: string[];
}

interface TechstackProps {
  stack: TechGroup[];
}

const Techstack = ({ stack }: TechstackProps) => {
  return (
    // vertical if mobile grid 2 column if not
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
      {stack.map((group) => (
        <div key={group.category} className="flex flex-col gap-3">
          {/* Category Header */}
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-indigo-500 rounded-full" />
            <h3 className="text-foreground font-bold text-[10px] uppercase tracking-wider">
              {group.category}
            </h3>
          </div>

          {/* Pills */}
          <div className="flex flex-wrap gap-1.5">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-card border border-border-subtle text-secondary/80 text-[11px] 
                           hover:border-foreground/30 hover:text-foreground
                        rounded-sm shadow-sm whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Techstack;
