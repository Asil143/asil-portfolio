import { principles } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Principles() {
  return (
    <Section id="principles" title="Engineering Principles">
      <div className="grid gap-4 md:grid-cols-2">
        {principles.map((principle, i) => (
          <Reveal key={principle.title} delay={i * 0.06}>
            <article className="h-full border-l border-border pl-5">
              <h3 className="font-semibold">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {principle.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
