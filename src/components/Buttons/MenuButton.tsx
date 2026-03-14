"use client";

const MenuButton = ({
  isOpen,
  onClick,
  cn,
}: {
  isOpen: boolean;
  onClick: () => void;
  cn?: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative h-3 w-4 group cursor-pointer ${cn}`}
      aria-label="Toggle Menu"
    >
      <span
        className={`
        absolute left-0 block h-px w-4 bg-foreground transition-all duration-300
        ${isOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"}
      `}
      />

      {/* Middle Line */}
      <span
        className={`
        absolute left-0 top-1/2 -translate-y-1/2 block h-px w-4 bg-foreground transition-all duration-200
        ${isOpen ? "opacity-0" : "opacity-100"}
      `}
      />

      {/* Bottom Line */}
      <span
        className={`
        absolute left-0 block h-px w-4 bg-foreground transition-all duration-300
        ${isOpen ? "-rotate-45 bottom-1/2 translate-y-1/2" : "bottom-0"}
      `}
      />

      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[9px] uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-40 transition-opacity whitespace-nowrap pointer-events-none">
        {isOpen ? "Close" : "Menu"}
      </span>
    </button>
  );
};

export default MenuButton;
