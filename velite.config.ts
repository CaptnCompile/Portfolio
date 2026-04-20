import { defineConfig, defineCollection, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

const computedFields = <T extends { slug: string; locale: string }>(data: T) => {
  // slug from Velite is the file path relative to content root,
  // e.g. "blog/en/building-production-rag". We want just the final segment.
  const segments = data.slug.split("/");
  const slugAsParams = segments[segments.length - 1];
  return {
    ...data,
    slugAsParams,
    url: `/${data.locale}/${segments[0]}/${slugAsParams}`,
  };
};

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120),
      description: s.string().max(240),
      publishedAt: s.isodate(),
      updatedAt: s.isodate().optional(),
      cover: s.image().optional(),
      tags: s.array(s.string()).default([]),
      draft: s.boolean().default(false),
      locale: s.enum(["en", "ja"]),
      slug: s.path(),
      body: s.mdx(),
      metadata: s.metadata(),
    })
    .transform(computedFields),
});

const works = defineCollection({
  name: "Work",
  pattern: "work/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120),
      summary: s.string().max(240),
      client: s.string(),
      role: s.string(),
      stack: s.array(s.string()),
      duration: s.string(),
      outcome: s.string(),
      cover: s.image().optional(),
      publishedAt: s.isodate(),
      featured: s.boolean().default(false),
      locale: s.enum(["en", "ja"]),
      slug: s.path(),
      body: s.mdx(),
      metadata: s.metadata(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts, works },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark-dimmed",
            light: "github-light",
          },
          keepBackground: false,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
