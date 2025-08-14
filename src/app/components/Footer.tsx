import React from "react";

export default function Footer() {
  return (
    <div className="max-lg:col-span-1  max-lg:row-span-1 col-span-6 items-center text-center mb-10">
      <p className="text-spotify-light-gray max-md:text-sm">
        &copy; Luan&apos;s Portfolio {new Date().getFullYear()}, designed by{" "}
        <a
          href="https://www.luannguyen.net/"
          className="text-spotify-green font-semibold underline"
          target="_blank"
        >
          Luan
        </a>
      </p>
      <p className="text-spotify-light-gray max-md:text-sm mt-5">
        Built with NextJS, TailwindCSS, and Aceternity UI. Check out the source
        code{" "}
        <a
          target="_blank"
          href="https://github.com/LuaanNguyen/portfolio"
          className="text-spotify-green font-semibold underline"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}
