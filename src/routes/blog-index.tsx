import { CalendarDays, Clock } from "lucide-react";
import { Link } from "@/lib/navigation";
import { useTranslations, useLocale } from "@/lib/i18n-compat";
import { getPostsByLocale, formatDate, readingTime } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

export function BlogIndexPage() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const posts = getPostsByLocale(locale);

  return (
    <section className="section-y">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-10">
        <header className="mb-16">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            <span>Blog</span>
          </div>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            {t("heading")}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("subheading")}
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-muted-foreground">{t("empty")}</p>
        ) : (
          <ul className="flex flex-col divide-y divide-border">
            {posts.map((post) => {
              const minutes = readingTime(post.description + post.title);
              return (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slugAsParams}`}
                    className="group flex flex-col gap-3 py-8 transition-opacity hover:opacity-80"
                  >
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
                    <h2 className="font-heading text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent md:text-3xl">
                      {post.title}
                    </h2>
                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {post.description}
                    </p>
                    {post.tags.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-1.5">
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
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
