// Client component
"use client";

// Next
import Link from "next/link";

// Components
import Button from "@/components/Button";

// Next intl
import { useTranslations } from "next-intl";

// Component
export default function Nav() {
  // Translations
  const tLinks = useTranslations("links");

  // Translations
  const tHeader = useTranslations("header");

  // Menu
  const menu = ["about", "projects"] as const;

  // Return
  return (
    <>
      <ul className="flex items-center gap-4">
        {menu.map((menu) => (
          <li key={menu} className="flex items-center gap-4">
            <Link
              href={tLinks(`${menu}.link`)}
              className="font-fira text-base font-normal text-gray transition-all duration-[400ms] ease-in-out hover:text-red dark:text-dark dark:hover:text-dark-red"
            >
              {tLinks(`${menu}.label`)}
            </Link>

            <span className="h-px w-2 bg-red" aria-hidden="true" />
          </li>
        ))}

        <li>
          <Button
            external
            link={tHeader("buttonLink")}
            text={tHeader("buttonLabel")}
          />
        </li>
      </ul>
    </>
  );
}
