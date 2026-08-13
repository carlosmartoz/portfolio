import type { ComponentProps } from "react";

/**
 * Every link on this site points away from it, so the anchor sets up the
 * new-tab attributes itself and marks the jump with a trailing arrow.
 * `mailto:` links hand off to the mail client instead, so they get neither.
 */
export function ExternalLink({
  href,
  children,
  className = "",
  ...props
}: ComponentProps<"a"> & { href: string }) {
  const opensNewTab = !href.startsWith("mailto:");

  return (
    <a
      href={href}
      {...(opensNewTab && { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex items-baseline gap-1 underline decoration-accent underline-offset-4 transition-colors duration-200 hover:decoration-foreground ${className}`}
      {...props}
    >
      {children}
      {opensNewTab && <ArrowIcon />}
    </a>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-2.5 self-center opacity-60"
    >
      <path d="M3.5 8.5 8.5 3.5M4.25 3.5H8.5V7.75" />
    </svg>
  );
}
