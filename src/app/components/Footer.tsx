import React from "react";

export default function Footer() {
  return (
    <div className="max-lg:col-span-1  max-lg:row-span-1 col-span-6 items-center text-center">
      <p className="text-spotify-light-gray max-md:text-sm">
        &copy; Luan&apos;s Portfolio {new Date().getFullYear()}, Design By{" "}
        <a
          href="https://www.luannguyen.net/"
          className="text-spotify-green font-semibold underline"
        >
          Luan
        </a>
      </p>
    </div>
  );
}
