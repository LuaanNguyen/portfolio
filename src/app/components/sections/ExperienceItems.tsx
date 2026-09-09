import { CiGlobe } from "react-icons/ci";
import { IoShuffle } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";
import {
  experienceLists,
  experienceListsProps,
} from "../../../../data/experience";

export default function ExperienceItem() {
  return (
    <section
      className="relative col-span-1 row-span-1 col-start-2 row-start-1 animate-card-reveal [animation-delay:70ms] motion-reduce:animate-none xl:col-span-2 xl:row-span-4 xl:col-start-3 bg-spotify-light-dark rounded-xl max-md:overflow-y-scroll overflow-hidden max-md:col-span-1"
      id="experience"
    >
      <div className="bg-spotify-gray px-6 py-4">
        <h2 className="text-xl font-semibold mb-1">Professional Experience</h2>
        <p className="flex items-center gap-1.5 text-spotify-grey text-sm">
          <CiGlobe className="text-lg" />6 positions • 3 internships
        </p>
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="rounded-full bg-spotify-green p-3.5 md:hover:scale-105 transition-transform"
              aria-label="Play experience showcase"
            >
              <FaPlay className="text-spotify-black text-sm" />
            </button>
            <div className="flex items-center gap-5">
              <button aria-label="Shuffle experiences">
                <IoShuffle className="text-3xl text-spotify-grey md:hover:text-white transition-colors" />
              </button>
              <button aria-label="Add to favorites">
                <FiPlusCircle className="text-2xl text-spotify-grey md:hover:text-white transition-colors" />
              </button>
              <button aria-label="Download resume">
                <MdOutlineDownloadForOffline className="text-2xl text-spotify-grey md:hover:text-white transition-colors" />
              </button>
              <button aria-label="More options">
                <BsThreeDots className="text-2xl text-spotify-grey md:hover:text-white transition-colors" />
              </button>
            </div>
          </div>
          <button aria-label="View list">
            <RxHamburgerMenu className="text-2xl text-spotify-grey md:hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      <Positions />
    </section>
  );
}

function Positions() {
  return (
    <div className="relative px-4 pb-4 md:overflow-y-auto sm:h-[300px]">
      <div
        className="absolute bottom-8 left-[38px] top-5 w-px bg-gradient-to-b from-spotify-green via-spotify-green/40 to-transparent"
        aria-hidden="true"
      />
      {experienceLists.map((position: experienceListsProps, index: number) => (
        <div
          className="group relative flex items-center gap-4 rounded-lg p-2.5 transition-colors md:hover:bg-[#282828]"
          key={position.companyName}
        >
          <span
            className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
              index === 0
                ? "bg-spotify-green text-spotify-black"
                : "bg-spotify-light-dark text-spotify-grey ring-1 ring-white/15 md:group-hover:text-white md:group-hover:ring-white/30"
            }`}
          >
            {index + 1}
          </span>
          <div className="flex flex-col gap-0.5">
            <a
              href={position.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-spotify-green text-sm font-semibold mb-0.5 bg-spotify-green/20 rounded-md transition-all duration-200 w-fit px-2 py-0.5 md:hover:bg-spotify-green/10 cursor-pointer"
            >
              {position.companyName}
            </a>
            <p className="font-bold text-md mb-0.5">{position.positionTitle}</p>
            <p className="text-spotify-gray text-sm">{position.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
