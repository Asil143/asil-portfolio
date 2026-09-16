import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import CaseStudySchematic from "@/components/CaseStudySchematic";
import { caseStudies, profile } from "@/data/profile";

type Props = {
  params: Promise<{ slug: string }>;
};

function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return {
    title: `${study.title} | ${profile.name}`,
    description: study.summary,
    openGraph: {
      title: `${study.title} | ${profile.name}`,
      description: study.summary,
      type: "article",
    },
  };
}

function SpecGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
        {title}
      </h3>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
  const previousStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    author: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.title,
      url: profile.links.linkedin,
    },
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Link
        href="/#case-studies"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft aria-hidden="true" size={16} />
        Back to portfolio
      </Link>

      <header className="py-12">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {study.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {study.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
          {study.summary}
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {study.outcomeHighlights.map((outcome) => (
            <div key={`${outcome.value}-${outcome.label}`} className="border-l border-accent/60 pl-4">
              <p className="font-mono text-4xl font-bold tracking-tight text-accent">
                {outcome.value}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {outcome.label}
              </p>
            </div>
          ))}
        </div>
      </header>

      <section className="grid gap-8">
        <div className="border-l-2 border-accent pl-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            The failure mode
          </p>
          <h2 className="mt-2 text-xl font-semibold">What had to be solved</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            {study.problem}
          </p>
        </div>
        <CaseStudySchematic slug={study.slug} />
      </section>

      <section className="py-10">
        <div className="mb-5 flex items-center gap-4">
          <h2 className="text-lg font-semibold">Architecture</h2>
          <div className="h-[2px] flex-1 bg-accent/45" />
        </div>
        <ArchitectureDiagram steps={study.architecture} labels={study.stageLabels} />
      </section>

      <section className="py-2">
        <div className="mb-6 flex items-center gap-4">
          <h2 className="text-lg font-semibold">Key Engineering Decisions</h2>
          <div className="h-[2px] flex-1 bg-accent/45" />
        </div>
        <div className="space-y-5">
          {study.decisions.map((decision, index) => (
            <article key={decision.label} className="grid gap-4 rounded-xl border border-border bg-surface/50 p-5 md:grid-cols-[5rem_1fr]">
              <div className="font-mono text-4xl font-bold text-accent/55">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-semibold">{decision.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {decision.context}
                </p>
                <p className="mt-3 text-sm leading-relaxed">
                  {decision.resolution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-border bg-surface/50 p-5">
        <h2 className="text-lg font-semibold">Operating Spec</h2>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          <SpecGroup title="Scale" items={study.scale} />
          <SpecGroup title="Quality" items={study.quality} />
          <SpecGroup title="Reliability" items={study.reliability} />
        </div>
      </section>

      <section className="mt-5 rounded-xl border border-border bg-surface/50 p-5">
        <h2 className="font-semibold">Tools</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {study.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-border px-3 py-1 text-sm text-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      <nav className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link
          href={`/case-studies/${previousStudy.slug}`}
          className="rounded-xl border border-border bg-surface/50 p-5 transition-colors hover:border-accent hover:text-accent"
        >
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Previous
          </span>
          <span className="mt-2 flex items-center gap-2 font-semibold">
            <ArrowLeft aria-hidden="true" size={16} />
            {previousStudy.title}
          </span>
        </Link>
        <Link
          href={`/case-studies/${nextStudy.slug}`}
          className="rounded-xl border border-border bg-surface/50 p-5 text-right transition-colors hover:border-accent hover:text-accent"
        >
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Next
          </span>
          <span className="mt-2 flex items-center justify-end gap-2 font-semibold">
            {nextStudy.title}
            <ArrowRight aria-hidden="true" size={16} />
          </span>
        </Link>
      </nav>
    </main>
  );
}
