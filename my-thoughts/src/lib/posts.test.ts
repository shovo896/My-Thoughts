import { describe, expect, it } from "vitest";
import {
  estimateReadingTime,
  getAllPosts,
  getCategories,
  getFeaturedPost,
  getPostBySlug,
  getRelatedPosts,
  searchPosts,
} from "./posts";

describe("posts data layer", () => {
  it("returns posts newest-first with unique slugs", () => {
    const posts = getAllPosts();
    expect(posts.length).toBeGreaterThan(0);
    const dates = posts.map((p) => +new Date(p.publishedAt));
    expect(dates).toEqual([...dates].sort((a, b) => b - a));
    expect(new Set(posts.map((p) => p.slug)).size).toBe(posts.length);
  });

  it("finds a post by slug and returns undefined for unknown slugs", () => {
    expect(getPostBySlug("welcome-to-my-thoughts")?.title).toContain(
      "Welcome",
    );
    expect(getPostBySlug("does-not-exist")).toBeUndefined();
  });

  it("always has a featured post", () => {
    expect(getFeaturedPost()).toBeDefined();
  });

  it("lists sorted unique categories", () => {
    const categories = getCategories();
    expect(categories).toEqual([...new Set(categories)].sort());
  });

  it("searches by keyword, category, and both", () => {
    const all = getAllPosts();
    expect(searchPosts(all, "nextjs")).toHaveLength(1);
    expect(searchPosts(all, "", "Technology")).toHaveLength(2);
    expect(searchPosts(all, "math", "Technology")).toHaveLength(1);
    expect(searchPosts(all, "math", "Essays")).toHaveLength(0);
    expect(searchPosts(all, "  ")).toHaveLength(all.length);
  });

  it("estimates reading time with a 1-minute floor", () => {
    expect(estimateReadingTime("hello")).toBe(1);
    expect(estimateReadingTime("word ".repeat(400))).toBe(2);
  });

  it("returns related posts excluding the post itself", () => {
    const post = getPostBySlug("math-in-markdown")!;
    const related = getRelatedPosts(post);
    expect(related).not.toContainEqual(post);
    expect(related.length).toBeLessThanOrEqual(2);
  });
});
