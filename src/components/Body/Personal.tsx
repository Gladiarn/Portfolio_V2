import Corner from "../props/Corner";

const Personal = () => {
  return (
    <div className="canvas-container relative mx-auto bg-card h-screen p-4 sm:p-6 md:p-8 lg:p-12 border-l border-r border-b border-border-subtle">
      {/* design */}
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      <div className="opacity-40 text-[10px] uppercase tracking-widest">
        Section // Personal
      </div>
    </div>
  );
};

export default Personal;
