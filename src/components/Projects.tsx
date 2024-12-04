// Client component
"use client";

// Components
import Card from "@/components/Card";

// Framer Motion
import { motion } from "framer-motion";

// Next intl
import { useTranslations } from "next-intl";

// Types
import { type Project } from "@/types/project";

// Component
export default function Projects() {
  // Translations
  const t = useTranslations();

  // Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 56 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
      },
    }),
  };

  // Return
  return (
    <>
      <motion.section
        id="projects"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex min-h-svh flex-col gap-4 md:gap-8"
      >
        <motion.h3
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.1 }}
          className="font-inter text-xl font-semibold text-light xs:text-2xl md:text-3xl lg:text-4xl dark:text-dark"
        >
          {t.raw("links")[1].label}
        </motion.h3>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.raw("projects").map((project: Project, index: number) => (
            <motion.li
              custom={index + 1}
              initial="hidden"
              key={project.title}
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Card {...project} />
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </>
  );
}
