import { profile } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-6 md:grid-cols-[1.4fr_0.8fr]">
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-muted">
            {profile.bio}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="rounded-xl border border-border bg-surface/50 p-5">
            <h3 className="text-sm font-semibold">Recruiter Signal</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Clear fit for teams building data platforms, cloud migrations,
              lakehouse foundations, streaming pipelines, and trusted analytics
              layers.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
