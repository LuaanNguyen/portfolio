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
          aria-label={`Visit my ${social.title} profile`}
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
