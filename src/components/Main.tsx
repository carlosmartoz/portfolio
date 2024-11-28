// Client component
"use client";

// Stores
import { useOpenMenu } from "@/stores/useOpenMenu";

// Component
export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Use open menu
  const { openMenu } = useOpenMenu();

  // Return
  return (
    <>
      <main
        className={`${openMenu ? "pointer-events-none min-h-svh touch-none select-none blur-sm lg:pointer-events-auto lg:touch-auto lg:select-auto lg:blur-0" : "min-h-svh"}`}
      >
        <article className="relative mx-auto flex min-h-svh w-full flex-col gap-12 px-6 lg:max-w-5xl xl:px-0">
          {children}
        </article>
      </main>
    </>
  );
}
