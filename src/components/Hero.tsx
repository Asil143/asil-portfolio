import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-4 px-6 pb-16 pt-20 sm:pt-28">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        Hi, I&apos;m
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <h2 className="text-xl text-zinc-600 dark:text-zinc-400">
        {profile.title}
      </h2>
      <p className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        {profile.tagline}
      </p>
      <div className="mt-4 flex gap-4 text-sm font-medium">
        <a
          href="#projects"
          className="rounded-full bg-black px-5 py-2.5 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/10 px-5 py-2.5 transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
