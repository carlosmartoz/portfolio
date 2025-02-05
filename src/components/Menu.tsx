// Client component
"use client";

// Stores
import { useOpenMenu } from "@/stores/useOpenMenu";

// Hooks
import { useCloseMenuOnResize } from "@/hooks/useCloseMenuOnResize";
import { useBodyOverflowHidden } from "@/hooks/useBodyOverflowHidden";

// Component
export default function Menu() {
  // Use close menu on resize
  useCloseMenuOnResize();

  // Use body class on menu open
  useBodyOverflowHidden();

  // Use open menu
  const { openMenu, setOpenMenu } = useOpenMenu();

  // Return
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
        aria-label={openMenu ? "close menu" : "menu"}
        className="relative z-50 flex h-8 w-9 items-center justify-center lg:hidden"
      >
        <span
          className={`bg-red before:bg-red after:bg-red relative w-full transition-all duration-[400ms] ease-in-out before:absolute before:-top-3 before:right-0 before:w-3/4 before:transition-all before:duration-[400ms] before:ease-in-out before:content-[''] after:absolute after:top-3 after:right-0 after:w-1/2 after:transition-all after:duration-[400ms] after:ease-in-out after:content-[''] ${
            openMenu
              ? "h-[1.5px] rotate-[225deg] before:top-0 before:h-[1.5px] before:w-full before:rotate-90 after:top-0 after:h-[1.5px] after:w-full after:rotate-90 after:opacity-0"
              : "h-[2px] before:h-[2px] after:h-[2px]"
          }`}
        />
      </button>
    </>
  );
}
