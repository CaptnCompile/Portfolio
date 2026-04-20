import { CalendarDays } from "lucide-react";

export function CalEmbed({ calLink }: { calLink: string }) {
  if (!calLink) return null;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <p className="text-sm text-muted-foreground">
        Book a 30-minute intro call:
      </p>
      <a
        href={`https://cal.com/${calLink}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex h-11 items-center gap-2 rounded-lg border border-accent bg-accent px-5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
      >
        <CalendarDays className="h-4 w-4" />
        cal.com/{calLink}
      </a>
    </div>
  );
}
