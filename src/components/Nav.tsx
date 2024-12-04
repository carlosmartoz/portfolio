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
              className="font-fira text-base font-normal text-gray transition-all duration-[400ms] ease-in-out hover:text-red dark:text-dark dark:hover:text-dark-red"
            >
              {item.label}
            </Link>

            <span className="h-px w-2 bg-red" aria-hidden="true" />
          </li>
        ))}

        <li>
          <Button
            external
            text={t.raw("header").buttonLabel}
            link={
              t.raw("header").lenguage === "es"
                ? "/carlos-martinez-curriculum.pdf"
                : "/carlos-martinez-resume.pdf"
            }
          />
        </li>
      </ul>
    </>
  );
}
