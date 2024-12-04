// Client Component
"use client";

// Next
import Link from "next/link";

// Next intl
import { useTranslations } from "next-intl";

// React icons
import { VscColorMode } from "react-icons/vsc";

// Utils
import { socialIcons } from "@/utils/socialIcons";

// Services
import { setUserLocale } from "@/services/locale";

// Hooks
import { useColorMode } from "@/hooks/useColorMode";

// Component
export default function Options() {
  // Translations
  const t = useTranslations();

  // Color mode
  const [colorMode, setColorMode] = useColorMode();

  // Return
  return (
    <>
      <section className="flex items-center gap-4">
        <span aria-hidden="true" className="hidden h-px w-2 bg-red lg:block" />

        <ul className="hidden items-center gap-2 lg:flex">
          {socialIcons.map((item) => (
            <li key={item.label}>
              <Link
                target="_blank"
                href={item.link}
                aria-label={item.label}
                rel="noopener noreferrer"
                className="text-2xl text-light transition-all duration-[400ms] ease-in-out hover:text-red dark:text-dark dark:hover:text-dark-red"
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>

        <span aria-hidden="true" className="hidden h-px w-2 bg-red lg:block" />

        <ul className="relative z-50 flex items-center gap-2">
          <li className="relative">
            <button
              type="button"
              aria-label={
                t.raw("header").lenguage === "es" ? "spanish" : "english"
              }
              onClick={() =>
                setUserLocale(t.raw("header").lenguage === "es" ? "es" : "en")
              }
              className="text-lg text-light transition-all duration-[400ms] ease-in-out hover:text-red xs:text-xl dark:text-dark dark:hover:text-dark-red"
            >
              {t.raw("header").lenguageLabel}
            </button>
          </li>

          <li>
            <button
              type="button"
              aria-label="color mode"
              className="flex items-center"
              onClick={() => setColorMode(!colorMode)}
            >
              <VscColorMode className="rotate-180 text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red xs:text-2xl dark:rotate-0 dark:text-dark dark:hover:text-dark-red" />
            </button>
          </li>
        </ul>
      </section>
    </>
  );
}
