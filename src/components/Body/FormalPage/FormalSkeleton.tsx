"use client";
import Corner from "@/components/props/Corner";

const SkeletonPulse = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-secondary/10 rounded-sm ${className}`} />
);

const FormalSkeleton = () => {
  const responsivePadding = "p-4 sm:p-6 md:p-8 lg:p-12";

  return (
    <div className="relative canvas-container mx-auto bg-card min-h-screen border-l border-r border-border-subtle flex flex-col">
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      {/* Row 1: About / Tech */}
      <section className="grid grid-cols-2 max-[1024px]:grid-cols-1 border-b border-border-subtle">
        <div className={`${responsivePadding} max-[1024px]:p-6 border-r max-[1024px]:border-r-0 max-[1024px]:border-b border-border-subtle`}>
          <div className="min-h-37.5 flex flex-col gap-4">
             <SkeletonPulse className="h-8 w-48" /> {/* Name */}
             <SkeletonPulse className="h-4 w-32" /> {/* Title */}
             <div className="flex gap-2 mt-4">
                <SkeletonPulse className="h-6 w-20" /> 
                <SkeletonPulse className="h-6 w-20" />
                <SkeletonPulse className="h-6 w-20" />
             </div>
             <div className="mt-6 space-y-2">
                <SkeletonPulse className="h-4 w-full" />
                <SkeletonPulse className="h-4 w-full" />
                <SkeletonPulse className="h-4 w-3/4" />
             </div>
          </div>
        </div>

        <div className={`${responsivePadding} max-[1024px]:p-6`}>
          <SkeletonPulse className="h-3 w-24 mb-8" />
          <div className="grid grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <SkeletonPulse key={i} className="h-12 w-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Row 2: Experience / Projects */}
      <section className="grid grid-cols-2 max-[1200px]:grid-cols-1 border-b border-border-subtle">
        <div className={`${responsivePadding} max-[1200px]:p-6 border-r max-[1200px]:border-r-0 border-border-subtle`}>
          <SkeletonPulse className="h-3 w-24 mb-6" />
          <div className="space-y-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="space-y-3">
                <SkeletonPulse className="h-6 w-1/2" />
                <SkeletonPulse className="h-4 w-1/3" />
                <SkeletonPulse className="h-20 w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className={`${responsivePadding} max-[1200px]:p-6`}>
          <SkeletonPulse className="h-3 w-24 mb-6" />
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <SkeletonPulse key={i} className="h-32 w-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Row 3: Education / Research */}
      <section className="grid grid-cols-2 max-[1200px]:grid-cols-1">
        <div className={`${responsivePadding} border-r max-[1200px]:border-r-0 border-border-subtle`}>
          <SkeletonPulse className="h-3 w-24 mb-6" />
          <SkeletonPulse className="h-48 w-full" />
        </div>
        <div className={`${responsivePadding}`}>
          <SkeletonPulse className="h-3 w-24 mb-6" />
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <SkeletonPulse key={i} className="h-16 w-full" />
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer / Contribution */}
      <section className="border-t border-border-subtle p-8">
         <SkeletonPulse className="h-40 w-full" />
      </section>
    </div>
  );
};

export default FormalSkeleton;