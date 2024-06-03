// Client Component
"use client";

// React
import { useContext } from "react";

// Framer Motion
import { motion } from "framer-motion";

// Components
import Button from "@/components/Button";

// Utils
import { common } from "@/utils/common";
import { spanish } from "@/utils/spanish";
import { english } from "@/utils/english";

// Context
import { ThemeContext } from "@/context/context";

// Component
export default function Intro() {
  // Set section variant
  const section = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 1.4,
        staggerChildren: 0.2,
      },
    },
  };

  // Set section item variant
  const section__item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  // Context
  const { lenguage } = useContext(ThemeContext);

  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        id="introduction"
        variants={section}
        className="introduction"
      >
        <div className="introduction__container">
          <motion.h3
            variants={section__item}
            className="introduction__subtitle"
          >
            {lenguage ? english.intro.subtitle : spanish.intro.subtitle}
          </motion.h3>

          <motion.h1 variants={section__item} className="introduction__title">
            {common.name}
          </motion.h1>

          <motion.p
            variants={section__item}
            className="introduction__text"
            dangerouslySetInnerHTML={{
              __html: lenguage ? english.intro.text : spanish.intro.text,
            }}
          />
        </div>

        <motion.div variants={section__item}>
          <Button
            external={false}
            link={common.contact}
            text={lenguage ? english.intro.button : spanish.intro.button}
          />
        </motion.div>
      </motion.section>
    </>
  );
}
