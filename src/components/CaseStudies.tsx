import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function CaseStudies() {
  return (
    <Section id="case-studies" title="Case Studies">
      <div className="space-y-8">
        {caseStudies.map((study, i) => (
          <Reveal key={study.slug} delay={i * 0.07}>
            <article className="rounded-xl border border-border bg-surface p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    {study.eyebrow}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    {study.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {study.summary}
                  </p>
                </div>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  Read case study
                  <ArrowUpRight aria-hidden="true" size={15} />
                </Link>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {study.outcomeHighlights.map((outcome) => (
                  <div key={`${study.slug}-${outcome.value}-${outcome.label}`} className="border-l border-accent/55 pl-4">
                    <p className="font-mono text-3xl font-bold tracking-tight text-accent">
                      {outcome.value}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {outcome.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    Problem
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    Approach
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {study.summary}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-border bg-background/60 px-4 py-3">
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  Architecture Flow
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-muted">
                  {study.stageLabels.map((stage, index) => (
                    <span key={stage} className="inline-flex items-center gap-3">
                      <span>{stage}</span>
                      {index < study.stageLabels.length - 1 && (
                        <span aria-hidden="true" className="text-accent/70">
                          →
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-muted">
                <span className="font-medium text-foreground">Tools:</span>{" "}
                {study.tools.join(" · ")}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
