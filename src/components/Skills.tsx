import {
  Binary,
  Bot,
  Boxes,
  Cloud,
  Database,
  GitBranch,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { skills } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

const skillIcons: Record<string, LucideIcon> = {
  "Programming & Processing": Binary,
  "Cloud & Storage": Cloud,
  "Lakehouse & Warehousing": Database,
  "Orchestration & Transformation": GitBranch,
  "Data Engineering & Modeling": Boxes,
  "Quality, Governance & DataOps": ShieldCheck,
  "AI Data Infrastructure": Bot,
};

const itemIcons: Record<string, LucideIcon> = {
  Python: Binary,
  SQL: Database,
  PySpark: Boxes,
  "Spark SQL": Database,
  "Apache Spark": Boxes,
  "Spark Structured Streaming": GitBranch,
  "AWS S3": Cloud,
  "AWS Glue": GitBranch,
  Lambda: Cloud,
  EMR: Boxes,
  Redshift: Database,
  Kinesis: GitBranch,
  CloudWatch: ShieldCheck,
  "IAM/KMS": ShieldCheck,
  "Azure Data Factory": GitBranch,
  "ADLS Gen2": Cloud,
  "Azure Databricks": Boxes,
  Synapse: Database,
  "Event Hubs": GitBranch,
  "Key Vault": ShieldCheck,
  "Azure Monitor": ShieldCheck,
  Snowflake: Database,
  "Amazon Redshift": Database,
  "Azure Synapse": Database,
  "Databricks Lakehouse": Boxes,
  "Delta Lake": Database,
  "Apache Iceberg": Database,
  Parquet: Database,
  "Apache Airflow": GitBranch,
  dbt: GitBranch,
  "Databricks Workflows": GitBranch,
  "AWS Glue Workflows": GitBranch,
  "REST/API Ingestion": Cloud,
  "dbt Tests": ShieldCheck,
  "Great Expectations": ShieldCheck,
  "Unity Catalog": ShieldCheck,
  "RBAC/IAM": ShieldCheck,
  "GitHub Actions": GitBranch,
  "Azure DevOps": GitBranch,
  Terraform: Boxes,
  Docker: Boxes,
  "RAG Data Pipelines": Bot,
  MLflow: Bot,
  "Vector Search": Bot,
  Embeddings: Bot,
};

const itemIconColors: Record<string, string> = {
  Python: "text-[#3776AB]",
  SQL: "text-[#336791]",
  PySpark: "text-[#E25A1C]",
  "Spark SQL": "text-[#E25A1C]",
  "Apache Spark": "text-[#E25A1C]",
  "Spark Structured Streaming": "text-[#E25A1C]",
  "AWS S3": "text-[#FF9900]",
  "AWS Glue": "text-[#FF9900]",
  Lambda: "text-[#FF9900]",
  EMR: "text-[#FF9900]",
  Redshift: "text-[#8C4FFF]",
  Kinesis: "text-[#FF9900]",
  CloudWatch: "text-[#FF9900]",
  "IAM/KMS": "text-[#DD344C]",
  "Azure Data Factory": "text-[#0078D4]",
  "ADLS Gen2": "text-[#0078D4]",
  "Azure Databricks": "text-[#FF3621]",
  Synapse: "text-[#0078D4]",
  "Event Hubs": "text-[#0078D4]",
  "Key Vault": "text-[#0078D4]",
  "Azure Monitor": "text-[#0078D4]",
  Snowflake: "text-[#29B5E8]",
  "Amazon Redshift": "text-[#8C4FFF]",
  "Azure Synapse": "text-[#0078D4]",
  "Databricks Lakehouse": "text-[#FF3621]",
  "Delta Lake": "text-[#00A1E0]",
  "Apache Iceberg": "text-[#5A7D9A]",
  Parquet: "text-[#50ABF1]",
  "Apache Airflow": "text-[#017CEE]",
  dbt: "text-[#FF694B]",
  "Databricks Workflows": "text-[#FF3621]",
  "AWS Glue Workflows": "text-[#FF9900]",
  "REST/API Ingestion": "text-[#10B981]",
  "dbt Tests": "text-[#FF694B]",
  "Great Expectations": "text-[#FF6B6B]",
  "Unity Catalog": "text-[#FF3621]",
  "RBAC/IAM": "text-[#DD344C]",
  "GitHub Actions": "text-[#2088FF]",
  "Azure DevOps": "text-[#0078D4]",
  Terraform: "text-[#7B42BC]",
  Docker: "text-[#2496ED]",
  "RAG Data Pipelines": "text-[#10A37F]",
  MLflow: "text-[#0194E2]",
  "Vector Search": "text-[#8B5CF6]",
  Embeddings: "text-[#10A37F]",
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group, i) => {
          const Icon = skillIcons[group.category] ?? Boxes;

          return (
            <Reveal key={group.category} delay={i * 0.07}>
              <div className="h-full rounded-xl border border-border bg-surface/50 p-5 transition-colors hover:border-accent/50">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent">
                    <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm font-semibold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const ItemIcon = itemIcons[item];

                    return (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                      >
                        {ItemIcon && (
                          <ItemIcon
                            aria-hidden="true"
                            size={13}
                            strokeWidth={1.9}
                            className={`shrink-0 ${itemIconColors[item] ?? "text-accent"}`}
                          />
                        )}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
