// Client Component
"use client";

// Utils
import { common } from "@/utils/common";
import { spanish } from "@/utils/spanish";
import { english } from "@/utils/english";

// React
import { useContext, useRef } from "react";

// Context
import { ThemeContext } from "@/context/context";

// Components
import Repository from "@/components/Repository";

// Framer Motion
import { motion, useInView } from "framer-motion";

// Component
export default function Footer() {
  // Ref
  const ref = useRef(null);

  // Context
  const { lenguage } = useContext(ThemeContext);

  // Hook to check if the section is in view
  const isInView = useInView(ref, { once: true });

  // Set footer variant
  const footer = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.2 },
    },
  };

  return (
    <>
      <motion.footer
        ref={ref}
        initial="hidden"
        className="footer"
        variants={footer}
        animate={isInView ? "visible" : "hidden"}
      >
        <a
          target="_blank"
          className="footer__link"
          href={common.repository}
          rel="noopener noreferrer"
        >
          <Repository width={18} height={18} />

          {lenguage ? english.footer.text : spanish.footer.text}
        </a>
      </motion.footer>
    </>
  );
}
