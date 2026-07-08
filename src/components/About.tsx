import { profile } from "@/data/profile";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        {profile.bio}
      </p>
    </Section>
  );
}
