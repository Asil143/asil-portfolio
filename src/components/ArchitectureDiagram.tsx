import { ArrowRight } from "lucide-react";

export default function ArchitectureDiagram({
  steps,
  labels,
  compact = false,
}: {
  steps: string[];
  labels?: string[];
  compact?: boolean;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-[repeat(4,minmax(0,1fr))]">
      {steps.map((step, index) => (
        <div key={step} className="relative">
          <div className={`h-full rounded-xl border border-border bg-background/70 ${compact ? "p-3" : "p-4"}`}>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-accent">
              {labels?.[index] ?? `Layer ${index + 1}`}
            </p>
            <p className={`${compact ? "text-xs" : "text-sm"} leading-relaxed text-muted`}>
              {step}
            </p>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight
              aria-hidden="true"
              className="absolute top-1/2 -right-5 hidden -translate-y-1/2 text-accent md:block"
              size={18}
            />
          )}
        </div>
      ))}
    </div>
  );
}
