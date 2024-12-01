// Next
import Link from "next/link";

// Component
export default function Logo() {
  // Return
  return (
    <>
      <Link
        href="/"
        title="Logo"
        aria-label="logo"
        className="group z-50 p-2.5"
      >
        <span
          aria-hidden="true"
          className="relative block h-10 w-10 rotate-45 text-xl font-bold text-red transition-all duration-[150ms] ease-in-out group-hover:text-light xs:h-11 xs:w-11"
        >
          <span
            aria-hidden="true"
            className="relative flex h-full items-center justify-center overflow-hidden shadow-inset"
          >
            <span
              aria-hidden="true"
              className="absolute -left-6 bottom-[-1px] top-0 block w-0 skew-x-[30deg] bg-dark-red transition-all duration-[300ms] ease-in-out group-hover:w-[200%]"
            />

            <span className="relative -rotate-45" aria-hidden="true">
              C
            </span>
          </span>
        </span>
      </Link>
    </>
  );
}
