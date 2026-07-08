import { projects } from "@/data/profile";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col gap-3 rounded-xl border border-black/10 p-5 transition-colors hover:border-black/20 dark:border-white/10 dark:hover:border-white/20"
          >
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-black/5 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-white/10 dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4 pt-2 text-sm font-medium">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300"
                >
                  Live Site
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
