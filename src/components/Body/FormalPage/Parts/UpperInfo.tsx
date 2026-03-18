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
  transition-all duration-300 shadow-sm group/pic"
      >
        <Image
          src="/picture.png"
          alt="Profile"
          fill
          sizes="(max-width: 768px) 92px, (max-width: 1200px) 102px, 112px"
          priority
          className="object-cover image-render-fix grayscale-50"
        />

        {/* 2. The Reveal Curtain (Full color) */}
        <div className="absolute inset-0 z-10 h-0 group-hover/pic:h-full transition-all duration-500 ease-in-out overflow-hidden bottom-0 top-auto">
          <div className="absolute bottom-0 left-0 w-full h-23 md:h-25.5 lg:h-28">
            <Image
              src="/picture.png"
              alt="Profile Reveal"
              fill
              className="object-cover image-render-fix grayscale-0"
              sizes="(max-width: 768px) 92px, (max-width: 1200px) 102px, 112px"
            />
          </div>
          {/* Thin accent line at the top of the rising curtain */}
          <div className="absolute top-0 left-0 w-full h-px bg-indigo-500/50" />
        </div>
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
                />
              );
            })}
          </div>

          {/* Email Button */}
          <a
            href={`mailto:${personalInformation.email}`}
            className="group relative flex items-center gap-4 py-2 w-fit transition-all duration-500"
          >
            <div className="h-10 w-[1.5px] bg-indigo-500/30 group-hover:bg-indigo-500 transition-colors duration-500" />

            <div className="flex flex-col justify-center">

              <span className="text-[10px] font-black tracking-[0.3em] text-indigo-500 uppercase">
                Email Me
              </span>

              {/* 3. The Email - Sharp & Readable */}
              <span className="text-[13px] font-mono text-foreground/40 group-hover:text-foreground transition-colors duration-500">
                {personalInformation.email}
              </span>
            </div>

            {/* 4. Subtle Border Reveal (Optional, keep for structure) */}
            <div className="absolute inset-0 border border-transparent group-hover:border-border-subtle/50 -z-10 transition-all duration-500" />
          </a>
        </div>

        {/* Integrated About Section (Formerly LowerInfo) */}
        <div className="pt-9 flex flex-col gap-9">
          <div className="flex items-center gap-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/50">
              // About
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
