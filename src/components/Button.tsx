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
          className="button"
          target={external ? "_blank" : "_self"}
          rel={external ? "noopener noreferrer" : "opener noreferrer"}
        >
          {text} {icon}
        </a>
      ) : (
        <a
          href={link}
          className="button"
          target={external ? "_blank" : "_self"}
          rel={external ? "noopener noreferrer" : "opener noreferrer"}
        >
          {text}
        </a>
      )}
    </>
  );
}
