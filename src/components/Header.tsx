// Client Component
"use client";

// React
import { useContext } from "react";

// Components
import Menu from "@/components/Menu";
import Mobile from "@/components/Mobile";

// Context
import { ThemeContext } from "@/context/context";

// Component
export default function Header() {
  // Context
  const { isHeaderVisible, prevScrollPos } = useContext(ThemeContext);

  return (
    <>
      <header
        className="header"
        style={{
          boxShadow:
            prevScrollPos > 32 && isHeaderVisible
              ? "var(--shadow-normal)"
              : "none",
          transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <nav className="nav">
          <Menu />

          <Mobile />
        </nav>
      </header>
    </>
  );
}
