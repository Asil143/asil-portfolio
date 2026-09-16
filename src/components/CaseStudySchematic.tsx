import {
  Activity,
  Bell,
  Brain,
  CheckCircle2,
  Cloud,
  Database,
  FileText,
  Gauge,
  GitBranch,
  Layers3,
  RadioTower,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { caseStudies } from "@/data/profile";

const labels: Record<string, string[]> = {
  "real-time-event-pipeline": [
    "Event Sources",
    "Streaming Ingestion",
    "Lakehouse Processing",
    "Warehouse Serving",
  ],
  "healthcare-data-platform": [
    "Healthcare Sources",
    "AWS Standardization",
    "Orchestration",
    "Snowflake Marts",
  ],
  "rag-data-foundation": [
    "Documents",
    "Chunking",
    "Embeddings",
    "Vector Search",
  ],
  "data-quality-observability": [
    "Validation",
    "Monitoring",
    "Alerting",
    "Governance",
  ],
};

const icons: Record<string, LucideIcon[]> = {
  "real-time-event-pipeline": [RadioTower, Activity, Layers3, Database],
  "healthcare-data-platform": [Cloud, GitBranch, ShieldCheck, Database],
  "rag-data-foundation": [FileText, Layers3, Brain, Search],
  "data-quality-observability": [CheckCircle2, Gauge, Bell, ShieldCheck],
};

const iconColors: Record<string, string[]> = {
  "real-time-event-pipeline": [
    "text-[#2563EB]",
    "text-[#F97316]",
    "text-[#10B981]",
    "text-[#29B5E8]",
  ],
  "healthcare-data-platform": [
    "text-[#FF9900]",
    "text-[#F97316]",
    "text-[#22C55E]",
    "text-[#29B5E8]",
  ],
  "rag-data-foundation": [
    "text-[#6366F1]",
    "text-[#8B5CF6]",
    "text-[#10A37F]",
    "text-[#EC4899]",
  ],
  "data-quality-observability": [
    "text-[#22C55E]",
    "text-[#0EA5E9]",
    "text-[#F59E0B]",
    "text-[#A855F7]",
  ],
};

export default function CaseStudySchematic({ slug }: { slug: string }) {
  const study = caseStudies.find((item) => item.slug === slug) ?? caseStudies[0];
  const nodeLabels = labels[study.slug] ?? labels["real-time-event-pipeline"];
  const nodeIcons = icons[study.slug] ?? icons["real-time-event-pipeline"];
  const nodeIconColors = iconColors[study.slug] ?? iconColors["real-time-event-pipeline"];

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-background/75 p-5 sm:p-6">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-35" />
      <div className="pointer-events-none absolute top-[4.4rem] right-14 left-14 hidden h-[2px] bg-accent/55 shadow-[0_0_22px_rgba(139,140,255,0.55)] sm:block" />
      <div className="relative grid gap-6 sm:grid-cols-4">
        {nodeLabels.map((label, index) => {
          const Icon = nodeIcons[index];

          return (
            <div
              key={label}
              className="flex min-h-32 flex-col items-center justify-start text-center"
            >
              <div className="relative z-10 mb-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-accent/65 bg-background text-accent shadow-[0_0_24px_rgba(139,140,255,0.38)]">
                <Icon
                  aria-hidden="true"
                  size={18}
                  strokeWidth={2}
                  className={nodeIconColors[index]}
                />
                <span className="mt-1 font-mono text-[11px] font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="max-w-36 text-sm font-semibold leading-snug">
                {label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
