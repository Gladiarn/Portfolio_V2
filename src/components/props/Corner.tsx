interface CornerCapProps {
  pos: "tl" | "tr" | "bl" | "br";
  className?: string;
}

const Corner = ({ pos, className = "" }: CornerCapProps) => {
  // We use -3px to perfectly center a 6px square on a 1px border
  const positions = {
    tl: "-top-[3.5px] -left-[3.5px]",
    tr: "-top-[3.5px] -right-[3.5px]",
    bl: "-bottom-[3.5px] -left-[3.5px]",
    br: "-bottom-[3.5px] -right-[3.5px]",
  };

  return (
    <div
      className={`
        absolute w-1.75 h-1.75 z-20 pointer-events-none
        bg-card border border-border-subtle 
        flex items-center justify-center
        ${positions[pos]} 
        ${className}
      `}
    >
      <div className="w-px h-px bg-foreground/40" />
    </div>
  );
};

export default Corner;
