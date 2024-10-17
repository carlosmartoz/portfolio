// Client Component
"use client";

// Next
import Link from "next/link";
import dynamic from "next/dynamic";

import { IoMdMenu } from "react-icons/io";

// Hooks
import { useOpenMenu } from "@/hooks/useOpenMenu";

// Components
import Logo from "@/components/Logo";
const Aside = dynamic(() => import("@/components/Aside"));

// Component
export default function Mobile() {
  // Hook to control the open / close state of the menu
  const [openMenu, setOpenMenu] = useOpenMenu();

  // Return
  return (
    <>
      <ul className="lg:hidden w-full items-center justify-between">
        <li>
          <Link href="/" title="Logo">
            <Logo width={48} height={48} />
          </Link>
        </li>

        <li>
          <ul className="gap-4 flex items-center">
            <li
              className="text-light text-2xl"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <IoMdMenu />
            </li>
          </ul>
        </li>
      </ul>

      <Aside openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
}
