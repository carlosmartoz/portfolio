// React
import { useState, useEffect } from "react";

// Hook
export const useColorMode = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  // Set color mode
  const [colorMode, setColorMode] = useState<boolean>(false);

  // Effect to get the color mode from the local storage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedColorMode = localStorage.getItem("colorMode");
      if (savedColorMode !== null) {
        setColorMode(JSON.parse(savedColorMode));
      }
    }
  }, []);

  // Effect to add or remove the class to the html
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("colorMode", colorMode);

      localStorage.setItem("colorMode", JSON.stringify(colorMode));
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
};
