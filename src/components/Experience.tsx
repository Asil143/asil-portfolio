import { experience } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative flex flex-col gap-10">
        <div className="absolute top-2 bottom-2 left-[5px] w-px bg-gradient-to-b from-accent via-accent/45 to-border" />
        {experience.map((role, i) => (
          <Reveal key={`${role.company}-${role.title}`} delay={i * 0.08}>
            <article className="relative pl-8">
              <span className="absolute top-1 left-0 flex h-3 w-3 items-center justify-center">
                <span className="absolute h-10 w-10 rounded-full bg-accent/30 blur-lg" />
                <span className="absolute h-6 w-6 animate-ping rounded-full border border-accent/60" />
                <span className="relative h-3.5 w-3.5 rounded-full border-2 border-accent bg-accent shadow-[0_0_24px_rgba(139,140,255,0.95)]" />
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div>
                  <h3 className="font-semibold">{role.title}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {role.company}
                    {role.client ? ` · ${role.client}` : ""}
                  </p>
                </div>
                <span className="text-sm text-muted">
                  {role.dates} · {role.location}
                </span>
              </div>
              <p className="mt-3 text-sm font-medium">
                {role.project}
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {role.summary}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {role.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {role.environment.map((item) => (
                  <span key={item} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
