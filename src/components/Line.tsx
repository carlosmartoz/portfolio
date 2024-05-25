// Component
export default function Line({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <>
      <svg
        fill="none"
        width={width}
        height={height}
        className="line"
        viewBox="0 0 4 2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.25"
          y="0.75"
          width="3.5"
          height="0.5"
          strokeWidth="0.5"
        />
      </svg>
    </>
  );
}
