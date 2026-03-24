"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-background/60 backdrop-blur-md transition-opacity duration-300">
      <div className="flex flex-col items-center gap-4">
        {/* Progress Bar Container */}
        <div className="h-0.5 w-48 overflow-hidden bg-secondary/20 rounded-full relative">
          {/* Moving Indicator */}
          <div className="h-full bg-indigo-500 animate-progress-slide absolute inset-0" />
        </div>

        {/* Optional: Minimalist Text */}
        <span className="text-[10px] uppercase tracking-[0.3em] text-secondary/50 font-bold animate-pulse">
          Synchronizing
        </span>
      </div>
    </div>
  );
}
