import { useState } from "react";

export function useOpenMenu(initialState: boolean = false) {
  const [openMenu, setOpenMenu] = useState(initialState);

  return { openMenu, setOpenMenu };
}
