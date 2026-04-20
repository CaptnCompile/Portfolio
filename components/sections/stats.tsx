"use client";

import { motion } from "motion/react";
import { useLocale } from "@/lib/i18n-compat";

type Stat = {
  value: string;
  labelEn: string;
  labelJa: string;
};

const STATS: Stat[] = [
  { value: "10+", labelEn: "Years in production", labelJa: "本番運用歴" },
  { value: "40+", labelEn: "Projects shipped", labelJa: "リリース数" },
  { value: "2", labelEn: "Languages, fluent", labelJa: "対応言語（日英）" },
  { value: "0", labelEn: "Missed deadlines this year", labelJa: "今年の納期遅延" },
];

export function Stats() {
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-muted/30">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "url(/images/tokyo-night.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "luminosity",
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-4 md:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.labelEn}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="flex flex-col"
            >
              <div className="font-heading text-5xl font-semibold tracking-tight tabular-nums text-foreground md:text-6xl">
                {stat.value}
              </div>
              <div className="mt-2 h-px w-10 bg-accent" />
              <div className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {locale === "ja" ? stat.labelJa : stat.labelEn}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
