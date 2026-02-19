import React from "react";
import Footer from "../../../components/Footer";
import { notFound } from "next/navigation";
import { getPostData, getAllPostSlugs } from "../../../../lib/blog";
import BlogHeader from "../../../components/blog/BlogHeader";
import BlogPostContent from "../../../components/blog/BlogPostContent";
import type { Metadata } from "next";

const SITE_URL = "https://luannguyen.net";
const DEFAULT_AUTHOR = "Luan Nguyen";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function toIsoDate(dateString: string): string | undefined {
  const parsed = new Date(dateString);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}

function getSeoDescription(post: Awaited<ReturnType<typeof getPostData>>) {
  if (!post) {
    return "The requested blog post could not be found.";
  }

  const plainText = post.content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return post.excerpt || post.description || `${plainText.slice(0, 160)}...`;
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

  const excerpt = getSeoDescription(post);
  const titleWords = post.title.split(" ").filter((word) => word.length > 3);
  const tags = post.tags && post.tags.length > 0 ? post.tags : ["Technology", "Programming"];
  const author = post.author || DEFAULT_AUTHOR;
  const publishedTime = toIsoDate(post.date);
  const canonicalPath = `/blog/post/${post.slug}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return {
    title: `${post.title} | ${DEFAULT_AUTHOR}`,
    description: excerpt,
    keywords: [
      DEFAULT_AUTHOR,
      "Software Engineer",
      "Blog",
      ...tags,
      ...titleWords,
    ],
    authors: [{ name: author, url: SITE_URL }],
    creator: author,
    publisher: DEFAULT_AUTHOR,
    openGraph: {
      type: "article",
      locale: "en_US",
      url: canonicalUrl,
      title: post.title,
      description: excerpt,
      siteName: "Luan Nguyen's Portfolio",
      images: [
        {
          url: post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
          type: "image/jpeg",
        },
      ],
      authors: [author],
      publishedTime,
      section: post.category || "Technology",
      tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: excerpt,
      images: [post.image],
      creator: "@luaan_ng",
      site: "@luaan_ng",
    },
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
    alternates: {
      canonical: canonicalPath,
    },
    other: {
      "article:author": author,
      ...(publishedTime ? { "article:published_time": publishedTime } : {}),
      "article:section": post.category || "Technology",
      "article:tag": tags.join(", "),
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

  const publishedTime = toIsoDate(post.date);
  const articleUrl = `${SITE_URL}/blog/post/${post.slug}`;
  const articleDescription = getSeoDescription(post);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: articleDescription,
    image: post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`,
    datePublished: publishedTime,
    dateModified: publishedTime,
    author: {
      "@type": "Person",
      name: post.author || DEFAULT_AUTHOR,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: DEFAULT_AUTHOR,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    articleSection: post.category || "Technology",
    keywords: (post.tags || []).join(", "),
  };

  return (
    <div className="min-h-screen text-white">
      <div className="max-md:mx-4 max-md:mt-2 mx-40 mt-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
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
