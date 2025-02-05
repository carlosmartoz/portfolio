// Client component
"use client";

// Next
import dynamic from "next/dynamic";

// Framer Motion
import { motion } from "framer-motion";

// Components
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import Options from "@/components/Options";

// Dynamic components
const Aside = dynamic(() => import("@/components/Aside"));

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
        className={`bg-dark dark:bg-light fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 transition-all duration-[400ms] ease-in-out ${prevScrollPos > 32 && isHeaderVisible ? "shadow-normal" : "shadow-none"} ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
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
