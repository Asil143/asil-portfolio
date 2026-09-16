import Image from "next/image";
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
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-border bg-white p-1.5">
                <Image
                  src={cert.badge}
                  alt={`${cert.issuer} certification badge`}
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
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
