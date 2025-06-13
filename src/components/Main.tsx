"use client";

import { useOpenMenu } from "@/hooks/useOpenMenu";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { openMenu } = useOpenMenu();

  return (
    <>
      <main
        className={`${
          openMenu
            ? "lg:blur-0 pointer-events-none min-h-svh touch-none blur-xs select-none lg:pointer-events-auto lg:touch-auto lg:select-auto"
            : "min-h-svh"
        }`}
      >
        <article className="relative mx-auto flex min-h-svh w-full flex-col gap-12 px-6 lg:max-w-5xl xl:px-0">
          {children}
        </article>
      </main>
    </>
  );
}
