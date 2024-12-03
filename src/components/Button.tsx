// Next
import Link from "next/link";

// Component
export default function Button({
  link,
  text,
  icon,
  external,
}: {
  link: string;
  text: string;
  external?: boolean;
  icon?: React.ReactNode;
}) {
  // Return
  return (
    <>
      <Link
        href={link}
        aria-label="button"
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : "opener noreferrer"}
        className="group relative block font-fira text-sm font-normal uppercase text-red transition-all duration-[150ms] ease-in-out hover:text-light xs:text-base dark:text-dark-red"
      >
        <span className="relative block overflow-hidden px-8 py-3 shadow-inset md:px-12">
          <span className="absolute -left-2 bottom-[-1px] top-0 block w-0 skew-x-[-15deg] bg-dark-red transition-all duration-200 ease-in-out group-hover:w-[calc(100%+15px)]"></span>

          <span className="relative flex items-center gap-2">
            {text} {icon}
          </span>
        </span>
      </Link>
    </>
  );
}
