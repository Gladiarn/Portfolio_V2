import React from "react";

interface WorkHeaderProps {
  count: number;
}

const WorkHeader = ({ count }: WorkHeaderProps) => (
  <header className="p-6 md:p-10 lg:p-12 border-b border-border-subtle bg-card">
    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-4 uppercase">
      Work<span className="text-indigo-500">.</span>
    </h1>
    <div className="flex items-center gap-4">
      <div className="h-px w-8 bg-indigo-500" />
      <p className="text-[10px] font-mono text-secondary/50 uppercase tracking-[0.4em]">
        Registry // {count} Total Artifacts
      </p>
    </div>
  </header>
);

export default WorkHeader;