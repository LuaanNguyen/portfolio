import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../../../lib/blog";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/post/${post.slug}`}>
      <article className="group cursor-pointer bg-spotify-light-dark rounded-xl overflow-hidden ">
        {/* Image */}
        <div className="aspect-video bg-spotify-light-dark relative overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover  transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-spotify-white mb-3 group-hover:text-spotify-green transition-colors duration-200">
            {post.title}
          </h2>

          <p className="text-spotify-white/70 text-sm mb-4 leading-relaxed">
            {post.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center space-x-4 text-xs text-spotify-white/50">
            <div className="flex items-center space-x-1">
              <FaCalendarAlt className="w-3 h-3" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaClock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
