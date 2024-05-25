// Client Component
"use client";

// React
import { useContext } from "react";

// Components
import Dark from "@/components/Dark";
import Light from "@/components/Light";

// Utils
import { spanish } from "@/utils/spanish";
import { english } from "@/utils/english";

// Context
import { ThemeContext } from "@/context/context";

// Component
export default function Settings() {
  // Context
  const { colorMode, setColorMode, lenguage, setLenguage } =
    useContext(ThemeContext);

  return (
    <>
      <ul className="settings">
        <li>
          <button
            type="button"
            aria-label={
              lenguage
                ? english.header.ariaLabelLenguage
                : spanish.header.ariaLabelLenguage
            }
            className="settings__lenguage"
            onClick={() => setLenguage(!lenguage)}
          >
            {lenguage ? english.header.lenguage : spanish.header.lenguage}
          </button>
        </li>

        <li>
          {colorMode ? (
            <button
              type="button"
              onClick={() => setColorMode(!colorMode)}
              className="settings__color"
              aria-label={lenguage ? english.header.ariaLabelLight : spanish.header.ariaLabelLight}
            >
              <Dark width={40} height={40} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setColorMode(!colorMode)}
              className="settings__color"
              aria-label={lenguage ? english.header.ariaLabelDark : spanish.header.ariaLabelDark}
            >
              <Light width={40} height={40} />
            </button>
          )}
        </li>
      </ul>
    </>
  );
}
