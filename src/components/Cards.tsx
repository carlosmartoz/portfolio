// Client Component
"use client";

// React
import { useContext } from "react";

// Icons
import Github from "@/icons/Github";
import External from "@/icons/External";

// Utils
import { spanish } from "@/utils/spanish";
import { english } from "@/utils/english";

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

          <ul className="card__links">
            <li>
              {github !== "" && (
                <a
                  href={github}
                  target="_blank"
                  className="card__icon"
                  rel="noopener noreferrer"
                  aria-label={
                    lenguage
                      ? english.projects.ariaLabelGithub
                      : spanish.projects.ariaLabelGithub
                  }
                >
                  <Github width={24} height={24} />
                </a>
              )}
            </li>

            <li>
              {website !== "" && (
                <a
                  href={website}
                  target="_blank"
                  className="card__icon"
                  rel="noopener noreferrer"
                  aria-label={
                    lenguage
                      ? english.projects.ariaLabelWebsite
                      : spanish.projects.ariaLabelWebsite
                  }
                >
                  <External width={24} height={24} />
                </a>
              )}
            </li>
          </ul>
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
