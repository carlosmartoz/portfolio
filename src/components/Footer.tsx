"use client";

import Link from "next/link";
import { IoIosGitBranch } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <footer className="flex w-full items-center justify-center py-12 lg:py-6">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/carlosmartoz/portfolio"
          className="font-fira text-gray hover:text-red xs:text-base dark:text-dark dark:hover:text-dark-red flex gap-2 text-sm font-normal transition-all duration-[400ms] ease-in-out"
        >
          <IoIosGitBranch
            aria-hidden="true"
            className="text-red xs:text-2xl dark:text-dark-red text-xl"
          />
          Creado por Carlos Martínez.
        </Link>
      </footer>
    </>
  );
}
