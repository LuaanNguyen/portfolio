import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubContributions: React.FC = () => {
  return (
    <div
      className="flex py-3 p-1 max-lg:col-span-1  max-lg:row-span-1 col-span-4 row-span-2 col-start-1 row-start-7 bg-spotify-light-dark rounded-xl h-fit"
      id="contribution"
    >
      <div className="w-full items-center content-center justify-center justify-items-center">
        <GitHubCalendar
          username="LuaanNguyen"
          blockSize={11} // Size of each block
          blockMargin={3} // Margin between blocks
          fontSize={12} // Font size for the text
        />
      </div>
    </div>
  );
};

export default GithubContributions;
