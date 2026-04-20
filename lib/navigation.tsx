"use client";

import * as React from "react";
import {
  Link as RRLink,
  useLocation,
  useNavigate,
  useParams,
  type LinkProps as RRLinkProps,
} from "react-router-dom";
import { DEFAULT_LOCALE, type Locale, isLocale } from "@/src/i18n/config";

type Href = string;

function getLocaleFromParams(params: Record<string, string | undefined>): Locale {
  const l = params.locale;
  return isLocale(l) ? l : DEFAULT_LOCALE;
}

function buildPath(locale: Locale, href: Href): string {
  if (href === "/") return `/${locale}`;
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

type LinkProps = Omit<RRLinkProps, "to"> & {
  href: Href;
  locale?: Locale;
};

/**
 * Drop-in replacement for next-intl's `<Link href="/foo">`.
 * Reads the locale from the URL and prefixes it automatically.
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link({ href, locale, ...rest }, ref) {
    const params = useParams();
    const current = getLocaleFromParams(params);
    const target = locale ?? current;
    return <RRLink ref={ref} to={buildPath(target, href)} {...rest} />;
  },
);

/**
 * Returns the current pathname with the locale prefix stripped.
 * Matches next-intl's `usePathname()` shape.
 */
export function usePathname(): string {
  const location = useLocation();
  const stripped = location.pathname.replace(/^\/(en|ja)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

type ReplaceInput = { pathname: string; params?: Record<string, string | undefined> } | string;
type ReplaceOptions = { locale?: Locale };

/**
 * Minimal shim for next-intl's `useRouter()` `.replace()` call used in
 * the locale switcher. It rebuilds the current path under a new locale.
 */
export function useRouter() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const current = getLocaleFromParams(params);

  return {
    replace(input: ReplaceInput, options?: ReplaceOptions) {
      const target = options?.locale ?? current;
      const unprefixed =
        typeof input === "string"
          ? input
          : location.pathname.replace(/^\/(en|ja)(?=\/|$)/, "") || "/";
      navigate(buildPath(target, unprefixed), { replace: true });
    },
    push(input: ReplaceInput, options?: ReplaceOptions) {
      const target = options?.locale ?? current;
      const unprefixed =
        typeof input === "string"
          ? input
          : location.pathname.replace(/^\/(en|ja)(?=\/|$)/, "") || "/";
      navigate(buildPath(target, unprefixed));
    },
  };
}
