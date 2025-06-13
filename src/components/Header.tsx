"use client";

import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import Aside from "@/components/Aside";
import Options from "@/components/Options";
import { useHeaderVisible } from "@/hooks/useHeaderVisible";

export default function Header() {
  const [isHeaderVisible, prevScrollPos] = useHeaderVisible();

  return (
    <>
      <header
        className={`bg-dark dark:bg-light fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 transition-all duration-[400ms] ease-in-out ${
          prevScrollPos > 32 && isHeaderVisible
            ? "shadow-normal"
            : "shadow-none"
        } ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <section>
          <Logo />
        </section>

        <section className="flex items-center gap-4">
          <nav className="hidden lg:block">
            <Nav />
          </nav>

          <Options />

          <Menu />
        </section>

        <Aside />
      </header>
    </>
  );
}
