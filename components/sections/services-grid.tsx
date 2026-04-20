"use client";

import { motion } from "motion/react";
import { Brain, Code2, Lightbulb } from "lucide-react";
import { useTranslations } from "@/lib/i18n-compat";
import { SectionHeader } from "./section-header";

const SERVICES = [
  { key: "fullstack" as const, icon: Code2, image: "/images/services-fullstack.jpg" },
  { key: "ai" as const, icon: Brain, image: "/images/services-ai.jpg" },
  { key: "consulting" as const, icon: Lightbulb, image: "/images/services-consulting.jpg" },
];

export function ServicesGrid() {
  const t = useTranslations("home.services");

  return (
    <section className="section-y relative">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <SectionHeader
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {SERVICES.map(({ key, icon: Icon, image }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-lg"
            >
              {/* Image header */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover grayscale brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-card/10"
                />
                <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card shadow-sm transition-colors group-hover:border-accent group-hover:text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 pt-4 md:p-8 md:pt-6">
                <h3 className="font-heading text-xl font-semibold tracking-tight">
                  {t(`items.${key}.title`)}
                </h3>
                <p
                  className="mt-1 font-jp-display text-sm text-muted-foreground"
                  lang="ja"
                >
                  {t(`items.${key}.titleJa`)}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
