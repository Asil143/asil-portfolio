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
              <span className="absolute top-1.5 left-0 h-[11px] w-[11px] rounded-full border-2 border-accent bg-background" />
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
