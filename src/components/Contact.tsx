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
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    hidden: { opacity: 0, y: -56 },
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
        <h2 className="text-center font-inter text-4xl font-semibold leading-tight text-light transition-all duration-[400ms] ease-in-out xs:text-5xl lg:text-6xl dark:text-dark">
          {t.raw("links")[2].label}
        </h2>

        <p className="text-center font-fira text-sm font-normal text-gray transition-all duration-[400ms] ease-in-out xs:text-base md:w-[60%] dark:text-dark">
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
