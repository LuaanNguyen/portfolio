import React from "react";
import Footer from "../components/Footer";
import { getSortedPostsData } from "../../lib/blog";
import BlogHeader from "../components/blog/BlogHeader";
import BlogPostList from "../components/blog/BlogPostList";

export default function BlogListingPage() {
  const blogPosts = getSortedPostsData();

  return (
    <div className="min-h-screen text-white">
      <div className="max-md:mx-4 max-md:mt-2 mx-40 mt-4">
        <BlogHeader
          title="Writings"
          subtitle=""
          backLink="/"
          backText="Back to Portfolio"
        />
        <BlogPostList posts={blogPosts} />
        <Footer />
      </div>
    </div>
  );
}
