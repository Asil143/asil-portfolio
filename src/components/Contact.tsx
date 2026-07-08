import { profile } from "@/data/profile";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Get in Touch">
      <p className="mb-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        I&apos;m open to new opportunities and collaborations. Feel free to
        reach out.
      </p>
      <div className="flex flex-wrap gap-4 text-sm font-medium">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-black px-5 py-2.5 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Email Me
        </a>
        {profile.links.github && (
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/10 px-5 py-2.5 transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            GitHub
          </a>
        )}
        {profile.links.linkedin && (
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/10 px-5 py-2.5 transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            LinkedIn
          </a>
        )}
      </div>
    </Section>
  );
}
