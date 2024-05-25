// Component
export default function Button({
  link,
  text,
  external,
}: {
  link: string;
  text: string;
  external?: boolean;
}) {
  return (
    <>
      <a
        href={link}
        className="button"
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : "opener noreferrer"}
      >
        {text}
      </a>
    </>
  );
}
