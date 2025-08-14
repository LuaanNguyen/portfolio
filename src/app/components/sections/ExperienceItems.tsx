import { CiGlobe } from "react-icons/ci";
import { IoShuffle } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";

export default function ExperienceItem() {
  return (
    <section
      className="relative col-span-2 row-span-4 col-start-3 bg-spotify-light-dark rounded-xl max-md:overflow-y-scroll overflow-hidden max-md:col-span-1"
      id="experience"
    >
      <div className="bg-spotify-gray px-6 py-4">
        <h2 className="text-xl font-semibold mb-1">Professional Experience</h2>
        <p className="flex items-center gap-1.5 text-spotify-grey text-sm">
          <CiGlobe className="text-lg" />
          1208 saves • 22h 03m
        </p>
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-spotify-green p-3.5 hover:scale-105 transition-transform">
              <FaPlay className="text-spotify-black text-sm" />
            </button>
            <div className="flex items-center gap-5">
              <IoShuffle className="text-3xl text-spotify-grey sm:hover:text-white transition-colors" />
              <FiPlusCircle className="text-2xl text-spotify-grey sm:hover:text-white transition-colors" />
              <MdOutlineDownloadForOffline className="text-2xl text-spotify-grey sm:hover:text-white transition-colors" />
              <BsThreeDots className="text-2xl text-spotify-grey sm:hover:text-white transition-colors" />
            </div>
          </div>
          <RxHamburgerMenu className="text-2xl text-spotify-grey sm:hover:text-white transition-colors" />
        </div>
      </div>

      <Positions />
    </section>
  );
}

function Positions() {
  return (
    <div className="px-4 pb-4 md:overflow-y-auto sm:h-[300px]">
      {experienceLists.map((position: experienceListsProps, index) => (
        <div
          className="flex items-center gap-4 p-2.5 sm:hover:bg-[#282828] rounded-lg transition-colors group"
          key={position.companyName}
        >
          <span className="text-spotify-grey sm:group-hover:text-white min-w-[20px]">
            {index + 1}
          </span>
          <div className="flex flex-col gap-0.5">
            <a
              href={position.url}
              target="_blank"
              className="text-spotify-green text-sm font-semibold mb-0.5 bg-spotify-green/20 rounded-md transition-all duration-200 w-fit px-2 py-0.5 hover:bg-spotify-green/10 cursor-pointer"
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

type experienceListsProps = {
  companyName: string;
  positionTitle: string;
  url: string;
  date: string;
};

const experienceLists: experienceListsProps[] = [
  {
    companyName: "Amazon Web Services",
    url: "https://aws.amazon.com",
    positionTitle: "Software Development Engineer Intern",
    date: "May 2025 - August 2025",
  },
  {
    companyName: "OpenAI",
    url: "https://openai.com",
    positionTitle: "ChatGPT Lab Member",
    date: "May 2025 - Present",
  },
  {
    companyName: "Simplify (YC W21)",
    url: "https://simplify.jobs",
    positionTitle: "Campus Ambassador",
    date: "January 2025 - Present",
  },
  {
    companyName: "Wireless Intelligence Lab — ASU ECEE",
    url: "https://www.wi-lab.net",
    positionTitle: "Software Engineer",
    date: "September 2024 - March 2025",
  },

  {
    companyName: "Ethical Spectacle Research",
    url: "https://ethicalspectacle.org",
    positionTitle: "Software Engineer Intern",
    date: "August 2024 - Present",
  },
  {
    companyName: "The Software Developer Association (SoDA)",
    url: "https://thesoda.io",
    positionTitle: "Technical Project Manager",
    date: "April 2024 – September 2024",
  },
  {
    companyName: "ASU Enterprise Technology",
    url: "https://tech.asu.edu",
    positionTitle: "IT Consultant",
    date: "May 2024 – August 2024",
  },
  {
    companyName: "Pinear",
    url: "https://www.linkedin.com/company/pinearllc/",
    positionTitle: "Software Engineer Intern",
    date: "March 2024 - May 2024",
  },
  {
    companyName: "EPICS at ASU",
    url: "https://epics.engineering.asu.edu",
    positionTitle: "Software Team Lead",
    date: "January 2024 – April 2024",
  },
  {
    companyName: "Podium Education",
    url: "https://www.podiumeducation.com",
    positionTitle: "Web Developer Trainee",
    date: "August 2023 – December 2024",
  },
];
