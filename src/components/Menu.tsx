// Client Component
"use client";

// Next
import Link from "next/link";

// React
import { useContext } from "react";

// Framer Motion
import { motion } from "framer-motion";

// Utils
import { spanish } from "@/utils/spanish";
import { english } from "@/utils/english";

// Components
import Logo from "@/components/Logo";
import Line from "@/components/Line";
import Button from "@/components/Button";
import Settings from "@/components/Settings";

// Context
import { ThemeContext } from "@/context/context";

// Component
export default function Menu() {
  // Context
  const { lenguage } = useContext(ThemeContext);

  // Set menu variant
  const menu = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Set menu item variant
  const menu__item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -32 },
  };

  return (
    <motion.ul
      variants={menu}
      initial="hidden"
      className="menu"
      animate="visible"
    >
      <motion.li variants={menu__item}>
        <Link
          href="/"
          aria-label="Logo"
          title={lenguage ? english.header.logo : spanish.header.logo}
        >
          <Logo width={48} height={48} />
        </Link>
      </motion.li>

      <ul className="menu__inner">
        {lenguage
          ? english.header.menu.map((item, index) => (
              <motion.li
                key={index}
                variants={menu__item}
                className="menu__item"
              >
                <a href={`/${item.link}`} className="menu__link">
                  {item.text}
                </a>
                <Line width={4} height={2} />
              </motion.li>
            ))
          : spanish.header.menu.map((item, index) => (
              <motion.li
                key={index}
                variants={menu__item}
                className="menu__item"
              >
                <a href={`/${item.link}`} className="menu__link">
                  {item.text}
                </a>
                <Line width={4} height={2} />
              </motion.li>
            ))}

        <motion.li variants={menu__item} className="menu__item">
          <Button
            link={lenguage ? english.header.link : spanish.header.link}
            text={lenguage ? english.header.button : spanish.header.button}
          />
        </motion.li>

        <motion.li variants={menu__item} className="menu__item">
          <Settings />
        </motion.li>
      </ul>
    </motion.ul>
  );
}
