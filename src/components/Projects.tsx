// Client Component
"use client";

// Components
import Cards from "@/components/Cards";

// Utils
import { spanish } from "@/utils/spanish";
import { english } from "@/utils/english";

// React
import { useContext, useRef } from "react";

// Context
import { ThemeContext } from "@/context/context";

// Framer Motion
import { motion, useInView } from "framer-motion";

// Component
export default function Projects() {
  // Ref
  const ref = useRef(null);

  // Set section item variant
  const section__item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 32 },
  };

  // Context
  const { lenguage, isReady } = useContext(ThemeContext);

  // Hook to check if the section is in view
  const isInView = useInView(ref, { once: true });

  // Set section variant
  const section = {
    hidden: { opacity: 0, y: 64 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.2, staggerChildren: 0.2 },
    },
  };

  // Projects
  const projects = lenguage ? english.projects.cards : spanish.projects.cards;

  return (
    <>
      <motion.section
        ref={ref}
        id="projects"
        initial="hidden"
        variants={section}
        className="projects"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="projects__title">
          {lenguage ? english.projects.title : spanish.projects.title}
        </h2>

        <ul className="projects__cards">
          {isReady &&
            projects.map((card) => (
              <motion.li key={card.title} variants={section__item}>
                <Cards
                  title={card.title}
                  github={card.github}
                  website={card.website}
                  description={card.text}
                  technologies={card.technologies}
                />
              </motion.li>
            ))}
        </ul>
      </motion.section>
    </>
  );
}
