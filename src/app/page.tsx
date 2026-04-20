import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export interface ProjectsProps {
  onSetExperienceSection?: () => void;
}

export const metadata: Metadata = {
  title: "Luan Nguyen",
  description:
    "Software Engineer Intern at eBay & Member of ChatGPT Lab at OpenAI. Previously interned at Amazon Bedrock and Fox Corporation",
  alternates: {
    canonical: "https://luannguyen.net",
  },
};

export default function Home() {
  return <HomeClient />;
}
