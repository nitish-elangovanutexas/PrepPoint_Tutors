import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips on SAT prep, college applications, and admissions strategy from PrepPoint Tutors.",
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="bg-background">
      <section className="border-b border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">Blog</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Practical guidance on test prep and admissions—updated as we publish new articles.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ul className="space-y-10">
            {posts.map((post) => (
              <li key={post.slug}>
                <article>
                  <p className="text-sm font-medium text-accent">{post.date}</p>
                  <h2 className="mt-2 text-2xl font-bold text-navy">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-muted">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-navy underline decoration-accent"
                  >
                    Read more
                  </Link>
                </article>
              </li>
            ))}
          </ul>
          {posts.length === 0 && <p className="text-muted">No posts yet.</p>}
        </div>
      </section>
    </div>
  );
}
