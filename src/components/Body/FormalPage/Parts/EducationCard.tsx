"use client";
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface EducationProps {
  degree: string;
  institution: string;
  period: string;
  location: string;
  status?: "Graduated" | "Transferred";
  awards?: readonly string[];
}

const EducationCard = ({
  degree,
  institution,
  period,
  location,
  status,
  awards,
}: EducationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderBoldText = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-bold text-foreground mx-0.5">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <button
      className="w-full text-left border-b border-border-subtle/50 last:border-0 group cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="py-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-foreground font-bold text-[16px] group-hover:text-indigo-500 transition-colors">
              {degree}
            </h3>
            {status && (
              <span
                className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border 
                ${
                  status === "Graduated"
                    ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-500"
                    : "bg-secondary/5 border-secondary/20 text-secondary/60"
                }`}
              >
                {status}
              </span>
            )}
          </div>
          <p className="text-secondary/70 text-[12px] uppercase tracking-wider mt-1">
            {institution}
          </p>
          <p className="text-secondary/50 text-[12px] mt-1 italic">
            {location}
          </p>
        </div>

        <div className="flex items-center gap-4 pt-1">
          <span className="text-secondary/50 text-[12px] font-mono whitespace-nowrap">
            {period}
          </span>
          {awards && awards.length > 0 && (
            <LuChevronDown
              className={cn(
                "text-secondary/50 transition-transform duration-300",
                isOpen && "rotate-180",
              )}
            />
          )}
        </div>
      </div>

      {/* Expanded Awards Section */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen && awards
            ? "grid-rows-[1fr] pb-6 opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-2 border-l-2 border-indigo-500/20 ml-1 pl-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-500/60 mb-1">
              Honors & Recognition
            </p>
            {awards?.map((award, i) => (
              <li
                key={i}
                className="text-secondary/90 text-[13px] leading-relaxed relative"
              >
                <span className="text-indigo-500 absolute -left-5.75">•</span>
                {renderBoldText(award)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </button>
  );
};

export default EducationCard;
