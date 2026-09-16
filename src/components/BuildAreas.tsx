import { buildAreas } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function BuildAreas() {
  return (
    <Section id="what-i-build" title="What I Build">
      <div className="grid gap-4 md:grid-cols-2">
        {buildAreas.map((area, i) => (
          <Reveal key={area.title} delay={i * 0.06}>
            <article className="h-full rounded-xl border border-border bg-surface/50 p-5">
              <h3 className="font-semibold">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {area.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
