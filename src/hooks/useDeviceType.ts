// React
import { useState, useEffect } from "react";

// Hook
export const useDeviceType = (): [boolean, boolean, boolean] => {
  // Set the mobile device
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Set the tablet device
  const [isTablet, setIsTablet] = useState<boolean>(false);

  // Set the desktop device
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Set effect
  useEffect(() => {
    // Function to handle the resize event
    function handleResize() {
      // Set the mobile device
      setIsMobile(window.innerWidth < 768);

      // Set the tablet device
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);

      // Set the desktop device
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
