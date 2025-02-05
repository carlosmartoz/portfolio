// Client component
"use client";

// Framer Motion
import { motion } from "framer-motion";

// Components
import Button from "@/components/Button";

// Next intl
import { useTranslations } from "next-intl";

// Utils
import { staticTexts } from "@/utils/staticTexts";

// Component
export default function About() {
  // Translations
  const t = useTranslations();

  // Return
  return (
    <>
      <section
        id="about"
        className="flex min-h-svh flex-col justify-center gap-2 sm:gap-4"
      >
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -12 }}
          transition={{
            opacity: { delay: 0.8 },
            y: { delay: 0.8, duration: 0.0, ease: "easeInOut", type: "spring" },
          }}
          className="font-inter text-light xs:text-4xl dark:text-dark text-3xl leading-tight font-semibold transition-all duration-[400ms] ease-in-out md:text-5xl lg:text-7xl lg:leading-none"
        >
          {staticTexts.name}
        </motion.h1>

        <motion.h2
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -12 }}
          transition={{
            opacity: { delay: 0.9 },
            y: { delay: 0.9, duration: 0.0, ease: "easeInOut", type: "spring" },
          }}
          className="font-inter text-gray xs:text-3xl dark:text-dark text-2xl leading-tight font-semibold transition-all duration-[400ms] ease-in-out md:text-5xl lg:text-7xl lg:leading-none"
        >
          {staticTexts.role}
        </motion.h2>

        <motion.p
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -12 }}
          transition={{
            opacity: { delay: 1.0 },
            y: { delay: 1.0, duration: 0.0, ease: "easeInOut", type: "spring" },
          }}
          className="font-fira text-gray xs:text-base dark:text-dark text-sm font-normal transition-all duration-[400ms] ease-in-out md:w-[90%] lg:w-[80%]"
        >
          {t.raw("about").description1}
        </motion.p>

        <motion.p
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -12 }}
          transition={{
            opacity: { delay: 1.1 },
            y: { delay: 1.1, duration: 0.0, ease: "easeInOut", type: "spring" },
          }}
          className="font-fira text-gray xs:text-base dark:text-dark text-sm font-normal transition-all duration-[400ms] ease-in-out md:w-[90%] lg:w-[80%]"
        >
          {t.raw("about").description2}
        </motion.p>

        <motion.section
          className="mt-2 self-start"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -12 }}
          transition={{
            opacity: { delay: 1.2 },
            y: { delay: 1.2, duration: 0.0, ease: "easeInOut", type: "spring" },
          }}
        >
          <Button
            link={t.raw("links")[1].link}
            text={t.raw("about").buttonLabel}
          />
        </motion.section>
      </section>
    </>
  );
}
