import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { ProjectsProps } from "../../page";
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
            aria-label="View featured projects below"
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
  content?: React.ReactNode | any;
}[] = [
  {
    title: "🧑‍🧑‍🧒‍🧒 ASU Network (asunetwork.com)",
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
        />
      </a>
    ),
  },
  {
    title: "Brainrot Master Vault (HackPrinceton 2025 Winner 🏆)",
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
  {
    title: "🍵 Sip n Play Café Website (Codédex Hackathon Winner 🏆)",
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
        />
      </a>
    ),
  },
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
