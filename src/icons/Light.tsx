// Icon
export default function Light({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <>
      <svg
        fill="none"
        width={width}
        height={height}
        strokeWidth="1"
        viewBox="0 0 24 24"
        className={className}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />

        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />

        <path d="M12 5l0 -2" />

        <path d="M17 7l1.4 -1.4" />

        <path d="M19 12l2 0" />

        <path d="M17 17l1.4 1.4" />

        <path d="M12 19l0 2" />

        <path d="M7 17l-1.4 1.4" />

        <path d="M6 12l-2 0" />

        <path d="M7 7l-1.4 -1.4" />
      </svg>
    </>
  );
}
