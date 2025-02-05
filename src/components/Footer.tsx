// Client component
"use client";

// Next
import Link from "next/link";

// Framer Motion
import { motion } from "framer-motion";

// Next intl
import { useTranslations } from "next-intl";

// React icons
import { IoIosGitBranch } from "react-icons/io";

// Component
export default function Footer() {
  // Translations
  const t = useTranslations();

  // Variants
  const footerVariants = {
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
      <motion.footer
        initial="hidden"
        whileInView="visible"
        variants={footerVariants}
        viewport={{ once: true, amount: 0.8 }}
        className="flex w-full items-center justify-center py-12 lg:py-6"
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/carlosmartoz/portfolio"
          className="font-fira text-gray hover:text-red xs:text-base dark:text-dark dark:hover:text-dark-red flex gap-2 text-sm font-normal transition-all duration-[400ms] ease-in-out"
        >
          <IoIosGitBranch
            aria-hidden="true"
            className="text-red xs:text-2xl dark:text-dark-red text-xl"
          />
          {t.raw("footer").text}
        </Link>
      </motion.footer>
    </>
  );
}
