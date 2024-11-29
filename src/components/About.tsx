// Client component
"use client";

// Components
import Button from "@/components/Button";

// Next intl
import { useTranslations } from "next-intl";

// Utils
import { staticTexts } from "@/utils/staticTexts";

// React icons
import { FaAngleDoubleDown } from "react-icons/fa";

// Component
export default function About() {
  // Translations
  const tAbout = useTranslations("about");
  const tLinks = useTranslations("links");

  // Return
  return (
    <>
      <section
        id="about"
        className="flex min-h-svh flex-col justify-center gap-2 sm:gap-4"
      >
        <h1 className="font-inter text-3xl font-semibold leading-tight text-light transition-all duration-[400ms] ease-in-out xs:text-4xl md:text-5xl lg:text-7xl dark:text-dark">
          {staticTexts.name}
        </h1>

        <h2 className="font-inter text-2xl font-semibold leading-tight text-gray transition-all duration-[400ms] ease-in-out xs:text-3xl md:text-5xl lg:text-7xl dark:text-dark">
          {staticTexts.role}
        </h2>

        <p className="font-fira text-sm font-normal text-gray transition-all duration-[400ms] ease-in-out xs:text-base md:w-[90%] lg:w-[80%] dark:text-dark">
          {tAbout("description1")}
        </p>

        <p className="font-fira text-sm font-normal text-gray transition-all duration-[400ms] ease-in-out xs:text-base md:w-[90%] lg:w-[80%] dark:text-dark">
          {tAbout("description2")}
        </p>

        <div className="mt-2 self-start">
          <Button
            text={tAbout("buttonLabel")}
            link={tLinks("projects.link")}
            icon={
              <FaAngleDoubleDown
                aria-hidden="true"
                className="text-red transition-all duration-[150ms] ease-in-out group-hover:text-light"
              />
            }
          />
        </div>
      </section>
    </>
  );
}
