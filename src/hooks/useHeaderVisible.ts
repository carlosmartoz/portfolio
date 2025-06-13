import { useState, useEffect } from "react";

export const useHeaderVisible = (): [boolean, number] => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos <= 32) {
        setIsHeaderVisible(true);
      } else if (prevScrollPos < currentScrollPos && isHeaderVisible) {
        setIsHeaderVisible(false);
      } else if (prevScrollPos > currentScrollPos && !isHeaderVisible) {
        setIsHeaderVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHeaderVisible, prevScrollPos]);

  return [isHeaderVisible, prevScrollPos];
};
