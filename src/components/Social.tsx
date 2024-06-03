// Icons
import Email from "@/icons/Email";
import Github from "@/icons/Github";
import Linkedin from "@/icons/Linkedin";

// Utils
import { common } from "@/utils/common";

// Component
export default function Social() {
  return (
    <>
      <ul className="social">
        <li>
          <a
            target="_blank"
            href={common.github}
            className="social__icon"
            rel="noopener noreferrer"
          >
            <Github width={24} height={24} />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href={common.linkedin}
            className="social__icon"
            rel="noopener noreferrer"
          >
            <Linkedin width={24} height={24} />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href={common.email}
            className="social__icon"
            rel="noopener noreferrer"
          >
            <Email width={24} height={24} />
          </a>
        </li>
      </ul>
    </>
  );
}
