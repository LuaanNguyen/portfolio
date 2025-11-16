import { ReactNode } from "react";
import Image from "next/image";

export default function ProgrammingLanguages() {
  return (
    <div
      className="max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-2 col-start-3 row-start-5 rounded-xl bg-spotify-light-dark overflow-hidden"
      id="programming-languages"
    >
      <div className="p-6">
        <h1 className="text-xl font-bold mb-5">Programming Languages</h1>
        <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-4">
          {languageItems.map((item) => (
            <div
              className="flex items-center justify-center p-2.5 rounded-lg sm:hover:bg-[#282828] transition-all duration-200"
              key={item.name}
            >
              {item.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const languageItems: {
  name: string;
  component: ReactNode;
}[] = [
  {
    name: "JavaScript",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        width={32}
        height={32}
        alt="JavaScript"
      />
    ),
  },
  {
    name: "TypeScript",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        width={32}
        height={32}
        alt="TypeScript"
      />
    ),
  },
  {
    name: "Java",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        width={32}
        height={32}
        alt="Java"
      />
    ),
  },
  {
    name: "Python",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        width={32}
        height={32}
        alt="Python"
      />
    ),
  },
  {
    name: "SQL",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
        width={32}
        height={32}
        alt="SQL"
      />
    ),
  },
  {
    name: "Go",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
        width={32}
        height={32}
        alt="Golang"
      />
    ),
  },
  {
    name: "C++",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
        width={32}
        height={32}
        alt="C++"
      />
    ),
  },
];
