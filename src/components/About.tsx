import { profile } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="about" title="About">
      <Reveal delay={0.1}>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          {profile.bio}
        </p>
      </Reveal>
    </Section>
  );
}
