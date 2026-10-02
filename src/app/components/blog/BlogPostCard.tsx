import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import { BlogPost } from "../../../lib/blog";
import { TrackedLink } from "../analytics/TrackedLink";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <TrackedLink
      href={`/blog/post/${post.slug}`}
      aria-label={`Read blog post: ${post.title}`}
      className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spotify-green"
      analyticsEvent="blog_post_open"
      analyticsData={{ slug: post.slug, source: "blog_index" }}
    >
      <article className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl bg-spotify-light-dark">
        {/* Image */}
        <div className="relative aspect-video shrink-0 overflow-hidden bg-spotify-light-dark">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover md:transition-transform md:duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h2 className="mb-3 line-clamp-2 text-xl font-semibold text-spotify-white md:transition-colors md:duration-200 md:group-hover:text-spotify-green">
            {post.title}
          </h2>

          {post.description ? (
            <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-spotify-white/70">
              {post.description}
            </p>
          ) : null}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-spotify-white/50">
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
    </TrackedLink>
  );
}
