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
    // Ocultar el contenido y deshabilitar el desplazamiento al cargar la página
    document.body.style.visibility = "hidden";

    const handleScroll = () => {
      // Ajustar el scroll a la parte superior de la página
      window.scrollTo(0, 0);

      // Verificar si el scroll está en la parte superior
      if (window.scrollY === 0) {
        // Mostrar el contenido y restaurar el desplazamiento
        document.body.style.visibility = "visible";
        window.removeEventListener("scroll", handleScroll); // Eliminar el listener
        document.documentElement.style.scrollBehavior = "smooth";
      }
    };

    // Añadir un evento scroll listener
    window.addEventListener("scroll", handleScroll);

    // Llamar a handleScroll inicialmente para ajustar el scroll
    handleScroll();

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
