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
        className="mt-32 flex min-h-svh flex-col justify-center gap-2 xs:mt-24 2xs:mt-12 sm:gap-4 lg:mt-2"
      >
        <h1 className="font-inter text-4xl font-semibold leading-tight text-light transition-all duration-[400ms] ease-in-out md:text-5xl lg:text-7xl dark:text-dark">
          {staticTexts.name}
        </h1>

        <h2 className="font-inter text-3xl font-semibold leading-tight text-gray transition-all duration-[400ms] ease-in-out md:text-5xl lg:text-7xl dark:text-dark">
          {staticTexts.role}
        </h2>

        <p className="font-fira text-base font-normal text-gray transition-all duration-[400ms] ease-in-out md:w-[90%] lg:w-[70%] dark:text-dark">
          {t("description1")}
        </p>

        <p className="font-fira text-base font-normal text-gray transition-all duration-[400ms] ease-in-out md:w-[90%] lg:w-[70%] dark:text-dark">
          {t("description2")}
        </p>

        <ul className="mt-2 flex flex-wrap items-center gap-4 sm:mt-0 md:gap-6">
          {buttonItems.map((item, index) => (
            <li key={index}>{item.button}</li>
          ))}

          <li>
            <Button
              external
              link={t("buttonLink")}
              text={t("buttonLabel")}
              icon={<FaRegFileAlt className="text-xl" aria-hidden="true" />}
            />
          </li>
        </ul>
      </section>
    </>
  );
}
