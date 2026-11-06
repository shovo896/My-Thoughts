import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — My Thoughts",
  description: "What My Thoughts is, who writes it, and how it is built.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>
      <div className="markdown-body mt-8">
        <p>
          <strong>My Thoughts</strong> is a personal blog for essays, reading
          notes, and small experiments. The goal is simple: write things down
          well enough that future-me (and maybe you) can use them.
        </p>
        <h2>What you will find here</h2>
        <ul>
          <li><strong>Essays</strong> — longer, slower pieces on technology and attention</li>
          <li><strong>Research notes</strong> — distilled summaries of papers I read</li>
          <li><strong>Experiments</strong> — things I built and what I learned</li>
        </ul>
        <h2>How this site is built</h2>
        <p>
          Next.js 16 with static rendering, Markdown posts with math and code
          support, and a database schema (Prisma) ready for when posts move
          out of the codebase and into Postgres.
        </p>
      </div>
      <Link
        href="/#explore"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-amber-50 transition hover:bg-stone-700 dark:bg-amber-50 dark:text-stone-900 dark:hover:bg-amber-200"
      >
        Start reading <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </main>
  );
}
