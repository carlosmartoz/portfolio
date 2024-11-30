// Client component
"use client";

// Next
import Link from "next/link";

// Utils
import { social } from "@/utils/social";

// Components
import Button from "@/components/Button";

// Types
import { type Links } from "@/types/links";

// Next intl
import { useTranslations } from "next-intl";

// Stores
import { useOpenMenu } from "@/stores/useOpenMenu";

// Component
export default function Aside() {
  // Translations
  const t = useTranslations();

  // Use open menu
  const { openMenu } = useOpenMenu();

  // Return
  return (
    <>
      <aside
        className={`fixed top-0 z-40 flex h-svh w-full flex-col items-center justify-center gap-8 bg-dark px-8 shadow-normal transition-all duration-[400ms] ease-in-out xs:w-[calc(100%-128px)] lg:hidden dark:bg-light ${openMenu ? "right-0" : "-right-full"}`}
      >
        <ul className="flex flex-col items-center gap-6">
          {t.raw("links").map((item: Links) => (
            <li key={item.label} className="flex items-center gap-4">
              <span className="h-px w-2 bg-red" aria-hidden="true" />

              <Link
                href={item.link}
                className="font-fira text-base font-normal text-gray transition-all duration-[400ms] ease-in-out hover:text-red xs:text-lg md:text-xl dark:text-dark dark:hover:text-dark-red"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="ml-3">
            <Button
              external
              link={t.raw("header").buttonLink}
              text={t.raw("header").buttonLabel}
            />
          </li>
        </ul>

        <ul className="flex items-center gap-4">
          {social.map((item, index) => (
            <li key={index}>
              <Link
                target="_blank"
                href={item.link}
                aria-label={item.label}
                rel="noopener noreferrer"
                className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red xs:text-2xl dark:text-dark"
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
