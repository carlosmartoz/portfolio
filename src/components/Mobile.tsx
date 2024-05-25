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

// Hooks
import { useOpenMenu } from "@/hooks/useOpenMenu";

// Components
import Logo from "@/components/Logo";
import Aside from "@/components/Aside";
import Hamburguer from "@/components/Hamburguer";
import MenuSettings from "@/components/Settings";

// Component
export default function Mobile() {
  // Context
  const { lenguage } = useContext(ThemeContext);

  // Hook to control the open / close state of the menu
  const [openMenu, setOpenMenu] = useOpenMenu();

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
              <MenuSettings />
            </motion.li>

            <motion.li variants={menu__item}>
              <Hamburguer openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </motion.li>
          </ul>
        </li>
      </motion.ul>

      <Aside openMenu={openMenu} />
    </>
  );
}
