// React
import { useEffect } from "react";

// Stores
import { useOpenMenu } from "@/stores/useOpenMenu";

// Hook
export const useBodyOverflowHidden = () => {
  // Use open menu
  const { openMenu } = useOpenMenu();

  // Effect
  useEffect(() => {
    // If open menu is true
    if (openMenu) {
      // Add class
      document.body.classList.add("overflow-hidden");
    } else {
      // Remove class
      document.body.classList.remove("overflow-hidden");
    }

    // Clear at unmount component
    return () => document.body.classList.remove("overflow-hidden");
  }, [openMenu]);
};
