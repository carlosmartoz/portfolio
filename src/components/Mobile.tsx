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

// Context
import { ThemeContext } from "@/context/context";

// Components
import Logo from "@/components/Logo";
import Aside from "@/components/Aside";
import Options from "@/components/Options";
import Hamburguer from "@/components/Hamburguer";

// Hooks
import { useOpenMenu } from "@/hooks/useOpenMenu";

// Component
export default function Mobile() {
  // Set menu item variant
  const menu__item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -32 },
  };

  // Context
  const { lenguage } = useContext(ThemeContext);

  // Hook to control the open / close state of the menu
  const [openMenu, setOpenMenu] = useOpenMenu();

  // Set menu variant
  const menu = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <motion.ul
        initial="hidden"
        variants={menu}
        animate="visible"
        className="mobile"
      >
        <motion.li variants={menu__item}>
          <Link
            href="/"
            title={lenguage ? english.header.logo : spanish.header.logo}
          >
            <Logo width={48} height={48} />
          </Link>
        </motion.li>

        <li>
          <ul className="mobile__inner">
            <motion.li variants={menu__item}>
              <Options />
            </motion.li>

            <motion.li variants={menu__item}>
              <Hamburguer openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </motion.li>
          </ul>
        </li>
      </motion.ul>

      <Aside openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
}
