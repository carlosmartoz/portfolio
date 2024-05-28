// Client Component
"use client";

// Utils
import { common } from "@/utils/common";
import { spanish } from "@/utils/spanish";
import { english } from "@/utils/english";

// Context
import { ThemeContext } from "@/context/context";

// Components
import Star from "@/components/Star";
import Repository from "@/components/Repository";

// Framer Motion
import { motion, useInView } from "framer-motion";

// React
import { useContext, useEffect, useRef } from "react";

// Hooks
import { useRepositoryStatistics } from "@/hooks/useRepositoryStatistics";

// Component
export default function Footer() {
  // Ref
  const ref = useRef(null);

  // Set effect
  useEffect(() => {
    // Function to get repository statistics
    getRepositoryStatistics();
  }, []);

  // Context
  const { lenguage } = useContext(ThemeContext);

  // Set footer variant
  const footer = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.2 },
    },
  };

  // Hook to check if the section is in view
  const isInView = useInView(ref, { once: true });

  // Hook for get repository statistics
  const [stars, error, loading, getRepositoryStatistics] =
    useRepositoryStatistics();

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
          {error || loading ? (
            <Repository width={18} height={18} />
          ) : (
            <span className="stars">
              <p>{stars}</p>

              <Star width={18} height={18} />
            </span>
          )}

          {lenguage ? english.footer.text : spanish.footer.text}
        </a>
      </motion.footer>
    </>
  );
}
