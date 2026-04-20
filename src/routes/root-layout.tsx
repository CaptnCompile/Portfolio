import * as React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { isLocale } from "@/src/i18n/config";

export function RootLayout() {
  const { locale } = useParams();
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (isLocale(locale) && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
    document.documentElement.setAttribute("lang", locale ?? "en");
  }, [locale, i18n]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
