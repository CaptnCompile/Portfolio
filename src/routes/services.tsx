import { Brain, Code2, Lightbulb, Check, ArrowRight } from "lucide-react";
import { Link } from "@/lib/navigation";
import { useTranslations, useLocale } from "@/lib/i18n-compat";

const ENGAGEMENT_EN = [
  {
    title: "Project-based",
    description:
      "Fixed scope, fixed price. For greenfield builds or well-defined features. Typically 4–12 weeks.",
  },
  {
    title: "Retainer",
    description:
      "Reserved weekly capacity for ongoing work — ideal for teams that need consistent senior engineering without a full-time hire.",
  },
  {
    title: "Advisory / audit",
    description:
      "Short engagements for architecture review, code audits, and technical due diligence. 1–2 weeks.",
  },
];

const ENGAGEMENT_JA = [
  {
    title: "プロジェクト契約",
    description:
      "スコープ・価格を固定した契約形態。新規開発や要件の定まった機能開発向き。通常4〜12週間。",
  },
  {
    title: "リテイナー契約",
    description:
      "週単位でキャパシティを確保する継続契約。フルタイム採用なしに継続的なシニア工数が欲しいチームに最適。",
  },
  {
    title: "アドバイザリー・監査",
    description:
      "アーキテクチャレビュー、コード監査、技術デューデリジェンス向けの短期契約。1〜2週間。",
  },
];

const SERVICE_DETAILS = [
  { key: "fullstack" as const, icon: Code2 },
  { key: "ai" as const, icon: Brain },
  { key: "consulting" as const, icon: Lightbulb },
];

export function ServicesPage() {
  const t = useTranslations("services");
  const tHome = useTranslations("home.services");
  const locale = useLocale();
  const engagements = locale === "ja" ? ENGAGEMENT_JA : ENGAGEMENT_EN;

  return (
    <section className="section-y">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <header className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            <span>Services</span>
          </div>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            {t("heading")}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("subheading")}
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICE_DETAILS.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 md:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold">
                {tHome(`items.${key}.title`)}
              </h3>
              <p
                className="mt-1 font-jp-display text-sm text-muted-foreground"
                lang="ja"
              >
                {tHome(`items.${key}.titleJa`)}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {tHome(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-24">
          <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
            {t("engagement")}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {engagements.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <Check className="h-5 w-5 text-accent" />
                <h3 className="mt-4 font-heading text-lg font-semibold">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
          >
            {locale === "ja" ? "相談を始める" : "Start a conversation"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
