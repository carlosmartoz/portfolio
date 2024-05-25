// React
import { useState, useEffect } from "react";

// Hook
export const useHeaderScroll = (): [boolean, number] => {
  // Set the previous scroll position
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  // Set the header visibility
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);

  // Set effect
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = (): void => {
      // Get the current scroll position
      const currentScrollPos = window.pageYOffset;

      // Check the scroll position
      if (currentScrollPos <= 32) {
        // Set the header to visible if the scroll position is less than or equal to 32
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

    // Remove scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHeaderVisible, prevScrollPos]);

  return [isHeaderVisible, prevScrollPos];
};
