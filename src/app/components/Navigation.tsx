"use client";

import React, { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { ReactNode } from "react";
import { PiLineVerticalThin } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import SocialLinks from "./SocialLinks";
import MobileNav from "./MobileNav";
import { TypewriterEffect } from "./ui/type-writer-effect";
import Link from "next/link";

export default function Navigation(): ReactNode {
  const [mobile, setMobile] = useState<boolean>(false);

  function handleMobile(): void {
    setMobile((prev) => !prev);
  }

  return (
    <nav aria-label="Primary navigation">
      <div
        className={`flex flex-col bg-spotify-light-dark max-md:mx-2 max-md:mt-2 mx-32 mt-4 p-2 rounded-full max-md:rounded-xl
         `}
      >
        <section className="flex flex-row w-full justify-between items-center max-md:px-4 max-md:py-1">
          {/*Mobile Mode*/}
          <button
            type="button"
            onClick={handleMobile}
            className="sm:hidden"
            aria-label={mobile ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobile}
            aria-controls="mobile-navigation"
          >
            {mobile ? (
              <FaTimes className="text-4xl" aria-hidden="true" />
            ) : (
              <GiHamburgerMenu className="text-4xl" aria-hidden="true" />
            )}
          </button>

          <Link href="/" className="flex gap-2 text-3xl font-bold items-center">
            <FaCode className="text-spotify-green w-[70px]" />
            {/* <h1 className="max-lg:hidden">Luan Nguyen</h1> */}
            <TypewriterEffect
              words={[
                { text: "Luan", className: "text-4xl" },
                { text: "Nguyen", className: "text-4xl" },
              ]}
              className="place-self-center max-lg:hidden text-white"
            />
          </Link>

          {/*Hidden on Mobile*/}
          <section className="flex flex-row gap-4 items-center max-sm:hidden mx-4">
            <SocialLinks />
            <PiLineVerticalThin className="text-spotify-gray text-4xl" />
            <Link
              href="/blog"
              className="text-3xl hover:text-spotify-green transition-colors duration-200"
              aria-label="View blog posts"
            >
              <LuNewspaper className="" />
            </Link>

          </section>
        </section>
        {mobile && <MobileNav handleMobile={handleMobile} />}
      </div>
    </nav>
  );
}
