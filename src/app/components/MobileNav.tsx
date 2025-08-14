import SocialLinks from "./SocialLinks";
import NavButton from "./NavButton";
import { LuNewspaper } from "react-icons/lu";
import Link from "next/link";

interface MobileNavProps {
  handleMobile: () => void;
}

export default function MobileNav({ handleMobile }: MobileNavProps) {
  const links = [
    // { section: "Profile", href: "#profile" },
    { section: "Experience", href: "#experience" },
    { section: "Programming Languages", href: "#programming-languages" },
    { section: "Projects", href: "#project" },
    { section: "Contributions", href: "#contribution" },
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
          <a
            href={link.href}
            className="text-spotify-white text-lg font-semibold hover:text-spotify-green transition-colors duration-200"
          >
            {link.section}
          </a>
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
        <NavButton name="Resume"></NavButton>
      </div>
    </nav>
  );
}
