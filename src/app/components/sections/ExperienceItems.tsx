import { CiGlobe } from "react-icons/ci";
import { IoShuffle } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

export default function ExperienceItem() {
  return (
    <section
      className="relative col-span-2 row-span-4 col-start-3 bg-spotify-light-dark rounded-xl max-md:overflow-y-scroll overflow-hidden max-md:col-span-1"
      id="#experience"
    >
      <div className="bg-spotify-gray p-6">
        <h2 className="text-xl font-bold mb-1">Professional Experience</h2>
        <p className="flex items-center gap-1.5 text-spotify-grey text-sm">
          <CiGlobe className="text-lg" />
          1208 saves • 184086h 38m
        </p>
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-spotify-green p-3.5 hover:scale-105 transition-transform">
              <FaPlay className="text-spotify-black text-sm" />
            </button>
            <div className="flex items-center gap-5">
              <IoShuffle className="text-3xl text-spotify-grey hover:text-white transition-colors" />
              <FiPlusCircle className="text-2xl text-spotify-grey hover:text-white transition-colors" />
              <MdOutlineDownloadForOffline className="text-2xl text-spotify-grey hover:text-white transition-colors" />
              <BsThreeDots className="text-2xl text-spotify-grey hover:text-white transition-colors" />
            </div>
          </div>
          <RxHamburgerMenu className="text-2xl text-spotify-grey hover:text-white transition-colors" />
        </div>
      </div>

      <Positions />
    </section>
  );
}

function Positions() {
  return (
    <div className="px-4 pb-4 md:overflow-y-auto h-[300px]">
      {experienceLists.map((position: experienceListsProps, index) => (
        <div
          className="flex items-center gap-4 p-2.5 hover:bg-[#282828] rounded-lg transition-colors group"
          key={position.companyName}
        >
          <span className="text-spotify-grey group-hover:text-white min-w-[20px]">
            {index + 1}
          </span>
          <div className="flex-1">
            <p className="text-spotify-green text-sm font-semibold mb-0.5">
              {position.companyName}
            </p>
            <p className="font-bold text-md mb-0.5">{position.positionTitle}</p>
            <p className="text-spotify-gray text-sm">{position.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

type experienceListsProps = {
  companyName: string;
  positionTitle: string;
  date: string;
};

const experienceLists: experienceListsProps[] = [
  {
    companyName: "Amazon",
    positionTitle: "Software Development Engineer Intern",
    date: "May 2025 - August 2025",
  },
  {
    companyName: "Wireless Intelligence Lab — ASU ECEE",
    positionTitle: "Software Engineer",
    date: "September 2024 - Present",
  },

  {
    companyName: "Ethical Spectacle Research",
    positionTitle: "Software Engineer Intern",
    date: "August 2024 - Present",
  },
  {
    companyName: "ASU Enterprise Technology",
    positionTitle: "Technology Consultant",
    date: "May 2024 – August 2024",
  },
  {
    companyName: "Pinear",
    positionTitle: "Software Engineer Intern",
    date: "March 2024 - May 2024",
  },
  {
    companyName: "EPICS at ASU",
    positionTitle: "Lead Software Engineer",
    date: "January 2024 – April 2024",
  },
  {
    companyName: "The Global Tech Experience",
    positionTitle: "Web Developer",
    date: "August 2023 – December 2024",
  },
];
