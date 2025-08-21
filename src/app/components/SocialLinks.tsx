import { ReactNode } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <>
      {socialMedias.map((social) => (
        <Link
          href={social.url}
          className="text-3xl hover:text-spotify-green"
          key={social.title}
          target="_blank"
        >
          {social.icon}
        </Link>
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
    title: "X",
    url: "https://x.com/LuanNgu8855474",
    icon: <FaSquareXTwitter />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/luannuen/",
    icon: <FaInstagram />,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/luaanng/",
    icon: <FaLinkedin />,
  },
  {
    title: "Github",
    url: "https://github.com/LuaanNguyen",
    icon: <FaGithub />,
  },
];
