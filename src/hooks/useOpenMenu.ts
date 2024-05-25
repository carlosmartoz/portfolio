// React
import { useState, useEffect } from "react";

// Hook
export const useOpenMenu = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  // Set the openMenu
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  // Set effect
  useEffect(() => {
    // Add or remove the lock class to the document element
    document.documentElement.classList.toggle("lock", openMenu);

    // Function to handle the screen size
    const handleScreenSize = (): void => {
      // Check if the screen size is desktop
      const isDesktop = window.innerWidth > 1024;

      // Check if the screen size is desktop set openMenu to false
      if (isDesktop) {
        setOpenMenu(false);
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleScreenSize);

    // Remove resize event listener
    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, [openMenu]);

  return [openMenu, setOpenMenu];
};
