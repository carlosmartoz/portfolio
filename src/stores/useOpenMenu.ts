// Zustand
import { create } from "zustand";

// Types
import { type OpenMenu } from "@/types/OpenMenu";

// Store
export const useOpenMenu = create<OpenMenu>((set) => ({
  openMenu: false,
  setOpenMenu: (newOpenMenu) => set({ openMenu: newOpenMenu }),
}));
