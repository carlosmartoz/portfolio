// Next
import Link from "next/link";

// React icons
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

// Component
export default function Card({
  link,
  title,
  github,
  description,
  technologies,
}: {
  link: string;
  title: string;
  github: string;
  description: string;
  technologies: string[];
}) {
  // Return
  return (
    <>
      <section className="relative flex h-full flex-col justify-between gap-6 border border-red p-4 transition-all duration-[400ms] ease-in-out">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-fira text-base font-semibold text-light xs:text-lg md:text-xl dark:text-dark"
          >
            {title}
          </Link>

          <ul className="flex items-center gap-3">
            {github && (
              <li>
                <Link
                  target="_blank"
                  aria-label="Github"
                  href={github}
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red xs:text-2xl dark:text-dark" />
                </Link>
              </li>
            )}

            <li>
              <Link
                target="_blank"
                href={link}
                aria-label="Website"
                rel="noopener noreferrer"
              >
                <FiExternalLink className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red xs:text-2xl dark:text-dark" />
              </Link>
            </li>
          </ul>
        </header>

        <section>
          <p className="font-fira text-sm font-normal text-gray xs:text-base dark:text-dark">
            {description}
          </p>
        </section>

        <footer>
          <ul className="flex flex-wrap gap-3">
            {technologies.map((technology: any) => (
              <li
                key={technology}
                className="font-fira text-xs font-normal text-light xs:text-sm dark:text-dark"
              >
                {technology}
              </li>
            ))}
          </ul>
        </footer>
      </section>
    </>
  );
}
