import { ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TrackedLink } from "./analytics/TrackedLink";

export default function SocialLinks() {
  return (
    <>
      {socialMedias.map((social) => (
        <TrackedLink
          href={social.url}
          className="text-3xl md:hover:text-spotify-green transition-colors duration-200"
          key={social.title}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${social.title} profile`}
          analyticsEvent="social_link_click"
          analyticsData={{ platform: social.title, placement: "navigation" }}
        >
          {social.icon}
        </TrackedLink>
      ))}
    </>
  );
}

type socialMediasProps = {
  title: string;
  url: string;
  icon: ReactNode;
}[];

const socialMedias: socialMediasProps = [
  {
    title: "Github",
    url: "https://github.com/LuaanNguyen",
    icon: <FaGithub />,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/luaanng",
    icon: <FaLinkedin />,
  },
  {
    title: "X",
    url: "https://x.com/luaan_ng",
    icon: <FaSquareXTwitter />,
  },
];
