import { highlights } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Highlights() {
  return (
    <Section id="highlights" title="Engineering Highlights">
      <div className="grid gap-5 md:grid-cols-2">
        {highlights.map((highlight, i) => (
          <Reveal key={highlight.title} delay={i * 0.06}>
            <article className="h-full rounded-xl border border-border bg-surface/50 p-5">
              <h3 className="font-semibold">{highlight.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {highlight.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {highlight.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
