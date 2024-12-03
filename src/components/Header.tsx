// Client component
"use client";

// Framer Motion
import { motion } from "framer-motion";

// Components
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import Aside from "@/components/Aside";
import Options from "@/components/Options";

// Hooks
import { useHeaderVisible } from "@/hooks/useHeaderVisible";

// Component
export default function Header() {
  // Header visible
  const [isHeaderVisible, prevScrollPos] = useHeaderVisible();

  // Return
  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-dark px-6 py-6 transition-all duration-[400ms] ease-in-out dark:bg-light ${prevScrollPos > 32 && isHeaderVisible ? "shadow-normal" : "shadow-none"} ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <motion.section
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Logo />
        </motion.section>

        <motion.section
          transition={{
            opacity: {
              delay: 0.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="flex items-center gap-4"
        >
          <nav className="hidden lg:block">
            <Nav />
          </nav>

          <Options />

          <Menu />
        </motion.section>

        <Aside />
      </header>
    </>
  );
}
