// Component
export default function External({
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

        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />

        <path d="M11 13l9 -9" />

        <path d="M15 4h5v5" />
      </svg>
    </>
  );
}
