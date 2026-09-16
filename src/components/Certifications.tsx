import { certifications } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.07}>
            <div className="rounded-xl border border-border bg-surface/50 p-5">
              <h3 className="font-semibold">{cert.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {cert.status}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
