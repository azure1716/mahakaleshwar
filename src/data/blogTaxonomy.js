import { blogPosts } from "./blogPosts.js";

/**
 * Converts a text string into a URL-friendly slug (lowercase, hyphenated).
 * Matches the slug style used throughout the blog.
 *
 * @param {string} text
 * @returns {string}
 */
export function slugify(text) {
  if (!text) return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Returns all unique categories derived dynamically from blog posts with post counts,
 * sorted by count descending.
 *
 * @param {Array} [posts=blogPosts]
 * @returns {Array<{ name: string, slug: string, count: number }>}
 */
export function getCategories(posts = blogPosts) {
  const counts = new Map();

  posts.forEach((post) => {
    if (post && post.category && typeof post.category === "string") {
      const cat = post.category.trim();
      counts.set(cat, (counts.get(cat) || 0) + 1);
    }
  });

  return Array.from(counts.entries())
    .map(([name, count]) => ({
      name,
      slug: slugify(name),
      count,
    }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

/**
 * Returns all unique tags derived dynamically from blog posts with post counts,
 * sorted by count descending.
 *
 * @param {Array} [posts=blogPosts]
 * @returns {Array<{ name: string, slug: string, count: number }>}
 */
export function getTags(posts = blogPosts) {
  const counts = new Map();

  posts.forEach((post) => {
    if (post && Array.isArray(post.tags)) {
      post.tags.forEach((tag) => {
        if (tag && typeof tag === "string") {
          const t = tag.trim();
          counts.set(t, (counts.get(t) || 0) + 1);
        }
      });
    }
  });

  return Array.from(counts.entries())
    .map(([name, count]) => ({
      name,
      slug: slugify(name),
      count,
    }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

/**
 * Retrieves all blog posts matching a given category slug.
 *
 * @param {string} categorySlug
 * @param {Array} [posts=blogPosts]
 * @returns {Array}
 */
export function getPostsByCategory(categorySlug, posts = blogPosts) {
  if (!categorySlug) return [];
  const normalized = categorySlug.toLowerCase().trim();
  return posts.filter(
    (post) => post.category && slugify(post.category) === normalized
  );
}

/**
 * Retrieves all blog posts matching a given tag slug.
 *
 * @param {string} tagSlug
 * @param {Array} [posts=blogPosts]
 * @returns {Array}
 */
export function getPostsByTag(tagSlug, posts = blogPosts) {
  if (!tagSlug) return [];
  const normalized = tagSlug.toLowerCase().trim();
  return posts.filter(
    (post) =>
      Array.isArray(post.tags) &&
      post.tags.some((t) => slugify(t) === normalized)
  );
}

/**
 * Finds category metadata (name, slug, count) by slug.
 *
 * @param {string} categorySlug
 * @param {Array} [posts=blogPosts]
 * @returns {{ name: string, slug: string, count: number } | null}
 */
export function getCategoryBySlug(categorySlug, posts = blogPosts) {
  const categories = getCategories(posts);
  return categories.find((c) => c.slug === categorySlug) || null;
}

/**
 * Finds tag metadata (name, slug, count) by slug.
 *
 * @param {string} tagSlug
 * @param {Array} [posts=blogPosts]
 * @returns {{ name: string, slug: string, count: number } | null}
 */
export function getTagBySlug(tagSlug, posts = blogPosts) {
  const tags = getTags(posts);
  return tags.find((t) => t.slug === tagSlug) || null;
}
