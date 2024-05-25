// Component
export default function Repository({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 19 18"
        className="repository"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 2.25V11.25" strokeLinecap="round" strokeLinejoin="round" />

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 6.75C15.2426 6.75 16.25 5.74264 16.25 4.5C16.25 3.25736 15.2426 2.25 14 2.25C12.7574 2.25 11.75 3.25736 11.75 4.5C11.75 5.74264 12.7574 6.75 14 6.75Z"
        />

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 15.75C6.24264 15.75 7.25 14.7426 7.25 13.5C7.25 12.2574 6.24264 11.25 5 11.25C3.75736 11.25 2.75 12.2574 2.75 13.5C2.75 14.7426 3.75736 15.75 5 15.75Z"
        />

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 6.75C14 8.54021 13.2888 10.2571 12.023 11.523C10.7571 12.7888 9.04021 13.5 7.25 13.5"
        />
      </svg>
    </>
  );
}
