// Client Component
"use client";

// React
import { useContext } from "react";

// Framer Motion
import { motion } from "framer-motion";

// Components
import Line from "@/components/Line";
import Button from "@/components/Button";

// Utils
import { spanish } from "@/utils/spanish";
import { english } from "@/utils/english";

// Context
import { ThemeContext } from "@/context/context";

// Component
export default function Aside({ openMenu }: { openMenu: boolean }) {
  // Context
  const { lenguage } = useContext(ThemeContext);

  // Set menu variant
  const aside = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  // Set menu item variant
  const aside__item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 0 },
  };

  return (
    <>
      <motion.aside
        variants={aside}
        initial="hidden"
        animate={openMenu ? "visible" : "hidden"}
        className="aside"
        style={{
          visibility: openMenu ? "visible" : "hidden",
          transform: openMenu ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <nav className="aside__nav">
          <ul className="aside__menu">
            {lenguage
              ? english.header.menu.map((item, index) => (
                  <motion.li
                    variants={aside__item}
                    key={index}
                    className="aside__item"
                  >
                    <Line width={4} height={2} />

                    <a href={`/${item.link}`} className="aside__link">
                      {item.text}
                    </a>
                  </motion.li>
                ))
              : spanish.header.menu.map((item, index) => (
                  <motion.li
                    variants={aside__item}
                    key={index}
                    className="aside__item"
                  >
                    <Line width={4} height={2} />

                    <a href={`/${item.link}`} className="aside__link">
                      {item.text}
                    </a>
                  </motion.li>
                ))}

            <motion.li variants={aside__item}>
              <Button
                external
                link={lenguage ? english.header.link : spanish.header.link}
                text={lenguage ? english.header.button : spanish.header.button}
              />
            </motion.li>
          </ul>
        </nav>
      </motion.aside>
    </>
  );
}
