import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { ProjectsProps } from "../../page";
import { BackgroundGradient } from "../ui/background-gradient";
import { GrLinkNext } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";

export default function Projects({ onSetExperienceSection }: ProjectsProps) {
  return (
    <div
      className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-6 col-start-5 bg-spotify-light-dark rounded-xl overflow-hidden"
      id="projects"
    >
      <div className="p-4">
        <div className="flex gap-3 justify-center">
          {/* Primary Button (Green) */}
          <button
            className="flex items-center justify-center text-sm font-bold 
            bg-spotify-green hover:bg-spotify-dark-green hover:scale-105 
            px-6 py-2.5 rounded-full gap-2 transition-all duration-200
            min-w-[180px]"
          >
            Featured Projects
            <FaArrowDown className="text-base" />
          </button>

          {/* Secondary Button (White Border) */}
          <button
            className="flex items-center justify-center text-sm font-bold 
            border border-[#727272] hover:border-white hover:scale-105 
            text-white px-6 py-2.5 rounded-full gap-2 transition-all duration-200
            animate-pulse hover:animate-none hover:bg-white hover:text-black
            shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
            min-w-[180px]"
            onClick={onSetExperienceSection}
          >
            Explore All Projects
            <GrLinkNext className="text-base" />
          </button>
        </div>
      </div>
      <StickyScroll content={projectLists} />
    </div>
  );
}

const projectLists: {
  title: string;
  description: string;
  content?: React.ReactNode | any;
}[] = [
  {
    title: "🍵 Sip n Play Café Website (Codédex Hackathon Winner)",
    description:
      "This project was created as a website revamp for Sip & Play Boardgame Cafe, with a collection of over 500+ games! Sip & Play is Park Slope's very first board game cafe, offering a wide menu of apps, sandwiches and salads along with boba, beer, wine and coffee.",
    content: (
      <a target="_blank" href="https://board-game-cafe-website.vercel.app/">
        <Image
          src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/codedex-hackathon.jpeg`}
          alt="Sip n Play Cafe Website"
          width={500}
          height={500}
        />
      </a>
    ),
  },
  {
    title: "Mine Alliance ⛏️",
    description:
      "Pioneered the development of an AI-driven platform uniting Arizona's mining stakeholders, implementing AWS infrastructure for CI/CD pipelines and integrating ChatGPT-4's API for advanced NLP. Engineered a robust full-stack solution using NextJS and Flask, incorporating geospatial visualizations and real-time environmental monitoring to promote sustainable mining practices.",
    content: (
      <a target="_blank" href="https://github.com/LuaanNguyen/epics-mern">
        <Image
          src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/Mine_Alliance.png`}
          alt="Mine Alliance"
          loading="lazy"
          width={500}
          height={300}
        />
      </a>
    ),
  },
  {
    title: "🥑 Fiber (Calhacks 2024)",
    description:
      "An AI-powered mobile application to scan the barcodes of groceries, providing comprehensive nutritional value, additives, and organic dimension for the users. This allows users to easily identify healthier options while grocery shopping.",
    content: (
      <a target="_blank" href="https://github.com/Smit2553/Fiber">
        <Image
          src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/fiber.png`}
          alt="Fiber Project"
          loading="lazy"
          width={500}
          height={300}
        />
      </a>
    ),
  },
];
