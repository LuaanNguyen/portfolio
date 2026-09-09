import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { ProjectsProps } from "../../page";
import { GrLinkNext } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";
import type { ProjectStatus } from "../ui/ProjectStatusBadge";

export default function Projects({ onSetExperienceSection }: ProjectsProps) {
  return (
    <div
      className="max-md:hidden col-span-2 row-span-1 col-start-1 row-start-3 animate-card-reveal [animation-delay:140ms] motion-reduce:animate-none xl:col-span-2 xl:row-span-6 xl:col-start-5 xl:row-start-1 bg-spotify-light-dark rounded-xl overflow-hidden"
      id="projects"
    >
      <div className="p-4">
        <div className="flex gap-3 justify-center sm:flex-auto">
          {/* Primary Button (Green) */}
          <button
            className="flex items-center justify-center text-sm font-bold 
            bg-spotify-green/10 border-spotify-green md:hover:scale-105
            px-5 py-2 rounded-xl gap-2 
            min-w-[180px] text-spotify-green mb-0.5 transition-all duration-200 w-fit md:hover:bg-spotify-green/10 cursor-pointer"
            aria-label="View featured projects below"
          >
            Featured Projects
            <FaArrowDown className="text-base" />
          </button>

          {/* Secondary Button (White Border) */}
          <button
            className="flex items-center justify-center text-sm font-bold 
            border border-[#727272] md:hover:border-white md:hover:scale-105
            text-white px-5 py-3 rounded-xl gap-2 transition-all duration-200
            animate-pulse md:hover:animate-none md:hover:bg-white md:hover:text-black
            shadow-[0_0_15px_rgba(255,255,255,0.3)] md:hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
            min-w-[180px]"
            onClick={onSetExperienceSection}
            aria-label="Explore all projects in expanded view"
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
  content?: React.ReactNode;
  status: ProjectStatus;
}[] = [
  {
    title: "🍵 Sip n Play Café Website (Codédex Hackathon Winner 🏆)",
    status: "Winner",
    description:
      "My first hackathon win. Sip & Play is an interactive website for a NYC board game café, featuring a 500+ game catalog and a 3D animated menu. It won Best UI/UX Design at the Codédex Hackathon.",
    content: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://board-game-cafe-website.vercel.app/"
      >
        <Image
          src={`/codedex-hackathon.jpeg`}
          alt="Sip n Play Cafe Website"
          width={500}
          height={500}
          sizes="500px"
        />
      </a>
    ),
  },
  {
    title: "Brainrot Master Vault (HackPrinceton 2025 Winner 🏆)",
    status: "Winner",
    description:
      "BrainRot Master Vault turns short-form videos into AI-curated podcast episodes and knowledge graphs. Built at HackPrinceton 2025 and won Best Self-Hosted Inference.",
    content: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.brainrotmastervaultovercooked.tech/"
      >
        <Image
          src={`/gallery.jpg`}
          alt="Brainrot Master Vault Website"
          width={500}
          height={500}
          sizes="500px"
        />
      </a>
    ),
  },
  {
    title: "🌎 ASU Network",
    status: "Live",
    description:
      "A community directory and social graph for ASU builders, engineers, designers, and creators, making it easier to discover people by skill, role, and connections.",
    content: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://asunetwork.com"
      >
        <Image
          src={`/blogs/asunetwork.png`}
          alt="ASU Network"
          width={500}
          height={300}
          sizes="500px"
        />
      </a>
    ),
  },

  // {
  //   title: " 📚 rateourclub.com",
  //   description:
  //     "Community-driven platform where students can rate and review 100+ college organizations, just like Rate My Professor",
  //   content: (
  //     <a
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       href="https://rateourclub.com"
  //     >
  //       <Image
  //         src={`/rateourclub.png`}
  //         alt="rateourclub.com"
  //         loading="lazy"
  //         width={500}
  //         height={300}
  //       />
  //     </a>
  //   ),
  // },
  // {
  //   title: "Mine Alliance ⛏️ (Principled Innovation Hackathon Winner 🏆)",
  //   description:
  //     "Mine Alliance is a platform that connects Arizona’s mining communities, corporations, and regulators through real-time data and environmental insights.",
  //   content: (
  //     <a
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       href="https://github.com/LuaanNguyen/epics-mern"
  //     >
  //       <Image
  //         src={`/Mine_Alliance.png`}
  //         alt="Mine Alliance"
  //         loading="lazy"
  //         width={500}
  //         height={300}
  //       />
  //     </a>
  //   ),
  // },
];
