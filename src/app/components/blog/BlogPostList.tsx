import React from "react";
import { BlogPost } from "../../../lib/blog";
import BlogPostCard from "./BlogPostCard";

interface BlogPostListProps {
  posts: BlogPost[];
}

export default function BlogPostList({ posts }: BlogPostListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-spotify-white/60 text-lg mb-2">
          No blog posts found
        </div>
        <p className="text-spotify-white/40">
          Check back soon for new content!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
