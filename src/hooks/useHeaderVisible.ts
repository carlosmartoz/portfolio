// React
import { useState, useEffect } from "react";

// Hook
export const useHeaderVisible = (): [boolean, number] => {
  // Previous scroll position
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  // Header visibility
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);

  // Effect
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = (): void => {
      // Get the current scroll position
      const currentScrollPos = window.pageYOffset;

      // Check the scroll position
      if (currentScrollPos <= 56) {
        // Set the header to visible if the scroll position is less than or equal to 56
        setIsHeaderVisible(true);
      } else if (prevScrollPos < currentScrollPos && isHeaderVisible) {
        // Set the header to hidden if the scroll position is greater than the previous scroll position
        setIsHeaderVisible(false);
      } else if (prevScrollPos > currentScrollPos && !isHeaderVisible) {
        // Set the header to visible if the scroll position is less than the previous scroll position
        setIsHeaderVisible(true);
      }

      // Set the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Return
    return () => {
      // Remove scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHeaderVisible, prevScrollPos]);

  // Return
  return [isHeaderVisible, prevScrollPos];
};
