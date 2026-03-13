import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";
import { PiTelegramLogo, PiGithubLogo } from "react-icons/pi";
import { MdOutlineContentCopy } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
const SOCIAL_LINKS = [
  {
    id: 1,
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourname",
    icon: FiLinkedin,
  },
  {
    id: 2,
    name: "GitHub",
    href: "https://github.com/yourname",
    icon: PiGithubLogo,
  },
  {
    id: 3,
    name: "Telegram",
    href: "https://t.me/yourname",
    icon: PiTelegramLogo,
  },
];

const NAVIGATIONS = ["About", "Projects", "Experience"];

const Navbar = () => {
  return (
    <nav className="w-full bg-background">
      {/* socials main container*/}
      <div className="bg-card border-b border-border-subtle flex h-9">
        {/* socials inner container */}
        <div className="flex canvas-container items-center justify-end">

            
          <div className="flex gap-3 items-center">
            <button className="bg-foreground hover:bg-foreground-hover py-1 px-2.5 rounded-full flex items-center">
                <p className="text-[11px] tracking-wide text-background font-medium">Download CV</p>
            </button>
            <div className="w-px h-4.5 bg-border-subtle"></div>
            {/* socials links */}
            {SOCIAL_LINKS.map((link, index) => (
              <a href={link.href} key={index} target="_blank">
                <link.icon
                  size={16}
                  className="text-secondary/75 hover:text-secondary"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* main nav container */}
      <div className="bg-background border-b border-border-subtle h-16.5 flex items-center">
        {/* main nav inner container */}
        <div className="flex canvas-container items-center justify-between ">
          {/* navigation */}
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <p className="text-xs font-medium text-foreground/75 hover:text-foreground tracking-wide -translate-y-px">
                bulilaniannecarl@gmail.com
              </p>
            </div>

            <div className="w-px h-4.5 bg-border-subtle"></div>

            <div className="flex gap-8">
              {NAVIGATIONS.map((nav, index) => (
                <Link
                  href={""}
                  key={index}
                  className="text-foreground/65 font-medium text-[14.5px] tracking-wide hover:text-foreground"
                >
                  {nav}
                </Link>
              ))}
            </div>
          </div>

          {/* call to actions */}
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
