import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Footer from "../../../components/Footer";
import { notFound } from "next/navigation";
import { getPostData, getAllPostSlugs } from "../../../../lib/blog";
import BlogHeader from "../../../components/blog/BlogHeader";
import BlogPostContent from "../../../components/blog/BlogPostContent";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Luan Nguyen",
      description: "The requested blog post could not be found.",
    };
  }

  // Create a clean excerpt from description or content preview
  const excerpt =
    post.description ||
    post.content.replace(/<[^>]*>/g, "").substring(0, 160) + "...";

  // Extract keywords from title and content
  const titleWords = post.title.split(" ").filter((word) => word.length > 3);
  const contentKeywords = [
    "AWS",
    "Software Engineering",
    "Internship",
    "Technology",
    "Programming",
  ];

  return {
    title: `${post.title} | Luan Nguyen`,
    description: excerpt,
    keywords: [
      "Luan Nguyen",
      "Software Engineer",
      "Blog",
      "AWS",
      "Technology",
      ...titleWords,
      ...contentKeywords,
    ],
    authors: [{ name: "Luan Nguyen", url: "https://luannguyen.net" }],
    creator: "Luan Nguyen",
    publisher: "Luan Nguyen",

    // Open Graph metadata for social sharing
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `/blog/post/${post.slug}`,
      title: post.title,
      description: excerpt,
      siteName: "Luan Nguyen's Portfolio",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
          type: "image/jpeg",
        },
      ],
      authors: ["Luan Nguyen"],
      publishedTime: new Date(post.date).toISOString(),
      tags: [
        "Technology",
        "Programming",
        "AWS",
        "Software Engineering",
        "Career",
      ],
    },

    // Twitter Card metadata
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: excerpt,
      images: [post.image],
      creator: "@luannguyen", // Replace with your actual Twitter handle
      site: "@luannguyen", // Replace with your site's Twitter handle
    },

    // Additional metadata
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Canonical URL
    alternates: {
      canonical: `/blog/post/${post.slug}`,
    },

    // Article-specific metadata
    other: {
      "article:author": "Luan Nguyen",
      "article:published_time": new Date(post.date).toISOString(),
      "article:modified_time": new Date().toISOString(),
      "article:section": "Technology",
      "article:tag": "Software Engineering, AWS, Internship, Technology",
    },
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
      <div className="max-md:mx-4 max-md:mt-2 mx-40 mt-4">
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
