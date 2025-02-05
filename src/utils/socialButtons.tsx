// Components
import Button from "@/components/Button";

// Types
import { type SocialButtons } from "@/types/socialButtons";

// React icons
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

// Utils
export const socialButtons: SocialButtons = [
  {
    button: (
      <Button
        text="GitHub"
        link="https://github.com/carlosmartoz"
        icon={
          <FaGithub
            aria-hidden="true"
            className="text-red group-hover:text-light dark:text-dark-red transition-all duration-[150ms] ease-in-out"
          />
        }
      />
    ),
  },
  {
    button: (
      <Button
        text="LinkedIn"
        link="https://www.linkedin.com/in/carlosmartoz"
        icon={
          <FaLinkedin
            aria-hidden="true"
            className="text-red group-hover:text-light dark:text-dark-red transition-all duration-[150ms] ease-in-out"
          />
        }
      />
    ),
  },
  {
    button: (
      <Button
        text="E-mail"
        link="mailto:carlosmrtzo@gmail.com"
        icon={
          <FaRegEnvelope
            aria-hidden="true"
            className="text-red group-hover:text-light dark:text-dark-red transition-all duration-[150ms] ease-in-out"
          />
        }
      />
    ),
  },
];
