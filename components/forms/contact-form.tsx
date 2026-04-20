"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "@/lib/i18n-compat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactSchema, type ContactInput } from "@/lib/validators";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export function ContactForm() {
  const t = useTranslations("contact.form");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const projectType = watch("projectType");
  const budget = watch("budget");

  const onSubmit = async (data: ContactInput) => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn(
        "[contact] EmailJS env vars missing — simulating success in dev.",
      );
      toast.success(t("success"));
      reset();
      return;
    }
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          project_type: data.projectType,
          budget: data.budget,
          message: data.message,
        },
        { publicKey: PUBLIC_KEY },
      );
      toast.success(t("success"));
      reset();
    } catch (err) {
      console.error("[contact] EmailJS error", err);
      toast.error(t("error"));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label={t("name")} error={errors.name?.message}>
          <Input
            {...register("name")}
            placeholder={t("namePlaceholder")}
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label={t("email")} error={errors.email?.message}>
          <Input
            type="email"
            {...register("email")}
            placeholder={t("emailPlaceholder")}
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label={t("projectType")} error={errors.projectType?.message}>
          <Select
            value={projectType}
            onValueChange={(v) =>
              setValue("projectType", v as ContactInput["projectType"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder={t("projectTypePlaceholder")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fullstack">
                {t("projectTypes.fullstack")}
              </SelectItem>
              <SelectItem value="ai">{t("projectTypes.ai")}</SelectItem>
              <SelectItem value="consulting">
                {t("projectTypes.consulting")}
              </SelectItem>
              <SelectItem value="other">{t("projectTypes.other")}</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label={t("budget")} error={errors.budget?.message}>
          <Select
            value={budget}
            onValueChange={(v) =>
              setValue("budget", v as ContactInput["budget"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder={t("budgetPlaceholder")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under10k">{t("budgets.under10k")}</SelectItem>
              <SelectItem value="10k_30k">{t("budgets.10k_30k")}</SelectItem>
              <SelectItem value="30k_100k">{t("budgets.30k_100k")}</SelectItem>
              <SelectItem value="over100k">{t("budgets.over100k")}</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field label={t("message")} error={errors.message?.message}>
        <Textarea
          {...register("message")}
          placeholder={t("messagePlaceholder")}
          className="min-h-40 resize-y"
          aria-invalid={!!errors.message}
        />
      </Field>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-accent text-accent-foreground hover:bg-accent/90"
          size="lg"
        >
          <Send className="mr-2 h-4 w-4" />
          {isSubmitting ? t("submitting") : t("submit")}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
