// Icon
export default function Branch({
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

        <path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />

        <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />

        <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />

        <path d="M7 8l0 8" />

        <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />

        <path d="M14 14l3 -3l3 3" />
      </svg>
    </>
  );
}
