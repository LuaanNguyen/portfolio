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

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(matterResult.content);

    let contentHtml = processedContent.toString();

    // Apply custom styling to the generated HTML
    contentHtml = applyCustomStyling(contentHtml);

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

// Apply custom Spotify-themed styling to the parsed HTML
function applyCustomStyling(html: string): string {
  let styledHtml = html;

  // Style headers with enhanced Spotify-like design and better spacing
  styledHtml = styledHtml.replace(
    /<h1>/g,
    '<div class="pt-8 pb-2"><h1 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight bg-gradient-to-r from-spotify-green to-green-400 bg-clip-text text-transparent">'
  );
  styledHtml = styledHtml.replace(/<\/h1>/g, "</h1></div>");

  styledHtml = styledHtml.replace(
    /<h2>/g,
    '<div class="pt-8 pb-1"><h2 class="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight border-l-4 border-spotify-green pl-4 bg-spotify-light-dark/30 py-3 rounded-r-lg">'
  );
  styledHtml = styledHtml.replace(/<\/h2>/g, "</h2></div>");

  styledHtml = styledHtml.replace(
    /<h3>/g,
    '<div class="pt-6 pb-1"><h3 class="text-xl md:text-2xl font-semibold text-spotify-white mb-3 tracking-tight border-l-2 border-spotify-green/60 pl-3">'
  );
  styledHtml = styledHtml.replace(/<\/h3>/g, "</h3></div>");

  // Enhanced paragraph styling with better readability
  styledHtml = styledHtml.replace(
    /<p>/g,
    '<p class="mb-5 leading-[1.7] text-spotify-white/95 text-lg font-light tracking-wide">'
  );

  // Enhanced links with Spotify-style hover effects
  styledHtml = styledHtml.replace(
    /<a href="([^"]*)">/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-spotify-green hover:text-green-300 font-medium underline decoration-2 underline-offset-4 decoration-spotify-green/60 hover:decoration-green-300 transition-all duration-300 ease-out hover:bg-spotify-green/10 px-1 py-0.5 rounded-sm">'
  );

  // Enhanced code blocks with Spotify dark theme
  styledHtml = styledHtml.replace(
    /<pre><code>/g,
    '<div class="my-6"><pre class="bg-black/90 rounded-xl p-6 overflow-x-auto border border-spotify-green/30 shadow-2xl shadow-spotify-green/10 backdrop-blur-sm"><code class="text-sm text-spotify-green leading-[1.6] font-mono tracking-wide">'
  );
  styledHtml = styledHtml.replace(/<\/code><\/pre>/g, "</code></pre></div>");

  // Enhanced inline code with better contrast
  styledHtml = styledHtml.replace(
    /<code>/g,
    '<code class="bg-black/80 px-3 py-1.5 rounded-md text-spotify-green text-sm font-mono border border-spotify-green/30 shadow-sm">'
  );

  // Enhanced bold text with better visual weight
  styledHtml = styledHtml.replace(
    /<strong>/g,
    '<strong class="font-bold text-white bg-gradient-to-r from-spotify-green/20 to-green-400/20 px-1 py-0.5 rounded-sm border-l-2 border-spotify-green/50">'
  );

  // Enhanced italic text with Spotify green and better styling
  styledHtml = styledHtml.replace(
    /<em>/g,
    "<em class=\"text-spotify-green font-medium italic tracking-wide relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-spotify-green/30 after:rounded-full\">"
  );

  // Enhanced blockquotes with Spotify-inspired design
  styledHtml = styledHtml.replace(
    /<blockquote>/g,
    '<div class="my-6"><blockquote class="relative border-l-4 border-spotify-green pl-6 py-4 my-4 bg-gradient-to-r from-spotify-light-dark/40 to-transparent rounded-r-xl italic text-spotify-white/90 shadow-xl shadow-black/20 before:content-[\'"\'] before:text-5xl before:text-spotify-green/40 before:absolute before:-top-1 before:-left-1 before:font-serif text-lg leading-relaxed">'
  );
  styledHtml = styledHtml.replace(/<\/blockquote>/g, "</blockquote></div>");

  // Enhanced lists with better spacing and Spotify-style bullets
  styledHtml = styledHtml.replace(/<ul>/g, '<ul class="my-6 space-y-2 pl-6">');
  styledHtml = styledHtml.replace(/<ol>/g, '<ol class="my-6 space-y-2 pl-6">');
  styledHtml = styledHtml.replace(
    /<li>/g,
    "<li class=\"leading-relaxed text-spotify-white/90 text-lg relative pl-4 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-spotify-green before:rounded-full before:shadow-lg before:shadow-spotify-green/50\">"
  );

  // Enhanced horizontal rules with Spotify style
  styledHtml = styledHtml.replace(
    /<hr ?\/?>/g,
    '<div class="my-10 flex items-center justify-center"><hr class="border-0 h-0.5 bg-gradient-to-r from-transparent via-spotify-green to-transparent w-full max-w-md shadow-lg" /></div>'
  );

  // Enhanced images with better styling and captions
  styledHtml = styledHtml.replace(
    /<img src="([^"]*)" alt="([^"]*)"( ?\/?)?>/g,
    '<figure class="my-8 mx-auto max-w-4xl group"><div class="relative overflow-hidden rounded-2xl border border-spotify-green/20 shadow-2xl shadow-black/30 hover:shadow-spotify-green/20 transition-all duration-500"><img src="$1" alt="$2" class="w-full transform group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" /></div><figcaption class="text-center text-sm text-spotify-white/70 mt-4 italic font-medium tracking-wide bg-spotify-light-dark/20 rounded-lg py-2 px-4 mx-auto max-w-md">$2</figcaption></figure>'
  );

  // Add overall container styling for better content flow
  styledHtml = `<div class="prose-spotify max-w-none">${styledHtml}</div>`;

  return styledHtml;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getSortedPostsData();
  return posts.find((post) => post.slug === slug) || null;
}
