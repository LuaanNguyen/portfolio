import React from "react";

export default function Footer() {
  return (
    <footer className="max-lg:col-span-1  max-lg:row-span-1 col-span-6 items-center text-center mb-10">
      <p className="text-spotify-light-gray max-md:text-sm">
        &copy; {new Date().getFullYear()} Luan
      </p>
      <p className="text-spotify-light-gray max-md:text-sm mt-5">
        Built with NextJS, TailwindCSS, and Aceternity UI. Check out the source
        code{" "}
        <a
          target="_blank"
          href="https://github.com/LuaanNguyen/portfolio"
          className="text-spotify-green font-semibold underline"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <p className="text-spotify-light-gray max-md:text-sm mt-3">
        Want the website template? Use{" "}
        <a
          target="_blank"
          href="https://github.com/LuaanNguyen/spotify-portfolio"
          className="text-spotify-green font-semibold underline"
          rel="noopener noreferrer"
        >
          spotify-portfolio
        </a>
        .
      </p>
    </footer>
  );
}
