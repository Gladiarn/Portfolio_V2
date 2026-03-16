"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import SocialButton from "@/components/Buttons/SocialButton";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { PiTelegramLogo, PiXLogo } from "react-icons/pi";
import { SiReaddotcv } from "react-icons/si";

interface Social {
  name: string;
  url: string;
}

interface UpperInfoProps {
  personalInformation: {
    name: string;
    location: string;
    title: string;
    email: string;
    socials: Social[];
    bio: string[];
  };
}

const SOCIAL_CONFIG = {
  GitHub: { icon: FiGithub, color: "#333333" },
  LinkedIn: { icon: FiLinkedin, color: "#0077b5" },
  Telegram: { icon: PiTelegramLogo, color: "#0088cc" },
  CV: { icon: SiReaddotcv, color: "#0061FF" },
};

const UpperInfo = ({ personalInformation }: UpperInfoProps) => {
  // Helper to turn "*text*" into <span className="text-foreground font-medium">text</span>
  const formatText = (text: string) => {
    const parts = text.split(/\*(.*?)\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <span key={i} className="text-foreground font-medium">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div className="flex gap-5 min-[410px]:flex-row flex-col">
      {/* Picture Container */}
      <div
        className="relative overflow-hidden rounded-md bg-muted shrink-0 
        h-23 w-23 md:h-25.5 md:w-25.5 lg:h-28 lg:w-28 
        transition-all duration-300 shadow-sm"
      >
        <Image
          src="/picture.png"
          alt="Profile"
          fill
          sizes="(max-width: 768px) 92px, (max-width: 1200px) 102px, 112px"
          priority
          className="object-cover image-render-fix grayscale-30 hover:grayscale-0"
        />
      </div>

      {/* Information Container */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Top Header Section */}
        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-[clamp(24px,3vw,32px)] font-bold tracking-tight leading-tight flex items-center gap-2">
              {personalInformation.name}
              <span
                className="inline-flex rounded-full bg-indigo-500 w-3.75 h-3.75 justify-center items-center translate-y-0.5"
                aria-hidden="true"
              >
                <FaCheck size={9} className="text-card" />
              </span>
            </h1>
            <div className="flex gap-1 items-center">
              <CiLocationOn className="text-secondary" />
              <p className="text-secondary text-[13px] tracking-wide">
                {personalInformation.location}
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-[14px]">
              {personalInformation.title}
            </p>
          </div>

          {/* Socials Container */}
          <div className="flex gap-3 mt-2">
            {personalInformation.socials.map((social) => {
              const config =
                SOCIAL_CONFIG[social.name as keyof typeof SOCIAL_CONFIG];
              return (
                <SocialButton
                  key={social.name}
                  name={social.name}
                  href={social.url}
                  icon={config.icon}
                  brandColor={config.color}
                />
              );
            })}
          </div>

          {/* Email Button */}
          <a
            href={`mailto:${personalInformation.email}`}
            className="mt-2 relative flex h-10 w-25 items-center justify-center overflow-hidden rounded-md bg-foreground text-[10px] font-bold uppercase tracking-[0.2em] transition-all! duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group hover:w-50 hover:border-accent"
          >
            <span className="flex items-center gap-2 text-background absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all! duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-left-full group-hover:text-accent whitespace-nowrap">
              <CgMail size={13} />
              Email Me
            </span>
            <span className="text-background absolute -right-[150%] top-1/2 -translate-y-1/2 translate-x-1/2 font-mono text-[11px] lowercase tracking-normal transition-all! duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:right-1/2 group-hover:text-accent whitespace-nowrap">
              {personalInformation.email}
            </span>
          </a>
        </div>

        {/* Integrated About Section (Formerly LowerInfo) */}
        <div className="pt-9 flex flex-col gap-9">
          <div className="flex items-center gap-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/50">
              01 // About
            </p>
            <div className="h-px flex-1 bg-border-subtle/50" />
          </div>

          <div className="text-secondary text-[14px] leading-relaxed max-w-150 space-y-4">
            {personalInformation.bio.map((paragraph, index) => (
              <p key={index}>{formatText(paragraph)}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperInfo;
