"use client";

import { useTransition } from "react";
import { useParams } from "react-router-dom";
import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "@/lib/i18n-compat";
import { usePathname, useRouter } from "@/lib/navigation";
import { LOCALES as locales } from "@/src/i18n/config";

const routing = { locales } as const;
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const labels: Record<(typeof routing.locales)[number], string> = {
  en: "English",
  ja: "日本語",
};

export function LocaleSwitcher() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const onSelect = (next: string) => {
    startTransition(() => {
      router.replace(
        { pathname, params: params as Record<string, string | undefined> },
        { locale: next as (typeof routing.locales)[number] },
      );
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("nav.switchLanguage")}
        disabled={isPending}
        className="inline-flex h-9 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium tabular-nums text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
      >
        <Languages className="h-4 w-4" />
        <span className="text-xs uppercase tracking-wider">{locale}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-32">
        {routing.locales.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => onSelect(l)}
            disabled={l === locale}
            className="flex items-center justify-between"
          >
            <span>{labels[l]}</span>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {l}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
