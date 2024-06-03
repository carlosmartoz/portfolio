// Client Component
"use client";

// Icons
import Dark from "@/icons/Dark";
import Light from "@/icons/Light";

// React
import { useContext } from "react";

// Utils
import { spanish } from "@/utils/spanish";
import { english } from "@/utils/english";

// Context
import { ThemeContext } from "@/context/context";

// Component
export default function Options() {
  // Context
  const { colorMode, setColorMode, lenguage, setLenguage } =
    useContext(ThemeContext);

  return (
    <>
      <ul className="options">
        <li>
          <button
            type="button"
            className="options__lenguage"
            aria-label={
              lenguage
                ? english.header.ariaLabelLenguage
                : spanish.header.ariaLabelLenguage
            }
            onClick={() => setLenguage(!lenguage)}
          >
            {lenguage ? english.header.lenguage : spanish.header.lenguage}
          </button>
        </li>

        <li>
          {colorMode ? (
            <button
              type="button"
              className="options__color"
              aria-label={
                lenguage
                  ? english.header.ariaLabelLight
                  : spanish.header.ariaLabelLight
              }
              onClick={() => setColorMode(!colorMode)}
            >
              <Dark width={32} height={32} />
            </button>
          ) : (
            <button
              type="button"
              className="options__color"
              aria-label={
                lenguage
                  ? english.header.ariaLabelDark
                  : spanish.header.ariaLabelDark
              }
              onClick={() => setColorMode(!colorMode)}
            >
              <Light width={32} height={32} />
            </button>
          )}
        </li>
      </ul>
    </>
  );
}
