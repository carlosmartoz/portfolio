// Component
export default function External({
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
        viewBox="0 0 24 23"
        className="external"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M18.1333 12.45V11.95H17.1333V12.45H18.1333ZM3.38335 18.15H2.88335H3.38335ZM5.28335 5.80005V5.30005V5.80005ZM10.9833 6.30005H11.4833V5.30005H10.9833V6.30005ZM17.1333 12.45V18.15H18.1333V12.45H17.1333ZM17.1333 18.15C17.1333 18.5214 16.9858 18.8774 16.7233 19.14L17.4304 19.8471C17.8805 19.397 18.1333 18.7866 18.1333 18.15H17.1333ZM16.7233 19.14C16.4607 19.4025 16.1046 19.55 15.7333 19.55V20.55C16.3699 20.55 16.9803 20.2972 17.4304 19.8471L16.7233 19.14ZM15.7333 19.55H5.28335V20.55H15.7333V19.55ZM5.28335 19.55C4.91204 19.55 4.55595 19.4025 4.2934 19.14L3.58629 19.8471C4.03638 20.2972 4.64683 20.55 5.28335 20.55V19.55ZM4.2934 19.14C4.03085 18.8774 3.88335 18.5214 3.88335 18.15H2.88335C2.88335 18.7866 3.1362 19.397 3.58629 19.8471L4.2934 19.14ZM3.88335 18.15V7.70005H2.88335V18.15H3.88335ZM3.88335 7.70005C3.88335 7.32875 4.03085 6.97265 4.2934 6.7101L3.58629 6.00299C3.1362 6.45308 2.88335 7.06353 2.88335 7.70005H3.88335ZM4.2934 6.7101C4.55595 6.44755 4.91204 6.30005 5.28335 6.30005V5.30005C4.64683 5.30005 4.03638 5.55291 3.58629 6.00299L4.2934 6.7101ZM5.28335 6.30005H10.9833V5.30005H5.28335V6.30005Z"
        />

        <path
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
          d="M14.7833 2.9502H20.4833V8.6502"
        />

        <path
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
          d="M9.33333 13.95L19.7833 3.5"
        />
      </svg>
    </>
  );
}