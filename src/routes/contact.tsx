import { useTranslations } from "@/lib/i18n-compat";
import { ContactForm } from "@/components/forms/contact-form";
import { CalEmbed } from "@/components/cal-embed";

export function ContactPage() {
  const t = useTranslations("contact");
  const calUsername = import.meta.env.VITE_CAL_USERNAME ?? "";

  return (
    <section className="section-y">
      <div className="mx-auto w-full max-w-3xl px-6 md:px-10">
        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            <span>Contact</span>
          </div>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            {t("heading")}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("subheading")}
          </p>
        </header>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
          <ContactForm />
        </div>

        {calUsername && (
          <div className="mt-10">
            <h2 className="font-heading text-xl font-semibold tracking-tight">
              {t("booking.heading")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t("booking.body")}
            </p>
            <div className="mt-6">
              <CalEmbed calLink={calUsername} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
