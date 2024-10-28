import Link from "next/link";

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
  return (
    <>
      <Link
        href={link}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : "opener noreferrer"}
        className="flex items-end gap-1 border border-solid border-red px-8 py-2 font-fira text-base font-normal text-light transition-all duration-[200ms] ease-in-out hover:bg-red hover:text-light"
      >
        {text} {icon}
      </Link>
    </>
  );
}
