"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "@/lib/i18n-compat";
import { Link } from "@/lib/navigation";
import { SectionHeader } from "./section-header";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type WorkItem = {
  slug: string;
  title: string;
  client: string;
  outcome: string;
  stack: string[];
  year: string;
  cover: string;
};

const PLACEHOLDER_WORK: WorkItem[] = [
  {
    slug: "example-rag-platform",
    title: "Document intelligence platform",
    client: "Series B SaaS",
    outcome: "40% reduction in support resolution time via RAG knowledge agent",
    stack: ["Next.js", "OpenAI", "Pinecone", "PostgreSQL"],
    year: "2025",
    cover: "/images/work-rag.jpg",
  },
  {
    slug: "example-fintech-dashboard",
    title: "Real-time trading dashboard",
    client: "Tokyo fintech startup",
    outcome: "Cut page load 4.2s → 0.6s, doubled DAU in a month",
    stack: ["Next.js", "Go", "WebSockets", "TimescaleDB"],
    year: "2024",
    cover: "/images/work-trading.jpg",
  },
  {
    slug: "example-agent-workflow",
    title: "Autonomous research agent",
    client: "Global media group",
    outcome: "Automated 60% of editorial research workflows",
    stack: ["Python", "LangGraph", "Anthropic"],
    year: "2024",
    cover: "/images/work-agent.jpg",
  },
];

export function FeaturedWork() {
  const t = useTranslations("home.work");

  return (
    <section className="section-y relative">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <SectionHeader
          heading={t("heading")}
          subheading={t("subheading")}
        />

        {/* Bento-style asymmetric grid — 1 large + 2 stacked */}
        <div className="mt-16 grid gap-6 md:grid-cols-12 md:gap-6">
          <WorkCard item={PLACEHOLDER_WORK[0]} size="large" index={0} />
          <div className="grid gap-6 md:col-span-5">
            <WorkCard item={PLACEHOLDER_WORK[1]} size="small" index={1} />
            <WorkCard item={PLACEHOLDER_WORK[2]} size="small" index={2} />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("viewAll")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  item,
  size,
  index,
}: {
  item: WorkItem;
  size: "large" | "small";
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={cn(size === "large" ? "md:col-span-7" : "")}
    >
      <Link
        href={`/work/${item.slug}`}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/10",
          size === "large" ? "md:min-h-[520px]" : "md:min-h-[248px]",
        )}
      >
        {/* Cover image */}
        <div
          className={cn(
            "relative w-full overflow-hidden",
            size === "large" ? "h-64 md:h-80" : "h-40",
          )}
        >
          <img
            src={item.cover}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover grayscale-[30%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"
          />
          {/* Year badge overlay */}
          <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
            {item.year}
          </div>
          <div className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all group-hover:bg-accent group-hover:border-accent">
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-8">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {item.client}
          </div>
          <h3
            className={cn(
              "mt-3 font-heading font-semibold tracking-tight",
              size === "large" ? "text-2xl md:text-3xl" : "text-lg md:text-xl",
            )}
          >
            {item.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {item.outcome}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {item.stack.map((s) => (
              <Badge
                key={s}
                variant="secondary"
                className="font-mono text-[10px] font-normal uppercase tracking-wider"
              >
                {s}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
