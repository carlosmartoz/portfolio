// Component
export default function Linkedin({
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
        viewBox="0 0 29 29"
        className="linkedin"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.2 9.59998C21.1096 9.59998 22.9409 10.3585 24.2912 11.7088C25.6414 13.0591 26.4 14.8904 26.4 16.8V25.2H21.6V16.8C21.6 16.1635 21.3471 15.553 20.8971 15.1029C20.447 14.6528 19.8365 14.4 19.2 14.4C18.5635 14.4 17.953 14.6528 17.5029 15.1029C17.0529 15.553 16.8 16.1635 16.8 16.8V25.2H12V16.8C12 14.8904 12.7586 13.0591 14.1088 11.7088C15.4591 10.3585 17.2904 9.59998 19.2 9.59998Z"
        />

        <path
          stroke="#FF0000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.19999 10.8H2.39999V25.2H7.19999V10.8Z"
        />

        <path
          stroke="#FF0000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.79999 7.20002C6.12548 7.20002 7.19999 6.12551 7.19999 4.80002C7.19999 3.47454 6.12548 2.40002 4.79999 2.40002C3.47451 2.40002 2.39999 3.47454 2.39999 4.80002C2.39999 6.12551 3.47451 7.20002 4.79999 7.20002Z"
        />
      </svg>
    </>
  );
}
