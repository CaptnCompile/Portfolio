"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "@/lib/i18n-compat";
import { Link } from "@/lib/navigation";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden">
      {/* Full-bleed background image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-fuji.jpg)" }}
      />
      {/* Gradient overlay — keeps text readable in both themes */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-background/90 via-background/40 to-transparent dark:from-background/90 dark:via-background/50 dark:to-background/10"
      />
      {/* Warm vermillion glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/3 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--accent)_22%,transparent),transparent)] blur-3xl opacity-70 dark:opacity-60" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl px-6 pb-24 pt-40 md:px-10 md:pb-32 md:pt-48 lg:grid-cols-12">
        <div className="lg:col-span-10 lg:col-start-2">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3 py-1.5 text-xs font-medium text-accent backdrop-blur-md"
          >
            <span className="pulse-dot" />
            {t("availability")}
          </motion.div>

          {/* Name + hanko */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="mt-8 flex items-center gap-3"
          >
            <span aria-hidden className="hanko">川</span>
            <span className="text-sm font-medium tracking-wide text-muted-foreground">
              {t("name")}
            </span>
          </motion.div>

          {/* Display headline — bilingual stack */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-6 font-heading font-semibold tracking-[-0.03em] text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontSize: "var(--text-display)" }}
          >
            <span className="block">{t("titleLine1")}</span>
            <span className="block text-muted-foreground">{t("titleLine2")}</span>
          </motion.h1>

          {/* Japanese accent subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-6 font-jp-display text-base text-muted-foreground md:text-lg"
            lang="ja"
          >
            {t("subtitleJa")}
          </motion.p>

          {/* Lead paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {t("lead")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
            >
              {t("ctaPrimary")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-card/70 px-6 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-foreground/50 hover:bg-card"
            >
              <Sparkles className="h-4 w-4" />
              {t("ctaSecondary")}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
