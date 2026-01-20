"use client";

import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";

export default function ProfileCard() {
  return (
    <div
      className="relative col-span-2 row-span-6 bg-spotify-light-dark rounded-xl p-4 max-md:p-3"
      id="#profile"
    >
      <div className="flex flex-col gap-7 max-md:gap-5">
        <BackgroundGradient containerClassName="rounded-[40px] place-self-center">
          <Image
            src="/luan_real.jpg"
            alt="Luan Nguyen"
            width={400}
            height={400}
            objectFit="none"
            className="rounded-[25px]"
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
        Welcome to my portfolio! I hope your stay is short and beautiful.
        <br />
        <br />
        I&apos;m currently working as a software engineer intern on the
        broadcast engineering team at{" "}
        <a
          href="https://www.fox.com/"
          className="text-spotify-green underline"
        >
          FOX.
        </a>{" "}
        <br />
        <br />
        <span>
        My interests center on <span className="text-spotify-green">systems and AI infrastructure</span>, including distributed services and platforms that enable machine learning to operate in production.{" "}
        </span>
        <br />
        <br />
        <span>
            View my latest writings{" "}
          <a href="/blog" className="text-spotify-green underline">
            here.
          </a>{" "}
        </span>
      </h4>
    </div>
  );
}
