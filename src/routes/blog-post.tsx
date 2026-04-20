import { useParams, Navigate } from "react-router-dom";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { Link } from "@/lib/navigation";
import { useTranslations, useLocale } from "@/lib/i18n-compat";
import {
  getPostBySlug,
  formatDate,
  readingTime,
} from "@/lib/content";
import { MdxContent } from "@/components/mdx/mdx-content";
import { Badge } from "@/components/ui/badge";

export function BlogPostPage() {
  const { slug } = useParams();
  const locale = useLocale();
  const t = useTranslations("blog");

  if (!slug) return <Navigate to="/blog" replace />;
  const post = getPostBySlug(locale, slug);
  if (!post) return <Navigate to={`/${locale}/blog`} replace />;

  const minutes = readingTime(post.description + post.title);

  return (
    <article className="section-y">
      <div className="mx-auto w-full max-w-3xl px-6 md:px-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("heading")}
        </Link>

        <header className="mt-10 border-b border-border pb-10">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {formatDate(post.publishedAt, locale)}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {t("readingTime", { minutes })}
            </span>
          </div>
          <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {post.description}
          </p>
          {post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-[10px] font-normal uppercase tracking-wider"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        <div className="prose-custom mt-10">
          <MdxContent code={post.body} />
        </div>
      </div>
    </article>
  );
}
