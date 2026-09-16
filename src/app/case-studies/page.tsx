import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, profile } from "@/data/profile";
import { SITE_URL } from "@/lib/site";

const title = `Case Studies | ${profile.name}`;
const description =
  "Data engineering case studies covering real-time streaming, healthcare data modernization, RAG data foundations, and data quality frameworks.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/case-studies`,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}/case-studies`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

export default function CaseStudiesIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Link
        href="/#case-studies"
        className="text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        ← Back to portfolio
      </Link>

      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
        Case Studies
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        {description}
      </p>

      <div className="mt-10 space-y-4">
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-surface/50 p-5 transition-colors hover:border-accent"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {study.eyebrow}
              </p>
              <h2 className="mt-2 text-lg font-semibold">{study.title}</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                {study.summary}
              </p>
            </div>
            <ArrowUpRight
              aria-hidden="true"
              size={18}
              className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
