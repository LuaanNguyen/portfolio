import React from "react";
import Footer from "../components/Footer";
import { getSortedPostsData } from "../../lib/blog";
import BlogHeader from "../components/blog/BlogHeader";
import BlogPostList from "../components/blog/BlogPostList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writings | Luan Nguyen",
  description:
    "Essays and notes on software engineering, AI systems, internships, and personal growth.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Writings | Luan Nguyen",
    description:
      "Essays and notes on software engineering, AI systems, internships, and personal growth.",
    siteName: "Luan Nguyen's Portfolio",
    images: [
      {
        url: "/luan_aws.png",
        width: 1200,
        height: 630,
        alt: "Luan Nguyen blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Writings | Luan Nguyen",
    description:
      "Essays and notes on software engineering, AI systems, internships, and personal growth.",
    images: ["/luan_aws.png"],
    creator: "@luaan_ng",
  },
};

export default function BlogListingPage() {
  const blogPosts = getSortedPostsData();
  const toIsoDate = (date: string) => {
    const parsed = new Date(date);
    return Number.isNaN(parsed.getTime()) ? date : parsed.toISOString();
  };
  const blogListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Luan Nguyen Writings",
    url: "https://luannguyen.net/blog",
    author: {
      "@type": "Person",
      name: "Luan Nguyen",
      url: "https://luannguyen.net",
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://luannguyen.net/blog/post/${post.slug}`,
      datePublished: toIsoDate(post.date),
      image: post.image.startsWith("http")
        ? post.image
        : `https://luannguyen.net${post.image}`,
    })),
  };

  return (
    <div className="min-h-screen text-white">
      <div className="max-md:mx-4 max-md:mt-2 mx-40 mt-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
        />
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
