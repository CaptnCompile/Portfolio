import { useTranslations, useLocale } from "@/lib/i18n-compat";

const CAREER_TIMELINE_EN = [
  {
    years: "2022 — present",
    role: "Freelance full-stack & AI engineer",
    description:
      "Independent consulting for Japanese and global clients. Specializing in production AI systems, full-stack TypeScript, and technical architecture.",
  },
  {
    years: "2019 — 2022",
    role: "Senior Engineer, Tokyo megaventure",
    description:
      "Led a team of 6 engineers building a fintech platform serving 2M+ users. Introduced Go microservices and cut infra costs by 40%.",
  },
  {
    years: "2015 — 2019",
    role: "Full-stack Engineer, SIer",
    description:
      "Shipped enterprise systems for Japanese financial institutions. Learned the discipline of production reliability the hard way.",
  },
];

const CAREER_TIMELINE_JA = [
  {
    years: "2022年 — 現在",
    role: "フリーランス フルスタック・AIエンジニア",
    description:
      "国内外のクライアント向けに独立して技術支援を提供。本番運用を前提としたAIシステム、フルスタックTypeScript、技術アーキテクチャを専門とする。",
  },
  {
    years: "2019年 — 2022年",
    role: "シニアエンジニア（東京のメガベンチャー）",
    description:
      "200万人超が利用するフィンテックプラットフォームで、6名のエンジニアチームをリード。Goマイクロサービスを導入し、インフラコストを40%削減。",
  },
  {
    years: "2015年 — 2019年",
    role: "フルスタックエンジニア（SIer）",
    description:
      "日系金融機関向けのエンタープライズシステムを手がける。本番運用の信頼性について、地道に経験を積んだ。",
  },
];

export function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();
  const timeline = locale === "ja" ? CAREER_TIMELINE_JA : CAREER_TIMELINE_EN;

  return (
    <>
      {/* Hero strip with torii background */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/about-torii.jpg)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/95 to-background/70"
        />
        <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            <span>About</span>
          </div>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            {t("heading")}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("subheading")}
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
          {/* Bio with profile frame */}
          <div className="grid gap-12 md:grid-cols-[auto_1fr] md:gap-16">
            <div className="relative">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-accent/20 bg-muted md:h-56 md:w-56">
                <img
                  src="/images/philosophy-shrine.jpg"
                  alt="Profile"
                  className="h-full w-full object-cover grayscale-[20%]"
                />
              </div>
              {/* Hanko mark overlay */}
              <div
                aria-hidden
                className="hanko absolute -bottom-2 -right-2"
                style={{ width: "3.5rem", height: "3.5rem", fontSize: "1.25rem" }}
              >
                川
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                {t("bioHeading")}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/90">
                <p>
                  {locale === "ja"
                    ? "日本を拠点とするシニアエンジニア。フルスタック開発とAI統合を軸に、スタートアップからグローバルチームまで支援しています。国内外で10年以上の実務経験があり、日英いずれの環境でも一貫したコミュニケーションで設計から実装、運用まで担います。"
                    : "Senior engineer based in Japan with over 10 years of production experience. I focus on full-stack development and AI integration, helping startups and global teams ship reliable products. I work fluently in both Japanese and English, across design, implementation, and operations."}
                </p>
                <p>
                  {locale === "ja"
                    ? "得意な領域は、LLMを活用した実用的なプロダクト開発（単なるデモではなく、本番運用に耐えるもの）、TypeScript・Go・Pythonでのバックエンド設計、そしてNext.jsを用いたフロントエンドの作り込みです。"
                    : "My sweet spot is building practical LLM-powered products that hold up in production — not demos — backend architecture in TypeScript, Go, and Python, and polished frontends that don't cut corners."}
                </p>
              </div>
            </div>
          </div>

          {/* Career timeline */}
          <section className="mt-24">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              {t("careerHeading")}
            </h2>
            <ol className="mt-8 space-y-8 border-l border-border pl-6">
              {timeline.map((item) => (
                <li key={item.years} className="relative">
                  <span className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground tabular-nums">
                    {item.years}
                  </div>
                  <div className="mt-1 font-heading text-lg font-semibold">
                    {item.role}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Philosophy with image backdrop */}
          <section className="mt-24">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: "url(/images/philosophy-shrine.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative">
                <h2 className="font-heading text-2xl font-semibold tracking-tight">
                  {t("philosophyHeading")}
                </h2>
                <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-foreground/90">
                  <p>
                    {locale === "ja"
                      ? "「動く」だけでは不十分です。本番で壊れない、運用しやすい、次の人が触れる — その水準をいつも意識しています。派手な抽象化より、地味で読みやすいコード。空想上の将来ではなく、いまの要件に合わせた設計を好みます。"
                      : "\"It works\" isn't enough. I aim for code that survives production, is operable, and welcomes the next engineer. I prefer boring, readable code over clever abstractions, and designs that match today's requirements — not some imagined future."}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
