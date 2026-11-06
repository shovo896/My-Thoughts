# My Thoughts

A personal blog — essays, research notes, and experiments — built with
Next.js 16, React 19, and Tailwind CSS 4.

## Features

- **Home** — hero, featured post, and an explorable post grid
- **Search & category filter** — client-side, instant (no server round-trip)
- **Post pages** (`/posts/[slug]`) — statically generated, with per-post
  metadata, reading time, tags, and related posts
- **Markdown rendering** — GitHub Flavored Markdown, KaTeX math
  (`$...$` / `$$...$$`), and syntax-highlighted code blocks
- **About & 404 pages**, sticky header, footer, dark mode via
  `prefers-color-scheme`
- **Prisma schema** (`prisma/schema.prisma`) for the production data model:
  `User`, `Post`, `Category`, `Tag`, `Research`, `MediaAsset`,
  `ArticleAnalytics`, plus Auth.js `Account`/`Session` tables

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the dev server (webpack)            |
| `npm run build`   | Production build                          |
| `npm run start`   | Serve the production build                |
| `npm run lint`    | ESLint (Next.js + TypeScript rules)       |
| `npm test`        | Run unit tests (Vitest)                   |
| `npm run db:generate` | Generate the Prisma client            |
| `npm run db:push`     | Push the schema to `DATABASE_URL`     |
| `npm run db:studio`   | Open Prisma Studio                      |

## Content

Posts currently live in `src/lib/posts.ts` as typed sample data that mirrors
the Prisma `Post` model, so the site builds and runs without a database.
To add a post, append an entry to `samplePosts` (slug, title, description,
Markdown `content`, category, tags, `publishedAt`).

To go live with the database: set `DATABASE_URL`, run `npm run db:push`,
seed `Post`/`Category`/`Tag` rows, then replace the data source inside
`getAllPosts()` / `getPostBySlug()` with Prisma queries — the UI and tests
stay the same.

## Project structure

```
src/
  app/          Routes: /, /posts/[slug], /about, 404
  components/   Header, Footer, PostCard, Explore (search/filter), Markdown
  lib/posts.ts  Content layer + search/reading-time helpers (tested)
prisma/
  schema.prisma Production data model
```
