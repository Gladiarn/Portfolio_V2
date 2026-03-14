"use client";

interface SliderProps {
  isActive: boolean;
  onToggle: () => void;
  leftLabel: string;
  rightLabel: string;
  containerClass?: string;
  pillWidth?: string;
  activeTranslate?: string;
  labelClass?: string;
}

const Slider = ({
  isActive,
  onToggle,
  leftLabel,
  rightLabel,
  containerClass = "",
  pillWidth = "w-[46%]",
  activeTranslate = "98%",
  labelClass = "text-[11px]",
}: SliderProps) => {
  return (
    <div
      className={`relative flex border-border-subtle border rounded-full items-center overflow-hidden group ${containerClass}`}
      onClick={onToggle}
    >
      {/* THE PILL */}
      <div
        className={`absolute h-[80%] ${pillWidth} bg-foreground rounded-full shadow-md z-0 left-1 transition-transform duration-300 ease-in-out`}
        style={{
          transform: isActive ? `translateX(${activeTranslate})` : "translateX(0)",
        }}
      />
      
      {/* LEFT LABEL */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <p className={`uppercase font-light transition-colors duration-300 tracking-widest leading-none ${labelClass} ${isActive ? "text-text-secondary" : "text-background"}`}>
          {leftLabel}
        </p>
      </div>

      {/* RIGHT LABEL */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <p className={`uppercase font-light transition-colors duration-300 tracking-widest leading-none ${labelClass} ${!isActive ? "text-text-secondary" : "text-background"}`}>
          {rightLabel}
        </p>
      </div>
    </div>
  );
};

export default Slider;