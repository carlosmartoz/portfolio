// Client Component
"use client";

// React
import { useContext } from "react";

// Framer Motion
import { motion } from "framer-motion";

// Components
import Social from "@/components/Social";
import Button from "@/components/Button";

// Utils
import { spanish } from "@/utils/spanish";
import { english } from "@/utils/english";

// Context
import { ThemeContext } from "@/context/context";

// Component
export default function Aside({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // Set menu item variant
  const aside__item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 0 },
  };

  // Context
  const { lenguage } = useContext(ThemeContext);

  // Set menu variant
  const aside = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <>
      <motion.aside
        variants={aside}
        initial="hidden"
        className="aside"
        animate={openMenu ? "visible" : "hidden"}
        style={{
          right: openMenu ? "0" : "-100%",
          visibility: openMenu ? "visible" : "hidden",
        }}
      >
        <nav className="aside__nav">
          <ul className="aside__menu">
            {lenguage
              ? english.header.menu.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={aside__item}
                    className="aside__item"
                  >
                    <span className="aside__separator">-</span>

                    <a
                      href={`/${item.link}`}
                      className="aside__link"
                      onClick={() => setOpenMenu(false)}
                    >
                      {item.text}
                    </a>
                  </motion.li>
                ))
              : spanish.header.menu.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={aside__item}
                    className="aside__item"
                  >
                    <span className="aside__separator">-</span>

                    <a
                      href={`/${item.link}`}
                      className="aside__link"
                      onClick={() => setOpenMenu(false)}
                    >
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

            <motion.li variants={aside__item}>
              <Social />
            </motion.li>
          </ul>
        </nav>
      </motion.aside>
    </>
  );
}
