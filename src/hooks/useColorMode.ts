// React
import { useState, useEffect } from "react";

// Hook
export const useColorMode = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  // Set the colormode
  const [colorMode, setColorMode] = useState<boolean>(false);

  // Set effect
  useEffect(() => {
    // Add or remove the colorMode class to the document element
    document.documentElement.classList.toggle("colorMode", colorMode);
  }, [colorMode]);

  // Set effect
  useEffect(() => {
    // Check if the user prefers light mode
    const prefersLightMode = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;

    // Set the colormode
    setColorMode(prefersLightMode);

    // Event listener
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

    // Function to handle the change in the user's preference
    const handleChange = () => {
      setColorMode(mediaQuery.matches);
    };

    // Add the event listener
    mediaQuery.addEventListener("change", handleChange);

    // Remove the event listener
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return [colorMode, setColorMode];
};
