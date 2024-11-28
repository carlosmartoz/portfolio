// Components
import Button from "@/components/Button";

// Types
import { type ButtonItems } from "@/types/buttonItems";

// React icons
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

// Utils
export const buttonItems: ButtonItems = [
  {
    button: (
      <Button
        external
        text="Github"
        link="https://github.com/carlosmartoz"
        icon={<FaGithub className="text-xl" />}
      />
    ),
  },
  {
    button: (
      <Button
        external
        text="LinkedIn"
        icon={<FaLinkedin className="text-xl" />}
        link="https://www.linkedin.com/in/carlosmartoz"
      />
    ),
  },
  {
    button: (
      <Button
        external
        text="e-mail"
        link="mailto:carlosmrtzo@gmail.com"
        icon={<FaRegEnvelope className="text-xl" />}
      />
    ),
  },
];
