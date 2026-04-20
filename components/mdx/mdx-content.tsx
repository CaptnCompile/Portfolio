import * as runtime from "react/jsx-runtime";
import { useMemo, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

const components = {
  h1: (props: ComponentProps<"h1">) => (
    <h1
      {...props}
      className={cn(
        "mt-10 scroll-m-20 font-heading text-3xl font-semibold tracking-tight md:text-4xl",
        props.className,
      )}
    />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2
      {...props}
      className={cn(
        "mt-12 scroll-m-20 border-b border-border pb-3 font-heading text-2xl font-semibold tracking-tight md:text-3xl",
        props.className,
      )}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      {...props}
      className={cn(
        "mt-10 scroll-m-20 font-heading text-xl font-semibold tracking-tight md:text-2xl",
        props.className,
      )}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p
      {...props}
      className={cn(
        "mt-6 text-base leading-relaxed text-foreground/90",
        props.className,
      )}
    />
  ),
  a: (props: ComponentProps<"a">) => (
    <a
      {...props}
      className={cn(
        "font-medium text-accent underline underline-offset-4 transition-colors hover:text-accent/80",
        props.className,
      )}
    />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul
      {...props}
      className={cn("my-6 ml-6 list-disc space-y-2", props.className)}
    />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol
      {...props}
      className={cn("my-6 ml-6 list-decimal space-y-2", props.className)}
    />
  ),
  li: (props: ComponentProps<"li">) => (
    <li {...props} className={cn("leading-relaxed", props.className)} />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      {...props}
      className={cn(
        "mt-6 border-l-2 border-accent pl-6 italic text-muted-foreground",
        props.className,
      )}
    />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      {...props}
      className={cn(
        "relative rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.85em]",
        props.className,
      )}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      {...props}
      className={cn(
        "mt-6 overflow-x-auto rounded-xl border border-border bg-muted/40 p-4 font-mono text-sm leading-relaxed",
        props.className,
      )}
    />
  ),
  hr: (props: ComponentProps<"hr">) => (
    <hr {...props} className={cn("my-10 border-border", props.className)} />
  ),
};

function useMdxComponent(code: string) {
  return useMemo(() => {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
  }, [code]);
}

export function MdxContent({ code }: { code: string }) {
  const Component = useMdxComponent(code);
  // eslint-disable-next-line react-hooks/static-components -- MDX is compiled from a string at runtime; memoized per code value.
  return <Component components={components} />;
}
