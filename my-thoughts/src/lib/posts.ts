/**
 * Content layer for "My Thoughts".
 *
 * The Prisma schema (prisma/schema.prisma) defines the production models
 * (Post, Category, Tag, Research, ...). Until a DATABASE_URL is wired up,
 * the site renders from the typed sample posts below, which mirror the
 * Post model 1:1 (slug, description, markdown content, category, tags,
 * featured, publishedAt, readingTime). Swap the data source inside
 * getAllPosts()/getPostBySlug() for Prisma queries later — the UI and
 * tests do not need to change.
 */

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** Markdown body (supports GFM tables, math via $...$, and code blocks). */
  content: string;
  category: string;
  tags: string[];
  publishedAt: string; // ISO date
  featured?: boolean;
  author: string;
};

export const samplePosts: Post[] = [
  {
    slug: "welcome-to-my-thoughts",
    title: "Welcome to My Thoughts — why I started writing",
    description:
      "A short note on what this space is for: ideas worth keeping, notes from things I read, and experiments I want to remember.",
    content: [
      "## Hello, and welcome",
      "",
      "This is my corner of the internet for slow, deliberate writing. Not hot takes, not threads — just thoughts I want to keep and share.",
      "",
      "### What you will find here",
      "",
      "- **Essays** — longer pieces on technology, learning, and life",
      "- **Notes** — distilled summaries of papers and books",
      "- **Experiments** — things I built, measured, and learned from",
      "",
      "> The best way to understand something is to try to explain it to someone else.",
      "",
      "Thanks for stopping by. Start with the featured post, or browse by category below.",
    ].join("\n"),
    category: "Meta",
    tags: ["welcome", "writing"],
    publishedAt: "2026-11-01",
    featured: true,
    author: "My Thoughts",
  },
  {
    slug: "learning-in-public",
    title: "Learning in public: notes compound faster than memory",
    description:
      "Writing down what you learn — even badly — beats re-reading the same article ten times. Here is the system that works for me.",
    content: [
      "## The problem with silent learning",
      "",
      "I used to read a lot and retain very little. The fix was embarrassingly simple: **write one paragraph about every thing I finish reading**.",
      "",
      "### The 3-step loop",
      "",
      "1. Read with a pen — highlight only what surprises you",
      "2. Close the source and write what you remember",
      "3. Compare, then fix the gaps in your own words",
      "",
      "After a month, the notes became a personal textbook. After a year, they became this blog.",
      "",
      "```ts",
      "const retention = notesWritten * 3; // roughly, anecdotally",
      "```",
    ].join("\n"),
    category: "Learning",
    tags: ["learning", "productivity", "notes"],
    publishedAt: "2026-10-24",
    author: "My Thoughts",
  },
  {
    slug: "math-in-markdown",
    title: "Math in Markdown: rendering LaTeX on the web",
    description:
      "This post is a live demo — inline and display math rendered with KaTeX, tables with GitHub Flavored Markdown, and syntax-highlighted code.",
    content: [
      "## Inline math",
      "",
      "The quadratic formula is $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.",
      "",
      "## Display math",
      "",
      "$$",
      "E = mc^2",
      "$$",
      "",
      "## Tables (GFM)",
      "",
      "| Symbol | Meaning |",
      "| --- | --- |",
      "| $\\alpha$ | angle |",
      "| $\\beta$ | beta coefficient |",
      "",
      "## Code",
      "",
      "```python",
      "def hello(name):",
      "    return f\"Hello, {name}!\"",
      "```",
    ].join("\n"),
    category: "Technology",
    tags: ["markdown", "math", "katex"],
    publishedAt: "2026-10-15",
    author: "My Thoughts",
  },
  {
    slug: "building-with-nextjs-16",
    title: "Building with Next.js 16: what changed and what I like",
    description:
      "Cache components, partial prefetching, and a calmer mental model for server rendering — my first impressions after rebuilding this site.",
    content: [
      "## First impressions",
      "",
      "Rebuilding this site on Next.js 16 felt noticeably faster to develop against. The defaults push you toward static, cacheable pages — which is exactly what a blog wants.",
      "",
      "### What I like",
      "",
      "- **Cache components** make the static/dynamic boundary explicit",
      "- **Partial prefetching** keeps navigation instant without shipping everything",
      "- Turbopack dev builds feel instant even as the project grows",
      "",
      "### What to watch",
      "",
      "Anything that reads request-time data (cookies, search params) opts a route out of static rendering, so keep data fetching in server components and pass plain props down.",
    ].join("\n"),
    category: "Technology",
    tags: ["nextjs", "web", "performance"],
    publishedAt: "2026-10-02",
    author: "My Thoughts",
  },
  {
    slug: "reading-papers-effectively",
    title: "How I read research papers without drowning",
    description:
      "A practical workflow for getting value from dense papers: abstract first, figures second, proofs only when you need them.",
    content: [
      "## The 20-minute rule",
      "",
      "Most papers do not deserve a full read. Give every paper 20 minutes, in this order:",
      "",
      "1. **Abstract + conclusion** — what did they claim?",
      "2. **Figures and tables** — does the evidence match the claim?",
      "3. **Introduction** — what problem, and why now?",
      "4. **Method** — only if steps 1–3 convinced you it matters",
      "",
      "## Keep a paper log",
      "",
      "One line per paper: *claim, evidence, verdict*. After fifty papers, patterns emerge that no single paper can show you.",
    ].join("\n"),
    category: "Research",
    tags: ["research", "reading", "workflow"],
    publishedAt: "2026-09-18",
    author: "My Thoughts",
  },
  {
    slug: "on-slow-technology",
    title: "In praise of slow technology",
    description:
      "Not every tool needs an AI button. Some of the best software I use is boring, fast, and respectful of my attention.",
    content: [
      "## Boring is a feature",
      "",
      "The tools I trust most share a trait: they do one thing, quickly, and then get out of the way. No feed, no streak, no notification.",
      "",
      "### A small checklist",
      "",
      "- Opens instantly, works offline",
      "- Data is plain text I own",
      "- No account required to read my own files",
      "",
      "Building this site, I tried to follow the same rules: static pages, no tracking, content that works with JavaScript disabled.",
    ].join("\n"),
    category: "Essays",
    tags: ["technology", "essay", "attention"],
    publishedAt: "2026-09-05",
    author: "My Thoughts",
  },
];

