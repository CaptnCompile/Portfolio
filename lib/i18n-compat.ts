"use client";

import { useTranslation } from "react-i18next";
import type { Locale } from "@/src/i18n/config";

/**
 * Compat shim matching next-intl's `useTranslations(namespace)` API —
 * returns a scoped `t(key)` function. Lets us keep all existing
 * component code unchanged after the Next.js → Vite migration.
 */
export function useTranslations(keyPrefix?: string) {
  const { t } = useTranslation(undefined, keyPrefix ? { keyPrefix } : undefined);
  return t as (key: string, values?: Record<string, string | number>) => string;
}

export function useLocale(): Locale {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return lang === "ja" ? "ja" : "en";
}
