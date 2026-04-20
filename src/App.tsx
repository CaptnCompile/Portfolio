import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { RootLayout } from "./routes/root-layout";
import { HomePage } from "./routes/home";
import { AboutPage } from "./routes/about";
import { ServicesPage } from "./routes/services";
import { BlogIndexPage } from "./routes/blog-index";
import { BlogPostPage } from "./routes/blog-post";
import { WorkIndexPage } from "./routes/work-index";
import { WorkDetailPage } from "./routes/work-detail";
import { ContactPage } from "./routes/contact";
import { NotFoundPage } from "./routes/not-found";
import { DEFAULT_LOCALE, isLocale } from "./i18n/config";

function RootRedirect() {
  const pref =
    typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "";
  const target = pref.startsWith("ja") ? "ja" : DEFAULT_LOCALE;
  return <Navigate to={`/${target}`} replace />;
}

function LocaleGate() {
  const { locale } = useParams();
  if (!isLocale(locale)) {
    return <Navigate to={`/${DEFAULT_LOCALE}`} replace />;
  }
  return <RootLayout />;
}

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/:locale" element={<LocaleGate />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="blog" element={<BlogIndexPage />} />
            <Route path="blog/:slug" element={<BlogPostPage />} />
            <Route path="work" element={<WorkIndexPage />} />
            <Route path="work/:slug" element={<WorkDetailPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="*" element={<RootRedirect />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
}
