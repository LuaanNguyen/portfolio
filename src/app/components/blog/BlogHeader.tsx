import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

interface BlogHeaderProps {
  title: string;
  subtitle?: string;
  backLink: string;
  backText: string;
}

export default function BlogHeader({
  title,
  subtitle,
  backLink,
  backText,
}: BlogHeaderProps) {
  return (
    <div className="py-8">
      <Link
        href={backLink}
        className="inline-flex items-center space-x-2 text-spotify-green hover:text-green-400 transition-colors duration-200 mb-8"
      >
        <FaArrowLeft className="w-4 h-4" />
        <span className="text-md font-semibold">{backText}</span>
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-spotify-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-spotify-white/70 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
