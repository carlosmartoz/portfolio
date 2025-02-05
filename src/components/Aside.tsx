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

// Utils
import { socialIcons } from "@/utils/socialIcons";

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
        className={`bg-dark shadow-normal xs:w-[calc(100%-128px)] dark:bg-light fixed top-0 z-40 flex h-svh w-full flex-col items-center justify-center gap-8 px-8 transition-all duration-[400ms] ease-in-out lg:hidden ${openMenu ? "right-0" : "-right-full"}`}
      >
        <ul className="flex flex-col items-center gap-6">
          {t.raw("links").map((item: Links) => (
            <li key={item.label} className="flex items-center gap-4">
              <span className="bg-red h-px w-2" aria-hidden="true" />

              <Link
                href={item.link}
                className="font-fira text-gray hover:text-red xs:text-lg dark:text-dark dark:hover:text-dark-red text-base font-normal transition-all duration-[400ms] ease-in-out md:text-xl"
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
          {socialIcons.map((item) => (
            <li key={item.label}>
              <Link
                target="_blank"
                href={item.link}
                aria-label={item.label}
                rel="noopener noreferrer"
                className="text-light hover:text-red xs:text-2xl dark:text-dark text-xl transition-all duration-[400ms] ease-in-out"
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
