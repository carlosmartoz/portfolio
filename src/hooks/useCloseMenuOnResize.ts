import { useEffect } from "react";

import { useOpenMenu } from "@/hooks/useOpenMenu";

export const useCloseMenuOnResize = () => {
  const { setOpenMenu } = useOpenMenu();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpenMenu(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setOpenMenu]);
};
