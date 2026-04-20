import { ArrowUpRight } from "lucide-react";
import { Link } from "@/lib/navigation";
import { useTranslations, useLocale } from "@/lib/i18n-compat";
import { getWorksByLocale } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

export function WorkIndexPage() {
  const t = useTranslations("work");
  const locale = useLocale();
  const works = getWorksByLocale(locale);

  return (
    <section className="section-y">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <header className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            <span>Work</span>
          </div>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            {t("heading")}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("subheading")}
          </p>
        </header>

        {works.length === 0 ? (
          <p className="text-muted-foreground">{t("empty")}</p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 md:gap-8">
            {works.map((work) => (
              <li key={work.slug}>
                <Link
                  href={`/work/${work.slugAsParams}`}
                  className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5 md:min-h-[280px] md:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {work.client}
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>

                  <h2 className="mt-6 font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                    {work.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {work.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {work.stack.slice(0, 5).map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="font-mono text-[10px] font-normal uppercase tracking-wider"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
