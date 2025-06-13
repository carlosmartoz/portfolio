"use client";

import Link from "next/link";
import { links } from "@/utils/links";
import Button from "@/components/Button";
import { type Links } from "@/types/links";

export default function Nav() {
  return (
    <>
      <ul className="flex items-center gap-4">
        {links.map((item: Links, index: number) => (
          <li key={index} className="flex items-center gap-4">
            <Link
              href={item.link}
              className="font-fira text-gray hover:text-red dark:text-dark dark:hover:text-dark-red text-base font-normal transition-all duration-[400ms] ease-in-out"
            >
              {item.label}
            </Link>

            <span className="bg-red h-px w-2" aria-hidden="true" />
          </li>
        ))}

        <li>
          <Button
            external
            text="Curriculum"
            link="/carlos-martinez-curriculum.pdf/"
          />
        </li>
      </ul>
    </>
  );
}
