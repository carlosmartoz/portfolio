// React
import { useState, useEffect } from "react";

// Hook
export const useColorMode = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  // Leer el valor de localStorage o usar false por defecto
  const [colorMode, setColorMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedColorMode = localStorage.getItem("colorMode");
      if (savedColorMode !== null) {
        setColorMode(JSON.parse(savedColorMode));
      }
    }
  }, []);

  // Efecto para actualizar la clase y localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("colorMode", colorMode);
      localStorage.setItem("colorMode", JSON.stringify(colorMode));
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
};
