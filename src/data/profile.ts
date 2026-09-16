// Central place for public portfolio content.

export const profile = {
  name: "Asil Kamepalli",
  title: "Senior Data Engineer",
  headline:
    "Python • SQL • PySpark • Apache Spark • Databricks • Snowflake • Airflow • dbt • Kafka • AWS • Azure",
  tagline:
    "I design, build, optimize, and operate production-grade data platforms for analytics, real-time decisioning, and AI/ML enablement.",
  bio: "Senior Data Engineer with 5+ years of experience designing, building, optimizing, and operating production-grade data platforms for analytics, operational reporting, real-time decisioning, and AI/ML enablement across Azure, AWS, Databricks, Snowflake, Spark, Airflow, dbt, and Kafka. I own ambiguous data problems end-to-end — from source-system analysis and resilient pipeline design to production support, root-cause remediation, and trusted data-product delivery — specializing in batch and streaming ingestion, CDC, dimensional modeling, lakehouse architecture, data quality, governance, observability, CI/CD, infrastructure as code, and performance/cost optimization.",
  location: "San Diego, CA",
  email: "asilkamepalli9@gmail.com",
  phone: "+1 (331) 226-7117",
  links: {
    github: "https://github.com/Asil143",
    linkedin: "https://www.linkedin.com/in/asil-kamepalli",
    resume: "/Asil_Kamepalli_Senior_Data_Engineer.pdf",
  },
};

export type Metric = {
  value: string;
  label: string;
};

export const metrics: Metric[] = [
  { value: "5+", label: "years building data platforms" },
  { value: "2+ TB", label: "daily batch and streaming data" },
  { value: "50M+", label: "daily streaming events handled" },
  { value: "50M+", label: "healthcare records processed" },
  { value: "35%", label: "pipeline latency reduction" },
  { value: "45%", label: "query latency reduction" },
];

export type Education = {
  school: string;
  degree: string;
  location: string;
};

export const education: Education[] = [
  {
    school: "Trine University",
    degree: "Master of Science in Information Studies",
    location: "Phoenix, Arizona",
  },
  {
    school: "Parul University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    location: "Vadodara, India",
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Programming & Processing",
    items: ["Python", "SQL", "PySpark", "Spark SQL", "Apache Spark", "Spark Structured Streaming", "Bash"],
  },
  {
    category: "Cloud & Storage",
    items: ["AWS S3", "AWS Glue", "Lambda", "EMR", "Redshift", "Kinesis", "CloudWatch", "IAM/KMS", "Azure Data Factory", "ADLS Gen2", "Azure Databricks", "Synapse", "Event Hubs", "Key Vault", "Azure Monitor"],
  },
  {
    category: "Lakehouse & Warehousing",
    items: ["Snowflake", "Amazon Redshift", "Azure Synapse", "Databricks Lakehouse", "Delta Lake", "Apache Iceberg", "Parquet", "Medallion Architecture"],
  },
  {
    category: "Orchestration & Transformation",
    items: ["Apache Airflow", "dbt", "Databricks Workflows", "Azure Data Factory", "AWS Glue Workflows"],
  },
  {
    category: "Data Engineering & Modeling",
    items: ["ETL/ELT", "CDC", "Incremental Processing", "REST/API Ingestion", "Dimensional Modeling", "Star Schema", "SCD Type 1/2", "Data Marts"],
  },
  {
    category: "Quality, Governance & DataOps",
    items: ["dbt Tests", "Great Expectations", "Data Contracts", "Lineage", "Unity Catalog", "RBAC/IAM", "GitHub Actions", "Azure DevOps", "Terraform", "Docker", "CI/CD", "Observability"],
  },
  {
    category: "AI Data Infrastructure",
    items: ["Unstructured Data Ingestion", "Embeddings", "Vector Search", "RAG Data Pipelines", "MLflow", "Feature/Training Data Pipelines"],
  },
];

export type Experience = {
  company: string;
  title: string;
  dates: string;
  location: string;
  client?: string;
  project: string;
  summary: string;
  bullets: string[];
  environment: string[];
};

