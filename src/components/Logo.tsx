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
        <span className="relative block h-11 w-11 rotate-45 text-xl font-bold text-red transition-all duration-[150ms] ease-in-out group-hover:text-light">
          <span className="relative flex h-full items-center justify-center overflow-hidden shadow-inset">
            <span className="absolute -left-6 bottom-[-1px] top-0 block w-0 skew-x-[30deg] bg-red transition-all duration-[300ms] ease-in-out group-hover:w-[200%]"></span>

            <span className="relative -rotate-45">C</span>
          </span>
        </span>
      </Link>
    </>
  );
}
