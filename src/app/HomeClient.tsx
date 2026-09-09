"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import Footer from "./components/Footer";
import Loader from "./components/ui/Loader";
import GithubContributions from "./components/sections/GithubContributions";

// Lazy load components
const ProfileCard = lazy(() => import("./components/sections/ProfileCard"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));
const FavoriteReads = lazy(() => import("./components/sections/FavoriteReads"));
const SpotifyAlbum = lazy(() => import("./components/sections/SpotifyAlbum"));
const ExperienceItem = lazy(
  () => import("./components/sections/ExperienceItems")
);
const OpenedProjects = lazy(
  () => import("./components/sections/OpenedProjects")
);

export default function HomeClient() {
  const [experienceSection, setExperienceSection] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  function handleSetExperienceSection() {
    setExperienceSection((prev) => !prev);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="mx-auto mb-10 grid w-full min-w-0 max-w-[1600px] grid-cols-2 grid-rows-none gap-4 px-32 pt-6 max-lg:flex max-lg:flex-col max-md:px-2 xl:grid-cols-6 xl:grid-rows-8">
      <Suspense fallback={<Loader />}>
        <ProfileCard />
        {experienceSection ? (
          <OpenedProjects
            onSetExperienceSection={handleSetExperienceSection}
            className="max-md:hidden"
          />
        ) : (
          <>
            <ExperienceItem />
            <Projects onSetExperienceSection={handleSetExperienceSection} />
            <FavoriteReads />
          </>
        )}
        <OpenedProjects className="block md:hidden" />
        <GithubContributions />

        <SpotifyAlbum />

        <Footer />
      </Suspense>
    </main>
  );
}
