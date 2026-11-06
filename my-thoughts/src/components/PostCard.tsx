import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { estimateReadingTime, formatDate, type Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-stone-800 dark:bg-stone-900">
      <div className="mb-3 flex items-center gap-3 text-xs">
        <span className="rounded-full bg-amber-100 px-2.5 py-1 font-medium text-amber-900 dark:bg-amber-950 dark:text-amber-200">
          {post.category}
        </span>
        <span className="text-stone-500 dark:text-stone-400">{formatDate(post.publishedAt)}</span>
      </div>
      <h3 className="text-lg font-semibold leading-snug tracking-tight">
        <Link href={`/posts/${post.slug}`} className="group-hover:underline">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-stone-600 dark:text-stone-400">
        {post.description}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          {estimateReadingTime(post.content)} min read
        </span>
        <Link
          href={`/posts/${post.slug}`}
          className="flex items-center gap-1 font-medium text-stone-900 group-hover:gap-2 dark:text-amber-50"
          aria-label={`Read: ${post.title}`}
        >
          Read <ArrowRight className="h-3.5 w-3.5 transition-all" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
