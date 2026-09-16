import { education } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="relative flex flex-col gap-10">
        <div className="absolute top-2 bottom-2 left-[5px] w-px bg-gradient-to-b from-accent via-accent/45 to-border" />
        {education.map((edu, i) => (
          <Reveal key={edu.school} delay={i * 0.08}>
            <div className="relative pl-8">
              <span className="absolute top-1 left-0 flex h-3 w-3 items-center justify-center">
                <span className="absolute h-10 w-10 rounded-full bg-accent/30 blur-lg" />
                <span className="absolute h-6 w-6 animate-ping rounded-full border border-accent/60" />
                <span className="relative h-3.5 w-3.5 rounded-full border-2 border-accent bg-accent shadow-[0_0_24px_rgba(139,140,255,0.95)]" />
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">{edu.degree}</h3>
              </div>
              <p className="mt-1 text-sm text-muted">
                {edu.school}, {edu.location}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
