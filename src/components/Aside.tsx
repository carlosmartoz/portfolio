// Client component
"use client";

// Next
import Link from "next/link";

// Components
import Button from "@/components/Button";

// Next intl
import { useTranslations } from "next-intl";

// Utils
import { menuItems } from "@/utils/menuItems";

// Stores
import { useOpenMenu } from "@/stores/useOpenMenu";

// Component
export default function Aside() {
  // Use open menu
  const { openMenu } = useOpenMenu();

  // Translations
  const t = useTranslations("header");

  // Menu
  const menu = ["about", "experience", "projects"] as const;

  // Return
  return (
    <>
      <aside
        className={`fixed top-0 z-40 flex h-svh w-full flex-col items-center justify-center gap-8 bg-dark px-8 shadow-normal transition-all duration-[400ms] ease-in-out xs:w-[calc(100%-128px)] lg:hidden dark:bg-light ${openMenu ? "right-0" : "-right-full"}`}
      >
        <ul className="flex flex-col items-center gap-6">
          {menu.map((menu) => (
            <li key={menu} className="flex items-center gap-4">
              <span className="h-px w-2 bg-red" aria-label="separator" />

              <Link
                href={t(`${menu}.link`)}
                className="font-fira text-base font-normal text-gray transition-all duration-[400ms] ease-in-out hover:text-red md:text-xl dark:text-dark dark:hover:text-dark-red"
              >
                {t(`${menu}.label`)}
              </Link>
            </li>
          ))}

          <li className="ml-3">
            <Button external link={t("buttonLink")} text={t("buttonLabel")} />
          </li>
        </ul>

        <ul className="flex items-center gap-4">
          {menuItems.map((social, index) => (
            <li key={index}>
              <Link
                target="_blank"
                href={social.link}
                aria-label={social.label}
                rel="noopener noreferrer"
                className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red md:text-2xl dark:text-dark"
              >
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
