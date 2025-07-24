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
            px-5 py-2 rounded-full gap-2 transition-all duration-200
            min-w-[180px]"
          >
            Featured Projects
            <FaArrowDown className="text-base" />
          </button>

          {/* Secondary Button (White Border) */}
          <button
            className="flex items-center justify-center text-sm font-bold 
            border border-[#727272] hover:border-white hover:scale-105 
            text-white px-5 py-2 rounded-full gap-2 transition-all duration-200
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
    title: "Brainrot Master Vault (HackPrinceton 2025 Winner 🏆)",
    description:
      "BrainRot Master Vault turns short-form videos into AI-curated podcast episodes and knowledge graphs. Built at HackPrinceton 2025, it filters for quality insights using Whisper, Gemini, and Phi-3, and won Best Self-Hosted Inference.",
    content: (
      <a target="_blank" href="https://www.brainrotmastervaultovercooked.tech/">
        <Image
          src={`/gallery.jpg`}
          alt="Brainrot Master Vault Website"
          width={500}
          height={500}
        />
      </a>
    ),
  },
  {
    title: " 📚 rateourclub.com",
    description:
      "rateourclub.com is a community-driven platform where students can rate and review 100+ college organizations. Built with Next.js, TailwindCSS, and Firebase, it offers a fast, responsive UI and real-time feedback system hosted on an Ubuntu server.",
    content: (
      <a target="_blank" href="https://rateourclub.com">
        <Image
          src={`/rateourclub.png`}
          alt="rateourclub.com"
          loading="lazy"
          width={500}
          height={300}
        />
      </a>
    ),
  },
  {
    title: "🍵 Sip n Play Café Website (Codédex Hackathon Winner)",
    description:
      "Sip & Play is an interactive website for a NYC board game café, featuring a 500+ game catalog and a 3D animated menu built with React, Three.js, and TailwindCSS. Designed for an immersive UX, it won Best UI/UX Design at the Codédex Hackathon.",
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
      "Mine Alliance is a platform that connects Arizona’s mining communities, corporations, and regulators through real-time data and environmental insights. Built with Next.js, Flask, and AWS, it features interactive maps and GPT-4o–powered analysis to promote sustainable mining. Winner of the Spark Challenge Hackathon.",
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
  // {
  //   title: "🥑 Fiber (Calhacks 2024)",
  //   description:
  //     "An AI-powered mobile application to scan the barcodes of groceries, providing comprehensive nutritional value, additives, and organic dimension for the users. This allows users to easily identify healthier options while grocery shopping.",
  //   content: (
  //     <a target="_blank" href="https://github.com/Smit2553/Fiber">
  //       <Image
  //         src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/fiber.png`}
  //         alt="Fiber Project"
  //         loading="lazy"
  //         width={500}
  //         height={300}
  //       />
  //     </a>
  //   ),
  // },
];
