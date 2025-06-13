"use client";

import Link from "next/link";
import { socialIcons } from "@/utils/socialIcons";

export default function Options() {
  return (
    <>
      <section className="flex items-center gap-4">
        <span aria-hidden="true" className="bg-red hidden h-px w-2 lg:block" />

        <ul className="hidden items-center gap-2 lg:flex">
          {socialIcons.map((item) => (
            <li key={item.label}>
              <Link
                target="_blank"
                href={item.link}
                aria-label={item.label}
                rel="noopener noreferrer"
                className="text-light hover:text-red dark:text-dark dark:hover:text-dark-red text-2xl transition-all duration-[400ms] ease-in-out"
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
