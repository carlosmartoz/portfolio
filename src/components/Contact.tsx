// Client Component
"use client";

// Components
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
export default function Contact() {
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
        id="contact"
        initial="hidden"
        variants={section}
        className="contact"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="contact__container">
          <h3 className="contact__subtitle">
            {lenguage ? english.contact.subtitle : spanish.contact.subtitle}
          </h3>

          <h1 className="contact__title">
            {lenguage ? english.contact.title : spanish.contact.title}
          </h1>

          <p
            className="contact__text"
            dangerouslySetInnerHTML={{
              __html: lenguage ? english.contact.text : spanish.contact.text,
            }}
          />
        </div>

        <Button
          external={false}
          link={common.email}
          text={lenguage ? english.contact.button : spanish.contact.button}
        />
      </motion.section>
    </>
  );
}
