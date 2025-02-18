"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
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
            src="/Luan.jpg"
            alt="Picture of the author"
            width={400}
            height={400}
            objectFit="none"
            className="rounded-[25px]"
          />
        </BackgroundGradient>

        <PersonalStatement />
        <Location />
        {/* <Booking /> */}
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="text-lg px-4">
      <div className="flex items-center gap-2 font-medium">
        <IoLocationOutline className="text-spotify-green text-2xl" />
        Tempe, AZ
      </div>
    </div>
  );
}

function Booking() {
  const email = "luanthiennguyen2003@gmail.com"; // Replace with the email you want to copy
  const phoneNum = "9176574242";

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleCopyNumber = () => {
    navigator.clipboard
      .writeText(phoneNum)
      .then(() => {
        alert("Phone bumber copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="flex px-4 gap-3">
      <button
        type="button"
        className="flex items-center justify-center text-sm font-bold bg-spotify-green hover:bg-spotify-dark-green hover:scale-105  px-4 py-2.5 rounded-full gap-2 transition-all duration-200"
        onClick={handleCopyNumber}
      >
        <FaRegCopy /> Copy Number
      </button>
      <button
        type="button"
        className="flex items-center justify-center text-sm font-bold border border-[#727272] hover:border-white hover:scale-105 text-white px-4 py-2.5 rounded-full gap-2 transition-all duration-200"
        onClick={handleCopyEmail}
      >
        <FaRegCopy /> Copy Email
      </button>
    </div>
  );
}

function PersonalStatement() {
  return (
    <div className="flex flex-col gap-3 px-4">
      <div className="space-y-1.5">
        <h1 className="text-2xl font-semibold">Luan Nguyen</h1>
        <p className="text-spotify-gray text-sm">
          Developer • Designer • Artist
        </p>
      </div>
      <h4 className="text-md max-md:text-sm text-spotify-light-gray font-semibold">
        Hello there 🫶
        <br /> I am a <span className="text-spotify-white">Junior</span>{" "}
        studying <span className="text-spotify-white">Computer Science 💻</span>{" "}
        at
        <span className="text-spotify-white"> Arizona State University 🔱</span>
        . <br />
        My Expertise:{" "}
        <span className="text-spotify-white">
          Full-Stack Development
        </span> & <span className="text-spotify-white">UI/UX</span> &{" "}
        <span className="text-spotify-white">Cloud Engineering.</span>
      </h4>
    </div>
  );
}
