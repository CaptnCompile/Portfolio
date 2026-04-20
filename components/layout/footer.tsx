import { Mail } from "lucide-react";
import { useTranslations } from "@/lib/i18n-compat";
import { Link } from "@/lib/navigation";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 font-heading text-base font-semibold tracking-tight">
            <span
              aria-hidden
              className="hanko text-[0.7rem]"
              style={{ width: "1.6rem", height: "1.6rem" }}
            >
              川
            </span>
            Portfolio
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t("footer.tagline")}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
            {t("nav.home")}
          </h3>
          {[
            { href: "/work", labelKey: "nav.work" },
            { href: "/services", labelKey: "nav.services" },
            { href: "/blog", labelKey: "nav.blog" },
            { href: "/about", labelKey: "nav.about" },
            { href: "/contact", labelKey: "nav.contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
            Connect
          </h3>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:px-10">
          <p>
            © {year} Portfolio. {t("footer.rights")}
          </p>
          <p className="tabular-nums">{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
