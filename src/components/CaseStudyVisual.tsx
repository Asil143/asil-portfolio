import {
  Activity,
  ArrowRight,
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

const visualNodes: Record<string, Array<{ label: string; icon: LucideIcon }>> = {
  "real-time-event-pipeline": [
    { label: "Events", icon: RadioTower },
    { label: "Stream", icon: Activity },
    { label: "Lakehouse", icon: Layers3 },
    { label: "Warehouse", icon: Database },
  ],
  "healthcare-data-platform": [
    { label: "S3 Raw", icon: Cloud },
    { label: "Glue", icon: GitBranch },
    { label: "Quality", icon: ShieldCheck },
    { label: "Snowflake", icon: Database },
  ],
  "rag-data-foundation": [
    { label: "Docs", icon: FileText },
    { label: "Chunks", icon: Layers3 },
    { label: "Embeddings", icon: Brain },
    { label: "Search", icon: Search },
  ],
  "data-quality-observability": [
    { label: "Validate", icon: CheckCircle2 },
    { label: "Monitor", icon: Gauge },
    { label: "Alert", icon: Bell },
    { label: "Govern", icon: ShieldCheck },
  ],
};

export default function CaseStudyVisual({ slug }: { slug: string }) {
  const nodes = visualNodes[slug] ?? visualNodes["real-time-event-pipeline"];

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-background/75 p-4">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
      <div className="relative grid grid-cols-4 gap-2">
        {nodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <div key={node.label} className="relative">
              <div className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-lg border border-border bg-surface/80 px-2 py-3 text-center shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-accent-soft text-accent shadow-[0_0_18px_rgba(139,140,255,0.28)]">
                  <Icon aria-hidden="true" size={17} strokeWidth={1.9} />
                </div>
                <span className="text-[11px] font-medium text-muted">
                  {node.label}
                </span>
              </div>
              {index < nodes.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="absolute top-1/2 -right-3 z-10 -translate-y-1/2 text-accent"
                  size={15}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
