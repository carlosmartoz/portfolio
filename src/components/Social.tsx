// React Icons
import { FaGithub, FaRegEnvelope, FaLinkedinIn } from "react-icons/fa";

// Component
export default function Social() {
  return (
    <>
      <ul className="gap-2 flex items-center">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/carlosmartoz"
            className="text-light transition-all ease-in-out duration-[200ms] hover:text-red text-xl"
          >
            <FaGithub />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/carlosmartoz"
            className="text-light transition-all ease-in-out duration-[200ms] hover:text-red text-xl"
          >
            <FaLinkedinIn />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:carlosmrtzo@gmail.com"
            className="text-light transition-all ease-in-out duration-[200ms] hover:text-red text-xl"
          >
            <FaRegEnvelope />
          </a>
        </li>
      </ul>
    </>
  );
}
