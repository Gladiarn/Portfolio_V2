"use client";
import { useState, useEffect, useCallback } from "react";
import { GitHubCalendar } from "react-github-calendar";

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

  const theme = {
    dark: ["#eeeeee", "#818cf8", "#6366f1", "#4f46e5", "#3730a3"],
    light: ["#eeeeee", "#818cf8", "#6366f1", "#4f46e5", "#3730a3"],
  };

  const processData = useCallback((contributions: any[]) => {
    let total = 0,
      current = 0,
      longest = 0,
      tempStreak = 0;

    contributions.forEach((day) => {
      total += day.count;
      tempStreak = day.count > 0 ? tempStreak + 1 : 0;
      if (tempStreak > longest) longest = tempStreak;
    });

    // Check last two days to determine if streak is active
    const lastIdx = contributions.length - 1;
    if (
      contributions[lastIdx].count > 0 ||
      contributions[lastIdx - 1]?.count > 0
    ) {
      for (let i = lastIdx; i >= 0; i--) {
        if (contributions[i].count > 0) current++;
        else if (i !== lastIdx) break;
      }
    }

    setTimeout(
      () =>
        setLiveStats({ total, currentStreak: current, longestStreak: longest }),
      0,
    );
    return contributions;
  }, []);

  const years = [2026, 2025, 2024];

  return (
    <div className="w-full">
      <div className="mb-10 max-w-137.5">
        <p className="text-[11px] text-secondary/70 uppercase tracking-widest leading-relaxed">
          <span className="text-indigo-500 font-black mr-2">Heatmap //</span>A
          visual index of development velocity. Each node maps a 24-hour cycle,
          where color depth correlates to commit density and system activity.
        </p>
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

        <div className="flex flex-col gap-1.5 shrink-0 min-w-17.5 max-lg:hidden">
          <span className="text-[8px] text-secondary/40 uppercase font-black tracking-widest mb-1 ml-1">
            Index
          </span>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-3 py-2 text-[10px] font-bold uppercase transition-all rounded-sm border ${
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border-subtle/50 pt-10 mt-10 justify-items-center">
        {[
          { label: "Total Contributions", value: liveStats.total },
          { label: "Active Period", value: "2024 — Pres." },
          { label: "Current Streak", value: `${liveStats.currentStreak} Days` },
          { label: "Longest Streak", value: `${liveStats.longestStreak} Days` },
        ].map((stat, i) => (
          <div
            key={i}
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
