import type { ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";

export function ExternalLink({
  href,
  children,
  className,
  ...props
}: ComponentProps<"a"> & { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-baseline gap-1 underline decoration-accent underline-offset-4 transition-colors duration-200 hover:decoration-foreground",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
      <ArrowUpRight
        aria-hidden="true"
        strokeWidth={2.5}
        className="size-2.5 self-center opacity-60"
      />
    </a>
  );
}
