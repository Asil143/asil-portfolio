"use client";

import { motion, type Variants } from "framer-motion";
import { metrics, profile } from "@/data/profile";

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

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-5xl gap-10 px-6 pb-20 pt-20 sm:pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
      >
        <div className="flex flex-col gap-5">
          <motion.span
            variants={item}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Cloud data platforms · lakehouse · streaming
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

          <motion.p variants={item} className="max-w-xl text-base leading-relaxed text-muted">
            {profile.tagline}
          </motion.p>

          <motion.p variants={item} className="max-w-2xl text-sm leading-relaxed text-muted">
            {profile.headline}
          </motion.p>

          <motion.div variants={item} className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
            <a
              href="#experience"
              className="group relative overflow-hidden rounded-full bg-foreground px-5 py-2.5 text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              View Experience
            </a>
            <a
              href="#projects"
              className="rounded-full border border-border px-5 py-2.5 transition-colors hover:border-accent hover:text-accent"
            >
              Engineering Highlights
            </a>
            {profile.links.resume && (
              <a
                href={profile.links.resume}
                download
                className="rounded-full border border-border px-5 py-2.5 transition-colors hover:border-accent hover:text-accent"
              >
                Download Resume
              </a>
            )}
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="border-l border-border pl-3">
                <p className="text-xl font-semibold tracking-tight">{metric.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="rounded-xl border border-border bg-surface/70 p-5 shadow-sm backdrop-blur"
          aria-label="Data platform architecture overview"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Platform Focus
              </p>
              <h3 className="mt-1 font-semibold">Modern data engineering</h3>
            </div>
            <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              Analytics + AI
            </span>
          </div>
          <div className="grid gap-3 text-sm">
            {[
              ["Sources", "APIs · events · files · CRM"],
              ["Ingestion", "ADF · Kafka · Glue · CDC"],
              ["Lakehouse", "Spark · Delta · Iceberg"],
              ["Serving", "Snowflake · dbt · governed marts"],
            ].map(([label, value], index) => (
              <div key={label} className="grid grid-cols-[7rem_1fr] items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  {label}
                </span>
                <div className="relative rounded-lg border border-border bg-background/70 px-3 py-2">
                  {index > 0 && (
                    <span className="absolute -top-3 left-6 h-3 w-px bg-border" />
                  )}
                  {value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
