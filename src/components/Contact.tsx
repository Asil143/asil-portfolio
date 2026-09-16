import { profile } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <Section id="contact" title="Get in Touch">
      <Reveal delay={0.1}>
        <p className="mb-6 max-w-xl text-base leading-relaxed text-muted">
          Based in {profile.location}. I&apos;m open to senior data engineering
          conversations around cloud platforms, lakehouse modernization,
          streaming systems, governance, and AI data infrastructure.
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-foreground px-5 py-2.5 text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Email Me
          </a>
          {profile.phone && (
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="rounded-full border border-border px-5 py-2.5 transition-colors hover:border-accent hover:text-accent"
            >
              {profile.phone}
            </a>
          )}
          {profile.links.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-5 py-2.5 transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
          )}
          {profile.links.linkedin && (
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-5 py-2.5 transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          )}
          {profile.links.resume && (
            <a
              href={profile.links.resume}
              download
              className="rounded-full border border-border px-5 py-2.5 transition-colors hover:border-accent hover:text-accent"
            >
              Resume
            </a>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
