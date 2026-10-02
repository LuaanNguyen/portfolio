import React from "react";
import { TrackedAnchor } from "./analytics/TrackedLink";

export default function Footer() {
  return (
    <footer className="col-span-2 xl:col-span-6 items-center text-center mb-10">
      <p className="text-spotify-light-gray max-md:text-sm">
        &copy; {new Date().getFullYear()} Luan
      </p>
      <p className="text-spotify-light-gray max-md:text-sm mt-5">
        Built with NextJS, TailwindCSS, and Aceternity UI. Check out the source
        code{" "}
        <TrackedAnchor
          target="_blank"
          href="https://github.com/LuaanNguyen/portfolio"
          className="text-spotify-green font-semibold underline"
          rel="noopener noreferrer"
          analyticsEvent="repository_open"
          analyticsData={{ repository: "portfolio", source: "footer" }}
        >
          here
        </TrackedAnchor>
        .
      </p>
      <p className="text-spotify-light-gray max-md:text-sm mt-3">
        Want the website template? Use{" "}
        <TrackedAnchor
          target="_blank"
          href="https://github.com/LuaanNguyen/spotify-portfolio"
          className="text-spotify-green font-semibold underline"
          rel="noopener noreferrer"
          analyticsEvent="repository_open"
          analyticsData={{ repository: "spotify-portfolio", source: "footer" }}
        >
          spotify-portfolio
        </TrackedAnchor>
        .
      </p>
    </footer>
  );
}
