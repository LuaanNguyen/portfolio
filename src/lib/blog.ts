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

    // Convert headers with consistent spacing
    contentHtml = contentHtml.replace(
      /^### (.+)$/gm,
      '<h3 class="text-xl font-semibold text-spotify-white mt-8 mb-4">$1</h3>'
    );
    contentHtml = contentHtml.replace(
      /^## (.+)$/gm,
      '<h2 class="text-2xl font-bold text-spotify-white mt-12 mb-6">$1</h2>'
    );
    contentHtml = contentHtml.replace(
      /^# (.+)$/gm,
      '<h1 class="text-3xl font-bold text-spotify-white mt-16 mb-8">$1</h1>'
    );

    // Convert code blocks with consistent spacing
    contentHtml = contentHtml.replace(
      /```(\w+)?\n([\s\S]*?)```/g,
      '<pre class="bg-spotify-light-dark rounded-lg p-6 overflow-x-auto my-8 border border-spotify-green/20 shadow-lg"><code class="text-sm text-spotify-green leading-relaxed">$2</code></pre>'
    );

    // Convert inline code
    contentHtml = contentHtml.replace(
      /`([^`]+)`/g,
      '<code class="bg-spotify-light-dark px-2 py-2 rounded text-spotify-green text-sm">$1</code>'
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
      /_([^_]+?)_/g,
      '<em class="text-spotify-green italic">$1</em>'
    );

    // Handle italic text with spaces (line-level italic)
    contentHtml = contentHtml.replace(
      /^_\s*(.+?)\s*_$/gm,
      '<em class="text-spotify-green italic block my-6 p-4 bg-spotify-light-dark/20 rounded-lg border-l-4 border-spotify-green/40">$1</em>'
    );

    // Convert images ![alt text](image-url) with captions
    contentHtml = contentHtml.replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      '<figure class="my-12 mx-auto max-w-3xl"><img src="$2" alt="$1" class="w-full rounded-lg shadow-xl border border-spotify-green/10" loading="lazy" /><figcaption class="text-center text-sm text-spotify-white/60 mt-4 italic font-medium">$1</figcaption></figure>'
    );

    // Convert links [text](url)
    contentHtml = contentHtml.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-spotify-green hover:text-green-400 underline underline-offset-2 hover:no-underline transition-all duration-200 font-medium">$1</a>'
    );

    // Convert blockquotes
    contentHtml = contentHtml.replace(
      /^> (.+)$/gm,
      '<blockquote class="border-l-4 border-spotify-green pl-6 py-4 my-8 bg-spotify-light-dark/30 rounded-r-lg italic text-spotify-white/80 shadow-lg">$1</blockquote>'
    );

    // Convert horizontal rules (---)
    contentHtml = contentHtml.replace(
      /^---$/gm,
      '<hr class="border-t-2 border-spotify-green/30 my-12 mx-auto max-w-md" />'
    );

    // Convert strikethrough ~~text~~
    contentHtml = contentHtml.replace(
      /~~(.+?)~~/g,
      '<del class="line-through text-spotify-white/60">$1</del>'
    );

    // Convert tables (basic support)
    // Table headers (| Header 1 | Header 2 |)
    contentHtml = contentHtml.replace(/^\|(.+)\|$/gm, (match, content) => {
      const cells = content
        .split("|")
        .map((cell: string) => cell.trim())
        .filter((cell: string) => cell);
      const isHeader = cells.every(
        (cell: string) => cell.includes("---") || !contentHtml.includes("|---")
      );

      if (cells.some((cell: string) => cell.includes("---"))) {
        return ""; // Skip separator rows
      }

      const cellTags = isHeader ? "th" : "td";
      const cellClass = isHeader
        ? "px-4 py-3 text-left font-semibold text-spotify-white border-b border-spotify-green/30 bg-spotify-light-dark/50"
        : "px-4 py-3 text-left text-spotify-white/80 border-b border-spotify-green/10";

      const cellsHtml = cells
        .map(
          (cell: string) =>
            `<${cellTags} class="${cellClass}">${cell}</${cellTags}>`
        )
        .join("");
      return `<tr class="hover:bg-spotify-light-dark/30 transition-colors duration-200">${cellsHtml}</tr>`;
    });

    // Wrap table rows in table tags
    contentHtml = contentHtml.replace(
      /(<tr.*?>.*?<\/tr>\s*)+/g,
      '<div class="overflow-x-auto my-6"><table class="min-w-full border border-spotify-green/20 rounded-lg overflow-hidden">$&</table></div>'
    );

    // Convert bullet points
    contentHtml = contentHtml.replace(
      /^- (.+)$/gm,
      '<li class="ml-6 mb-3 list-disc marker:text-spotify-green leading-relaxed">$1</li>'
    );

    // Convert numbered lists
    contentHtml = contentHtml.replace(
      /^\d+\. (.+)$/gm,
      '<li class="ml-6 mb-3 list-decimal marker:text-spotify-green leading-relaxed">$1</li>'
    );

    // Wrap consecutive unordered list items in ul tags
    contentHtml = contentHtml.replace(
      /(<li class="[^"]*list-disc[^"]*">.*?<\/li>\s*)+/g,
      '<ul class="my-8 space-y-2 pl-4">$&</ul>'
    );

    // Wrap consecutive ordered list items in ol tags
    contentHtml = contentHtml.replace(
      /(<li class="[^"]*list-decimal[^"]*">.*?<\/li>\s*)+/g,
      '<ol class="my-8 space-y-2 pl-4">$&</ol>'
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
        return `<p class="mb-6 leading-relaxed text-spotify-white/90">${trimmedLine}</p>`;
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