export const experience: Experience[] = [
  {
    company: "Publicis Sapient",
    title: "Senior Data Engineer - Data Platform & AI Enablement",
    dates: "October 2024 - Present",
    location: "Remote, USA",
    client: "Comcast Advertising",
    project: "Audience, Campaign & Real-Time Media Intelligence Platform",
    summary:
      "Modernizing campaign, audience, CRM, clickstream, impression, conversion, and reference-data processing for near-real-time analytics, attribution, segmentation, optimization, and AI-enabled use cases.",
    bullets: [
      "Designed an Azure-first lakehouse platform processing 2+ TB of daily batch and streaming data into governed Bronze, Silver, and Gold data products.",
      "Engineered near-real-time Kafka/Event Hubs pipelines with Spark Structured Streaming handling 50M+ daily events with checkpointing, watermarking, replay controls, and idempotent writes.",
      "Developed reusable PySpark and Delta Lake pipelines for deduplication, late-arriving data, schema evolution, SCD Type 2 history, incremental MERGE processing, and standardized business-rule execution.",
      "Modeled campaign, audience, attribution, and performance marts in Snowflake with dbt tests, snapshots, documentation, clustering, and workload-specific warehouse sizing.",
      "Optimized Spark workloads with AQE, partition pruning, broadcast joins, skew mitigation, compaction, caching, executor tuning, and cluster right-sizing, reducing runtime by 30% and compute by 25%.",
      "Established platform observability with Azure Monitor, structured logs, pipeline metrics, freshness/SLA dashboards, automated alerts, and runbooks for retries, backfills, late data, dependency failures, and incident triage.",
      "Built governed unstructured-data pipelines for RAG workloads covering extraction, normalization, chunking, metadata/version enrichment, embeddings, vector indexing, and security-filtered retrieval datasets.",
      "Partnered with analytics, data science, product, and business teams to define data contracts, resolve ambiguous source logic, review architecture, troubleshoot production issues, and mentor engineers on Spark, SQL, testing, and DataOps.",
    ],
    environment: ["Azure Data Factory", "ADLS Gen2", "Azure Databricks", "PySpark", "Spark Structured Streaming", "Delta Lake", "Kafka/Event Hubs", "Snowflake", "dbt", "Azure Monitor", "MLflow", "Terraform", "Git", "CI/CD"],
  },
  {
    company: "Accenture",
    title: "Cloud Data Engineer",
    dates: "January 2023 - September 2024",
    location: "Remote, USA",
    client: "Elevance Health",
    project: "Enterprise Claims, Member & Provider Data Modernization",
    summary:
      "Migrated legacy payer-data workloads to a governed AWS/Snowflake platform supporting claims, eligibility, member, provider, pharmacy, finance, and operational reporting.",
    bullets: [
      "Modernized healthcare integration workloads into an AWS-based platform using S3, Glue, PySpark, Airflow, Snowflake, and dbt across raw, standardized, and consumption-ready layers.",
      "Built reusable ingestion frameworks for database extracts, REST APIs, partner files, and CDC feeds with encryption, schema capture, audit columns, retries, quarantine handling, and recoverable incremental loads.",
      "Developed PySpark and AWS Glue transformations for high-volume claims, eligibility, member, provider, and pharmacy datasets of 50M+ records while handling duplicates, source corrections, and late-arriving records.",
      "Designed Snowflake dimensional models and dbt layers with fact/dimension structures, conformed dimensions, SCD Type 2 processing, incremental strategies, snapshots, automated tests, and documentation.",
      "Implemented source-to-target reconciliation for row counts, claim/payment totals, referential integrity, duplicate detection, freshness, and source-target variances before analytics certification.",
      "Improved Spark and Snowflake performance across multi-terabyte tables, achieving 35% latency reduction and 30% compute cost savings.",
      "Owned production support for failed loads and unexplained data discrepancies, tracing issues across source extracts, orchestration, transformations, and warehouse models, then converting root causes into preventive controls.",
      "Applied least-privilege IAM, KMS encryption, secrets management, audit logging, and traceable lineage to sensitive healthcare datasets.",
    ],
    environment: ["AWS S3", "AWS Glue", "Lambda", "PySpark", "Apache Airflow", "Snowflake", "dbt", "Terraform", "CloudWatch", "IAM/KMS", "Git", "CI/CD"],
  },
  {
    company: "Persistent Systems",
    title: "Data Engineer",
    dates: "June 2021 - December 2022",
    location: "Pune, India",
    client: "Medtronic",
    project: "Global Sales, Inventory & Supply Chain Analytics Platform",
    summary:
      "Integrated ERP, product, inventory, sales, distribution, and operational data to support trusted KPI reporting, fulfillment visibility, and analytics.",
    bullets: [
      "Built Python and SQL ETL pipelines integrating ERP, product, inventory, sales-order, distribution, REST API, CSV, and JSON sources, processing 8M+ records daily.",
      "Created reusable ingestion modules for connectivity, file handling, incremental watermarks, audit logging, exception handling, and restartability.",
      "Developed SQL and PySpark transformations using CTEs, window functions, aggregations, joins, deduplication, standardization, derived attributes, and business-rule validation.",
      "Designed star-schema marts with fact and dimension tables, surrogate keys, date dimensions, and historical attribute management for consistent sales, inventory, and operations KPIs.",
      "Implemented source-to-target reconciliation, null/duplicate checks, schema validation, exception reporting, and controlled reprocessing to prevent bad data from reaching scheduled reports.",
      "Optimized Parquet layouts and relational queries through partitioning, file sizing, indexing, predicate filtering, query rewrites, and staging-table design, reducing query latency by 45%.",
      "Automated recurring batch jobs with dependency checks, retries, file-arrival validation, notifications, and restart procedures, improving reliability over manual scripts.",
    ],
    environment: ["Python", "SQL", "PySpark", "PostgreSQL/SQL Server", "REST APIs", "Parquet", "Cloud object storage", "Git", "CI/CD", "Dimensional modeling", "Batch orchestration"],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  emoji: string;
  status: string;
};

export const certifications: Certification[] = [
  {
    name: "Databricks Certified Data Engineer Professional",
    issuer: "Databricks",
    emoji: "🧱",
    status: "Certified",
  },
  {
    name: "AWS Certified Data Engineer - Associate",
    issuer: "Amazon Web Services",
    emoji: "☁️",
    status: "Certified",
  },
  {
    name: "Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
    issuer: "Microsoft",
    emoji: "🪟",
    status: "Certified",
  },
  {
    name: "Snowflake SnowPro Core Certification (COF-C03)",
    issuer: "Snowflake",
    emoji: "❄️",
    status: "Certified",
  },
];

export type Highlight = {
  title: string;
  description: string;
  points: string[];
};

export const highlights: Highlight[] = [
  {
    title: "Real-Time Event-to-Warehouse Pipeline",
    description:
      "Reference streaming architecture across Kafka/Event Hubs/Kinesis, Spark Structured Streaming, Delta Lake/Iceberg, and cloud object storage.",
    points: ["Checkpointing, watermarking, schema evolution, deduplication, and replay support", "Gold-layer aggregations and warehouse serving patterns for near-real-time KPIs"],
  },
  {
    title: "Trusted Healthcare & Enterprise Data Product Layer",
    description:
      "Governed raw-to-mart pattern for payer and enterprise data products with AWS, PySpark/Glue, Airflow, Snowflake, and dbt.",
    points: ["Source-target reconciliation, SCD Type 2 history, freshness checks, referential integrity, and lineage", "Failed validations block publication and backfills remain idempotent"],
  },
  {
    title: "Enterprise RAG Data Foundation",
    description:
      "Reusable data-engineering pattern for governed AI retrieval workloads across documents, metadata, embeddings, vectors, and access filters.",
    points: ["Normalization, chunking, metadata enrichment, embedding generation, and vector indexing", "Lineage, access control, validation, observability, and lifecycle tracking"],
  },
  {
    title: "Data Quality, Governance & Observability Framework",
    description:
      "Automated controls and operational visibility for critical data products before they reach reporting, analytics, or AI systems.",
    points: ["Null, duplicate, schema drift, freshness, reconciliation, and business-rule validation", "Cataloging, RBAC, audit logging, SLA dashboards, alerts, and runbooks"],
  },
  {
    title: "Performance & Cost Optimization",
    description:
      "Repeatable tuning practices for Spark and warehouse workloads before production promotion.",
    points: ["Partition pruning, optimized joins, compaction, clustering, caching, and workload right-sizing", "Baselines and root-cause analysis for slow jobs, skewed workloads, volume anomalies, and failed pipelines"],
  },
  {
    title: "CDC, Late Data & Backfill Strategy",
    description:
      "Incremental processing patterns that preserve historical correctness without corrupting downstream state.",
    points: ["Watermarking, business keys, source timestamps, MERGE logic, and idempotent writes", "Replay and backfill paths for corrected records and affected partitions/windows"],
  },
  {
    title: "Dimensional Modeling & Analytics Serving",
    description:
      "Reusable serving patterns that separate durable business entities from report-specific transformations.",
    points: ["Fact/dimension models, conformed dimensions, surrogate keys, SCD Type 1/2 logic, and curated marts", "Parquet/Delta/Iceberg for scalable processing and Snowflake marts for governed BI consumption"],
  },
  {
    title: "Production Reliability & Incident Response",
    description:
      "Operational practices for keeping critical pipelines recoverable, observable, and supportable after deployment.",
    points: ["Runbooks for dependency failures, partial loads, schema changes, bad files, SLA breaches, reprocessing, and triage", "Recurring incidents converted into schema checks, freshness thresholds, reconciliation rules, alerts, tests, and automated recovery logic"],
  },
  {
    title: "Governance & Security",
    description:
      "Security and governance controls across storage, compute, orchestration, and warehouse layers.",
    points: ["Least-privilege IAM/RBAC, managed identities, secrets management, encryption, audit trails, cataloging, and lineage", "Data contracts and ownership metadata make source expectations explicit and reduce downstream breakage"],
  },
];

export type Principle = {
  title: string;
  description: string;
};

export const principles: Principle[] = [
  {
    title: "Design for restartability",
    description:
      "Retries, backfills, replay, and late-arriving data should not corrupt downstream state.",
  },
  {
    title: "Validate before publication",
    description:
      "Schema, completeness, uniqueness, reconciliation, and freshness checks belong in delivery logic, not after-the-fact cleanup.",
  },
  {
    title: "Make contracts explicit",
    description:
      "Version-controlled transformations, automated tests, data contracts, and CI/CD promotion beat manual fixes.",
  },
  {
    title: "Govern AI data like product data",
    description:
      "RAG and AI workloads still need lineage, access control, quality, reproducibility, observability, and cost-aware orchestration.",
  },
  {
    title: "Lead through clarity",
    description:
      "Strong data work means design reviews, code reviews, documentation, troubleshooting, mentoring, and translating business requirements into verifiable source-to-target designs.",
  },
];

export type BuildArea = {
  title: string;
  description: string;
};

export const buildAreas: BuildArea[] = [
  {
    title: "Real-time streaming platforms",
    description:
      "Kafka/Event Hubs/Kinesis pipelines with Spark Structured Streaming, checkpointing, watermarking, replay, and warehouse serving.",
  },
  {
    title: "Governed lakehouse data products",
    description:
      "Bronze, Silver, and Gold layers with Delta Lake, Iceberg, schema evolution, quality gates, lineage, and access controls.",
  },
  {
    title: "Snowflake and dbt marts",
    description:
      "Fact/dimension models, SCD Type 1/2 history, incremental strategies, snapshots, tests, docs, and workload-aware sizing.",
  },
  {
    title: "Data quality and observability frameworks",
    description:
      "Publication gates, reconciliation, freshness SLAs, anomaly checks, dashboards, alerts, and production runbooks.",
  },
  {
    title: "AI-ready retrieval data foundations",
    description:
      "Document ingestion, normalization, chunking, embeddings, vector indexing, metadata filters, and governed RAG datasets.",
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  stageLabels: string[];
  outcomeHighlights: Array<{
    value: string;
    label: string;
  }>;
  decisions: Array<{
    label: string;
    context: string;
    resolution: string;
  }>;
  architecture: string[];
  tools: string[];
  scale: string[];
  quality: string[];
  reliability: string[];
  outcomes: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "real-time-event-pipeline",
    title: "Real-Time Event-to-Warehouse Pipeline",
    eyebrow: "Streaming architecture",
    summary:
      "A governed event pipeline pattern for near-real-time KPIs, attribution, segmentation, and analytical serving.",
    problem:
      "Campaign and digital-event sources needed reliable near-real-time processing without losing replayability, schema control, or warehouse-ready analytical structure.",
    stageLabels: ["Event Sources", "Streaming Ingestion", "Lakehouse Processing", "Warehouse Serving"],
    outcomeHighlights: [
      { value: "50M+", label: "daily streaming events" },
      { value: "30%", label: "Spark runtime reduction" },
      { value: "25%", label: "compute savings" },
    ],
    decisions: [
      {
        label: "Event-time processing over arrival-time shortcuts",
        context:
          "Clickstream and campaign events could arrive late or out of order, so simple load-time processing would distort near-real-time KPIs.",
        resolution:
          "Used Spark Structured Streaming with event-time watermarks, checkpointing, and replay controls so late events could be corrected without corrupting downstream marts.",
      },
      {
        label: "Idempotent writes for replay and backfill",
        context:
          "The platform needed safe retries after dependency failures, schema changes, and partial stream interruptions.",
        resolution:
          "Standardized business keys, incremental MERGE logic, and dead-letter paths so replay and backfills could run without duplicate downstream state.",
      },
      {
        label: "Separate raw retention from analytical serving",
        context:
          "Teams needed both raw event retention for reprocessing and fast curated KPI access for attribution and optimization.",
        resolution:
          "Kept raw and standardized event layers in the lakehouse while publishing Snowflake/dbt Gold marts for governed analytical consumption.",
      },
    ],
    architecture: [
      "Digital events land through Kafka, Event Hubs, or Kinesis with source metadata, event timestamps, and replay controls.",
      "Spark Structured Streaming performs checkpointed ingestion with watermarking, deduplication, schema evolution, and dead-letter handling.",
      "Delta Lake or Iceberg stores raw and standardized event layers while curated aggregations feed Gold-layer serving models.",
      "Snowflake and dbt publish governed marts for attribution, campaign performance, and near-real-time KPI consumption.",
    ],
    tools: ["Kafka", "Event Hubs", "Kinesis", "Spark Structured Streaming", "Delta Lake", "Apache Iceberg", "Snowflake", "dbt"],
    scale: ["50M+ daily streaming events", "2+ TB daily batch and streaming data", "Near-real-time analytical serving"],
    quality: ["Schema evolution checks", "Deduplication", "Freshness SLAs", "Source-to-target reconciliation", "Dead-letter paths"],
    reliability: ["Checkpointing", "Watermarking", "Replay/backfill controls", "Idempotent writes", "Runbooks for late data and dependency failures"],
    outcomes: ["30% Spark runtime reduction", "25% compute savings", "Trusted event-to-mart pipeline pattern for analytics and AI use cases"],
  },
  {
    slug: "healthcare-data-platform",
    title: "Healthcare Data Modernization Platform",
    eyebrow: "AWS and Snowflake modernization",
    summary:
      "A governed payer-data platform supporting claims, eligibility, member, provider, pharmacy, finance, and operational reporting.",
    problem:
      "Legacy healthcare workloads needed a reusable cloud platform with controlled ingestion, certified analytics layers, strong security, and recoverable production operations.",
    stageLabels: ["Source Landing", "AWS Standardization", "Airflow Orchestration", "Snowflake Serving"],
    outcomeHighlights: [
      { value: "50M+", label: "healthcare records processed" },
      { value: "35%", label: "latency reduction" },
      { value: "30%", label: "compute cost savings" },
    ],
    decisions: [
      {
        label: "Recoverable ingestion for sensitive payer data",
        context:
          "Partner files, database extracts, APIs, and CDC feeds all had different failure modes and audit requirements.",
        resolution:
          "Built reusable ingestion patterns with schema capture, audit columns, encryption, retries, quarantine handling, and recoverable incremental loads.",
      },
      {
        label: "Certification before analytics publication",
        context:
          "Claims and payment discrepancies could not flow silently into reporting layers.",
        resolution:
          "Added row-count, payment-total, duplicate, referential-integrity, and freshness reconciliation before datasets were certified for analytics.",
      },
      {
        label: "Dimensional marts instead of report-specific logic",
        context:
          "Healthcare teams needed consistent definitions across claims, member, provider, pharmacy, finance, and operations reporting.",
        resolution:
          "Modeled Snowflake/dbt fact and dimension layers with conformed dimensions, SCD Type 2 history, snapshots, tests, and documentation.",
      },
    ],
    architecture: [
      "Database extracts, REST APIs, partner files, and CDC feeds land in encrypted S3 zones with audit columns and schema capture.",
      "AWS Glue and PySpark standardize high-volume claims, eligibility, member, provider, and pharmacy datasets.",
      "Apache Airflow orchestrates ingestion, validation, transformation, publication, retries, SLAs, and backfills.",
      "Snowflake and dbt provide dimensional marts with conformed dimensions, SCD Type 2 history, snapshots, tests, and documentation.",
    ],
    tools: ["AWS S3", "AWS Glue", "PySpark", "Apache Airflow", "Snowflake", "dbt", "Terraform", "CloudWatch", "IAM/KMS"],
    scale: ["50M+ healthcare records", "Multi-terabyte tables", "Claims, eligibility, member, provider, pharmacy, finance, and operations domains"],
    quality: ["Row count reconciliation", "Claim/payment total checks", "Referential integrity", "Duplicate detection", "Freshness checks"],
    reliability: ["Airflow retries and SLAs", "Quarantine handling", "Recoverable incremental loads", "Root-cause remediation for data discrepancies"],
    outcomes: ["35% latency reduction", "30% compute cost savings", "Governed data products for sensitive healthcare analytics"],
  },
  {
    slug: "rag-data-foundation",
    title: "Enterprise RAG Data Foundation",
    eyebrow: "AI data infrastructure",
    summary:
      "A governed data-engineering foundation that turns enterprise documents and metadata into secure retrieval-ready datasets.",
    problem:
      "AI applications needed traceable, governed, and security-filtered enterprise knowledge instead of unmanaged document copies.",
    stageLabels: ["Document Ingestion", "Chunking", "Embedding Generation", "Secure Retrieval"],
    outcomeHighlights: [
      { value: "RAG", label: "retrieval-ready data foundation" },
      { value: "ACL", label: "metadata security filters" },
      { value: "Lineage", label: "traceable AI data products" },
    ],
    decisions: [
      {
        label: "Govern retrieval data like production data",
        context:
          "Enterprise AI applications needed trustworthy knowledge layers rather than unmanaged document copies.",
        resolution:
          "Added lineage, metadata enrichment, lifecycle tracking, validation, and access filters to the document-to-vector pipeline.",
      },
      {
        label: "Preserve source context through chunking",
        context:
          "Chunked content loses value when ownership, version, and access-control metadata are detached from the text.",
        resolution:
          "Carried source metadata, versioning, and security attributes through extraction, normalization, chunking, embedding, and indexing.",
      },
      {
        label: "Make AI datasets reproducible",
        context:
          "Retrieval quality and cost are hard to debug when embeddings and indexes are produced by manual or one-off processes.",
        resolution:
          "Used versioned pipelines and monitored lifecycle stages so retrieval datasets could be regenerated, validated, and audited.",
      },
    ],
    architecture: [
      "Documents and metadata are ingested from enterprise sources with version, ownership, and access-control context.",
      "Content is extracted, normalized, chunked, and enriched with metadata suitable for retrieval and audit.",
      "Embedding generation and vector indexing create search-ready knowledge layers with metadata security filters.",
      "Retrieval datasets are monitored with lineage, validation, lifecycle tracking, and reproducible data processing.",
    ],
    tools: ["Python", "Databricks", "MLflow", "Embeddings", "Vector Search", "Delta Lake", "Unity Catalog", "CI/CD"],
    scale: ["Enterprise document and metadata pipelines", "Embedding and vector-index lifecycle", "Retrieval-ready governed datasets"],
    quality: ["Chunk validation", "Metadata completeness", "Version tracking", "Lineage", "Access-filter validation"],
    reliability: ["Reproducible pipelines", "Lifecycle tracking", "Security-filtered retrieval", "Cost-aware orchestration"],
    outcomes: ["Governed RAG-ready data foundation", "Traceable AI data products", "Reduced risk from unmanaged enterprise knowledge copies"],
  },
  {
    slug: "data-quality-observability",
    title: "Data Quality and Observability Framework",
    eyebrow: "Trust and operations",
    summary:
      "A production control layer for blocking bad data, monitoring freshness, and turning incidents into preventive engineering controls.",
    problem:
      "Critical reporting and AI consumers needed data products that were validated before publication and operationally supportable after deployment.",
    stageLabels: ["Validate", "Reconcile", "Monitor", "Recover"],
    outcomeHighlights: [
      { value: "SLA", label: "freshness monitoring" },
      { value: "Gates", label: "publication-blocking checks" },
      { value: "Runbooks", label: "faster incident recovery" },
    ],
    decisions: [
      {
        label: "Block publication instead of reporting bad data",
        context:
          "Downstream consumers needed certified data products, not dashboards that discovered errors after publication.",
        resolution:
          "Placed schema, null, duplicate, reconciliation, freshness, and business-rule gates before warehouse publication.",
      },
      {
        label: "Turn failures into observable workflows",
        context:
          "Pipeline failures, bad files, schema changes, and SLA breaches needed consistent operational handling.",
        resolution:
          "Routed failures through monitored orchestration paths with alerts, exception reporting, ownership metadata, and runbooks.",
      },
      {
        label: "Convert incidents into preventive controls",
        context:
          "Recurring data issues should reduce future risk instead of becoming repeated manual triage.",
        resolution:
          "Used root-cause analysis to add schema checks, freshness thresholds, reconciliation rules, tests, and automated recovery logic.",
      },
    ],
    architecture: [
      "Validation gates check schema, nulls, duplicates, reconciliation, referential integrity, freshness, and business rules.",
      "Orchestration routes failures into monitored paths with alerts, exception reporting, quarantine tables, and ownership metadata.",
      "Observability dashboards track pipeline metrics, freshness SLAs, volume anomalies, dependency failures, and incident status.",
      "Runbooks define recovery points for partial loads, bad files, schema changes, reprocessing, and SLA breaches.",
    ],
    tools: ["dbt Tests", "Great Expectations", "PySpark Assertions", "Azure Monitor", "CloudWatch", "Airflow", "Lineage", "Data Contracts"],
    scale: ["Critical enterprise data products", "Multi-source ingestion and warehouse publication", "Operational SLA monitoring"],
    quality: ["Publication-blocking validations", "Source-to-target reconciliation", "Schema contracts", "Freshness thresholds", "Business-rule checks"],
    reliability: ["Runbooks", "Automated alerts", "Backfill controls", "Incident triage", "Preventive controls from recurring failures"],
    outcomes: ["Higher trust in certified datasets", "Faster production support", "Lower downstream breakage from upstream changes"],
  },
];

export const projects: Project[] = [
  {
    title: "Chaduvuko",
    description:
      "A free learning platform covering cloud (Azure, AWS, GCP), data engineering, DBMS, networking, and AI/ML with production-level depth — 290+ lessons, an in-browser SQL playground, and an AI mentor for career advice and debugging help.",
    tech: ["Next.js", "TypeScript", "DuckDB (WASM)", "Groq"],
    link: "https://chaduvuko.com",
    github: "https://github.com/Asil143/chaduvuko",
  },
  {
    title: "BillVeil",
    description:
      "An AI advocate that reads medical bills and insurance denials, flags overcharges against Medicare rates, and drafts dispute letters and negotiation scripts — 30+ free tools, no signup.",
    tech: ["Next.js", "Groq", "Llama 3.3 70B"],
    link: "https://billveil.com",
    github: "https://github.com/Asil143/billveil",
  },
  {
    title: "StatusClock",
    description:
      "AI-powered immigration guidance and deadline tracking for international students on F-1, OPT, and H-1B status.",
    tech: ["Next.js", "Clerk", "Anthropic Claude"],
    link: "https://statusclock.com",
    github: "https://github.com/Asil143/immigration",
  },
  {
    title: "UniBank",
    description:
      "A mobile banking app built for international students — cross-border transfers at real FX rates, a credit-builder roadmap, and Zelle-style payments across iOS, Android, and web.",
    tech: ["React Native", "Expo", "Supabase"],
    link: "https://unibank-expo.vercel.app",
  },
  {
    title: "GalliExpress",
    description:
      "A 3-sided hyperlocal delivery marketplace — customer, partner, and rider apps — built for Tier-3 Andhra Pradesh towns that Swiggy and Zomato don't reach.",
    tech: ["React Native", "Firebase", "Firestore"],
    github: "https://github.com/Asil143/GalliExpress",
  },
  {
    title: "Shine On Call",
    description:
      "A production booking platform for a mobile car wash & detailing business — public booking site, customer account portal, and admin dashboard in one app.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    link: "https://shineoncall.com",
  },
  {
    title: "Aexacore",
    description:
      "A web design micro-agency delivering fast, mobile-first websites for local businesses in 7 days — live client sites for an auto shop, a restaurant, a salon, and a plumbing company.",
    tech: ["HTML/CSS/JS", "Vercel"],
    link: "https://aexacore.com",
  },
];
