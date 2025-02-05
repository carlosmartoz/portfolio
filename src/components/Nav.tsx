// Client component
"use client";

// Next
import Link from "next/link";

// Components
import Button from "@/components/Button";

// Types
import { type Links } from "@/types/links";

// Next intl
import { useTranslations } from "next-intl";

// Component
export default function Nav() {
  // Translations
  const t = useTranslations();

  // Return
  return (
    <>
      <ul className="flex items-center gap-4">
        {t.raw("links").map((item: Links, index: number) => (
          <li key={index} className="flex items-center gap-4">
            <Link
              href={item.link}
              className="font-fira text-gray hover:text-red dark:text-dark dark:hover:text-dark-red text-base font-normal transition-all duration-[400ms] ease-in-out"
            >
              {item.label}
            </Link>

            <span className="bg-red h-px w-2" aria-hidden="true" />
          </li>
        ))}

        <li>
          <Button
            external
            link={t.raw("header").buttonLink}
            text={t.raw("header").buttonLabel}
          />
        </li>
      </ul>
    </>
  );
}
