// Client component
"use client";

// Framer Motion
import { motion } from "framer-motion";

// Next intl
import { useTranslations } from "next-intl";

// Utils
import { socialButtons } from "@/utils/socialButtons";

// Component
export default function Contact() {
  // Translations
  const t = useTranslations();

  // Variants
  const sectionVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    hidden: { opacity: 0 },
  };

  // Return
  return (
    <>
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.8 }}
        className="flex min-h-svh flex-col items-center justify-center gap-2 sm:gap-4"
      >
        <h2 className="font-inter text-light xs:text-5xl dark:text-dark text-center text-4xl leading-none font-semibold transition-all duration-[400ms] ease-in-out lg:text-6xl">
          {t.raw("links")[2].label}
        </h2>

        <p className="font-fira text-gray xs:text-base dark:text-dark text-center text-sm font-normal transition-all duration-[400ms] ease-in-out md:w-[60%]">
          {t.raw("contact").description}
        </p>

        <ul className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
          {socialButtons.map((item, index) => (
            <li key={index}>{item.button}</li>
          ))}
        </ul>
      </motion.section>
    </>
  );
}
