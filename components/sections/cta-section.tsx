"use client";

import { motion } from "motion/react";
import { ArrowRight, CalendarDays } from "lucide-react";
import { useTranslations } from "@/lib/i18n-compat";
import { Link } from "@/lib/navigation";

export function CtaSection() {
  const t = useTranslations("home.cta");

  return (
    <section className="section-y relative overflow-hidden">
      {/* Seigaiha wave pattern */}
      <div
        aria-hidden
        className="seigaiha-bg pointer-events-none absolute inset-0 opacity-[0.15] dark:opacity-[0.22]"
      />
      {/* Accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 dark:opacity-50"
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--accent)_18%,transparent),transparent)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center md:px-10">
        <div aria-hidden className="mb-10">
          <div className="brush-rule mx-auto w-32" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-8 font-heading text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
        >
          {t("heading")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="mt-4 font-jp-display text-2xl text-muted-foreground md:text-3xl"
          lang="ja"
        >
          {t("headingJa")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {t("body")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
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
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-card/70 px-6 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-foreground/50 hover:bg-card"
          >
            <CalendarDays className="h-4 w-4" />
            {t("ctaSecondary")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
