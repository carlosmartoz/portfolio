// Client Component
"use client";

// Utils
import { type Context } from "@/types/context";

// Hooks
import { useColorMode } from "@/hooks/useColorMode";
import { useDeviceType } from "@/hooks/useDeviceType";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";

// React
import { createContext, useEffect, useState } from "react";

// Context
export const ThemeContext = createContext<Context>({
  lenguage: false,
  isMobile: false,
  prevScrollPos: 0,
  colorMode: false,
  setLenguage: () => {},
  isHeaderVisible: false,
  setColorMode: () => {},
});

// Provider
export default function ThemeProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Hook to determine the device type
  const [isMobile] = useDeviceType();

  // Hook to control the light/dark mode
  const [colorMode, setColorMode] = useColorMode();

  // Set the lenguage
  const [lenguage, setLenguage] = useState<boolean>(false);

  // Hook to control the header visibility
  const [isHeaderVisible, prevScrollPos] = useHeaderScroll();

  // Set effect
  useEffect(() => {
    // Check if the navigator is defined
    if (typeof navigator !== "undefined") {
      // Set the lenguage
      setLenguage(navigator.language.toLowerCase() === "es-419" ? false : true);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        lenguage,
        isMobile,
        colorMode,
        setLenguage,
        setColorMode,
        prevScrollPos,
        isHeaderVisible,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
