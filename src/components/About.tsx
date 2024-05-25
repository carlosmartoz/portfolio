// Client Component
"use client";

// Next
import Image from "next/image";

// Utils
import { common } from "@/utils/common";
import { spanish } from "@/utils/spanish";
import { english } from "@/utils/english";

// React
import { useContext, useRef } from "react";

// Components
import Line from "@/components/Line";
import Github from "@/components/Github";
import Linkedin from "@/components/Linkedin";

// Context
import { ThemeContext } from "@/context/context";

// Framer Motion
import { motion, useInView } from "framer-motion";

// Component
export default function About() {
  // Ref
  const ref = useRef(null);

  // Context
  const { lenguage } = useContext(ThemeContext);

  // Hook to check if the section is in view
  const isInView = useInView(ref, { once: true });

  // Set section variant
  const section = {
    hidden: { opacity: 0, y: 64 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.2 },
    },
  };

  return (
    <>
      <motion.section
        ref={ref}
        id="about"
        initial="hidden"
        className="about"
        variants={section}
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="about__title">
          {lenguage ? english.about.title : spanish.about.title}
        </h2>

        <div className="about__container">
          <div className="about__content">
            <p className="about__text">
              {lenguage ? english.about.text1 : spanish.about.text1}
            </p>

            <p className="about__text">
              {lenguage ? english.about.text2 : spanish.about.text2}
            </p>

            <p className="about__text">
              {lenguage ? english.about.text3 : spanish.about.text3}
            </p>

            <ul className="about__list">
              {common.technologies.map((technology) => (
                <li key={technology.text} className="about__item">
                  <Line width={4} height={2} />
                  {technology.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="about__profile">
            <figure>
              <Image
                width={240}
                height={240}
                alt={common.name}
                src={common.image}
                title={common.name}
                className="about__image"
              />
            </figure>

            <ul className="about__social">
              <li>
                <a
                  target="_blank"
                  href={common.github}
                  rel="noopener noreferrer"
                  aria-label={
                    lenguage
                      ? english.about.ariaLabelGithub
                      : spanish.about.ariaLabelGithub
                  }
                >
                  <Github width={29} height={29} />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href={common.linkedin}
                  rel="noopener noreferrer"
                  aria-label={
                    lenguage
                      ? english.about.ariaLabelLinkedin
                      : spanish.about.ariaLabelLinkedin
                  }
                >
                  <Linkedin width={29} height={29} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
    </>
  );
}
