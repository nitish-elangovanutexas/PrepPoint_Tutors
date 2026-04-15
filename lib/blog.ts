import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export type BlogPost = BlogPostMeta & { content: string };

const dir = path.join(process.cwd(), "content/blog");

function readDir(): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
}

export function getPostSlugs(): string[] {
  return readDir().map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const full = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(full)) return null;
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    description: String(data.description ?? ""),
    content,
  };
}

export function getAllPostsMeta(): BlogPostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const p = getPostBySlug(slug);
      if (!p) return null;
      return { slug: p.slug, title: p.title, date: p.date, description: p.description };
    })
    .filter((p): p is BlogPostMeta => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
