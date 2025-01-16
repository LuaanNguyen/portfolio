"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import Footer from "./components/Footer";
import Loader from "./components/ui/Loader";
import GithubContributions from "./components/sections/GithubContributions";

// Lazy load components
const ProfileCard = lazy(() => import("./components/sections/ProfileCard"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));
const ProgrammingLanguages = lazy(
  () => import("./components/sections/ProgrammingLanguages")
);
const SpotifyAlbum = lazy(() => import("./components/sections/SpotifyAlbum"));
const ExperienceItem = lazy(
  () => import("./components/sections/ExperienceItems")
);
const OpenedExperienceItem = lazy(
  () => import("./components/sections/OpenedExperienceItem")
);

export interface ProjectsProps {
  onSetExperienceSection?: () => void;
}

export default function Home() {
  const [experienceSection, setExperienceSection] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  function handleSetExperienceSection() {
    setExperienceSection((prev) => !prev);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="w-screen max-w-[1600px] mx-auto pt-6 px-32 grid grid-cols-6 grid-rows-8 max-md:gap-4 gap-4 max-lg:flex max-lg:flex-col max-md:px-6 mb-10">
          <Suspense fallback={<Loader />}>
            <ProfileCard />
            {experienceSection ? (
              <OpenedExperienceItem
                onSetExperienceSection={handleSetExperienceSection}
                className="max-md:hidden"
              />
            ) : (
              <>
                <ExperienceItem />
                <Projects onSetExperienceSection={handleSetExperienceSection} />
                <ProgrammingLanguages />
              </>
            )}
            <OpenedExperienceItem className="block md:hidden" />
            {/* <Skills /> */}
            <GithubContributions />
            <SpotifyAlbum />
            <Footer />
          </Suspense>
        </main>
      )}
    </>
  );
}
