// React
import { useState, useEffect } from "react";

// Hook
export const useDeviceType = (): [boolean, boolean, boolean] => {
  // Set mobile device
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Set tablet device
  const [isTablet, setIsTablet] = useState<boolean>(false);

  // Set desktop device
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Set effect
  useEffect(() => {
    // Function to handle the resize event
    function handleResize() {
      // Set mobile device
      setIsMobile(window.innerWidth < 768);

      // Set tablet device
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);

      // Set desktop device
      setIsDesktop(window.innerWidth >= 1024);
    }

    // Function to check the initial size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [isMobile, isTablet, isDesktop];
};
