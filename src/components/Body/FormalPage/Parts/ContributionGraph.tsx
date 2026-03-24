"use client";
import { useCallback, useEffect, useState, useMemo } from "react";
import { GitHubCalendar } from "react-github-calendar";

// Move static data outside to prevent re-renders on every parent update
const YEARS = [2026, 2025, 2024];

const ContributionGraph = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [liveStats, setLiveStats] = useState({
    total: 0,
    currentStreak: 0,
    longestStreak: 0,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Stable theme object
  const theme = useMemo(() => ({
    dark: ["#eeeeee", "#818cf8", "#6366f1", "#4f46e5", "#3730a3"],
    light: ["#eeeeee", "#818cf8", "#6366f1", "#4f46e5", "#3730a3"],
  }), []);

  const processData = useCallback((contributions: any[]) => {
    // 1. Calculate everything in one pass
    let total = 0;
    let longest = 0;
    let current = 0;
    let tempStreak = 0;

    for (let i = 0; i < contributions.length; i++) {
      const count = contributions[i].count;
      total += count;
      tempStreak = count > 0 ? tempStreak + 1 : 0;
      if (tempStreak > longest) longest = tempStreak;
    }

    // 2. Calculate Current Streak (Backwards from today)
    const lastIdx = contributions.length - 1;
    if (contributions[lastIdx]?.count > 0 || (lastIdx > 0 && contributions[lastIdx - 1]?.count > 0)) {
      for (let i = lastIdx; i >= 0; i--) {
        if (contributions[i].count > 0) current++;
        else if (i !== lastIdx) break;
      }
    }

    // 3. THE FIX: requestAnimationFrame defers the state update until AFTER the 
    // browser has finished the heavy lifting of rendering the SVG grid.
    requestAnimationFrame(() => {
      setLiveStats((prev) => {
        // Only trigger a re-render if the numbers actually changed
        if (prev.total === total && prev.currentStreak === current && prev.longestStreak === longest) {
          return prev;
        }
        return { total, currentStreak: current, longestStreak: longest };
      });
    });

    return contributions;
  }, []);

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="max-w-137.5">
          <p className="text-[14px] text-secondary leading-relaxed">
            <span className="text-indigo-500 font-black mr-2 uppercase tracking-widest text-[12px]">
              {"Heatmap //"}
            </span>
            A visual representation of my creative output and technical growth
            over the years. Each square maps a 24-hour cycle; the intensity of
            the color indicates the volume of code pushed, systems built, and
            problems solved on that day.
          </p>
        </div>

        {/* MOBILE ONLY BUTTONS */}
        <div className="flex lg:hidden gap-2">
          {YEARS.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => setSelectedYear(year)}
              className={`px-3 py-1 text-[9px] font-bold uppercase transition-all rounded-sm border ${
                selectedYear === year
                  ? "bg-foreground text-background border-foreground"
                  : "text-secondary/70 border-border-subtle/50"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="grow overflow-x-auto py-2 scrollbar-hide border-r border-border-subtle/20 pr-6 max-lg:border-r-0 max-lg:pr-0">
          {isMounted ? (
            <GitHubCalendar
              username="Gladiarn"
              year={selectedYear}
              blockSize={15}
              blockMargin={5}
              fontSize={12}
              theme={theme}
              showWeekdayLabels
              transformData={processData}
            />
          ) : (
            <div className="h-38.75 w-full bg-secondary/5 animate-pulse rounded-sm" />
          )}
        </div>

        {/* DESKTOP ONLY SIDEBAR */}
        <div className="flex flex-col gap-1.5 shrink-0 min-w-17.5 max-lg:hidden">
          <span className="text-[8px] text-secondary/40 uppercase font-black tracking-widest mb-1 ml-1">
            Index
          </span>
          {YEARS.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => setSelectedYear(year)}
              className={`px-3 py-2 text-[11px] font-bold uppercase transition-all rounded-sm border ${
                selectedYear === year
                  ? "bg-foreground text-background border-foreground"
                  : "text-secondary/70 border-border-subtle/50 hover:border-indigo-500"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border-subtle/50 pt-10 mt-10 justify-items-center">
        {[
          { label: "Total Contributions", value: liveStats.total },
          { label: "Active Period", value: "2024 — Pres." },
          { label: "Current Streak", value: `${liveStats.currentStreak} Days` },
          { label: "Longest Streak", value: `${liveStats.longestStreak} Days` },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1.5 text-center"
          >
            <span className="text-[10px] text-secondary/60 uppercase tracking-widest font-medium">
              {stat.label}
            </span>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-indigo-500 rounded-full" />
              <span className="text-[16px] font-bold text-foreground tracking-tight">
                {stat.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributionGraph;