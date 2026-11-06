import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, Sparkles } from "lucide-react";
import Explore from "@/components/Explore";
import { estimateReadingTime, formatDate, getAllPosts, getFeaturedPost } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const featured = getFeaturedPost();

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-5">
      {/* Hero */}
      <section className="py-16 sm:py-20">
        <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-amber-700 dark:text-amber-400">
          <Sparkles className="h-4 w-4" aria-hidden /> Essays · Notes · Experiments
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          My Thoughts — ideas worth keeping.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600 dark:text-stone-400">
          A personal blog for slow, deliberate writing: what I read, what I
          build, and what I learn along the way.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#explore"
            className="flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-amber-50 transition hover:bg-stone-700 dark:bg-amber-50 dark:text-stone-900 dark:hover:bg-amber-200"
          >
            Browse posts <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-stone-300 px-5 py-3 text-sm font-medium transition hover:border-stone-500 dark:border-stone-700"
          >
            About this blog
          </Link>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10 dark:border-stone-800 dark:bg-stone-900">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400">
            Featured · {featured.category}
          </p>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            <Link href={`/posts/${featured.slug}`} className="hover:underline">
              {featured.title}
            </Link>
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-stone-600 dark:text-stone-400">
            {featured.description}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-stone-500 dark:text-stone-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden /> {formatDate(featured.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden /> {estimateReadingTime(featured.content)} min read
            </span>
            <Link
              href={`/posts/${featured.slug}`}
              className="flex items-center gap-1.5 font-medium text-stone-900 dark:text-amber-50"
            >
              Read the post <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>
      )}

      {/* Explore: search + category filter + grid */}
      <div className="py-14">
        <Explore posts={posts} />
      </div>
    </main>
  );
}
