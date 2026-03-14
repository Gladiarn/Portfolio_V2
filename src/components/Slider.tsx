"use client";

interface SliderProps {
  isActive: boolean;
  onToggle: () => void;
  leftLabel: string;
  rightLabel: string;
  containerClass?: string;
  pillWidth?: string;
  activeTranslate?: string;
  labelClass?: string; // New prop for font size/style
}

const Slider = ({
  isActive,
  onToggle,
  leftLabel,
  rightLabel,
  containerClass = "",
  pillWidth = "w-[46%]",
  activeTranslate = "98%",
  labelClass = "text-[11px]", // Default fallback
}: SliderProps) => {
  return (
    <div
      className={`relative flex border-border-subtle border rounded-full items-center overflow-hidden group ${containerClass}`}
      onClick={onToggle}
    >
      <div
        className={`absolute h-[80%] ${pillWidth} bg-foreground rounded-full shadow-md z-0 left-1 transition-transform duration-300 ease-in-out`}
        style={{
          transform: isActive ? `translateX(${activeTranslate})` : "translateX(0)",
        }}
      />
      
      <p className={`relative z-10 uppercase font-light transition-colors duration-300 tracking-widest translate-y-px ${labelClass} ${isActive ? "text-text-secondary" : "text-background"}`}>
        {leftLabel}
      </p>
      <p className={`relative z-10 uppercase font-light transition-colors duration-300 tracking-widest translate-y-px ${labelClass} ${!isActive ? "text-text-secondary" : "text-background"}`}>
        {rightLabel}
      </p>
    </div>
  );
};

export default Slider;