// React
import { useEffect } from "react";

// Stores
import { useOpenMenu } from "@/stores/useOpenMenu";

// Hook
export const useCloseMenuOnResize = () => {
  // Use open menu
  const { setOpenMenu } = useOpenMenu();

  // Effect
  useEffect(() => {
    // Handle resize
    const handleResize = () => {
      // If the width is more than 1024
      if (window.innerWidth > 1024) {
        // Open menu
        setOpenMenu(false);
      }
    };

    // Call handleResize
    handleResize();

    // Listener
    window.addEventListener("resize", handleResize);

    // Clear at unmount component
    return () => window.removeEventListener("resize", handleResize);
  }, [setOpenMenu]);
};
