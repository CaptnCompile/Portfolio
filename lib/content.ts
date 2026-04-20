import { posts, works, type Post, type Work } from "#velite";
import type { Locale } from "@/src/i18n/config";

export function getPostsByLocale(locale: Locale): Post[] {
  return posts
    .filter((p) => p.locale === locale && !p.draft)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getPostBySlug(
  locale: Locale,
  slug: string,
): Post | undefined {
  return posts.find(
    (p) => p.locale === locale && p.slugAsParams === slug && !p.draft,
  );
}

export function getWorksByLocale(locale: Locale): Work[] {
  return works
    .filter((w) => w.locale === locale)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getFeaturedWorks(locale: Locale, limit = 3): Work[] {
  return getWorksByLocale(locale)
    .filter((w) => w.featured)
    .slice(0, limit);
}

export function getWorkBySlug(
  locale: Locale,
  slug: string,
): Work | undefined {
  return works.find((w) => w.locale === locale && w.slugAsParams === slug);
}

export function formatDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(locale === "ja" ? "ja-JP" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  const japaneseChars = (text.match(/[\u3000-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/g) || []).length;
  // 200 wpm for English, 500 characters per minute for Japanese.
  const minutes = words / 200 + japaneseChars / 500;
  return Math.max(1, Math.round(minutes));
}

export type { Post, Work };
