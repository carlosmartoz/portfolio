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

  // Return
  return (
    <>
      <motion.footer
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.4, ease: "easeInOut" }}
        className="flex w-full items-center justify-center py-12 lg:py-6"
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/carlosmartoz/portfolio"
          className="flex gap-2 font-fira text-sm font-normal text-gray transition-all duration-[400ms] ease-in-out hover:text-red xs:text-base dark:text-dark dark:hover:text-dark-red"
        >
          <IoIosGitBranch
            className="text-xl text-red xs:text-2xl"
            aria-hidden="true"
          />
          {t.raw("footer").text}
        </Link>
      </motion.footer>
    </>
  );
}
