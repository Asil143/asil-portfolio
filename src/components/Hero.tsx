"use client";

import { motion, type Variants } from "framer-motion";
import { profile } from "@/data/profile";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-20" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-4xl flex-col gap-5 px-6 pb-20 pt-24 sm:pt-32"
      >
        <motion.span
          variants={item}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to new opportunities
        </motion.span>

        <motion.p variants={item} className="text-sm font-medium text-muted">
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl font-bold tracking-tight sm:text-6xl"
        >
          <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        <motion.h2 variants={item} className="text-xl text-muted">
          {profile.title}
        </motion.h2>

        <motion.p
          variants={item}
          className="max-w-xl text-base leading-relaxed text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-4 flex gap-4 text-sm font-medium">
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-foreground px-5 py-2.5 text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-5 py-2.5 transition-colors hover:border-accent hover:text-accent"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
