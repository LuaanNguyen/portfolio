import { InfiniteMovingCards } from "../ui/infinite-moving-cars";
import { ReactNode } from "react";
import Image from "next/image";

export default function Skills() {
  return (
    <div
      className="max-lg:col-span-1  max-lg:row-span-1 col-span-4 row-span-2 col-start-1 row-start-7 bg-spotify-light-dark rounded-xl h-fit"
      id="skills"
    >
      <h1 className="text-2xl font-semibold pl-5 pt-3">Skills</h1>
      <InfiniteMovingCards items={skillItems} speed="slow" className="" />
    </div>
  );
}

const skillItems: { quote: ReactNode; name: string }[] = [
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        width={40}
        height={40}
        alt="React"
      />
    ),
    name: "React",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        width={40}
        height={40}
        alt="Next.js"
      />
    ),
    name: "NEXTJS",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        width={40}
        height={40}
        alt="Node.js"
      />
    ),
    name: "NodeJS",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
        width={40}
        height={40}
        alt="Express"
      />
    ),
    name: "Express",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
        width={40}
        height={40}
        alt="Flask"
      />
    ),
    name: "Flask",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"
        width={40}
        height={40}
        alt="jQuery"
      />
    ),
    name: "jQuery",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
        width={40}
        height={40}
        alt="Bootstrap"
      />
    ),
    name: "Bootstrap",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        width={40}
        height={40}
        alt="TailwindCSS"
      />
    ),
    name: "TailwindCSS",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
        width={40}
        height={40}
        alt="PostreSQL"
      />
    ),
    name: "PostreSQL",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
        width={40}
        height={40}
        alt="MongoDB"
      />
    ),
    name: "MongoDB",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
        width={40}
        height={40}
        alt="MongoDB"
      />
    ),
    name: "MongoDB",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
        width={40}
        height={40}
        alt="Docker"
      />
    ),
    name: "Docker",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
        width={40}
        height={40}
        alt="Postman"
      />
    ),
    name: "Postman",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
        width={40}
        height={40}
        alt="npm"
      />
    ),
    name: "npm",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        width={40}
        height={40}
        alt="git"
      />
    ),
    name: "git",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
        width={40}
        height={40}
        alt="Figma"
      />
    ),
    name: "Figma",
  },
];
