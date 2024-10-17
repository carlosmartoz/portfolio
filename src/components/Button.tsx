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
  return (
    <>
      {icon ? (
        <a
          href={link}
          className="gap-1 flex font-normal py-3 px-6 items-end text-light transition-all ease-in-out duration-[200ms] text-sm border border-red border-solid font-fira hover:bg-red hover:text-light"
          target={external ? "_blank" : "_self"}
          rel={external ? "noopener noreferrer" : "opener noreferrer"}
        >
          {text} {icon}
        </a>
      ) : (
        <a
          href={link}
          className="gap-1 flex font-normal py-3 px-6 items-end text-light transition-all ease-in-out duration-[200ms] text-sm border border-red border-solid font-fira hover:bg-red hover:text-light"
          target={external ? "_blank" : "_self"}
          rel={external ? "noopener noreferrer" : "opener noreferrer"}
        >
          {text}
        </a>
      )}
    </>
  );
}
