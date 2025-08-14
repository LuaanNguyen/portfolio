import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  content?: string;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

export function getSortedPostsData(): BlogPost[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...(matterResult.data as Omit<BlogPost, "id" | "content">),
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      return {
        slug: fileName.replace(/\.md$/, ""),
      };
    });
}

export async function getPostData(
  slug: string
): Promise<BlogPostWithContent | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Simple markdown to HTML conversion
    let contentHtml = matterResult.content;

    // Convert headers
    contentHtml = contentHtml.replace(
      /^### (.+)$/gm,
      '<h3 class="text-xl font-semibold text-spotify-white mt-6 mb-3">$1</h3>'
    );
    contentHtml = contentHtml.replace(
      /^## (.+)$/gm,
      '<h2 class="text-2xl font-bold text-spotify-white mt-8 mb-4">$1</h2>'
    );
    contentHtml = contentHtml.replace(
      /^# (.+)$/gm,
      '<h1 class="text-3xl font-bold text-spotify-white mt-10 mb-5">$1</h1>'
    );

    // Convert code blocks
    contentHtml = contentHtml.replace(
      /```(\w+)?\n([\s\S]*?)```/g,
      '<pre class="bg-spotify-light-dark rounded-lg p-4 overflow-x-auto my-6 border border-spotify-green/20"><code class="text-sm text-spotify-green">$2</code></pre>'
    );

    // Convert inline code
    contentHtml = contentHtml.replace(
      /`([^`]+)`/g,
      '<code class="bg-spotify-light-dark px-2 py-1 rounded text-spotify-green text-sm">$1</code>'
    );

    // Convert bold text
    contentHtml = contentHtml.replace(
      /\*\*(.+?)\*\*/g,
      '<strong class="font-semibold text-spotify-white">$1</strong>'
    );

    // Convert italic text
    contentHtml = contentHtml.replace(
      /\*(.+?)\*/g,
      '<em class="text-spotify-green italic">$1</em>'
    );
    contentHtml = contentHtml.replace(
      /_(.+?)_/g,
      '<em class="text-spotify-green italic">$1</em>'
    );

    // Convert bullet points
    contentHtml = contentHtml.replace(
      /^- (.+)$/gm,
      '<li class="ml-6 mb-2 list-disc">$1</li>'
    );

    // Wrap consecutive list items in ul tags
    contentHtml = contentHtml.replace(
      /(<li.*?>.*?<\/li>\s*)+/g,
      '<ul class="my-4 space-y-1">$&</ul>'
    );

    // Convert paragraphs (lines that aren't HTML tags)
    const lines = contentHtml.split("\n");
    const processedLines = lines.map((line) => {
      const trimmedLine = line.trim();
      if (
        trimmedLine &&
        !trimmedLine.startsWith("<") &&
        !trimmedLine.endsWith(">")
      ) {
        return `<p class="mb-4 leading-relaxed">${trimmedLine}</p>`;
      }
      return line;
    });

    contentHtml = processedLines.join("\n");

    // Clean up empty paragraphs
    contentHtml = contentHtml.replace(/<p[^>]*>\s*<\/p>/g, "");

    // Combine the data with the slug and content
    return {
      slug,
      content: contentHtml,
      ...(matterResult.data as Omit<BlogPost, "slug" | "content">),
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getSortedPostsData();
  return posts.find((post) => post.slug === slug) || null;
}
