// Types
import { type Social } from "@/types/social";

// React icons
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

// Utils
export const social: Social = [
  {
    label: "github",
    icon: <FaGithub aria-hidden="true" />,
    link: "https://github.com/carlosmartoz",
  },
  {
    label: "linkedin",
    icon: <FaLinkedin aria-hidden="true" />,
    link: "https://www.linkedin.com/in/carlosmartoz",
  },
  {
    label: "e-mail",
    link: "mailto:carlosmrtzo@gmail.com",
    icon: <FaRegEnvelope aria-hidden="true" />,
  },
];
