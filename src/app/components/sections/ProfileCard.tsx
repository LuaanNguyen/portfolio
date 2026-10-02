"use client";

import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import { TrackedLink } from "../analytics/TrackedLink";

export default function ProfileCard() {
  return (
    <div
      className="relative col-span-1 row-span-2 col-start-1 row-start-1 w-full min-w-0 animate-card-reveal motion-reduce:animate-none xl:col-span-2 xl:row-span-6 bg-spotify-light-dark rounded-xl p-4 max-md:p-3"
      id="#profile"
    >
      <div className="flex flex-col gap-7 max-md:gap-5">
        <BackgroundGradient containerClassName="w-full max-w-[408px] rounded-[40px] place-self-center">
          <Image
            src="/luan_real.jpg"
            alt="Luan Nguyen"
            width={1600}
            height={1200}
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 400px"
            className="aspect-[4/3] w-full rounded-[25px] object-cover"
            priority
          />
        </BackgroundGradient>

        <PersonalStatement />
      </div>
    </div>
  );
}

function PersonalStatement() {
  return (
    <div className="flex flex-col gap-3 px-4">
      <div className="space-y-1.5">
        <h1 className="text-3xl font-semibold">Luan Nguyen</h1>
        <p className="text-spotify-gray text-sm">
          Engineer • Researcher • Designer
        </p>
      </div>
      <h4 className="text-sm">
        Welcome. I hope your visit is short and beautiful, and that something
        here stays with you.
        <br />
        <br />
        <span>
          My interests center on{" "}
          <span className="text-spotify-green">
            systems and AI infrastructure
          </span>
          , including distributed services and platforms that enable machine
          learning to operate in production.{" "}
        </span>
        <br />
        <br />
        <span>
          At <span className="text-spotify-green">OpenAI</span>, I&apos;m a
          Product Lab member, exploring how people live, learn, and create with
          AI, carrying those human stories toward what comes next.
        </span>
        <br />
        <br />
        <span>
          View my latest writings{" "}
          <TrackedLink
            href="/blog"
            className="text-spotify-green underline"
            analyticsEvent="blog_open"
            analyticsData={{ source: "profile_card" }}
          >
            here.
          </TrackedLink>{" "}
        </span>
      </h4>
    </div>
  );
}
