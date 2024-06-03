// Client Component
"use client";

// Icons
import Email from "@/icons/Email";
import Github from "@/icons/Github";
import Linkedin from "@/icons/Linkedin";

// Components
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";

// Utils
import { common } from "@/utils/common";
import { spanish } from "@/utils/spanish";
import { english } from "@/utils/english";

// React
import { useContext, useRef } from "react";

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

  // Set section variant
  const section = {
    hidden: { opacity: 0, y: 64 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.2 },
    },
  };

  // Hook to check if the section is in view
  const isInView = useInView(ref, { once: true });

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
                  <span className="about__separator">-</span>

                  {technology.text}
                </li>
              ))}
            </ul>

            <div className="about__links">
              <Button
                link={common.linkedin}
                text={common.linkedinText}
                icon={<Linkedin width={20} height={20} className="icon" />}
              />

              <Button
                link={common.github}
                text={common.githubText}
                icon={<Github width={20} height={20} className="icon" />}
              />

              <Button
                link={common.email}
                text={common.emailText}
                icon={<Email width={20} height={20} className="icon" />}
              />

              <Button
                text={lenguage ? english.about.resume : spanish.about.resume}
                link={
                  lenguage ? english.about.resumeLink : spanish.about.resumeLink
                }
              />
            </div>
          </div>

          <div className="about__profile">
            <Avatar />
          </div>
        </div>
      </motion.section>
    </>
  );
}
