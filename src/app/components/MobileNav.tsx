"use client";

import SocialLinks from "./SocialLinks";
import { LuNewspaper } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  handleMobile: () => void;
}

export default function MobileNav({ handleMobile }: MobileNavProps) {
  const pathname = usePathname();
  const isOnBlogPage = pathname?.startsWith("/blog");

  const links = [
    {
      section: "Experience",
      href: isOnBlogPage ? "/#experience" : "#experience",
    },
    {
      section: "Programming Languages",
      href: isOnBlogPage ? "/#programming-languages" : "#programming-languages",
    },
    { section: "Projects", href: isOnBlogPage ? "/#project" : "#project" },
    {
      section: "Contributions",
      href: isOnBlogPage ? "/#contribution" : "#contribution",
    },
  ];

  return (
    <nav className="bg-spotify-light-dark flex flex-col text-left sm:hidden overflow-hidden animate-in slide-in-from-top-2 duration-300 ease-out">
      {/* Portfolio Sections */}
      {links.map((link, index) => (
        <div
          key={index}
          className="p-4 hover:bg-spotify-green/10 rounded-lg transition-all duration-200 ease-in-out hover:translate-x-2 animate-in slide-in-from-left-2"
          style={{
            animationDelay: `${(index + 1) * 100}ms`,
            animationFillMode: "both",
          }}
          onClick={handleMobile}
        >
          <Link
            href={link.href}
            className="text-spotify-white text-lg font-semibold hover:text-spotify-green transition-colors duration-200"
          >
            {link.section}
          </Link>
        </div>
      ))}

      <div
        className="p-4 hover:bg-spotify-green/10 rounded-lg transition-all duration-200 ease-in-out hover:translate-x-2 animate-in slide-in-from-left-2  border-spotify-green/10"
        style={{
          animationDelay: "0ms",
          animationFillMode: "both",
        }}
        onClick={handleMobile}
      >
        <Link
          href="/blog"
          className="flex items-center space-x-3 text-spotify-white text-lg font-semibold hover:text-spotify-green transition-colors duration-200"
          aria-label="View blog posts"
        >
          <LuNewspaper className="text-xl" />
          <span>Blog</span>
        </Link>
      </div>

      {/* Social Links and Resume */}
      <div
        className="flex flex-row gap-5 p-3 items-center justify-center animate-in slide-in-from-bottom-2  border-spotify-green/10"
        style={{
          animationDelay: `${(links.length + 1) * 100}ms`,
          animationFillMode: "both",
        }}
      >
        <SocialLinks />
      </div>
    </nav>
  );
}
