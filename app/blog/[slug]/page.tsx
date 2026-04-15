import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownBody } from "@/components/markdown-body";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post" };
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="bg-background">
      <header className="border-b border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-accent">{post.date}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy sm:text-5xl">{post.title}</h1>
          <p className="mt-6 text-lg text-muted">{post.description}</p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <MarkdownBody content={post.content} />
        <p className="mt-12">
          <Link href="/blog" className="font-semibold text-navy underline decoration-accent">
            ← Back to blog
          </Link>
        </p>
      </div>
    </article>
  );
}
