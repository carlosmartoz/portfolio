// React
import { useState, useEffect } from "react";

// Hook
export const useColorMode = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
] => {
  // Color mode
  const [colorMode, setColorMode] = useState<boolean>(false);

  // Effect
  useEffect(() => {
    // If window is different than undefined
    if (typeof window !== "undefined") {
      // Get item from the local storage
      const savedColorMode = localStorage.getItem("theme");

      // If savedColorMode is different than null
      if (savedColorMode !== null) {
        // Color mode
        setColorMode(JSON.parse(savedColorMode));
      }
    }
  }, []);

  // Effect
  useEffect(() => {
    // If window is different than undefined
    if (typeof window !== "undefined") {
      // Toggle dark class in HTML element
      document.documentElement.classList.toggle("dark", colorMode);

      // Set item in the local storage
      localStorage.setItem("theme", JSON.stringify(colorMode));
    }
  }, [colorMode]);

  // Return
  return [colorMode, setColorMode];
};