/** Rough reading time: ~200 words per minute, minimum 1. */
export function estimateReadingTime(markdown: string): number {
  const words = markdown
    .replace(/[#>*`$\\[\]()]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function getAllPosts(): Post[] {
  return [...samplePosts].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );
}

export function getFeaturedPost(): Post | undefined {
  return getAllPosts().find((p) => p.featured) ?? getAllPosts()[0];
}

export function getPostBySlug(slug: string): Post | undefined {
  return samplePosts.find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  return [...new Set(getAllPosts().map((p) => p.category))].sort();
}

export function getRelatedPosts(post: Post, count = 2): Post[] {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .sort(
      (a, b) =>
        b.tags.filter((t) => post.tags.includes(t)).length -
        a.tags.filter((t) => post.tags.includes(t)).length,
    )
    .slice(0, count);
}

/** Case-insensitive search across title, description, category and tags. */
export function searchPosts(
  posts: Post[],
  query: string,
  category?: string,
): Post[] {
  const q = query.trim().toLowerCase();
  return posts.filter((p) => {
    const inCategory = !category || category === "All" || p.category === category;
    if (!inCategory) return false;
    if (!q) return true;
    const haystack = [p.title, p.description, p.category, ...p.tags]
      .join(" ")
      .toLowerCase();
    return q.split(/\s+/).every((word) => haystack.includes(word));
  });
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(iso));
}
