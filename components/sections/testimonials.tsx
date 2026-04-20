"use client";

import { motion } from "motion/react";
import { useTranslations } from "@/lib/i18n-compat";
import { SectionHeader } from "./section-header";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  kanji: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "One of the most pragmatic senior engineers I've worked with. Shipped a production RAG system in four weeks that other contractors quoted three months for.",
    name: "Sarah K.",
    role: "CTO, Series B SaaS",
    kanji: "客",
  },
  {
    quote:
      "アーキテクチャから現場の実装まで、一貫して任せられる稀有なエンジニア。日英どちらでもコミュニケーションが取れるのも大きな強み。",
    name: "田中 健一",
    role: "Engineering Manager, 東京",
    kanji: "信",
  },
  {
    quote:
      "Delivered beyond scope and documented everything thoroughly. We've kept him on retainer for all our AI integration work since.",
    name: "Marcus L.",
    role: "Founder, media startup",
    kanji: "頼",
  },
];

export function Testimonials() {
  const t = useTranslations("home.testimonials");

  return (
    <section className="section-y relative overflow-hidden">
      {/* Subtle torii background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: "url(/images/about-torii.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <SectionHeader
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col rounded-2xl border border-border bg-card/90 p-6 backdrop-blur-sm md:p-8"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground md:text-base">
                <span className="mb-3 block font-serif text-4xl leading-none text-accent/60">
                  &ldquo;
                </span>
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-6">
                <span
                  aria-hidden
                  className="hanko"
                  style={{ width: "2rem", height: "2rem", fontSize: "0.75rem" }}
                >
                  {item.kanji}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {item.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.role}
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
