// Client Component
"use client";

// React
import { useContext } from "react";

// Utils
import { spanish } from "@/utils/spanish";
import { english } from "@/utils/english";

// Components
import Github from "@/components/Github";
import External from "@/components/External";

// Context
import { ThemeContext } from "@/context/context";

// Component
export default function Cards({
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
  // Context
  const { lenguage } = useContext(ThemeContext);

  return (
    <>
      <section className="card">
        <header className="card__header">
          <h2 className="card__title">{title}</h2>

          <div className="card__icons">
            {github !== "" && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  lenguage
                    ? english.projects.ariaLabelGithub
                    : spanish.projects.ariaLabelGithub
                }
              >
                <Github width={29} height={29} />
              </a>
            )}

            {website !== "" && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  lenguage
                    ? english.projects.ariaLabelWebsite
                    : spanish.projects.ariaLabelWebsite
                }
              >
                <External width={29} height={29} />
              </a>
            )}
          </div>
        </header>

        <section>
          <p className="card__text">{description}</p>
        </section>

        <footer className="card__footer">
          <ul className="card__list">
            {technologies.map((technology) => (
              <li key={technology} className="card__item">
                {technology}
              </li>
            ))}
          </ul>
        </footer>
      </section>
    </>
  );
}
