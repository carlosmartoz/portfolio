// Client Component
"use client";

// Components
import Menu from "@/components/Menu";
import Mobile from "@/components/Mobile";

// Hooks
import { useHeaderScroll } from "@/hooks/useHeaderScroll";

// Component
export default function Header() {
  // Hook to control the header visibility
  const [isHeaderVisible, prevScrollPos] = useHeaderScroll();

  return (
    <>
      <header
        className={`top-0 left-0 w-full z-50 fixed bg-dark ${
          prevScrollPos > 32 && isHeaderVisible
            ? "shadow-normal"
            : "shadow-none"
        } ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav className="flex items-center justify-between p-6">
          <Menu />

          <Mobile />
        </nav>
      </header>
    </>
  );
}
