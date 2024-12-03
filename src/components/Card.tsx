// Next
import Link from "next/link";

// React icons
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

// Component
export default function Card({
  title,
  github,
  website,
  description,
  technologies,
}: {
  title: string;
  github: string;
  website: string;
  description: string;
  technologies: string[];
}) {
  // Return
  return (
    <>
      <section className="group relative block transition-all duration-[150ms] ease-in-out">
        <div className="relative block overflow-hidden p-4 shadow-inset md:h-[256px] lg:h-[300px] xl:h-auto">
          <span
            aria-hidden="true"
            className="absolute -left-12 bottom-[-1px] top-0 block w-0 skew-x-[-15deg] bg-dark-red transition-all duration-200 ease-in-out group-hover:w-[calc(100%+105px)]"
          />

          <section className="relative flex h-full flex-col justify-between gap-6 transition-all duration-[400ms] ease-in-out">
            <header className="flex items-center justify-between">
              <h4 className="font-fira text-base font-semibold text-light xs:text-lg dark:text-dark">
                {title}
              </h4>

              <ul className="flex items-center gap-3">
                {github && (
                  <li>
                    <Link
                      href={github}
                      target="_blank"
                      aria-label="github"
                      rel="noopener noreferrer"
                    >
                      <FaGithub
                        aria-hidden="true"
                        className="text-xl text-light transition-all duration-[400ms] ease-in-out xs:text-2xl dark:text-dark"
                      />
                    </Link>
                  </li>
                )}

                <li>
                  <Link
                    href={website}
                    target="_blank"
                    aria-label="website"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink
                      aria-hidden="true"
                      className="text-xl text-light transition-all duration-[400ms] ease-in-out xs:text-2xl dark:text-dark"
                    />
                  </Link>
                </li>
              </ul>
            </header>

            <section>
              <p className="font-fira text-sm font-normal text-gray transition-all duration-[400ms] ease-in-out group-hover:text-light xs:text-base dark:text-dark">
                {description}
              </p>
            </section>

            <footer>
              <ul className="flex flex-wrap gap-3">
                {technologies.map((technology: string) => (
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
        </div>
      </section>
    </>
  );
}
