"use client";

import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import PostCard from "./PostCard";
import { getCategories, searchPosts, type Post } from "@/lib/posts";

export default function Explore({ posts }: { posts: Post[] }) {
  const categories = useMemo(() => ["All", ...getCategories()], []);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const results = useMemo(
    () => searchPosts(posts, query, category),
    [posts, query, category],
  );

  return (
    <section id="explore" className="scroll-mt-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Explore posts</h2>
        <label className="relative block w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, tag, keyword…"
            className="w-full rounded-full border border-stone-300 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-stone-500 dark:border-stone-700 dark:bg-stone-900"
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={`rounded-full px-3.5 py-1.5 text-sm transition ${
              category === c
                ? "bg-stone-900 text-amber-50 dark:bg-amber-50 dark:text-stone-900"
                : "border border-stone-300 text-stone-600 hover:border-stone-500 dark:border-stone-700 dark:text-stone-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {results.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-8 flex flex-col items-center gap-2 rounded-2xl border border-dashed border-stone-300 py-16 text-center dark:border-stone-700">
          <SearchX className="h-8 w-8 text-stone-400" aria-hidden />
          <p className="font-medium">No posts found</p>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Try a different keyword or category.
          </p>
          <button
            type="button"
            onClick={() => { setQuery(""); setCategory("All"); }}
            className="mt-2 text-sm font-medium underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
