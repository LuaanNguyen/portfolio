import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import { BlogPostWithContent } from "../../../lib/blog";

interface BlogPostContentProps {
  post: BlogPostWithContent;
}

type ContentSegment =
  | { type: "html"; value: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption: string;
    };

function parseContentSegments(content: string): ContentSegment[] {
  const pattern =
    /<blog-image data-src="([^"]*)" data-alt="([^"]*)" data-caption="([^"]*)"><\/blog-image>/g;
  const segments: ContentSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(content)) !== null) {
    const [fullMatch, src, alt, caption] = match;

    if (match.index > lastIndex) {
      segments.push({
        type: "html",
        value: content.slice(lastIndex, match.index),
      });
    }

    segments.push({
      type: "image",
      src,
      alt,
      caption,
    });

    lastIndex = match.index + fullMatch.length;
  }

  if (lastIndex < content.length) {
    segments.push({
      type: "html",
      value: content.slice(lastIndex),
    });
  }

  return segments;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const parsedDate = new Date(post.date);
  const isoDate = Number.isNaN(parsedDate.getTime())
    ? undefined
    : parsedDate.toISOString();
  const contentSegments = parseContentSegments(post.content);

  return (
    <article className="max-w-4xl mx-auto lowercase">
      {/* Hero Image */}
      <div className="aspect-video bg-spotify-light-dark relative overflow-hidden rounded-xl mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
          priority
        />
      </div>

      {/* Article Header */}
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-spotify-white mb-4">
          {post.title}
        </h1>

        {post.description ? (
          <p className="text-lg text-spotify-white/70 mb-6">{post.description}</p>
        ) : null}

        {/* Meta Info */}
        <div className="flex items-center space-x-6 text-sm text-spotify-white/50 pb-4 border-b border-spotify-green/10">
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="w-4 h-4" aria-hidden="true" />
            <time dateTime={isoDate}>{post.date}</time>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock className="w-4 h-4" aria-hidden="true" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-none">
        <div className="text-base md:text-lg text-spotify-white/80 leading-relaxed">
          {contentSegments.map((segment, index) => {
            if (segment.type === "image") {
              return (
                <figure
                  key={`${segment.src}-${index}`}
                  className="my-6 mx-auto max-w-2xl"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-black/30">
                    <Image
                      src={segment.src}
                      alt={segment.alt}
                      width={1200}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 896px"
                      className="max-w-full h-auto w-full"
                    />
                  </div>
                  <figcaption className="text-center text-sm text-spotify-white/70 mt-2 italic font-medium tracking-wide bg-spotify-light-dark/20 rounded-lg py-2 px-4 mx-auto max-w-md">
                    {segment.caption}
                  </figcaption>
                </figure>
              );
            }

            return (
              <div
                key={`html-${index}`}
                dangerouslySetInnerHTML={{ __html: segment.value }}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}
