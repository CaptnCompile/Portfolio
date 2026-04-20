"use client";

import * as React from "react";
import { useTranslations } from "@/lib/i18n-compat";
import { Link, usePathname } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { LocaleSwitcher } from "./locale-switcher";
import { MobileNav } from "./mobile-nav";

const NAV_ITEMS = [
  { href: "/", labelKey: "nav.home" },
  { href: "/work", labelKey: "nav.work" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/blog", labelKey: "nav.blog" },
  { href: "/about", labelKey: "nav.about" },
] as const;

export function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-heading text-base font-semibold tracking-tight"
        >
          <span
            aria-hidden
            className="hanko text-[0.7rem]"
            style={{ width: "1.6rem", height: "1.6rem" }}
          >
            川
          </span>
          <span className="transition-colors group-hover:text-accent">
            Portfolio
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {t(item.labelKey)}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            href="/contact"
            className="hidden h-9 items-center rounded-md border border-accent bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 md:inline-flex"
          >
            {t("nav.contact")}
          </Link>
          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
