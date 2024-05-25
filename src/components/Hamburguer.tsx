// Client Component
"use client";

// React
import { useContext } from "react";

// Utils
import { spanish } from "@/utils/spanish";
import { english } from "@/utils/english";

// Context
import { ThemeContext } from "@/context/context";

// Component
export default function Hamburguer({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // Context
  const { lenguage } = useContext(ThemeContext);

  return (
    <>
      <button
        type="button"
        className="hamburger"
        aria-label={
          lenguage ? english.header.ariaLabelMenu : spanish.header.ariaLabelMenu
        }
      >
        <div
          className={`hamburger__content ${
            openMenu
              ? "hamburger__content--active"
              : "hamburger__content--inactive"
          }`}
          onClick={() => {
            setOpenMenu((prevState) => !prevState);
          }}
        >
          <div className="hamburger__inner"></div>
        </div>
      </button>
    </>
  );
}
