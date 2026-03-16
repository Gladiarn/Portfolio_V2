"use client";
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface ExperienceProps {
  role: string;
  company: string;
  period: string;
  summary: string;
  contributions: string[];
}

const ExperienceCard = ({
  role,
  company,
  period,
  summary,
  contributions,
}: ExperienceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const renderBoldText = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-bold text-foreground">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };
  return (
    <div
      className="border-b border-border-subtle/50 last:border-0 group"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Header Section: Always Visible */}
      <div className="py-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-foreground font-bold text-[16px] group-hover:text-indigo-500 transition-colors">
            {role}
          </h3>
          <p className="text-secondary/70 text-[12px] uppercase tracking-wider mb-2">
            {company}
          </p>

          <p className="text-secondary text-[14px] leading-relaxed max-w-[95%]">
            {renderBoldText(summary)}
          </p>
        </div>

        <div className="flex items-center gap-4 pt-1">
          <span className="text-secondary/50 text-[12px] font-mono whitespace-nowrap">
            {period}
          </span>
          <LuChevronDown
            className={cn(
              "text-secondary/50 transition-transform duration-300",
              isOpen && "rotate-180",
            )}
          />
        </div>
      </div>

      {/* Expanded Content: Contributions Only */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen
            ? "grid-rows-[1fr] pb-8 opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-3 border-l-2 border-indigo-500/20 ml-1 pl-5 mt-2">
            {contributions.map((point, i) => (
              <li
                key={i}
                className="text-secondary text-[14px] leading-relaxed relative"
              >
                <span className="text-indigo-500 absolute -left-5.75">•</span>
                {renderBoldText(point)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
