import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Footer from "../../../components/Footer";
import { notFound } from "next/navigation";
import { getPostData, getAllPostSlugs } from "../../../../lib/blog";
import BlogHeader from "../../../components/blog/BlogHeader";
import BlogPostContent from "../../../components/blog/BlogPostContent";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function IndividualBlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen text-white">
      <div className="max-md:mx-10 max-md:mt-2 mx-40 mt-4">
        <BlogHeader title="" backLink="/blog" backText="Back to Writings" />

        <BlogPostContent post={post} />

        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}

// Generate static params for known blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs;
}
