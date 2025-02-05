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
        prefetch={false}
        aria-label="button"
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : "opener noreferrer"}
        className="group font-fira text-red hover:text-light xs:text-base dark:text-dark-red relative block text-sm font-normal uppercase transition-all duration-[150ms] ease-in-out"
      >
        <span className="shadow-inset relative block overflow-hidden px-8 py-3 md:px-12">
          <span className="bg-dark-red absolute top-0 bottom-[-1px] -left-2 block w-0 skew-x-[-15deg] transition-all duration-200 ease-in-out group-hover:w-[calc(100%+15px)]"></span>

          <span className="relative flex items-center gap-2">
            {text} {icon}
          </span>
        </span>
      </Link>
    </>
  );
}
