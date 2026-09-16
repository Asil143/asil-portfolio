import { projects } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <Section id="projects" title="Independent Products">
      <Reveal delay={0.05}>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted">
          Selected product and software builds outside client work. Professional
          data-engineering architecture work is separated into the case studies
          above.
        </p>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <div className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-xl border border-border bg-surface/50 p-5 transition-transform duration-300 ease-out hover:-translate-y-1">
              <div className="absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs text-accent"
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
                    className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    Live Site
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
