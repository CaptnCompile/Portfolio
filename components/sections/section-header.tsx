import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  heading,
  subheading,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {label && (
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-px w-8 bg-accent" />
          <span>{label}</span>
        </div>
      )}
      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {subheading && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subheading}
        </p>
      )}
    </div>
  );
}
