import { useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/lib/navigation";
import { useTranslations, useLocale } from "@/lib/i18n-compat";
import { getWorkBySlug, formatDate } from "@/lib/content";
import { MdxContent } from "@/components/mdx/mdx-content";
import { Badge } from "@/components/ui/badge";

export function WorkDetailPage() {
  const { slug } = useParams();
  const t = useTranslations("work");
  const locale = useLocale();

  if (!slug) return <Navigate to={`/${locale}/work`} replace />;
  const work = getWorkBySlug(locale, slug);
  if (!work) return <Navigate to={`/${locale}/work`} replace />;

  return (
    <article className="section-y">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("heading")}
        </Link>

        <header className="mt-10">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {work.client}
          </div>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            {work.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {work.summary}
          </p>
        </header>

        <dl className="mt-12 grid gap-6 rounded-2xl border border-border bg-card p-6 md:grid-cols-4 md:p-8">
          <MetaItem label={t("labels.role")} value={work.role} />
          <MetaItem label={t("labels.duration")} value={work.duration} />
          <MetaItem
            label="Published"
            value={formatDate(work.publishedAt, locale)}
          />
          <div className="md:col-span-1">
            <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {t("labels.stack")}
            </dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {work.stack.map((s) => (
                <Badge
                  key={s}
                  variant="secondary"
                  className="font-mono text-[10px] font-normal uppercase tracking-wider"
                >
                  {s}
                </Badge>
              ))}
            </dd>
          </div>
        </dl>

        <div className="mt-6 rounded-2xl border border-accent/30 bg-accent-soft p-6 md:p-8">
          <div className="text-xs font-medium uppercase tracking-wider text-accent">
            {t("labels.outcome")}
          </div>
          <p className="mt-2 text-base leading-relaxed text-foreground md:text-lg">
            {work.outcome}
          </p>
        </div>

        <div className="prose-custom mt-12">
          <MdxContent code={work.body} />
        </div>
      </div>
    </article>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-2 text-sm text-foreground">{value}</dd>
    </div>
  );
}
