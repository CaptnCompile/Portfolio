import { Link } from "@/lib/navigation";
import { useTranslations } from "@/lib/i18n-compat";

export function NotFoundPage() {
  const t = useTranslations("notFound");

  return (
    <section className="section-y">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-6 text-center md:px-10">
        <div className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
          404
        </div>
        <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight md:text-5xl">
          {t("heading")}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {t("subheading")}
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-11 items-center rounded-lg border border-accent bg-accent px-5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
