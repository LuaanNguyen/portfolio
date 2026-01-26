import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import { BlogPostWithContent } from "../../../lib/blog";

interface BlogPostContentProps {
  post: BlogPostWithContent;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Hero Image */}
      <div className="aspect-video bg-spotify-light-dark relative overflow-hidden rounded-xl mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-spotify-white mb-4">
          {post.title}
        </h1>

        <p className="text-lg text-spotify-white/70 mb-6">{post.description}</p>

        {/* Meta Info */}
        <div className="flex items-center space-x-6 text-sm text-spotify-white/50 pb-6 border-b border-spotify-green/10">
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-none">
        <div
          className="text-base md:text-lg text-spotify-white/80 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
