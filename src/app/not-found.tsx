"use client";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            This page can&apos;t be found
          </h2>
        </div>

        <p className="text-spotify-light-gray mb-6 text-lg">
          Looks like the information you&apos;re searching for doesn&apos;t
          exist or has been moved.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-spotify-green hover:bg-spotify-dark-green text-spotify-black font-medium py-3 px-8 rounded-full transition-colors"
          >
            Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-spotify-light-dark hover:bg-spotify-gray-hover text-spotify-white font-medium py-3 px-8 rounded-full border border-spotify-gray transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
