// Client component
"use client";

// Components
import Button from "@/components/Button";

// Next intl
import { useTranslations } from "next-intl";

// React icons
import { FaRegFileAlt } from "react-icons/fa";

// Utils
import { buttonItems } from "@/utils/buttonItems";
import { staticTexts } from "@/utils/staticTexts";

// Component
export default function About() {
  // Translations
  const t = useTranslations("about");

  // Return
  return (
    <>
      <section
        id="about"
        className="mt-24 flex min-h-svh flex-col justify-center gap-4 xs:mt-16 sm:mt-0"
      >
        <h1 className="font-inter text-5xl font-semibold leading-tight text-light sm:text-7xl">
          {staticTexts.name}
        </h1>

        <h2 className="font-inter text-4xl font-semibold leading-tight text-gray lg:text-7xl">
          {staticTexts.role}
        </h2>

        <p className="font-fira text-base font-normal text-gray lg:w-[80%]">
          {t("description")}
        </p>

        <ul className="flex flex-wrap items-center gap-4 md:gap-6">
          {buttonItems.map((item, index) => (
            <li key={index}>{item.button}</li>
          ))}

          <li>
            <Button
              external
              link={t("buttonLink")}
              text={t("buttonLabel")}
              icon={<FaRegFileAlt className="text-xl" />}
            />
          </li>
        </ul>
      </section>
    </>
  );
}
