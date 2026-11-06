import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, Tag } from "lucide-react";
import Markdown from "@/components/Markdown";
import PostCard from "@/components/PostCard";
import {
  estimateReadingTime,
  formatDate,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found — My Thoughts" };
  return {
    title: `${post.title} — My Thoughts`,
    description: post.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12">
      <Link
        href="/#explore"
        className="flex items-center gap-1.5 text-sm text-stone-500 transition hover:text-stone-900 dark:text-stone-400 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden /> All posts
      </Link>

      <header className="mt-8">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900 dark:bg-amber-950 dark:text-amber-200">
          {post.category}
        </span>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-stone-600 dark:text-stone-400">
          {post.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-stone-500 dark:text-stone-400">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" aria-hidden /> {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" aria-hidden /> {estimateReadingTime(post.content)} min read
          </span>
          <span>By {post.author}</span>
        </div>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 rounded-full border border-stone-300 px-2.5 py-1 text-xs text-stone-600 dark:border-stone-700 dark:text-stone-300"
              >
                <Tag className="h-3 w-3" aria-hidden /> {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="mt-10 border-t border-stone-200 pt-10 dark:border-stone-800">
        <Markdown content={post.content} />
      </article>

      {related.length > 0 && (
        <section className="mt-16 border-t border-stone-200 pt-10 dark:border-stone-800">
          <h2 className="text-xl font-semibold tracking-tight">Keep reading</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
