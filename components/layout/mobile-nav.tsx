"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { useTranslations } from "@/lib/i18n-compat";
import { Link } from "@/lib/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LocaleSwitcher } from "./locale-switcher";

const NAV_ITEMS = [
  { href: "/", labelKey: "nav.home" },
  { href: "/work", labelKey: "nav.work" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/blog", labelKey: "nav.blog" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/contact", labelKey: "nav.contact" },
] as const;

export function MobileNav() {
  const t = useTranslations();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label={t("nav.toggleMenu")}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[340px]">
        <SheetHeader>
          <SheetTitle className="text-left font-heading text-lg">
            <span
              className="hanko mr-2 text-[0.7rem]"
              style={{ width: "1.5rem", height: "1.5rem" }}
            >
              川
            </span>
            Portfolio
          </SheetTitle>
          <SheetDescription className="sr-only">
            {t("nav.toggleMenu")}
          </SheetDescription>
        </SheetHeader>
        <nav className="mt-6 flex flex-col px-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/50 py-4 text-lg font-medium transition-colors hover:text-accent"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex items-center gap-3 px-4">
          <LocaleSwitcher />
        </div>
      </SheetContent>
    </Sheet>
  );
}
