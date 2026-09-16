import { BadgeCheck } from "lucide-react";
import { certifications } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.07}>
            <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-surface/50 p-5">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-xl"
              >
                {cert.emoji}
              </span>
              <div>
                <h3 className="font-semibold leading-snug">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                  <BadgeCheck aria-hidden="true" size={14} />
                  {cert.status}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
