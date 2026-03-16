"use client";
interface ResearchItem {
  name: string;
  status: string;
}

interface ResearchCardProps {
  category: string;
  items: readonly ResearchItem[];
}

const ResearchCard = ({ category, items }: ResearchCardProps) => {
  return (
    <div className="mb-5 last:mb-0">
      {/* Category Header - Exact pattern from Techstack */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-1 h-1 bg-indigo-500 rounded-full" />
        <h3 className="text-foreground font-bold text-[11px] uppercase tracking-wider">
          {category}
        </h3>
        <div className="h-px flex-1 bg-border-subtle/50 ml-2" />
      </div>

      {/* Items List */}
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-end justify-between group">
            <div className="flex flex-col gap-1">
              <span className="text-[14px] font-bold text-secondary group-hover:text-foreground transition-colors uppercase tracking-tight">
                {item.name}
              </span>
              <span className="text-[10px] text-secondary/70 font-medium uppercase tracking-widest">
                Focus Area // 0{i + 1}
              </span>
            </div>

            {/* Status - High Contrast UX */}
            <div className="flex flex-col items-end gap-1.5">
              <span className="text-[10px] text-secondary/60 uppercase tracking-widest font-medium">
                Phase
              </span>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-indigo-500" />
                <span className="text-[11px] text-foreground font-black uppercase tracking-widest">
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchCard;
