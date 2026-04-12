import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export interface ProjectsProps {
  onSetExperienceSection?: () => void;
}

export const metadata: Metadata = {
  title: "Luan Nguyen",
  description:
    "Software Engineer at FOX Corporation. Previously interned at AWS and a member of OpenAI's ChatGPT Lab.",
  alternates: {
    canonical: "https://luannguyen.net",
  },
};

export default function Home() {
  return <HomeClient />;
}
