// Client Component
"use client";

// Utils
import { type Context } from "@/types/context";

// React
import { createContext, useEffect, useState } from "react";

// Hooks
import { useColorMode } from "@/hooks/useColorMode";
import { useDeviceType } from "@/hooks/useDeviceType";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";

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

  // Set Effect
  useEffect(() => {
    // Disable smooth scrolling when the page is loading
    document.documentElement.style.scrollBehavior = "auto";

    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Enable smooth scrolling after the page has loaded
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 0);
  }, []);

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
