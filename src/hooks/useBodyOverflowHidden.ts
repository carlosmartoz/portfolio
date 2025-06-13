import { useEffect } from "react";
import { useOpenMenu } from "@/hooks/useOpenMenu";

export const useBodyOverflowHidden = () => {
  const { openMenu } = useOpenMenu();

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [openMenu]);
};
